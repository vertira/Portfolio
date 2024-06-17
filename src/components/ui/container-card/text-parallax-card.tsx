import { type ReactNode } from "react";

export const TextParallaxContent = ({
  children,
  sectionId,
}: {
  children: ReactNode;
  sectionId: string;
}) => {
  return (
    <section className={`relative h-full`} id={sectionId}>
      {children}
    </section>
  );
};
