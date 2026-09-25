import { createClient } from '@sanity/client';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'pbnloqtf';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export const sanity = createClient({ projectId, dataset, apiVersion: '2026-03-01', useCdn: true });

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
  body?: PortableBlock[];
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

export const getSettings = () => sanity.fetch<SiteSettings | null>(
  `*[_type == "siteSettings"]|order(_updatedAt desc)[0]{tagline,"heroImage":heroImage.asset->url,"heroAlt":heroImage.alt,philosophy,"aboutImage":aboutImage.asset->url,"aboutAlt":aboutImage.alt,instagram,email,whatsapp,visitNote}`,
);

export const getServices = () => sanity.fetch<Service[]>(
  `*[_type == "service"]|order(order asc,title asc){_id,title,body,"image":image.asset->url,"imageAlt":image.alt}`,
);

export const getProjects = () => sanity.fetch<Project[]>(
  `*[_type == "project" && defined(slug.current) && defined(category)]|order(order asc,title asc){_id,title,"slug":slug.current,category,loadingColor,"cover":cover.asset->url,"coverAlt":cover.alt,comingSoon,year,location,area,scope,description,"gallery":gallery[]{"url":asset->url,alt}}`,
);

export const getInstagramPosts = () => sanity.fetch<InstagramPost[]>(
  `*[_type == "instagramPost" && defined(image.asset) && defined(url)]|order(publishedAt desc)[0...12]{_id,"image":image.asset->url,"alt":image.alt,url}`,
);
