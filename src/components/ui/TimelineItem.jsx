import React from 'react';
import { BriefcaseIcon, CodeIcon, GraduationCapIcon } from '../../utils/icons';

/**
 * TimelineItem component for displaying individual timeline entries
 * @param {Object} props - Component props
 * @param {string} props.title - Position/Role title
 * @param {string} props.organization - Company/Institution name
 * @param {string} props.period - Time period
 * @param {string} props.description - Optional description
 * @param {string} props.icon - Icon name for the timeline item
 * @param {boolean} props.isLast - Whether this is the last item in timeline
 * @param {string} props.className - Additional CSS classes
 */
const TimelineItem = ({ 
  title, 
  organization, 
  period, 
  description,
  icon,
  isLast = false,
  className = '' 
}) => {
  // Icon mapping
  const iconComponents = {
    BriefcaseIcon,
    CodeIcon,
    GraduationCapIcon
  };

  const IconComponent = iconComponents[icon] || BriefcaseIcon;

  return (
    <>
      {/* Timeline Icon Column */}
      <div className="flex flex-col items-center gap-1 pt-3">
        <div className="text-accent-500">
          <IconComponent />
        </div>
        {!isLast && (
          <div className="w-[1.5px] bg-gray-600 h-2 grow"></div>
        )}
      </div>

      {/* Timeline Content Column */}
      <div className={`flex flex-1 flex-col py-3 ${className}`}>
        <h3 className="text-text-primary text-base font-medium leading-normal">
          {title} {organization && `at ${organization}`}
        </h3>
        <p className="text-text-secondary text-base font-normal leading-normal mb-2">
          {period}
        </p>
        {description && (
          <p className="text-text-muted text-sm font-normal leading-normal">
            {description}
          </p>
        )}
      </div>
    </>
  );
};

export default TimelineItem;
