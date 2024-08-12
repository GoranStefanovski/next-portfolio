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
        After completing high school, I decided to follow my passion for programming by enrolling in a coding bootcamp focused on{" "}
        <span className="font-medium">front-end development</span>.{" "}
        During this time, I gained expertise in HTML, CSS, and JavaScript, laying a solid foundation for creating engaging user interfaces.
      </p>
      <br />
    
      <p className="mb-3">
        My passion lies in crafting <span className="font-medium">intuitive and visually appealing</span> designs, 
        where every detail is meticulously considered to ensure a seamless experience across all devices. 
        In addition to front-end design, I specialize in building robust backend solutions, including database management and API development, 
        to achieve <span className="font-medium">smooth integration</span> with the user interface for an optimal user experience.{" "}
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