import SkillCard from '../components/ui/SkillCard';
import Section from '../components/ui/Section';
import { skillsData } from '../data/skills';

/**
 * Skills page component - Technical skills organized by categories
 * Displays programming languages, frameworks, tools, and databases
 */
const Skills = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <Section
        title="Technical Skills"
        subtitle="I bring ideas to life using a robust tech stack."
      />

      {/* Programming Languages */}
      <Section>
        <h3 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
          Programming Languages
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
          {skillsData.programmingLanguages.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>
      </Section>

      {/* Frameworks & Libraries */}
      <Section>
        <h3 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
          Frameworks &amp; Libraries
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
          {skillsData.frameworksLibraries.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>
      </Section>

      {/* Tools & Technologies */}
      <Section>
        <h3 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
          Tools &amp; Technologies
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
          {skillsData.toolsTechnologies.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>
      </Section>

      {/* Databases */}
      <Section>
        <h3 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">
          Databases
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
          {skillsData.databases.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Skills;
