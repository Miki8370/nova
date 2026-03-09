"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"
import { githubService } from "@/lib/github-service"

// Icon mapping for packages
const iconMap: Record<string, React.ElementType> = {
  TalentIcon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
      <path d="M12 12 2.5 2.5" />
      <path d="m2 2 20 20" />
    </svg>
  ),
  WorkforceIcon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="m7 8-4 4 4 4" />
      <path d="m17 8 4 4-4 4" />
      <path d="m14 4-4 16" />
    </svg>
  ),
  TrainingIcon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
  ConsultingIcon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
    </svg>
  ),
};

export default function Packages() {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const data = await githubService.getContent();
      setPackages(data.packages || []);
    } catch (error) {
      console.error("Error fetching packages:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="py-20 text-center">Loading packages...</div>;
  }

  if (packages.length === 0) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our HR Solution Packages</h2>
          <p className="text-lg text-muted-foreground">No packages available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20" style={{ backgroundImage: 'linear-gradient(to bottom, var(--nova-gradient-dark), var(--background))' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our HR Solution Packages</h2>
          <p className="text-lg text-muted-foreground">
            Explore our structured and scalable HR packages designed to support sustainable growth and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = iconMap[pkg.icon] || iconMap.TalentIcon;
            
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-lg overflow-hidden bg-card hover:bg-card/80 transition-all border border-border"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <IconComponent />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{pkg.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{pkg.description}</p>

                  <ul className="space-y-2 mb-6">
                    {pkg.features?.map((feature: string, i: number) => (
                      <li key={i} className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" className="group-hover:translate-x-2 transition-transform bg-transparent">
                    View Package Details
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}