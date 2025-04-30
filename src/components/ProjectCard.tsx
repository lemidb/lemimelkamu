
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  icon?: React.ReactNode;
  details?: {
    outcome: string;
    fullDescription: string;
  };
}

const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  tags, 
  demoUrl, 
  githubUrl,
  icon,
  details
}: ProjectProps) => {
  return (
    <>
      <Card className="overflow-hidden bg-card h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
        <div className="h-48 overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {icon && (
            <div className="absolute top-4 right-4 bg-background/80 p-2 rounded-full backdrop-blur-sm">
              {icon}
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3} more
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-foreground/80 line-clamp-3">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between gap-4">
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              <span>Code</span>
            </a>
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="flex-1 flex items-center gap-1">
                <ExternalLink className="h-4 w-4" />
                <span>Details</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                  {icon && React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6" })}
                  {title}
                </DialogTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-56 object-cover rounded-md mb-4"
                />
                
                <h3 className="font-semibold text-lg mb-1">Description</h3>
                <p className="text-sm text-foreground/80 mb-4 whitespace-pre-line">
                  {details?.fullDescription || description}
                </p>
                
                {details?.outcome && (
                  <>
                    <h3 className="font-semibold text-lg mb-1">Outcome</h3>
                    <p className="text-sm text-foreground/80 mb-4">
                      {details.outcome}
                    </p>
                  </>
                )}
                
                <div className="flex gap-4 mt-6">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Github className="h-4 w-4" />
                      <span>View Code</span>
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectCard;
