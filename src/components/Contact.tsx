
import React from 'react';
import ContactForm from './ContactForm';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "lemimelkamu@gmail.com",
      link: "mailto:lemimelkamu@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+251 977 66 84 08",
      link: "tel:+251977668408"
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "@lemidb",
      link: "https://github.com/lemidb"
    }
  ];

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      <div className="section-container z-10 relative">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
            <p className="text-foreground/80">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4 mt-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">{info.title}</p>
                      <a 
                        href={info.link} 
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
