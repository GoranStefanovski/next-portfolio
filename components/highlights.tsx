"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { highlightsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Highlights() {
  const { ref } = useSectionInView("Highlights", 0);

  return (
    <section ref={ref} id="highlights" className="scroll-mt-28 mb-28">
      <SectionHeading>Highlights</SectionHeading>
      <div>
        {highlightsData.map((item, index) => (
          <React.Fragment key={index}>
            <Project {...item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
