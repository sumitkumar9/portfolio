import React from 'react';

/**
 * ExperienceCard component for displaying education and work experience
 * @param {Object} props - Component props
 * @param {string} props.title - Position/Degree title
 * @param {string} props.organization - Company/Institution name
 * @param {string} props.period - Time period
 * @param {string} props.description - Optional description
 * @param {string} props.className - Additional CSS classes
 */
const ExperienceCard = ({ 
  title, 
  organization, 
  period, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 ${className}`}>
      <div className="flex flex-col justify-center flex-1">
        {/* Title/Position */}
        <h3 className="text-text-primary text-base font-medium leading-normal line-clamp-1">
          {title}
        </h3>
        
        {/* Organization */}
        <p className="text-text-secondary text-sm font-normal leading-normal line-clamp-2">
          {organization}
        </p>
        
        {/* Period */}
        {period && (
          <p className="text-text-muted text-xs font-normal leading-normal mt-1">
            {period}
          </p>
        )}
        
        {/* Description */}
        {description && (
          <p className="text-text-primary text-sm font-normal leading-normal mt-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
