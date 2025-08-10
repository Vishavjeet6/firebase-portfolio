import { Mail, Phone } from 'lucide-react';
import SectionHeading from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  return (
    <section id="contact" className="bg-secondary/50">
      <div className="container">
        <SectionHeading
          title="Get in Touch"
          subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team."
        />
        <div className="mx-auto max-w-lg">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-headline text-lg">Email</p>
                    <a href="mailto:vishavjeet.s@northeastern.edu" className="text-muted-foreground hover:text-primary">
                      vishavjeet.s@northeastern.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-headline text-lg">Phone</p>
                    <p className="text-muted-foreground">+1 (857) 313-8200</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
