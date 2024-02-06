"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
    const {ref} = useSectionInView("Contact", 0.75);

    return (
        <motion.section
            ref={ref}
        id='contact'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
            className='mb-20 sm:mb-28 w-[min(100%,38rem)]'>
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-700 -mt-5 text-center'>Please contact me directly at <a className='underline' href="mailto:tevidma@gmail.com">tevidma@gmail.com</a> or trough this form.</p>
            <form className='mt-10 flex flex-col'>
                <input className="h-14 rounded-lg p-4 borderBlack" type='email' placeholder='E-mail'/>
                <textarea className='h-52 my-3 rounded-lg p-4 borderBlack' placeholder='Your message'/>
                <button className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950' type='submit'>
                    Submit 
                    <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>{" "}
                </button>
            </form>
        </motion.section>
    )
}
