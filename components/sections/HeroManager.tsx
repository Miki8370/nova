"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageUpload } from "./ImageUpload";
import { githubService } from "@/lib/github-service";
import { Save, RefreshCw } from "lucide-react";
import Image from "next/image";

export function HeroManager() {
  // Always initialize with the default image
  const [backgroundImage, setBackgroundImage] = useState('/hero-bg.jpg');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchHeroImage();
  }, []);

  const fetchHeroImage = async () => {
    try {
      const data = await githubService.getContent();
      // Only update if there's a valid image in the data
      if (data.hero?.backgroundImage && data.hero.backgroundImage.trim() !== '') {
        setBackgroundImage(data.hero.backgroundImage);
      }
      // If no image or empty string, keep the default '/hero-bg.jpg'
    } catch (error) {
      console.error("Error fetching hero image:", error);
      // On error, keep the default image
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const content = await githubService.getContent();
      // Ensure we never save an empty string
      const imageToSave = backgroundImage && backgroundImage.trim() !== '' 
        ? backgroundImage 
        : '/hero-bg.jpg';
      
      content.hero = {
        ...content.hero,
        backgroundImage: imageToSave,
      };
      await githubService.updateContent(content);
      alert("Hero image saved successfully!");
    } catch (error) {
      alert("Error saving hero image");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">Loading hero image...</p>
        </CardContent>
      </Card>
    );
  }

  // Ensure we always have a valid image src
  const imageSrc = backgroundImage && backgroundImage.trim() !== '' 
    ? backgroundImage 
    : '/hero-bg.jpg';

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Hero Background Image</h2>
          <p className="text-muted-foreground">Change the hero section background image</p>
        </div>
        <Button onClick={handleSave} disabled={saving}>
          <Save className="w-4 h-4 mr-2" />
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Background</CardTitle>
          <CardDescription>
            This image will appear as the hero background on your homepage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative h-64 w-full rounded-lg overflow-hidden border">
            <Image
              src={imageSrc}
              alt="Hero background preview"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Upload New Image</label>
            <ImageUpload
              onUpload={(url) => {
                // Ensure we don't set empty strings
                if (url && url.trim() !== '') {
                  setBackgroundImage(url);
                }
              }}
              currentImage={imageSrc}
              folder="hero"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Recommended size: 1920x1080px or larger. Max file size: 5MB.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-40 w-full rounded-lg overflow-hidden border">
            <Image
              src={imageSrc}
              alt="Hero background preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-xl font-bold">Transform Your Workforce</h3>
                <p className="text-sm">Your text remains the same</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-center text-muted-foreground mt-2">
            Preview shows how your image will look with the overlay
          </p>
        </CardContent>
      </Card>
    </div>
  );
}