import { createClient } from '@sanity/client';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export const hasSanity = Boolean(projectId && projectId !== 'your-project-id');
export const sanity = hasSanity
  ? createClient({ projectId, dataset, apiVersion: '2026-03-01', useCdn: true })
  : null;

export interface PortableBlock {
  _type: string;
  _key: string;
  children?: { _type: string; _key: string; text?: string; marks?: string[] }[];
  markDefs?: { _key: string; _type: string; href?: string }[];
}

export interface SiteSettings {
  tagline?: string;
  heroImage?: string;
  heroAlt?: string;
  philosophy?: PortableBlock[];
  aboutImage?: string;
  aboutAlt?: string;
  instagram?: string;
  email?: string;
  whatsapp?: { name?: string; number?: string }[];
  visitNote?: string;
}

export interface Service {
  _id: string;
  title: string;
  body?: string;
  image?: string;
  imageAlt?: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  category: 'residential' | 'commercial';
  loadingColor?: 'lilac' | 'ivory' | 'butter' | 'blush' | 'taupe';
  cover?: string;
  coverAlt?: string;
  comingSoon?: boolean;
  year?: number;
  location?: string;
  area?: string;
  scope?: string;
  description?: PortableBlock[];
  gallery?: { url?: string; alt?: string }[];
}

export interface InstagramPost {
  _id: string;
  image?: string;
  alt?: string;
  url?: string;
}

async function fetchContent<T>(query: string, fallback: T, params?: Record<string, string>): Promise<T> {
  if (!sanity) return fallback;
  return sanity.fetch<T>(query, params ?? {});
}

export const getSettings = () => fetchContent<SiteSettings | null>(
  `*[_type == "siteSettings"][0]{tagline,"heroImage":heroImage.asset->url,"heroAlt":heroImage.alt,philosophy,"aboutImage":aboutImage.asset->url,"aboutAlt":aboutImage.alt,instagram,email,whatsapp,visitNote}`,
  null,
);

export const getServices = () => fetchContent<Service[]>(
  `*[_type == "service"]|order(order asc,title asc){_id,title,body,"image":image.asset->url,"imageAlt":image.alt}`,
  [],
);

export const getProjects = () => fetchContent<Project[]>(
  `*[_type == "project"]|order(order asc,title asc){_id,title,"slug":slug.current,category,loadingColor,"cover":cover.asset->url,"coverAlt":cover.alt,comingSoon,year,location,area,scope,description,"gallery":gallery[]{"url":asset->url,alt}}`,
  [],
);

export const getInstagramPosts = () => fetchContent<InstagramPost[]>(
  `*[_type == "instagramPost"]|order(publishedAt desc)[0...12]{_id,"image":image.asset->url,"alt":image.alt,url}`,
  [],
);
