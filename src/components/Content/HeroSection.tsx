import { StickyCard } from "../ui/container-card/sticky-card";
import { TextParallaxContent } from "../ui/container-card/text-parallax-card";
import { BgHeroContainer } from "../ui/hero/bg-hero-container";
import { Hero } from "../ui/hero/hero-container";

export const HeroSection = () => {
  return (
    <TextParallaxContent sectionId="home">
      <StickyCard>
        <BgHeroContainer />
      </StickyCard>
      <Hero />
    </TextParallaxContent>
  );
};
