import { SkillsCard } from "./skills-card";
import {items} from '@data/constants'

export default function Skills() {
  return (
    <div className="font-monument z-30 h-full mx-10 md:mx-16 flex rounded-xl bg-neutral-100 dark:bg-neutral-300/5 py-5 md:py-16 lg:py-10">
      <div className="container  mx-auto px-4 md:px-6">
        <div className="grid  grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 md:gap-8 lg:mt-14 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
          <SkillsCard items={items} />
        </div>
      </div>
    </div>
  );
}
