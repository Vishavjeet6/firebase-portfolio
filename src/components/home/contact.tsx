import { Mail, Phone, Github, Linkedin, Instagram, TowerControl } from 'lucide-react';
import SectionHeading from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

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
                    <a href="mailto:vishavjeetsinghthakur@gmail.com" className="text-muted-foreground hover:text-primary">
                      vishavjeetsinghthakur@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-headline text-lg">Phone</p>
                    <p className="text-muted-foreground">+91 9815581276</p>
                  </div>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="flex justify-center gap-6">
                 <Link href="https://github.com/Vishavjeet6" target="_blank" rel="noreferrer">
                    <Github className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
                 </Link>
                 <Link href="https://www.linkedin.com/in/vishavjeets/" target="_blank" rel="noreferrer">
                    <Linkedin className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
                 </Link>
                 <Link href="#" target="_blank" rel="noreferrer">
                    <TowerControl className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
                 </Link>
                 <Link href="#" target="_blank" rel="noreferrer">
                    <Instagram className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
                 </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
