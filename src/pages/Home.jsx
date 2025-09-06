import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { personalInfo } from '../data/experience';
import { skillsData } from '../data/skills';
import { DecorativeElements, FloatingElements } from '../components/ui/GeometricElements';
import ContactSection from '../components/ui/ContactSection';
import AchievementsSection from '../components/ui/AchievementsSection';

/**
 * Home page component - Landing page with hero section
 * Features profile image, introduction, and call-to-action buttons
 * Redesigned to match the reference dark theme design
 */
const Home = () => {
  return (
    <div className="relative min-h-screen py-8">
      {/* Floating decorative elements */}
      <FloatingElements />

      <div className="flex flex-col gap-8 p-4 md:gap-12 lg:flex-row lg:items-center lg:justify-between max-w-6xl mx-auto">
        {/* Hero Content - Left Side */}
        <DecorativeElements className="flex flex-col gap-6 md:gap-8 lg:flex-1 lg:pr-8">
          {/* Greeting */}
          <div className="flex flex-col gap-2">
            <h1 className="hero-greeting">
              Hello<span className="text-accent-500">.</span>
            </h1>
            <h2 className="hero-name">
              I'm Sumit
            </h2>
            <h3 className="hero-title">
              Software Engineer
            </h3>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/projects">
              <Button
                variant="primary"
                size="lg"
                className="md:h-12 md:px-6 md:text-base"
              >
                View My Projects
              </Button>
            </Link>
            <Link to="/resume">
              <Button
                variant="secondary"
                size="lg"
                className="md:h-12 md:px-6 md:text-base"
              >
                My resume
              </Button>
            </Link>
          </div>
        </DecorativeElements>

        {/* Profile Image - Right Side */}
        <div className="flex justify-center lg:flex-1 lg:justify-end">
          <div className="profile-image-container">
            {/* Orange accent circle background */}
            <div className="profile-image-accent"></div>
            {/* Profile image */}
            <img
              src={personalInfo.profileImage}
              alt="Sumit Kumar Yadav's profile photo"
              className="profile-image w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            />
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mt-16 md:mt-24">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 px-4">
          {/* Combine all skills from different categories */}
          {[
            ...skillsData.programmingLanguages,
            ...skillsData.frameworksLibraries,
            ...skillsData.toolsTechnologies,
            ...skillsData.databases
          ].map((skill, index) => (
            <div
              key={skill.name}
              className="flex items-center justify-center text-text-muted hover:text-text-primary transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-sm md:text-base font-medium tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* About Me Section - Matching Reference Design */}
      <div className="mt-24 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto px-4">

          {/* Left Column - Core Competencies */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="relative">
              {/* Orange accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-500 rounded-full"></div>

              {/* Core Competencies list */}
              <div className="pl-8 space-y-8">
                {/* Full-Stack Development */}
                <div className="flex items-start gap-4 relative">
                  <div className="absolute -left-8 top-3 w-3 h-3 bg-accent-500 rounded-full"></div>
                  <div className="text-text-primary flex-shrink-0 mt-1">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-text-primary text-lg font-bold leading-tight mb-1">
                      Full-Stack Development
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      MERN stack applications with scalable architecture
                    </p>
                  </div>
                </div>

                {/* API Design & Development */}
                <div className="flex items-start gap-4 relative">
                  <div className="absolute -left-8 top-3 w-3 h-3 bg-accent-500 rounded-full"></div>
                  <div className="text-text-primary flex-shrink-0 mt-1">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="16,6 12,2 8,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="2" x2="12" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-text-primary text-lg font-bold leading-tight mb-1">
                      API Design & Development
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      RESTful APIs and GraphQL implementations
                    </p>
                  </div>
                </div>

                {/* Database Architecture */}
                <div className="flex items-start gap-4 relative">
                  <div className="absolute -left-8 top-3 w-3 h-3 bg-accent-500 rounded-full"></div>
                  <div className="text-text-primary flex-shrink-0 mt-1">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                      <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-text-primary text-lg font-bold leading-tight mb-1">
                      Database Architecture
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      MongoDB, MySQL, and Snowflake data solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - About Me */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            {/* About Me Header */}
            <div className="text-center lg:text-left">
              <h2 className="text-text-primary text-4xl md:text-5xl font-bold leading-tight mb-6">
                About me
              </h2>
              <p className="text-text-primary text-base leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-24 md:mt-32 max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-text-primary text-4xl md:text-5xl font-bold leading-tight mb-4">
            Projects
          </h2>
          {/* Orange accent line */}
          <div className="w-16 h-1 bg-accent-500 rounded-full"></div>
        </div>

        <div className="text-center">
          <p className="text-text-muted text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Explore my portfolio of web applications, mobile apps, and software solutions.
            Each project represents a unique challenge and innovative approach to problem-solving.
          </p>
          <Link to="/projects">
            <Button variant="primary" size="lg" className="md:h-12 md:px-6 md:text-base">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mt-24 md:mt-32 max-w-6xl mx-auto px-4">
        <AchievementsSection />
      </div>

      {/* Contact Section */}
      <div className="mt-24 md:mt-32 max-w-6xl mx-auto px-4">
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
