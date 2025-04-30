
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface SkillItem {
  name: string;
  emoji: string;
}

interface SkillCategory {
  name: string;
  skills: SkillItem[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", emoji: "💻" },
        { name: "PHP", emoji: "🐘" },
        { name: "Java", emoji: "☕" },
        { name: "C++", emoji: "🦀" },
        { name: "Python", emoji: "🐍" },
        { name: "C#", emoji: "🟫" },
        { name: "CSS", emoji: "🎨" }
      ]
    },
    {
      name: "Web Development",
      skills: [
        { name: "Laravel", emoji: "🐘" },
        { name: "React", emoji: "⚛️" },
        { name: "Bootstrap", emoji: "📁" },
        { name: "Django", emoji: "🐍" },
        { name: ".NET", emoji: "🌐" },
        { name: "Sass", emoji: "💅" }
      ]
    },
    {
      name: "Mobile Development",
      skills: [
        { name: "Android", emoji: "🤖" },
        { name: "Flutter", emoji: "📱" }
      ]
    },
    {
      name: "Technologies & Tools",
      skills: [
        { name: "Machine Learning", emoji: "🤖" },
        { name: "NLP", emoji: "🧠" },
        { name: "Telegram Bot API", emoji: "🤖" },
        { name: "Web Scraping", emoji: "🔍" },
        { name: "Data Analysis", emoji: "📊" },
        { name: "Docker", emoji: "🐳" }
      ]
    },
    {
      name: "Operating Systems",
      skills: [
        { name: "Kali Linux", emoji: "🐧" },
        { name: "Ubuntu", emoji: "🐧" },
        { name: "Debian", emoji: "🐧" },
        { name: "PFSENSE", emoji: "🔒" }
      ]
    },
    {
      name: "Soft Skills",
      skills: [
        { name: "Problem Solving", emoji: "🧩" },
        { name: "Communication", emoji: "🗣️" },
        { name: "Teamwork", emoji: "🤝" }
      ]
    }
  ];

  return (
    <section id="skills" className="bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-up"
              style={{ animationDelay: `${categoryIndex * 100}ms`, animationFillMode: 'forwards' }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-background/80 text-foreground px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 transition-transform hover:scale-105"
                    >
                      <span>{skill.emoji}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
