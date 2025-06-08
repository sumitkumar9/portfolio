

/**
 * Section component for consistent page section styling
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Optional section subtitle
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.id - Section ID for navigation
 */
const Section = ({ 
  title, 
  subtitle, 
  children, 
  className = '', 
  id 
}) => {
  return (
    <section id={id} className={`py-8 ${className}`}>
      {/* Section Header */}
      {(title || subtitle) && (
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            {title && (
              <p className="text-[#121416] tracking-tight text-[32px] font-bold leading-tight">
                {title}
              </p>
            )}
            {subtitle && (
              <p className="text-[#6a7681] text-sm font-normal leading-normal">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
      
      {/* Section Content */}
      <div className="px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
