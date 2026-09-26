"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My journey into development started with a passion for building things and understanding how technology works. I began with front-end development, learning the fundamentals of HTML, CSS, and JavaScript, and gradually expanded into the backend and the wider engineering ecosystem.
      </p>
      <p className="mb-3">
        Today, I enjoy working on the bigger picture of a product — not just how it looks, but how it works, scales, and fits together. I focus on building clean, intuitive interfaces backed by reliable APIs and well-structured systems, while keeping performance, usability, and maintainability in mind. Over the years, I&apos;ve worked on everything from public-facing websites and mobile applications to complex business platforms and internal systems. I&apos;ve also had the opportunity to lead teams, work directly with clients, and take ownership of projects from idea and architecture through development and delivery.
      </p>
    </motion.section>

    // I'm passionate about creating user-friendly interfaces and powerful back-end solutions. With my expertise in HTML5, CSS3, JavaScript, 
    // and database architecture, I meticulously craft every detail to ensure visually stunning experiences on all devices. 
    // My dedication to engineering efficient systems drives the heart of web applications, making them both functional and delightful.

// BR

    // In addition to front-end design, I specialize in building sustainable backend solutions.
    //  With expertise in backend technologies such as Laravel PHP, I ensure seamless integration with the user interface to
    //  deliver a seamless user experience. From database management to API development,
    //  I am dedicated to building powerful systems that support the core functionality of web applications..
  );
}