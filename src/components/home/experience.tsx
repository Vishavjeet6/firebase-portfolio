import SectionHeading from '@/components/section-heading';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const experiences = [
  {
    company: 'IG Group',
    role: 'Software Developer Engineer',
    period: 'Mar 2023 - Present',
    description: [
      'Led the successful migration of a core application to Nomad as part of a PoC, setting the foundation for wider adoption.',
      'Implemented Redis caching for a latency-critical app, reducing response time from 200ms to 15ms.',
      'Increased ActiveMQ message consumption from 1,000 to 8,000 msg/min, improving real-time data processing.',
      'Spearheaded containerization, enhanced CI/CD pipelines, and modernized legacy systems, improving app maturity.',
      'Collaborated across teams to integrate external data sources, creating a single source of truth and reducing vendor API calls, resulting in cost savings.',
      'Improved deployment processes and overall system performance for critical trading applications.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Software Developer Engineer',
    period: 'Sep 2020 - Mar 2023',
    description: [
      'Developed and maintained microservices and RESTful APIs using Spring and Hibernate.',
      'Led the implementation and support of multiple client projects from concept to deployment.',
      'Improved application performance and scalability through optimization techniques and debugging tools.',
      'Collaborated with senior developers to deliver code fixes and new features, following agile methodologies.',
      'Successfully migrated a Legacy Application to Google Cloud Platform, resulting in increased reliability and scalability.',
    ],
  },
  {
    company: 'Nagarro',
    role: 'Trainee',
    period: 'Jan 2020 - Sep 2020',
    description: [
      'Developed a Travel Portal web application using Angular for the frontend and Spring Boot for the backend.',
      'Built service APIs that let users receive notifications through SMS, email, and web.',
    ],
  },
    {
    company: 'Nagarro',
    role: 'Bootcamp Intern',
    period: 'June 2019 - June 2019',
    description: [
      'Built a WhatsApp Chatbot in Python which can reply to user queries like news, weather, movies, Wikipedia search using Machine Learning.',
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
