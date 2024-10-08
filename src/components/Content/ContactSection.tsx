import { motion } from "framer-motion";
import { ContactSvg } from "../ui/contact/contact-svg";
import { Spotlight } from "../ui/contact/contact-bg";
import { TextParallaxContent } from "../ui/container-card/text-parallax-card";
import { StickyCard } from "../ui/container-card/sticky-card";

export const ContactSection = () => {
  return (
    <TextParallaxContent sectionId="contact">
      <StickyCard>
        <motion.div
          className="relative flex h-screen xl:h-[110vh] flex-col"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <Spotlight fill="white" />
          <h2 className="mt-20 flex justify-center font-monument text-5xl  text-neutral-800 dark:text-neutral-100 xl:mt-10 xl:text-[12rem]">
            CONTACT
          </h2>
          <ContactSvg />
        </motion.div>
      </StickyCard>
    </TextParallaxContent>
  );
};
