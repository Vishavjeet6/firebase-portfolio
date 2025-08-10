import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/section-heading';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce site with product management, shopping cart, and Stripe integration for payments.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    tags: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with drag-and-drop boards, real-time updates, and user authentication.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'project management',
    tags: ['React', 'Firebase', 'Redux', 'Material UI'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website v1',
    description: 'My previous portfolio website built with vanilla JavaScript, showcasing my journey as a developer.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'developer portfolio',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-secondary/50">
      <div className="container">
        <SectionHeading 
          title="Projects"
          subtitle="Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-2">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="aspect-video w-full object-cover"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex w-full justify-end gap-4">
                  <Button variant="outline" asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2" /> Live Demo
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2" /> Source
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
