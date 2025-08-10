import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionHeading from '../section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Library, ServerCog } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const skills = {
  languages: [
    { name: 'JavaScript', icon: Cpu },
    { name: 'TypeScript', icon: Cpu },
    { name: 'Python', icon: Cpu },
    { name: 'HTML5', icon: Cpu },
    { name: 'CSS3', icon: Cpu },
    { name: 'SQL', icon: Cpu },
  ],
  frameworks: [
    { name: 'React', icon: Library },
    { name: 'Next.js', icon: Library },
    { name: 'Node.js', icon: Library },
    { name: 'Express.js', icon: Library },
    { name: 'Tailwind CSS', icon: Library },
    { name: 'Flask', icon: Library },
  ],
  tools: [
    { name: 'Git & GitHub', icon: ServerCog },
    { name: 'Docker', icon: ServerCog },
    { name: 'PostgreSQL', icon: ServerCog },
    { name: 'MongoDB', icon: ServerCog },
    { name: 'Firebase', icon: ServerCog },
    { name: 'Vercel', icon: ServerCog },
  ],
};

const SkillCard = ({ name, icon: Icon }: { name: string; icon: LucideIcon }) => (
  <Card className="p-4 text-center transition-transform transform hover:-translate-y-1 hover:shadow-primary/10">
    <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
      <Icon className="h-10 w-10 text-primary" />
      <span className="font-medium">{name}</span>
    </CardContent>
  </Card>
);

export default function Skills() {
  return (
    <section id="skills" className="bg-secondary/50">
      <div className="container">
        <SectionHeading
          title="My Skills"
          subtitle="A snapshot of the technologies I work with. I'm always eager to learn more."
        />
        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
          <TabsContent value="languages" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {skills.languages.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="frameworks" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {skills.frameworks.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tools" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {skills.tools.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
