import { links } from '@/lib/data';
import type { StaticImageData } from 'next/image';

export type SectionName = typeof links[number]["name"];

export type ProjectCardImageLayout = "mockup" | "contained";

export type ProjectCardData = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  link: string;
  alt: string;
  /** Default mockup: wide screenshot hanging off the card. contained: photo fits inside the card. */
  imageLayout?: ProjectCardImageLayout;
};
