/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import { VitePwaIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PHPSvg from "@/public/icons/php.svg";

// Libraries
import vueSvg from "@/public/icons/vue.svg";
import nuxtSvg from "@/public/icons/nuxt.svg";
import bootstrapSvg from "@/public/icons/bootstrap.svg";
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import AngularSvg from "@/public/icons/angular.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ViteSvg from "@/public/icons/vite.svg";
import IonicSvg from "@/public/icons/ionic.svg";
import ReactnativeSvg from "@/public/icons/reactjs.svg";

// Backend
import symfonySvg from "@/public/icons/symfony.svg";
import codeigniterSvg from "@/public/icons/codeigniter.svg";
import wordpressSvg from "@/public/icons/wordpress.svg";
import livewireSvg from "@/public/icons/livewire.svg";
import LaravelSvg from "@/public/icons/laravel.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import eloquentSvg from "@/public/icons/eloquent.svg";
import drizzleSvg from "@/public/icons/drizzle.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";
import MySQLSvg from "@/public/icons/mysql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import AzureSvg from "@/public/icons/azure.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "SASS",
        icon: SassSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "PHP",
        icon: PHPSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Vuejs",
        icon: vueSvg,
      },
      {
        name: "Nuxtjs",
        icon: nuxtSvg,
      },
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Angular",
        icon: AngularSvg,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "Bootstrap",
        icon: bootstrapSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "Vite PWA",
        icon: VitePwaIcon,
      },
      {
        name: "Ionic",
        icon: IonicSvg,
      },
      {
        name: "React Native",
        icon: ReactnativeSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Laravel",
        icon: LaravelSvg,
      },
      {
        name: "Livewire",
        icon: livewireSvg,
      },
      {
        name: "Symfony",
        icon: symfonySvg,
      },
      {
        name: "Codeigniter",
        icon: codeigniterSvg,
      },
      {
        name: "Wordpress",
        icon: wordpressSvg,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MySQL",
        icon: MySQLSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Eloquent ORM",
        icon: eloquentSvg,
      },
      {
        name: "Drizzle",
        icon: drizzleSvg,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "AZURE",
        icon: AzureSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
