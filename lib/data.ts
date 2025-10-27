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
import hotelpelister from "@/public/hotelpelister.png"
import vidmatech from "@/public/vidmatech.png"
import travel2fair from "@/public/travel2fair.png"
import leavesync from "@/public/leavesync.png";

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
      "Worked on layout and design adjustments for the company website. Collaborated with senior developers to implement UI improvements and gain practical experience with version control, responsive styling, and pixel-perfect layouting",
    icon: React.createElement(FaReact),
    date: "2020",
  },
  {
    title: "Front-End Developer (Gsix)",
    location: "Skopje, North Macedonia",
    description:
      "Developed and maintained front-end components using React. Responsible for implementing responsive UIs, integrating APIs, and ensuring design consistency across devices. Gained experience working in Agile environments and collaborating with cross-functional teams",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "Front-End Developer (Digital Orange)",
    location: "Skopje, North Macedonia",
    description:
      "Led front-end developer using Vue.js and Nuxt.js, building modular and scalable components. Developed a RESTful API to facilitate communication between systems, marking the transition into full-stack development. Took initiative in code optimization and improving developer workflows",
    icon: React.createElement(FaVuejs),
    date: "2021",
  },
  {
    title: "Full-Stack Developer (ESOF Starter)",
    location: "Bitola, North Macedonia",
    description:
      "Maintaining front-end designs and PHP API functionalities, ensuring seamless integration between user interfaces and backend systems. Implementing updates, fixing issues, and optimizing performance for a smooth user experience",
    icon: React.createElement(FaVuejs),
    date: "2021 - 2024",
  },
  {
    title: "Full-Stack Engineer (Mobilen Communications Inc)",
    location: "Bitola, North Macedonia",
    description:
      "Designing and extending Laravel-based APIs for internal systems, integrating with third-party services, and optimizing performance. Handling deployments, database management, and process improvements to ensure reliability and scalability.",
    icon: React.createElement(FaLaravel),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "LeaveSync",
    description:
      "Built a modern leave-management platform; implemented calendar scheduling, role-based access, and holiday tracking; deployed with Docker for scalability and performance.",
    tags: ["Nuxt", "Vue", "Laravel", "Docker", "MySql"],
    imageUrl: leavesync,
    link: 'https://leavesync.com/',
    alt: 'LeaveSync'
  },
  {
    title: "VidmaTech",
    description:
      "Built a responsive and user-friendly company website using Next.js and Tailwind CSS; Integrated custom components for seamless UX/UI; Deployed and optimized for performance.",
    tags: ["Next", "Tailwind", "NextJS Sender"],
    imageUrl: vidmatech,
    link: 'https://vidmatech.com/',
    alt: 'Vidmatech'
  },
  {
    title: "Travel2Fair",
    description:
      "Developed and maintained an event management platform with Angular frontend and Laravel backend; Implemented Docker-based development workflow for consistency across environments.",
    tags: ["Angular", "Laravel", "Docker"],
    imageUrl: travel2fair,
    link: 'https://travel2fair.com/',
    alt: 'Travel2Fair'
  },
  {
    title: "Eventlokale",
    description:
      "Delivered a scalable venue request booking system using Nuxt.js and Laravel API; Worked on complex booking logic, caching, and Dockerized deployment.",
    tags: ["Vue", "Nuxt", "Laravel", "Docker"],
    imageUrl: eventlokale,
    link: 'https://eventlokale.ch/',
    alt: 'Eventlokale'
  },
  {
    title: "Hotel Pelister | Spa & Resort",
    description:
      "Designed and developed a luxury hotel website with React and Laravel; Focused on showcasing services/events with modern UI and Tailwind integration.",
    tags: ["React", "Laravel", "Tilwind"],
    imageUrl: hotelpelister,
    link: 'https://hotelpelister.com/',
    alt: 'Hotel Pelister - Spa & Resort'
  },
  {
    title: "Mousebags",
    description:
      "Created a Vue.js and Laravel-based eCommerce platform for custom bag creation; Integrated Bootstrap for quick UI development and responsive design.",
    tags: ["Vue", "Laravel", "Bootstrap"],
    imageUrl: mousebags,
    link: 'https://mousebags.net/',
    alt: 'Mousebags'
  },
  {
    title: "Starter Kit",
    description:
      "Custom CMS - Admin Panel in Vue.js framework backed by a Laravel RESTful API.",
    tags: ["Vue", "Laravel", "Docker"],
    imageUrl: starter,
    link: '#',
    alt: 'Starter Kit'
  },
  {
    title: "ComfyHug",
    description:
      "Customized and optimized Shopify for an online clothing store; Enhanced the storefront and checkout flow for improved user experience.",
    tags: ["Shopify"],
    imageUrl: comfyHug,
    link: 'https://comfyhug.mk/',
    alt: 'ComfyHug'
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
  "Server Maintaining",
  "SEO"
] as const;