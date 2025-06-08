import React from 'react';
import Section from '../components/ui/Section';
import Timeline from '../components/ui/Timeline';
import { timelineData } from '../data/experience';

/**
 * Experience page component - Professional journey timeline
 * Displays work experience, education, and career highlights in chronological order
 */
const Experience = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <Section
        title="Experience"
        subtitle="A summary of my professional journey, highlighting key roles and contributions in the tech industry."
      />

      {/* Timeline Section */}
      <Section>
        <Timeline items={timelineData} />
      </Section>
    </div>
  );
};

export default Experience;
