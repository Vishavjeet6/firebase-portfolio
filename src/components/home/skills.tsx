import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionHeading from '../section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Library, Database, Cloud, ServerCog, BrainCircuit } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const skills = {
  languages: [
    { name: 'Java', icon: Code },
    { name: 'Python', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'SQL', icon: Code },
    { name: 'Shell Scripting', icon: Code },
  ],
  frameworks: [
    { name: 'Spring Boot', icon: Library },
    { name: 'Spring', icon: Library },
    { name: 'Hibernate', icon: Library },
    { name: 'Angular', icon: Library },
    { name: 'Microservices', icon: Library },
    { name: 'RESTful APIs', icon: Library },
  ],
  databases: [
    { name: 'Redis', icon: Database },
    { name: 'MySQL', icon: Database },
    { name: 'Oracle', icon: Database },
    { name: 'Cloud SQL', icon: Database },
  ],
  cloud: [
    { name: 'Google Cloud', icon: Cloud },
    { name: 'Kubernetes', icon: Cloud },
    { name: 'Docker', icon: Cloud },
    { name: 'Nomad', icon: Cloud },
  ],
  tools: [
    { name: 'Git', icon: ServerCog },
    { name: 'CI/CD', icon: ServerCog },
    { name: 'Jenkins', icon: ServerCog },
    { name: 'GitLab', icon: ServerCog },
    { name: 'ActiveMQ', icon: ServerCog },
    { name: 'Kafka', icon: ServerCog },
    { name: 'Elasticsearch', icon: ServerCog },
  ],
  ml: [
    { name: 'Machine Learning', icon: BrainCircuit },
    { name: 'Pandas', icon: BrainCircuit },
    { name: 'NumPy', icon: BrainCircuit },
  ]
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
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="databases">Databases</TabsTrigger>
            <TabsTrigger value="cloud">Cloud & Infra</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="ml">AI/ML</TabsTrigger>
          </TabsList>
          <TabsContent value="languages" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
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
          <TabsContent value="databases" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
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
          <TabsContent value="ml" className="mt-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {skills.ml.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
