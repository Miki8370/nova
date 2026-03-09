"use client";

import { useSession } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Admin Profile</CardTitle>
          <CardDescription>
            Your account information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <span className="text-sm text-muted-foreground">Email:</span>
            <p className="font-medium">{session?.user?.email}</p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Account Type:</span>
            <p className="font-medium">Administrator</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
