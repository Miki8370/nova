"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServicesManager } from "@/components/sections/ServicesManager";
import { PackagesManager } from "@/components/sections/PackagesManager";
import { EventsManager } from "@/components/sections/EventsManager";
import { TeamManager } from "@/components/sections/TeamManager";
import { HeroManager } from "@/components/sections/HeroManager";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, XCircle, Loader2, LogOut, Home, Image, Package, Calendar, Users, Layout } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"; // Make sure CardContent is imported here!
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function sectionsPage() {
  const { data: session } = useSession();
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await fetch('/api/content');
        if (response.ok) {
          setConnectionStatus('connected');
        } else {
          setConnectionStatus('error');
        }
      } catch (error) {
        setConnectionStatus('error');
      }
    };

    testConnection();
  }, []);

  if (connectionStatus === 'checking') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <Card className="p-12 text-center">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">Connecting to GitHub</h2>
          <p className="text-muted-foreground">Please wait while we establish connection...</p>
        </Card>
      </div>
    );
  }

  if (connectionStatus === 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <Card className="p-12 text-center max-w-md">
          <XCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
          <h2 className="text-2xl font-bold mb-2">Connection Failed</h2>
          <p className="text-muted-foreground mb-6">
            Could not connect to GitHub. Please check your server configuration.
          </p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center shadow-lg">
                <Layout className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Nova HR CMS
                </h1>
                <p className="text-xs text-muted-foreground">Content Management System</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-green-700">Connected</span>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                      <AvatarImage src={session?.user?.image || ''} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {session?.user?.email?.charAt(0).toUpperCase() || 'A'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">Admin User</p>
                      <p className="text-xs text-muted-foreground">{session?.user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => window.open('/', '_blank')}>
                    <Home className="mr-2 h-4 w-4" />
                    <span>View Site</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={() => signOut({ callbackUrl: "/admin/login" })}
                    className="text-red-600 focus:text-red-600"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-transparent border-primary/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Welcome back, Admin!</h2>
                <p className="text-muted-foreground">
                  Manage your website content from one central dashboard. Changes are automatically saved to GitHub.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border p-2">
            <TabsList className="grid w-full grid-cols-5 h-auto bg-transparent">
              <TabsTrigger 
                value="hero" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 flex items-center gap-2"
              >
                <Image className="w-4 h-4" />
                <span className="hidden sm:inline">Hero</span>
              </TabsTrigger>
              <TabsTrigger 
                value="services" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 flex items-center gap-2"
              >
                <Layout className="w-4 h-4" />
                <span className="hidden sm:inline">Services</span>
              </TabsTrigger>
              <TabsTrigger 
                value="packages" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 flex items-center gap-2"
              >
                <Package className="w-4 h-4" />
                <span className="hidden sm:inline">Packages</span>
              </TabsTrigger>
              <TabsTrigger 
                value="events" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Events</span>
              </TabsTrigger>
              <TabsTrigger 
                value="team" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Team</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="hero" className="mt-6">
            <HeroManager />
          </TabsContent>

          <TabsContent value="services" className="mt-6">
            <ServicesManager />
          </TabsContent>

          <TabsContent value="packages" className="mt-6">
            <PackagesManager />
          </TabsContent>

          <TabsContent value="events" className="mt-6">
            <EventsManager />
          </TabsContent>

          <TabsContent value="team" className="mt-6">
            <TeamManager />
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2024 Nova HR SM. All rights reserved. Powered by GitHub CMS.</p>
        </div>
      </div>
    </div>
  );
}