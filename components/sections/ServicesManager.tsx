"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Pencil, Trash2, Save, X } from "lucide-react"
import { githubService, type Service } from "@/lib/github-service"

const iconOptions = ["Users", "Shield", "Truck", "Utensils", "Package", "TreePine", "Briefcase"];
const gradientOptions = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-emerald-500 to-teal-400",
  "from-green-500 to-lime-400",
  "from-yellow-500 to-orange-400",
  "from-orange-500 to-amber-400",
  "from-red-500 to-rose-400",
];
const accentColorOptions = [
  "bg-blue-100 text-blue-700",
  "bg-purple-100 text-purple-700",
  "bg-emerald-100 text-emerald-700",
  "bg-green-100 text-green-700",
  "bg-yellow-100 text-yellow-700",
  "bg-orange-100 text-orange-700",
  "bg-red-100 text-red-700",
];

export function ServicesManager() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const data = await githubService.getContent();
    setServices(data.services);
    setLoading(false);
  };

  const handleSave = async (service: any) => {
    try {
      if (editingService) {
        await githubService.updateItem("services", editingService.id, service);
      } else {
        await githubService.createItem("services", service);
      }
      await fetchServices();
      setIsDialogOpen(false);
      setEditingService(null);
    } catch (error) {
      alert("Error saving service. Check console.");
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure?")) {
      await githubService.deleteItem("services", id);
      await fetchServices();
    }
  };

  const ServiceForm = ({ service, onSave, onCancel }: any) => {
    const [formData, setFormData] = useState(
      service || {
        title: "",
        description: "",
        features: [""],
        icon: "Users",
        gradient: gradientOptions[0],
        accentColor: accentColorOptions[0],
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
        <Input
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <Textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        
        <Select value={formData.icon} onValueChange={(v) => setFormData({ ...formData, icon: v })}>
          <SelectTrigger>
            <SelectValue placeholder="Icon" />
          </SelectTrigger>
          <SelectContent>
            {iconOptions.map(icon => (
              <SelectItem key={icon} value={icon}>{icon}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={formData.gradient} onValueChange={(v) => setFormData({ ...formData, gradient: v })}>
          <SelectTrigger>
            <SelectValue placeholder="Gradient" />
          </SelectTrigger>
          <SelectContent>
            {gradientOptions.map(g => (
              <SelectItem key={g} value={g}>{g}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={formData.accentColor} onValueChange={(v) => setFormData({ ...formData, accentColor: v })}>
          <SelectTrigger>
            <SelectValue placeholder="Accent Color" />
          </SelectTrigger>
          <SelectContent>
            {accentColorOptions.map(c => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div>
          <label className="text-sm font-medium">Features</label>
          {formData.features.map((feature: string, index: number) => (
            <div key={index} className="flex gap-2 mt-2">
              <Input
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
              />
              <Button variant="destructive" size="icon" onClick={() => removeFeature(index)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button variant="outline" size="sm" className="mt-2" onClick={addFeature}>
            <Plus className="h-4 w-4 mr-2" /> Add Feature
          </Button>
        </div>

        <div className="flex gap-2">
          <Button onClick={() => onSave(formData)}>
            <Save className="h-4 w-4 mr-2" /> Save
          </Button>
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
        </div>
      </div>
    );
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Services</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" /> Add Service
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Service</DialogTitle>
            </DialogHeader>
            <ServiceForm
              onSave={handleSave}
              onCancel={() => {
                setIsDialogOpen(false);
                setEditingService(null);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {services.map((service) => (
          <Card key={service.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => {
                    setEditingService(service);
                    setIsDialogOpen(true);
                  }}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => handleDelete(service.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
