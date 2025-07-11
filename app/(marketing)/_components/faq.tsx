'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'How is Lyza different from other project management tools?',
      answer:
        'Lyza combines the visual simplicity of Trello with the power of advanced project management features. We focus on ease of use while providing robust collaboration tools, real-time updates, and seamless integrations that help teams stay productive.',
    },
    {
      question: 'Can I use Lyza for free?',
      answer:
        'Yes! We offer a 14-day free trial with full access to all features. After the trial, you can choose from our flexible pricing plans or continue with our free tier that includes basic board and card management for small teams.',
    },
    {
      question: 'How many team members can I invite to my boards?',
      answer:
        'Our free plan supports up to 5 team members. Paid plans offer unlimited team members, advanced permissions, and additional collaboration features. You can upgrade at any time as your team grows.',
    },
    {
      question: 'Is my data secure and private?',
      answer:
        "Absolutely. We use enterprise-grade encryption to protect your data both in transit and at rest. Your boards and cards are private by default, and you have full control over who can access your projects. We're also GDPR compliant and regularly undergo security audits.",
    },
    {
      question: 'Can I integrate Lyza with other tools?',
      answer:
        'Yes! Lyza integrates with popular tools like Slack, Google Drive, GitHub, Zapier, and many more. Our API also allows for custom integrations to fit your existing workflow.',
    },
    {
      question: 'Do you offer mobile apps?',
      answer:
        'Our web app is fully responsive and works great on mobile devices. We also have native iOS and Android apps available for download, so you can manage your projects on the go with full functionality.',
    },
    {
      question: 'What happens to my data if I cancel my subscription?',
      answer:
        "You can export all your data at any time. If you cancel, you'll have 30 days to download your boards and cards before they're permanently deleted. We believe your data belongs to you, so we make it easy to take it with you.",
    },
    {
      question: 'Do you provide customer support?',
      answer:
        'Yes! We offer email support for all users, with priority support for paid plans. Our help center includes detailed guides, video tutorials, and best practices. Enterprise customers also get dedicated account management and phone support.',
    },
    {
      question: 'Can I customize my boards and workflows?',
      answer:
        "You can customize board colors, create custom card templates, set up automated workflows, and configure notifications to match your team's needs. Advanced plans include custom fields and advanced automation rules.",
    },
    {
      question: 'Is there a limit to how many boards I can create?',
      answer:
        'Free accounts can create up to 10 boards. Paid plans offer unlimited boards, advanced templates, and additional customization options. You can always upgrade as your project management needs grow.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-12 py-20 bg-gray w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Lyza. Can't find the answer you're
            looking for?
            <a href="#" className="text-blue-600 hover:text-blue-700 ml-1">
              Contact our support team
            </a>
            .
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openIndex === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Our team is here to help you get the most out of Lyza
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                View Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
