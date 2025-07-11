'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Kanban,
  Users,
  Zap,
  BarChart3,
  Shield,
  Smartphone,
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Kanban,
      title: 'Visual Boards',
      description:
        'Create beautiful boards to organize your projects. Drag and drop cards between columns to track progress.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'Invite team members, assign tasks, and work together in real-time. Everyone stays on the same page.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description:
        'Built for speed. Create boards and cards instantly. No waiting, no lag, just pure productivity.',
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description:
        "Monitor project progress with visual indicators. See what's done, in progress, and what's coming next.",
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description:
        'Your data is encrypted and secure. Control who has access to your boards and projects.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description:
        'Access your boards anywhere. Fully responsive design works perfectly on all devices.',
    },
  ];

  return (
    <section id="features" className="py-20 px-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Stay Organized
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help teams of all sizes manage
            projects efficiently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
