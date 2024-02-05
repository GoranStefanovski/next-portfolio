import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Brainster",
    location: "Skopje, North Macedonia",
    description:
      "Front-End Development Course",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer (Gsix)",
    location: "Skopje, North Macedonia",
    description:
      "Developer for online job platform application.",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "Front-End Developer (Digital Orange)",
    location: "Skopje, North Macedonia",
    description:
      "Developer for online booking system - passing data and layout integration. I also upskilled to full-stack.",
    icon: React.createElement(FaReact),
    date: "2021",
  },
  {
    title: "Full-Stack Developer (ESOF Starter)",
    location: "Bitola, North Macedonia",
    description:
      "Developer for layout integration and data passing.",
    icon: React.createElement(FaReact),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "Starter Kit",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Vue", "Vue X", "Laravel", "Bootstrap", "Docker", "Docker Compose", "SEO"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Dva-L Bilans",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Wordrpress", "Wordpress Plugins", "SEO"],
    imageUrl: rmtdevImg,
  },
  {
    title: "ComfyHug",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Shopify"],
    imageUrl: wordanalyticsImg,
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
  "Nuxt.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Wordpress",
  "Shopify",
  "Docker",
  "Docker Compose",
  "MySql",
] as const;