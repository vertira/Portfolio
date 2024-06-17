import { HeroBgText } from "@/components/ui/hero/bg-hero-text";
import { bgWords } from "@/data_files/constants";

export const BgHeroContainer = () => {
  return (
    <div className="flex h-screen flex-col justify-between ">
      <HeroBgText items={bgWords} direction="right" speed="slow" />
      <HeroBgText items={bgWords.toReversed()} direction="left" speed="slow" />
    </div>
  );
};
