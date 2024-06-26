import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '@/context/active-section-context'
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold: number) {
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    const {ref, inView} = useInView({
        threshold,
    });

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
        inView
    }
}