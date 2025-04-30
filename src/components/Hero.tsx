
import React from 'react';
import { Button } from "@/components/ui/button";
import { PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      <div className="section-container z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 animate-fade-up">
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary font-medium mb-4 tracking-wider">FULLSTACK DEVELOPER & ML ENTHUSIAST</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Lemi Melkamu</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              A passionate developer who builds modern web applications with a focus on user experience,
              machine learning integration, and clean code. Proficient in multiple programming languages
              and frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
              <Button asChild size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://youtube.com/shorts/ubzSf-9TGd0" target="_blank">
                  <PlayCircle className="w-4 h-4 mr-2" /> Self Introduction
                </a>
              </Button>
            </div>
          </div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center">
              <img
                src="/images/image.png"
                alt="Lemi Melkamu"
                className="w-full h-full object-cover opacity-90"
                loading="eager"
                onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
                style={{ transition: 'opacity 0.5s' }}
              />
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 animate-fade-up" style={{ animationDelay: '300ms' }}>
          <div className="max-w-3xl mx-auto bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/10">
            <p className="text-foreground/80 leading-relaxed">
              👋 Hello! I'm Lemi Melkamu, a software developer with a deep interest in machine learning.
              I'm constantly motivated by the opportunity to learn and grow in the ever-evolving tech landscape.
              <br /><br />
              💻 My journey in the tech industry has allowed me to explore various domains, including software
              development, machine learning, chatbots, computer vision, and mobile applications using Flutter.
              <br /><br />
              🌟 I'm grateful for every opportunity to collaborate with talented individuals and contribute
              to meaningful projects. Proficient in Afan Oromo, English, and Amharic, I strive to foster
              strong connections and effective collaboration within diverse teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
