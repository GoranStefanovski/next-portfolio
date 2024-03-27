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
        After finishing high school, I decided to pursue my
        passion for programming and I joined a coding bootcamp to study{" "}
        <span className="font-medium">font-end development</span>.{" "}
        It was an exciting journey where I learned HTML, CSS and JavaScript which paved the way to creating exciting user interfaces.
      </p>
      <br/>

      <p className="mb-3">
        I&apos;m passionate about creating <span className="font-medium">user-friendly</span> interfaces. 
        With my expertise{" "}
        I carefully design <span className="font-medium">every detail</span> to ensure a visually stunning experience on all devices.
        In addition to front-end design, I specialize in building sustainable backend solutions.
        From database management to API development - I ensure <span className="font-medium">excellent integration</span> with the user interface 
        to provide a great user experience.{" "}
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