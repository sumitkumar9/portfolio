/**
 * Achievements Section Component
 * Displays professional achievements and impact metrics
 */

const AchievementsSection = ({ className = "" }) => {
  const achievements = [
    {
      title: "API Performance Optimization",
      description: "Enhanced API response times by 40% for the ASC project, improving user experience for 500+ aquaculture farms",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      metric: "40% faster"
    },
    {
      title: "Enterprise Project Contributions",
      description: "Successfully contributed to 3 major enterprise-level applications: ASC, Incident Analysis, and TOQ systems",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      metric: "3 projects"
    },
    {
      title: "Team Leadership & Mentoring",
      description: "Mentored 2 junior developers during their internship transition and led code review sessions",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      metric: "2 mentees"
    },
    {
      title: "Scalable System Architecture",
      description: "Designed and implemented scalable backend systems for e-commerce, aquaculture, and data engineering projects",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      metric: "Multiple domains"
    }
  ];

  return (
    <div className={`${className}`}>
      <div className="mb-12">
        <h2 className="text-text-primary text-3xl md:text-4xl font-bold leading-tight mb-4">
          Professional Achievements
        </h2>
        {/* Orange accent line */}
        <div className="w-16 h-1 bg-accent-500 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="bg-dark-accent border border-gray-600 rounded-lg p-6 hover:bg-dark-secondary transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="text-accent-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-text-primary text-lg font-bold leading-tight">
                    {achievement.title}
                  </h3>
                  <span className="text-accent-500 text-sm font-semibold bg-accent-500/10 px-2 py-1 rounded-full">
                    {achievement.metric}
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
