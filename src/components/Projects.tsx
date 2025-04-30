
import React from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { Code, MessageSquare, LineChart } from 'lucide-react';

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "JIT Library Monitoring",
      description: "An innovative solution designed to enhance the management and accessibility of library resources within educational institutions using computer vision techniques and real-time data processing.",
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Python", "OpenCV", "Python-Telegram-Bot", "PyQt5", "MySQL"],
      demoUrl: "https://t.me/lemi_portfolio_bot",
      githubUrl: "https://github.com/lemidb/?tab=repositories",
      icon: <Code className="h-10 w-10 text-primary" />,
      details: {
        outcome: "Significantly enhances the operational efficiency of libraries by automating attendance tracking and providing actionable insights into usage patterns. For students, it offers unparalleled convenience by making library occupancy information readily accessible.",
        fullDescription: "📚 JIT Library Monitoring 🏫 - An innovative solution designed to enhance the management and accessibility of library resources within educational institutions. Leveraging advanced 👁️ computer vision techniques and ⏳ real-time data processing, JIT Library Monitoring offers 👩‍🏫 librarians an efficient tool for monitoring daily, weekly, and monthly library usage patterns. Simultaneously, it empowers 👨‍🎓 students with immediate access to library occupancy information directly from their dormitories via an integrated 📲 Telegram 🤖 chatbot, promoting informed decision-making and optimal resource utilization."
      }
    },
    {
      title: "Chatbot System for Organizations",
      description: "An AI-driven chatbot designed to enhance user interaction with organizational sites using NLP and Machine Learning to simplify data retrieval.",
      imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Python", "SVM", "Python-Telegram-Bot", "React", "Flask", "MySQL"],
      demoUrl: "https://t.me/lemi_portfolio_bot",
      githubUrl: "https://github.com/lemidb/?tab=repositories",
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      details: {
        outcome: "Revolutionizes how users interact with organizational websites, streamlining information access and enhancing user satisfaction. It extends its reach beyond the website, connecting with customers on social media platforms.",
        fullDescription: "💬 Chatbot System for Organization Websites - This system introduces an AI-driven chatbot designed to enhance user interaction with organizational sites. 🧠 By utilizing Natural Language Processing (NLP) and 🤖 Machine Learning (ML), the chatbot simplifies data retrieval, offering real-time access to events, news, and other critical information. 🌐 Seamlessly integrated with the website and equipped with 🔍 scraping capabilities, it delivers accurate, summarized data. 📱 Social media integration, specifically through Telegram, further expands its reach, making information easily accessible across platforms."
      }
    },
    {
      title: "Proactive Monitoring System",
      description: "A revolutionary suite of interconnected microservices designed to deliver end-to-end visibility, rapid incident response, and seamless service assurance.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Python", "Python-Telegram-Bot", "Docker", "Django", "Matplotlib"],
      demoUrl: "https://t.me/lemi_portfolio_bot",
      githubUrl: "https://github.com/lemidb/?tab=repositories",
      icon: <LineChart className="h-10 w-10 text-primary" />,
      details: {
        outcome: "Revolutionizes IT management, offering clients end-to-end visibility and rapid response to incidents. Enhances operational efficiency and minimizes downtime while ensuring optimal resource utilization.",
        fullDescription: "🤖 Proactive Monitoring: Empowering Enterprises with Seamless Service Assurance - In today's fast-paced digital landscape, where businesses heavily rely on technology, ensuring the resilience and reliability of critical infrastructure is paramount. The 'Proactive Monitoring' project is a revolutionary suite of interconnected microservices designed to deliver end-to-end visibility, rapid incident response, and seamless service assurance for clients. 🚀 At the heart of this solution is the 'net_notify' module, which constantly monitors the availability and connectivity of essential systems, including servers, applications, and databases."
      }
    }
  ];

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="opacity-0 animate-fade-up" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
