"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, X, CheckCircle } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  onUpload: (url: string) => void;
  currentImage?: string;
  folder?: string;
}

export function ImageUpload({ onUpload, currentImage, folder = "general" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  // Ensure we never have an empty string for preview
  const [preview, setPreview] = useState(currentImage && currentImage.trim() !== '' ? currentImage : '/hero-bg.jpg');
  const [error, setError] = useState("");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    setUploading(true);
    setError("");

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPreview(result);
      }
    };
    reader.readAsDataURL(file);

    // Upload to Cloudinary
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();
      // Pass the secure URL back to parent
      onUpload(data.secure_url);
    } catch (err) {
      setError('Upload failed. Please try again.');
      // Revert preview on error
      setPreview(currentImage && currentImage.trim() !== '' ? currentImage : '/hero-bg.jpg');
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = () => {
    setPreview('/hero-bg.jpg');
    onUpload('/hero-bg.jpg'); // Reset to default
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24 rounded-lg overflow-hidden border">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-cover"
          />
          {preview !== '/hero-bg.jpg' && (
            <button
              onClick={handleRemove}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              title="Reset to default image"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        <div className="flex-1">
          <Input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading}
            className="cursor-pointer"
          />
          {uploading && (
            <p className="text-sm text-blue-600 mt-2">Uploading...</p>
          )}
          {error && (
            <p className="text-sm text-red-600 mt-2">{error}</p>
          )}
          {!error && preview !== '/hero-bg.jpg' && !uploading && (
            <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Image ready
            </p>
          )}
          {preview === '/hero-bg.jpg' && !uploading && (
            <p className="text-xs text-muted-foreground mt-2">
              Using default hero image
            </p>
          )}
        </div>
      </div>
    </div>
  );
}