"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Pencil, Trash2, Save } from "lucide-react"
import { githubService, type TeamMember } from "@/lib/github-service"
import { ImageUpload } from "./ImageUpload"
import Image from "next/image"

export function TeamManager() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    const data = await githubService.getContent();
    setTeam(data.team || []);
    setLoading(false);
  };

  const handleSave = async (member: any) => {
    try {
      if (editingMember) {
        await githubService.updateItem("team", editingMember.id, member);
      } else {
        await githubService.createItem("team", member);
      }
      await fetchTeam();
      setIsDialogOpen(false);
      setEditingMember(null);
    } catch (error) {
      alert("Error saving team member");
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this team member?")) {
      await githubService.deleteItem("team", id);
      await fetchTeam();
    }
  };

  const TeamForm = ({ member, onSave, onCancel }: any) => {
    const [formData, setFormData] = useState(
      member || {
        name: "",
        position: "",
        bio: "",
        image: "",
        email: "",
        linkedin: "",
        order: team.length + 1,
      }
    );

    return (
      <div className="space-y-4 max-h-[70vh] overflow-y-auto p-1">
        <div>
          <label className="text-sm font-medium mb-1 block">Profile Photo</label>
          <ImageUpload
            onUpload={(url) => setFormData({ ...formData, image: url })}
            currentImage={formData.image}
            folder="team"
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Full Name</label>
          <Input
            placeholder="e.g., John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Position/Title</label>
          <Input
            placeholder="e.g., CEO & Founder"
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Bio</label>
          <Textarea
            placeholder="Brief biography..."
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            rows={3}
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Email</label>
          <Input
            type="email"
            placeholder="john@novahrsm.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">LinkedIn URL</label>
          <Input
            placeholder="https://linkedin.com/in/johndoe"
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Display Order</label>
          <Input
            type="number"
            placeholder="1"
            value={formData.order}
            onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 1 })}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Lower numbers appear first
          </p>
        </div>

        <div className="flex gap-2 pt-4">
          <Button onClick={() => onSave(formData)}>
            <Save className="h-4 w-4 mr-2" /> Save Member
          </Button>
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
        </div>
      </div>
    );
  };

  if (loading) return <div className="p-8 text-center">Loading team members...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Team Members</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" /> Add Member
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Team Member</DialogTitle>
            </DialogHeader>
            <TeamForm
              onSave={handleSave}
              onCancel={() => {
                setIsDialogOpen(false);
                setEditingMember(null);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      {team.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center text-muted-foreground">
            No team members added yet. Click "Add Member" to create your first team member.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {team.sort((a, b) => a.order - b.order).map((member) => (
            <Card key={member.id}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    {member.image ? (
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-2xl text-gray-400">
                          {member.name?.charAt(0) || '?'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Member Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-primary">{member.position}</p>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {member.bio}
                        </p>
                        <div className="flex gap-2 mt-2">
                          {member.email && (
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {member.email}
                            </span>
                          )}
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            Order: {member.order}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button variant="outline" size="icon" onClick={() => {
                          setEditingMember(member);
                          setIsDialogOpen(true);
                        }}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="icon" onClick={() => handleDelete(member.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}