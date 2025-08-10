import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="bg-background">
      <div className="container grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-2 md:py-24 lg:py-32">
        <div className="flex flex-col items-start space-y-4 text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Vishavjeet Singh
          </h1>
          <p className="text-primary md:text-xl">
            Software Engineer
          </p>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Results-driven Software Engineer with 5+ years of experience in building scalable microservices, cloud-native applications, and performance-optimized systems. Adept in backend development, containerization, and system design with a strong focus on reducing latency and improving architecture.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" variant="outline">
              <Link href="/resume.pdf" target="_blank">
                View Resume <FileText className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/img.jpg"
            alt="Vishavjeet Singh"
            width={400}
            height={400}
            className="rounded-full object-cover aspect-square"
            data-ai-hint="profile picture"
          />
        </div>
      </div>
    </section>
  );
}
