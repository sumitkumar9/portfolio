import { getSkillIcon } from '../../utils/icons.jsx';

/**
 * SkillCard component for displaying individual skills
 * @param {Object} props - Component props
 * @param {string} props.name - Skill name
 * @param {string} props.icon - Icon identifier
 * @param {string} props.className - Additional CSS classes
 */
const SkillCard = ({ name, icon, className = '' }) => {
  return (
    <div className={`flex flex-1 gap-3 rounded-lg border border-[#dde1e3] bg-white p-4 items-center min-w-[158px] hover:shadow-md transition-shadow ${className}`}>
      {/* Skill Icon */}
      <div className="text-[#121416] flex-shrink-0" data-icon={icon} data-size="24px" data-weight="regular">
        {getSkillIcon(icon)}
      </div>

      {/* Skill Name */}
      <h2 className="text-[#121416] text-base font-bold leading-tight truncate">
        {name}
      </h2>
    </div>
  );
};

export default SkillCard;
