"use client";

import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from './section-heading'
import { experiencesData } from '@/lib/data';
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from '@/context/theme-context';

export default function Experience() {
  const {ref, inView} = useSectionInView("Experience", 0.45);
  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className='scroll-mt-28 mb-28 sm:mb-40 '>
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor="">
            {
                experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement visible={inView}
                            contentStyle={{
                                background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0,0,0,0.05)",
                                textAlign: "center",
                                padding: "1.3rem 2rem"
                            }}
                            contentArrowStyle={{
                                borderRight: theme === "light"
                                ? "0.4rem solid #9ca3af"
                                : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background:  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem"
                            }}
                        >
                            <h3 className='font-semibold capitalize'>{item.title}</h3>
                            <p className='font-normal !mt-0'>{item.location}</p>
                            {"roles" in item ? (
                                <ul className='mt-4 text-left border-l-2 border-gray-300 dark:border-white/20 pl-5 space-y-5'>
                                    {item.roles.map((role, roleIndex) => (
                                        <li key={roleIndex} className='relative'>
                                            <span className={`absolute -left-[1.6rem] top-[0.4rem] h-3 w-3 rounded-full border-2 ${roleIndex === 0 ? 'bg-gray-900 border-gray-900 dark:bg-white dark:border-white' : 'bg-white border-gray-400 dark:bg-gray-900 dark:border-white/40'}`} />
                                            <h4 className='font-semibold !m-0'>{role.title}</h4>
                                            <p className='!m-0 !text-sm !font-normal text-gray-500 dark:text-white/50'>{role.date}</p>
                                            <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{role.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{item.description}</p>
                            )}
                            </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}
