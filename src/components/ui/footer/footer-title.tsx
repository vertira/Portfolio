

export const FooterTitle = () => {
  const currentYear = new Date().getFullYear();
  const year = currentYear.toString();
  return (
    <div className="flex items-center justify-between">
      <p className="lg:text-[12px] text-[9px] text-neutral-100">
        @<span>{year}</span>
        Portfolio Krystian Grala
        <br />
        Created by:
        <a
          className="rounded-lg px-2  ring-zinc-500 transition duration-300 hover:text-neutral-700 hover:decoration-dashed focus:outline-none focus-visible:ring dark:ring-zinc-200 dark:hover:text-neutral-300"
          href="https://github.com/vertira"
          target="_blank"
        >
          Vertira
        </a>
      </p>
    </div>
  );
};
