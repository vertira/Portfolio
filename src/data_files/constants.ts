import ogImageSrc from "@images/portfolio.png"

export const SITE = {
  title: "Portfolio Krystian Grala | DEV  ",
  tagline: "Portfolio front-end developer",
  description:
    "Portfolio of Krystian Grala, a front-end developer. Explore my projects, skills, and contact me to discuss collaboration opportunities.",
  description_short: "Portfolio of Krystian Grala, a front-end developer.",
  url: "https://grala-portfolio.vercel.app",
  author: "Krystian Grala",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `Portfolio Krystian Grala | Front-end developer`,
  description:
    "Portfolio of Krystian Grala, a front-end developer. Explore my projects, skills, and contact me to discuss collaboration opportunities.",
  image: ogImageSrc,
};
export const items = [
  {
    description:
      "Proficient in building modern, responsive, and scalable web applications using React and its ecosystem.",
    src: "/react.svg",
    title: "React",
  },
  {
    description:
      "Experienced in using TypeScript for building scalable and maintainable applications.",
    src: "/ts.svg",
    title: "TypeScript",
  },
  {
    description:
      "Experienced in building server-rendered React applications with Next.js, leveraging its features like file-based routing and server-side rendering.",
    src: "/next.svg",
    title: "Next.js",
  },
  {
    description:
      "Proficient in using Tailwind CSS, a utility-first CSS framework, to build responsive and customizable user interfaces.",
    src: "/tailwind.svg",
    title: "Tailwind",
  },
  {
    description:
      "Experienced in building static site generators with Astro, a modern and performance-focused framework.",
    src: "/astro.svg",
    title: "Astro",
  },
  {
    description:
      "Experienced in building reusable and accessible UI components using libraries like Radix UI and Headless UI.",
    src: "/mui.svg",
    title: "UI Components",
  },
  {
    description:
      "Experienced in building cross-platform mobile applications using React Native, a framework for building native mobile apps with React.",
    src: "/react.svg",
    title: "React Native",
  },
  {
    description:
      "Proficient in modern JavaScript, including ES6+ features and popular frameworks like React and Node.js.",
    src: "/js.svg",
    title: "JavaScript",
  },
];
export const bgWords = [
  {
    name: "REACT",
  },
  {
    name: "DEVELOPER",
  },
  {
    name: "SKILLS",
  },
  {
    name: "PORTFOLIO",
  },
  {
    name: "WEB",
  },
];

export const navigation = [
  {
    name: "home",
    mobile: { positionLeft: "-left-20", width: 100 },
    desktop: { positionLeft: "-left-6", width: 65 },
  },
  {
    name: "skills",
    mobile: { positionLeft: "-left-14", width: 85 },
    desktop: { positionLeft: "-left-8", width: 70 },
  },
  {
    name: "work",
    mobile: { positionLeft: "-left-16", width: 92 },
    desktop: { positionLeft: "-left-8", width: 70 },
  },
  {
    name: "contact",
    mobile: { positionLeft: "-left-32", width: 135 },
    desktop: { positionLeft: "-left-[4.5rem]", width: 96 },
  },
];

export const grad1 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};
export const grad2 = {
  initial: {
    x1: "40%",
    x2: "50%",
    y1: "160%",
    y2: "180%",
  },
  animate: {
    x1: "0%",
    x2: "10%",
    y1: "-40%",
    y2: "-20%",
  },
};

export const policy = [
  {
    title: "1. General Information",
    description:
      "This privacy policy outlines the principles regarding the processing of personal data of users who visit my website grala-portfolio.",
  },
  {
    title: "2. No Collection of Personal Data",
    description:
      "My website does not collect any personal data from users. I do not gather information such as names, email addresses, phone numbers, or any other identifying data.",
  },
  {
    title: "3. No Use of Cookies",
    description:
      "My website does not use cookies to track user activity or to collect any data.",
  },
  {
    title: "4. LocalStorage",
    description:
      "I use localStorage in the user's browser solely to store theme preferences (dark/light mode). LocalStorage is a mechanism for storing data in the user's browser and is not shared with any third parties.",
  },
  { title: "5. Changes to the Privacy Policy", description: "I reserve the right to make changes to this privacy policy. Any changes will be posted on this page." },
  { title: "6. Contact", description: "If you have any questions regarding this privacy policy, please contact me at krystian-grala97@gmail.com" },
];
