import React from 'react';
import Section from '../components/ui/Section';
import ExperienceCard from '../components/ui/ExperienceCard';
import { personalInfo, experienceData } from '../data/experience';

/**
 * About page component - Personal information, education, experience, and highlights
 * Comprehensive overview of background and achievements
 */
const About = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <Section title="About Me">
        <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1">
          {personalInfo.bio}
        </p>
      </Section>
      
      {/* Education Section */}
      <Section>
        <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
          Education
        </h3>
        <div className="space-y-2">
          {experienceData.education.map((edu, index) => (
            <ExperienceCard
              key={index}
              title={edu.degree}
              organization={edu.institution}
              period={edu.period}
            />
          ))}
        </div>
      </Section>
      
      {/* Work Experience Section */}
      <Section>
        <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
          Experience
        </h3>
        <div className="space-y-2">
          {experienceData.workExperience.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.position}
              organization={exp.company}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </div>
      </Section>
      
      {/* Skills Overview */}
      <Section>
        <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
          Skills at a Glance
        </h3>
        <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1">
          {personalInfo.skillsOverview}
        </p>
      </Section>
      
      {/* Highlights Section */}
      <Section>
        <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
          Highlights
        </h3>
        <div className="space-y-2">
          {experienceData.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-4 bg-white min-h-14">
              <p className="text-[#111518] text-base font-normal leading-normal flex-1">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Personal Interests */}
      <Section>
        <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
          Outside of Code
        </h3>
        <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1">
          {personalInfo.personalInterests}
        </p>
      </Section>
    </div>
  );
};

export default About;
