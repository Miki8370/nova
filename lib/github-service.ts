export interface SiteContent {
  services: any[];
  packages: any[];
  events: any[];
  team: any[];
  hero: {
    backgroundImage: string;
    title: string;
    subtitle: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
  accentColor: string;
}

export interface Package {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
  order: number;
}

class GitHubService {
  async getContent(): Promise<SiteContent> {
    try {
      const response = await fetch('/api/content');
      if (!response.ok) {
        console.error('Failed to fetch content:', await response.text());
        return this.getDefaultContent();
      }
      const data = await response.json();
      // Ensure hero object exists
      if (!data.hero) {
        data.hero = this.getDefaultContent().hero;
      }
      return data;
    } catch (error) {
      console.error('Error fetching content:', error);
      return this.getDefaultContent();
    }
  }

  private getDefaultContent(): SiteContent {
    return {
      services: [],
      packages: [],
      events: [],
      team: [],
      hero: {
        backgroundImage: '/hero-bg.jpg',
        title: 'Transform Your Workforce',
        subtitle: 'Professional HR consulting, recruitment, training, and workforce solutions tailored for your business success in Ethiopia.'
      }
    };
  }

  async updateContent(content: SiteContent): Promise<void> {
    const response = await fetch('/api/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    });

    if (!response.ok) {
      throw new Error('Failed to update content');
    }
  }

  async createItem(type: keyof SiteContent, item: any) {
    const content = await this.getContent();
    const newItem = { ...item, id: Date.now().toString() };
    content[type] = [...(content[type] || []), newItem];
    await this.updateContent(content);
    return newItem;
  }

  async updateItem(type: keyof SiteContent, id: string, updates: any) {
    const content = await this.getContent();
    const items = content[type] || [];
    const index = items.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...updates, id };
      await this.updateContent(content);
    }
  }

  async deleteItem(type: keyof SiteContent, id: string) {
    const content = await this.getContent();
    content[type] = (content[type] || []).filter((item: any) => item.id !== id);
    await this.updateContent(content);
  }
}

export const githubService = new GitHubService();