"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { GlowingButton } from "@/components/ui/glowing-button";

const features = [
  "Full-stack development",
  "Database architecture",
  "User authentication",
  "Third-party API integration",
  "Analytics system",
  "Payment integration",
  "Deployment setup",
  "Basic documentation",
];

export function Pricing() {
  return (
    <section className="py-24 bg-muted/50 rounded-3xl">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-muted-foreground">
            One simple package, everything you need to launch your SaaS MVP.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="max-w-lg mx-auto p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold">MVP Package</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">$10,000</span>
                <span className="text-muted-foreground ml-2">/ project</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <motion.li
                  key={feature}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <GlowingButton 
              size="lg" 
              className="w-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </GlowingButton>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}