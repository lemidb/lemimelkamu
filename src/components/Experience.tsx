
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItemProps {
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experienceData: ExperienceItemProps[] = [
  {
    position: "Software Developer",
    company: "Ethiopian Airlines",
    period: "2024 - Present",
    description: "Developing and maintaining web applications using C#, ASP.NET, React, TypeScript. and SAP ABAP. Working in an agile team to deliver high-quality software solutions.",
    technologies: ["C#", "ASP.NET", "React", "TypeScript", "SAP ABAP", "Docker"]
  },
  {
    position: "Sys Admin and Developer",
    company: "Siinqee Bank",
    period: "2023 - 2024",
    description: "I have been working as a software developer intern at Siinqee Bank for 1 year. I have been working on the core banking system of the bank.",
    technologies: ["C#", "ASP.NET", "React", "TypeScript", "SAP ABAP", "Docker"]
  },
  {
    position: "Software Developer Intern",
    company: "Jimma University AI Center",
    period: "2023 - 2024",
    description: "Implemented machine learning models for natural language processing and computer vision applications. Developed chatbot for better user interaction with the website.",
    technologies: ["Python", "TensorFlow", "NLP", "Computer Vision"]
  },
];

const ExperienceItem = ({ position, company, period, description, technologies }: ExperienceItemProps) => {
  return (
    <Card className="mb-6 bg-card/50 hover:shadow-md transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-primary">{position}</h3>
            <p className="text-lg font-medium">{company}</p>
          </div>
          <span className="mt-1 md:mt-0 text-muted-foreground font-medium">{period}</span>
        </div>
        <p className="my-3 text-foreground/80">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-primary/10">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="bg-background/90">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="mt-12">
          {experienceData.map((exp, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-up" 
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <ExperienceItem {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
