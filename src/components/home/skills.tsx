import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionHeading from '../section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Library, Database, Cloud, ServerCog } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const skills = {
  languages: [
    { name: 'Java', icon: Code },
    { name: 'Python', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'Shell Scripting', icon: Code },
    { name: 'HTML', icon: Code },
    { name: 'CSS', icon: Code },
  ],
  web: [
    { name: 'RESTful APIs', icon: Library },
    { name: 'Bootstrap', icon: Library },
    { name: 'Angular', icon: Library },
    { name: 'Flask', icon: Library },
  ],
  frameworks: [
    { name: 'Spring Boot', icon: Library },
    { name: 'Maven', icon: Library },
    { name: 'MVC', icon: Library },
    { name: 'Microservices', icon: Library },
    { name: 'Kafka', icon: Library },
  ],
  databases: [
    { name: 'SQL', icon: Database },
    { name: 'MySQL', icon: Database },
    { name: 'Oracle', icon: Database },
    { name: 'Cloud SQL', icon: Database },
    { name: 'Redis', icon: Database },
  ],
  cloud: [
    { name: 'Google Cloud', icon: Cloud },
    { name: 'Compute Engine', icon: Cloud },
    { name: 'Kubernetes', icon: Cloud },
    { name: 'Google Storage', icon: Cloud },
  ],
  tools: [
    { name: 'Git', icon: ServerCog },
    { name: 'CI/CD', icon: ServerCog },
    { name: 'Linux', icon: ServerCog },
    { name: 'Docker', icon: ServerCog },
    { name: 'Postman', icon: ServerCog },
    { name: 'Jenkins', icon: ServerCog },
    { name: 'GitLab', icon: ServerCog },
    { name: 'Nomad', icon: ServerCog },
    { name: 'Pandas', icon: ServerCog },
    { name: 'NumPy', icon: ServerCog },
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
          <TabsList className="mx-auto grid w-full max-w-2xl grid-cols-3 md:grid-cols-6">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="databases">Databases</TabsTrigger>
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
          <TabsContent value="languages" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {skills.languages.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="web" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {skills.web.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="frameworks" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {skills.frameworks.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="databases" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {skills.databases.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </TabsContent>
           <TabsContent value="cloud" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {skills.cloud.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tools" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
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
