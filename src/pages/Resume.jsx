import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { personalInfo } from '../data/experience';

/**
 * Resume page component - Displays professional resume
 * Offers both an embedded view and download option
 */
const resumePdfUrl = "/Sumit.pdf";

const Resume = () => {
  // You can replace this with the actual path to your resume PDF
  
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <Section 
        title="Resume" 
        subtitle="View my professional experience, skills, and qualifications."
      />
      
      <div className="flex flex-col gap-6">
        {/* Download Button */}
        <div className="flex justify-end">
          <Button 
            variant="primary" 
            size="md"
            onClick={() => window.open(resumePdfUrl, '_blank')}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </span>
          </Button>
        </div>
        
        {/* PDF Embed */}
        <div className="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden">
          <iframe 
            src={resumePdfUrl}
            className="w-full h-full"
            title={`${personalInfo.name}'s Resume`}
            aria-label={`${personalInfo.name}'s Resume`}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;