import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="bg-background">
      <div className="container text-center">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            John Doe
          </h1>
          <p className="max-w-[700px] text-primary md:text-xl">
            Full-Stack Software Engineer
          </p>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            I build elegant and efficient web applications. Passionate about solving complex problems and creating seamless user experiences.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
