import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import SectionHeading from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import type { SVGProps } from 'react';

function StackOverflowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19 18.25a2.25 2.25 0 0 1-2.25 2.25H7.25A2.25 2.25 0 0 1 5 18.25v-5.5h1.5v5.5a.75.75 0 0 0 .75.75h9.5a.75.75 0 0 0 .75-.75v-5.5H19zM8.65 16h6.7v-1.5h-6.7zm.65-3.5h5.5l.6 1.35l1.35-.6l-3.35-7.5l-1.35.6L12 11.2l-2.15-4.8l-1.35.6zM12 4.05l1.8 4l-3.6 8.1h3.55l1.3-2.9h2.2l-3.75 8.35h-9L12 4.05z"
      ></path>
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="bg-secondary/50 py-24">
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
                 <Link href="https://stackoverflow.com/users/7673019/vishavjeet" target="_blank" rel="noreferrer">
                    <StackOverflowIcon className="h-8 w-8 text-muted-foreground transition-colors hover:text-primary" />
                 </Link>
                 <Link href="https://www.instagram.com/vishavjeet_vt/" target="_blank" rel="noreferrer">
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