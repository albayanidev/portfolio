import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Json Tree",
    href: "/projects",
    tags: ["Nuxtjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "Wizzair",
    href: "/projects",
    tags: [
      "Vuejs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "Vue-router",
      "Vuex",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/wizzair.png",
      DARK: "/images/projects/wizzair.png",
    },
  },
  {
    index: 2,
    title: "Flightradar",
    href: "/projects",
    tags: ["Laravel", "Reactjs", "MySQL"],
    image: {
      LIGHT: "/images/projects/img_20241204.png",
      DARK: "/images/projects/img_20241204.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Json tree",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/jsontreeDark.webp",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nuxtjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    sourceCodeHref: "https://github.com/joelgenaro/jsontree",
    liveWebsiteHref: "https://jsontree.vercel.app",
  },
  {
    name: "Wizzair",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/wizzair.png",
      "/images/projects/wizzair.png",
      "/images/projects/wizzair.png",
      "/images/projects/wizzair.png",
      "/images/projects/wizzair.png",
    ],
    description:
      "Developed an airline booking website using Vue.js, TypeScript, and Tailwind CSS. ",
    sourceCodeHref: "https://github.com/joelgenaro/ManyGames",
    liveWebsiteHref: "https://www.wizzair.com",
  },
  {
    name: "Covid Tracker",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/covidTracker.webp",
      "/images/projects/covidTrackerMap.webp",
      "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/joelgenaro/CovidTracker",
    liveWebsiteHref: "https://joelgenaro.github.io/CovidTracker",
  },
  {
    name: "Dormeo",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/shopify.jpg"],
    description:
      "I developed a e-commerce website using Symfony/MySQL, leveraging Next.js, I converted Figma designs into reusable React components, ensuring pixel-perfect implementation",
    sourceCodeHref: "https://github.com/joelgenaro/dormeo",
    liveWebsiteHref: "https://www.dormeo.co.uk/",
  },
  {
    name: "Stock predictor",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/img_20241202.png",
      "/images/projects/img_20241202(4).png",
      "/images/projects/img_20241202(3).png",
      "/images/projects/img_20241202(1).png",
    ],
    description:
      "In this stock market platform as a backend developer, I utilized Laravel, and PostgreSQL",
    sourceCodeHref: "https://github.com/joelgenaro/Stock-Market-Predictor",
    liveWebsiteHref: "https://trendlyne.com/",
  },
  {
    name: "Flightradar",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: ["/images/projects/img_20241204.png"],
    description:
      "I utilized React/Laravel, and for the mapping component, I integrated web map libraries such as Leaflet and OpenLayers, enabling the display of detailed.",
    sourceCodeHref: "https://github.com/joelgenaro/FlightTradar",
    liveWebsiteHref: "https://www.flightradar24.com",
  },
  {
    name: "FitBark GPS for Dogs & Cats",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/dog.jpg"],
    description:
      "I created a GPS/Health mobile application with React Native that allowed users to track dog activities, manage profiles, and connect with local pet services. The backend was built with PHP, and AWS.",
    sourceCodeHref: "https://github.com/joelgenaro/fitbark",
    liveWebsiteHref:
      "https://play.google.com/store/apps/details?id=fitbark.com.android",
  },
  {
    name: "ManikirShop",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: ["/images/projects/reactnative.jpg"],
    description:
      "I developed backend APIs for an e-commerce app using Laravel and MySQL.",
    sourceCodeHref: "https://github.com/joelgenaro/ManikirShop",
    liveWebsiteHref:
      "https://play.google.com/store/apps/details?id=com.manikirshop",
  },
];
