"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Shield, Truck, Utensils, Package, TreePine, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { githubService, type Service } from "@/lib/github-service"

const iconMap = {
  Users, Shield, Truck, Utensils, Package, TreePine, Briefcase
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const data = await githubService.getContent();
    setServices(data.services);
    setLoading(false);
  };

  if (loading) return <div className="py-20 text-center">Loading services...</div>;

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Professional Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-xl overflow-hidden bg-card border border-border"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <ArrowRight className="w-4 h-4 mr-3 text-foreground" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className={`w-full justify-start ${service.accentColor}`}>
                    Request Service
                    <ArrowRight className="w-4 h-4 ml-auto" />
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