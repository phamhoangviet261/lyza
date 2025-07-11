import Link from 'next/link';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import { Medal } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { HowItWorksSection } from './_components/how-it-works';
import { FAQSection } from './_components/faq';
import { FeaturesSection } from './_components/features-section';

const headingFont = localFont({
  src: '../../public/fonts/font.woff2',
});

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          'flex items-center justify-center flex-col',
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          NO.1 TASK MANAGEMENT
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Your team. Your flow
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Move forward with Lyza
        </div>
      </div>
      <div
        className={cn(
          'text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto',
          textFont.className
        )}
      >
        Stay in sync, hit deadlines, and work smarter — all in one intuitive
        platform.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get started with Lyza</Link>
      </Button>
      <HowItWorksSection />
      <FeaturesSection />
      <FAQSection />
    </div>
  );
};

export default MarketingPage;
