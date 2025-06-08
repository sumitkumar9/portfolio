import React from 'react';
import TimelineItem from './TimelineItem';

/**
 * Timeline component for displaying chronological experience data
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of timeline items
 * @param {string} props.className - Additional CSS classes
 */
const Timeline = ({ items = [], className = '' }) => {
  return (
    <div className={`grid grid-cols-[40px_1fr] gap-x-2 ${className}`}>
      {items.map((item, index) => (
        <TimelineItem
          key={item.id}
          title={item.title}
          organization={item.organization}
          period={item.period}
          description={item.description}
          icon={item.icon}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;
