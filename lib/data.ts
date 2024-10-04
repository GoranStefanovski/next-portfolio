import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLaravel, FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import starter from "@/public/starter.png";
import dvalBilans from "@/public/dvalbilans.png";
import comfyHug from "@/public/comfyhug.png";
import eventlokale from "@/public/evenloktle.png";
import mousebags from "@/public/mousebags.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  }
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Brainster",
    location: "Skopje, North Macedonia",
    description:
      "Front-End Development Bootcamp",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Intern (Netra)",
    location: "Skopje, North Macedonia",
    description:
      "Layouting changes for company's website",
    icon: React.createElement(FaReact),
    date: "2020",
  },
  {
    title: "Front-End Developer (Gsix)",
    location: "Skopje, North Macedonia",
    description:
      "Responsible for responsive design and populating data.",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "Front-End Developer (Digital Orange)",
    location: "Skopje, North Macedonia",
    description:
      "Development of a restful API for communicating with a partnering web application. This is where i upscaled to full-stack.",
    icon: React.createElement(FaVuejs),
    date: "2021",
  },
  {
    title: "Full-Stack Developer (ESOF Starter)",
    location: "Bitola, North Macedonia",
    description:
      "Maintaining and implementing Front-End designs and PHP API functionalities",
    icon: React.createElement(FaVuejs),
    date: "2021 - 2024",
  },
  {
    title: "Full-Stack Developer (Mobilen Communications Inc)",
    location: "Bitola, North Macedonia",
    description:
      "Maintaining and implementing Front-End designs and PHP API functionalities",
    icon: React.createElement(FaLaravel),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Eventlokale",
    description:
      "Swiss-based location and event management platform that helps companies manage their events.",
    tags: ["Vue", "Vue X", "Nuxt", "Laravel", "Bootstrap", "Docker", "Docker Compose", "SEO"],
    imageUrl: eventlokale,
  },
  {
    title: "Mousebags",
    description:
      "Online shop for creating custom bags.",
    tags: ["Vue", "Vue X", "Laravel", "Bootstrap", "SEO"],
    imageUrl: mousebags,
  },
  {
    title: "Starter Kit",
    description:
      "Custom CMS - Admin Panel in Vue.js framework backed by a Laravel RESTful API.",
    tags: ["Vue", "Vue X", "Laravel", "Bootstrap", "Docker", "Docker Compose", "SEO"],
    imageUrl: starter,
  },
  {
    title: "Dva-L Bilans",
    description:
      "Presentational Wordpress site for local business.",
    tags: ["Wordrpress", "Wordpress Plugins", "SEO"],
    imageUrl: dvalBilans,
  },
  {
    title: "ComfyHug",
    description:
      "Online clothing shop powered by Shopify.",
    tags: ["Shopify"],
    imageUrl: comfyHug,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Vue.js",
  "VueX",
  "Nuxt.js",
  "Node.js",
  "Laravel",
  "PHP",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Wordpress",
  "Shopify",
  "Docker",
  "Docker Compose",
  "MySql",
  "Hosting",
  "Server Maintaining"
] as const;