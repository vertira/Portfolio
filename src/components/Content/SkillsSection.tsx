import { Divider } from "../ui/container-card/divider-lamp";
import { StickyCard } from "../ui/container-card/sticky-card";
import { TextParallaxContent } from "../ui/container-card/text-parallax-card";
import Skills from "../ui/skills-card/skills-card-container";

export const SkillsSection = () => {
  return (
    <TextParallaxContent sectionId="skills">
      <StickyCard>
        <Divider title="SKILLS" />
        <Skills />
      </StickyCard>
    </TextParallaxContent>
  );
};
