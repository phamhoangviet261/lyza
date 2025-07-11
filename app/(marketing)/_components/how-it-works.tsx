'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Plus, Layout, Users } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Plus,
      title: 'Create Your Board',
      description:
        'Start by creating a new board for your project. Give it a name and choose a color theme.',
      step: '01',
    },
    {
      icon: Layout,
      title: 'Add Cards & Organize',
      description:
        "Create cards for your tasks and organize them in columns like 'To Do', 'In Progress', and 'Done'.",
      step: '02',
    },
    {
      icon: Users,
      title: 'Collaborate & Track',
      description:
        'Invite your team, assign tasks, and watch your project progress in real-time.',
      step: '03',
    },
  ];

  return (
    <section id="how-it-works" className="my-12 py-20 w-full bg-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Lyza Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>

                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
