export const SkillsCard = ({
  items,
}: {
  items: { src: string; title: string; description: string }[];
}) => {
  return items.map((item, i) => (
    <div
      className="rounded-lg bg-neutral-950/90 dark:bg-neutral-950/40 p-6  shadow-2xl transition-all duration-300  lg:hover:scale-125 select-none"
      key={item.title}
    >
      <div className="flex items-center space-x-4 ">
        <img
          src={item.src}
          alt={item.title}
          width={40}
          height={40}
          className="h-10 w-10"
        />
        <h3 className="text-lg font-semibold text-neutral-200">{item.title}</h3>
      </div>
      <p className="mt-2 text-sm text-gray-400">{item.description}</p>
    </div>
  ));
};
