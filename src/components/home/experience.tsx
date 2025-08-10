import SectionHeading from '@/components/section-heading';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const experiences = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior Software Engineer',
    period: '2020 - Present',
    description: [
      'Led the development of a high-traffic web application using React and Node.js.',
      'Mentored junior developers and conducted code reviews to ensure code quality.',
      'Improved application performance by 30% by optimizing database queries and frontend rendering.',
    ],
  },
  {
    company: 'Innovate Co.',
    role: 'Software Engineer',
    period: '2018 - 2020',
    description: [
      'Developed and maintained features for a large-scale SaaS platform.',
      'Collaborated with cross-functional teams to define and ship new features.',
      'Wrote and maintained unit and integration tests to ensure application stability.',
    ],
  },
  {
    company: 'Startup Hub',
    role: 'Junior Web Developer',
    period: '2016 - 2018',
    description: [
      'Assisted in the development of client websites using HTML, CSS, and JavaScript.',
      'Gained experience with modern frontend frameworks like Vue.js.',
      'Contributed to the full software development lifecycle, from concept to deployment.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey has been a rewarding path of growth and learning."
        />
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-8 flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="transition-all hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="font-headline">{exp.role}</CardTitle>
                    <CardDescription>
                      {exp.company} | {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-2 pl-4 text-muted-foreground">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-4 ring-background"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
