import React from "react";
import { TextParallaxContent } from "../ui/container-card/text-parallax-card";
import { Divider } from "../ui/container-card/divider-lamp";
import { StickyCard } from "../ui/container-card/sticky-card";
import { CardGradContainer } from "../ui/work-card-gradient/CardGradContainer";

export const WorkSection = () => {
  return (
    <TextParallaxContent sectionId="work">
      <StickyCard>
        <Divider title="WORK" />
        <CardGradContainer />
      </StickyCard>
    </TextParallaxContent>
  );
};
