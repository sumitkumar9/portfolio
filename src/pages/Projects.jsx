import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { projectsData } from '../data/projects';

/**
 * ProjectCard component for individual project display
 */
const ProjectCard = ({ project }) => {
  return (
    <div className="card group hover:shadow-lg transition-all duration-300">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-2 right-2 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className="space-y-3">
        <h3 className="text-[#121416] text-xl font-bold leading-tight">
          {project.title}
        </h3>

        <p className="text-[#6a7681] text-sm leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-[#121416] text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            Live Demo
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            View Code
          </Button>
        </div>
      </div>
    </div>
  );
};

/**
 * Projects page component - Showcase of portfolio projects
 * Features project cards with images, descriptions, and links
 */
const Projects = () => {
  const featuredProjects = projectsData.filter(project => project.featured);
  const otherProjects = projectsData.filter(project => !project.featured);
  
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <Section 
        title="My Projects" 
        subtitle="A collection of projects that showcase my skills and experience in software development."
      />
      
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <Section>
          <h3 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] pb-6 pt-4">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>
      )}
      
      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <Section>
          <h3 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] pb-6 pt-4">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>
      )}
      
      {/* Call to Action */}
      <Section>
        <div className="text-center py-8">
          <h3 className="text-[#121416] text-xl font-bold mb-4">
            Interested in working together?
          </h3>
          <p className="text-[#6a7681] mb-6">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <Button variant="primary" size="lg">
            Get In Touch
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Projects;
