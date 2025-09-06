import { getSkillIcon } from '../../utils/icons.jsx';

/**
 * SkillCard component for displaying individual skills with proficiency levels
 * @param {Object} props - Component props
 * @param {string} props.name - Skill name
 * @param {string} props.icon - Icon identifier
 * @param {string} props.level - Proficiency level (Expert, Advanced, Intermediate)
 * @param {number} props.years - Years of experience
 * @param {string} props.className - Additional CSS classes
 */
const SkillCard = ({ name, icon, level, years, className = '' }) => {

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-green-400';
      case 'Advanced': return 'text-accent-500';
      case 'Intermediate': return 'text-yellow-400';
      default: return 'text-text-muted';
    }
  };

  return (
    <div className={`flex flex-col gap-3 rounded-lg border border-gray-600 bg-dark-accent p-4 min-w-[158px] hover:bg-dark-secondary hover:shadow-md transition-all group ${className}`}>
      {/* Header with Icon and Name */}
      <div className="flex items-center gap-3">
        <div className="text-accent-500 flex-shrink-0 group-hover:scale-110 transition-transform" data-icon={icon} data-size="24px" data-weight="regular">
          {getSkillIcon(icon)}
        </div>
        <h2 className="text-text-primary text-base font-bold leading-tight truncate">
          {name}
        </h2>
      </div>

      {/* Proficiency Information */}
      <div className="flex items-center justify-between">
        <span className={`text-xs font-semibold ${getLevelColor(level)}`}>
          {level}
        </span>
        <span className="text-text-muted text-xs">
          {years}+ years
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
