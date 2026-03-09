"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Pencil, Trash2, Save, X, Grip } from "lucide-react";
import { githubService, type Package } from "@/lib/github-service";
import Image from "next/image";
import { ImageUpload } from "./ImageUpload";

const iconOptions = [
  { value: "TalentIcon", label: "Talent Recruitment" },
  { value: "WorkforceIcon", label: "Workforce Management" },
  { value: "TrainingIcon", label: "Training & Development" },
  { value: "ConsultingIcon", label: "HR Consulting" },
];

export function PackagesManager() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPackage, setEditingPackage] = useState<Package | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    const data = await githubService.getContent();
    setPackages(data.packages);
    setLoading(false);
  };

  const handleSave = async (pkg: any) => {
    try {
      if (editingPackage) {
        await githubService.updateItem("packages", editingPackage.id, pkg);
      } else {
        await githubService.createItem("packages", pkg);
      }
      await fetchPackages();
      setIsDialogOpen(false);
      setEditingPackage(null);
    } catch (error) {
      alert("Error saving package");
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this package?")) {
      await githubService.deleteItem("packages", id);
      await fetchPackages();
    }
  };

  const PackageForm = ({ pkg, onSave, onCancel }: any) => {
    const [formData, setFormData] = useState(
      pkg || {
        title: "",
        description: "",
        features: [""],
        image: "/packages/placeholder.jpg",
        icon: "TalentIcon",
      }
    );

    const handleFeatureChange = (index: number, value: string) => {
      const newFeatures = [...formData.features];
      newFeatures[index] = value;
      setFormData({ ...formData, features: newFeatures });
    };

    const addFeature = () => {
      setFormData({ ...formData, features: [...formData.features, ""] });
    };

    const removeFeature = (index: number) => {
      setFormData({
        ...formData,
        features: formData.features.filter((_: any, i: number) => i !== index)
      });
    };

    return (
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Title</label>
          <Input
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g., Talent Sourcing & Strategic Recruitment Package"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Description</label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Package description..."
          />
        </div>

        <div>
          <label className="text-sm font-medium">Icon</label>
          <Select
            value={formData.icon}
            onValueChange={(value) => setFormData({ ...formData, icon: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select icon" />
            </SelectTrigger>
            <SelectContent>
              {iconOptions.map(icon => (
                <SelectItem key={icon.value} value={icon.value}>
                  {icon.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium">Package Image</label>
          <ImageUpload
            onUpload={(url) => setFormData({ ...formData, image: url })}
            currentImage={formData.image}
            folder="packages"
                />
              </div>

        <div>
          <label className="text-sm font-medium">Features</label>
          {formData.features.map((feature: string, index: number) => (
            <div key={index} className="flex gap-2 mt-2">
              <Input
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
                placeholder={`Feature ${index + 1}`}
              />
              <Button
                variant="destructive"
                size="icon"
                onClick={() => removeFeature(index)}
                disabled={formData.features.length === 1}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button variant="outline" size="sm" className="mt-2" onClick={addFeature}>
            <Plus className="h-4 w-4 mr-2" /> Add Feature
          </Button>
        </div>

        <div className="flex gap-2 pt-4">
          <Button onClick={() => onSave(formData)}>
            <Save className="h-4 w-4 mr-2" /> Save Package
          </Button>
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
        </div>
      </div>
    );
  };

  if (loading) return <div className="p-8 text-center">Loading packages...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Packages Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" /> Add Package
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Package</DialogTitle>
            </DialogHeader>
            <PackageForm
              onSave={handleSave}
              onCancel={() => {
                setIsDialogOpen(false);
                setEditingPackage(null);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      {packages.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center text-muted-foreground">
            No packages added yet. Click "Add Package" to create your first package.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden">
              <div className="relative h-40 bg-gray-100">
                {pkg.image && (
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{pkg.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                      {pkg.description}
                    </p>
                    <div className="flex gap-1 mt-2">
                      {pkg.features.slice(0, 2).map((f, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {f}
                        </span>
                      ))}
                      {pkg.features.length > 2 && (
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          +{pkg.features.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="icon" onClick={() => {
                      setEditingPackage(pkg);
                      setIsDialogOpen(true);
                    }}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon" onClick={() => handleDelete(pkg.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
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
