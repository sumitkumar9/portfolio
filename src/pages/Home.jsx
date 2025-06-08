import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { personalInfo } from '../data/experience';

/**
 * Home page component - Landing page with hero section
 * Features profile image, introduction, and call-to-action buttons
 */
const Home = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-6 p-4 md:gap-8 lg:flex-row">
        {/* Profile Image */}
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl md:h-auto md:min-w-[400px] lg:w-full"
          style={{
            backgroundImage: `url("${personalInfo.profileImage}")`,
          }}
          role="img"
          aria-label="Sophia's profile photo"
        />

        {/* Hero Content */}
        <div className="flex flex-col gap-6 md:min-w-[400px] md:gap-8 lg:justify-center items-center">
          {/* Main Heading and Description */}
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[#121416] tracking-tight text-[32px] font-bold leading-tight md:text-5xl md:font-black md:leading-tight md:tracking-[-0.033em]">
              {personalInfo.name}
            </h1>
            <h2 className="text-[#6a7681] text-sm font-normal leading-normal md:text-base">
              {personalInfo.title}
            </h2>
          </div>

          {/* Tagline */}
          <div className="flex flex-col gap-2 text-center">
            <p className="text-[#121416] text-sm font-normal leading-normal md:text-base">
              Building scalable and efficient applications with a passion for innovative solutions.
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex-wrap gap-3 flex justify-center">
            <Link to="/projects">
              <Button
                variant="primary"
                size="lg"
                className="md:h-12 md:px-5 md:text-base"
              >
                View My Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="md:h-12 md:px-5 md:text-base"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
