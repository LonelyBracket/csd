/**
 * Data Abstraction Layer
 *
 * Provides a unified API for fetching content from Strapi CMS
 * with automatic fallback to mock data if the API is unavailable.
 */

import {
  mockEpisodes,
  mockArticles,
  mockGuests,
  mockTopics
} from './mockData';

// ============================================================================
// Type Definitions
// ============================================================================

export interface Guest {
  name: string;
  photo: string;
  title: string;
  company: string;
}

export interface Episode {
  slug: string;
  title: string;
  description: string;
  guest: Guest;
  topics: string[];
  duration: string;
  date: string;
  plays: number;
  episodeNumber?: number;
}

export interface Author {
  name: string;
  photo?: string;
  title?: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  topic: string;
  readTime: string;
  date: string;
  image?: string;
  author?: Author;
}

export interface GuestProfile {
  slug: string;
  name: string;
  title: string;
  company: string;
  photo: string;
  bio: string;
  episodeCount: number;
  topics: string[];
  social?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface Topic {
  slug: string;
  name: string;
  icon?: string;
  count?: {
    episodes: number;
    articles: number;
  };
}

// ============================================================================
// Configuration
// ============================================================================

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const API_BASE = `${STRAPI_URL}/api`;

// Feature flag to enable/disable Strapi API
const USE_STRAPI = process.env.NEXT_PUBLIC_USE_STRAPI === 'true';

// ============================================================================
// Strapi Response Types
// ============================================================================

interface StrapiImage {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText?: string;
      width?: number;
      height?: number;
    };
  } | null;
}

interface StrapiResponse<T> {
  data: {
    id: number;
    attributes: T;
  }[];
  meta?: {
    pagination?: {
      total: number;
      page: number;
      pageSize: number;
      pageCount: number;
    };
  };
}

interface StrapiSingleResponse<T> {
  data: {
    id: number;
    attributes: T;
  } | null;
}

interface StrapiEpisode {
  slug: string;
  title: string;
  description: string;
  date: string;
  duration: string; // e.g., "45:30"
  plays?: number;
  episodeNumber?: number;
  featured?: boolean;
  audio?: StrapiImage;
  cover?: StrapiImage;
  guest?: {
    data: {
      id: number;
      attributes: StrapiGuest;
    } | null;
  };
  topics?: {
    data: Array<{
      id: number;
      attributes: StrapiTopic;
    }>;
  };
}

interface StrapiArticle {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  publishedAt: string;
  readingTime?: number; // in minutes
  coverImage?: StrapiImage;
  author?: {
    data: {
      id: number;
      attributes: {
        name: string;
        avatar?: StrapiImage;
        title?: string;
      };
    } | null;
  };
  topics?: {
    data: Array<{
      id: number;
      attributes: StrapiTopic;
    }>;
  };
}

interface StrapiGuest {
  slug: string;
  name: string;
  title: string;
  company: string;
  bio?: string;
  photo?: StrapiImage;
  twitter?: string;
  linkedin?: string;
  website?: string;
  episodeCount?: number;
  topics?: {
    data: Array<{
      id: number;
      attributes: StrapiTopic;
    }>;
  };
  episodes?: {
    data: Array<{
      id: number;
      attributes: StrapiEpisode;
    }>;
  };
}

interface StrapiTopic {
  slug: string;
  name: string;
  description?: string;
  icon?: string;
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Fetch data from Strapi API with error handling
 */
async function fetchFromStrapi<T>(endpoint: string): Promise<T | null> {
  if (!USE_STRAPI) {
    return null;
  }

  try {
    const url = `${API_BASE}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      console.warn(`Strapi API error (${response.status}): ${endpoint}`);
      return null;
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.warn(`Failed to fetch from Strapi: ${endpoint}`, error);
    return null;
  }
}

/**
 * Transform Strapi image to URL string
 */
function transformImage(image?: StrapiImage): string | undefined {
  if (!image?.data) return undefined;
  const url = image.data.attributes.url;
  // Handle relative URLs from Strapi
  return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
}

/**
 * Transform Strapi episode to frontend format
 */
function transformEpisode(strapiEpisode: StrapiEpisode): Episode {
  const guest = strapiEpisode.guest?.data?.attributes;
  const topics = strapiEpisode.topics?.data?.map(t => t.attributes.name) || [];

  return {
    slug: strapiEpisode.slug,
    title: strapiEpisode.title,
    description: strapiEpisode.description,
    guest: {
      name: guest?.name || 'Unknown Guest',
      photo: transformImage(guest?.photo) || '',
      title: guest?.title || '',
      company: guest?.company || '',
    },
    topics,
    duration: strapiEpisode.duration || '0:00',
    date: strapiEpisode.date ? formatDate(strapiEpisode.date) : '',
    plays: strapiEpisode.plays || 0,
    episodeNumber: strapiEpisode.episodeNumber,
  };
}

/**
 * Transform Strapi article to frontend format
 */
function transformArticle(strapiArticle: StrapiArticle): Article {
  const author = strapiArticle.author?.data?.attributes;
  const topic = strapiArticle.topics?.data?.[0]?.attributes.name || 'General';

  return {
    slug: strapiArticle.slug,
    title: strapiArticle.title,
    description: strapiArticle.excerpt,
    topic,
    readTime: strapiArticle.readingTime
      ? `${strapiArticle.readingTime} min read`
      : '5 min read',
    date: formatDate(strapiArticle.publishedAt),
    image: transformImage(strapiArticle.coverImage),
    author: author ? {
      name: author.name,
      photo: transformImage(author.avatar),
      title: author.title,
    } : undefined,
  };
}

/**
 * Transform Strapi guest to frontend format
 */
function transformGuest(strapiGuest: StrapiGuest): GuestProfile {
  const episodeCount = strapiGuest.episodeCount || strapiGuest.episodes?.data?.length || 0;

  // Get topics directly from guest or extract from episodes
  const topicsSet = new Set<string>();
  strapiGuest.topics?.data?.forEach(topic => {
    topicsSet.add(topic.attributes.name);
  });
  // Fallback: extract from episodes if no direct topics
  if (topicsSet.size === 0) {
    strapiGuest.episodes?.data?.forEach(episode => {
      episode.attributes.topics?.data?.forEach(topic => {
        topicsSet.add(topic.attributes.name);
      });
    });
  }

  return {
    slug: strapiGuest.slug,
    name: strapiGuest.name,
    title: strapiGuest.title,
    company: strapiGuest.company,
    photo: transformImage(strapiGuest.photo) || '',
    bio: strapiGuest.bio || '',
    episodeCount,
    topics: Array.from(topicsSet),
    social: {
      twitter: strapiGuest.twitter,
      linkedin: strapiGuest.linkedin,
      website: strapiGuest.website,
    },
  };
}

/**
 * Transform Strapi topic to frontend format
 */
function transformTopic(strapiTopic: StrapiTopic, episodeCount = 0, articleCount = 0): Topic {
  return {
    slug: strapiTopic.slug,
    name: strapiTopic.name,
    icon: strapiTopic.icon,
    count: {
      episodes: episodeCount,
      articles: articleCount,
    },
  };
}

/**
 * Format ISO date to friendly format (e.g., "Nov 20, 2024")
 */
function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

// ============================================================================
// API Functions - Episodes
// ============================================================================

/**
 * Get all published episodes
 */
export async function getEpisodes(): Promise<Episode[]> {
  const strapiData = await fetchFromStrapi<StrapiResponse<StrapiEpisode>>(
    '/episodes?populate=guest.photo,topics,cover&sort=date:desc'
  );

  if (strapiData?.data) {
    return strapiData.data.map(item => transformEpisode(item.attributes));
  }

  // Fallback to mock data
  return mockEpisodes;
}

/**
 * Get a single episode by slug
 */
export async function getEpisodeBySlug(slug: string): Promise<Episode | null> {
  const strapiData = await fetchFromStrapi<StrapiResponse<StrapiEpisode>>(
    `/episodes?filters[slug][$eq]=${slug}&populate=guest.photo,topics,cover,audio`
  );

  if (strapiData?.data?.[0]) {
    return transformEpisode(strapiData.data[0].attributes);
  }

  // Fallback to mock data
  return mockEpisodes.find(e => e.slug === slug) || null;
}

/**
 * Get the featured episode (most recent)
 */
export async function getFeaturedEpisode(): Promise<Episode | null> {
  const strapiData = await fetchFromStrapi<StrapiResponse<StrapiEpisode>>(
    '/episodes?populate=guest.photo,topics,cover&filters[featured][$eq]=true&sort=date:desc&pagination[limit]=1'
  );

  if (strapiData?.data?.[0]) {
    return transformEpisode(strapiData.data[0].attributes);
  }

  // Fallback to mock data
  return mockEpisodes[0] || null;
}

/**
 * Get episodes related to a topic
 */
export async function getRelatedEpisodes(topicSlug: string): Promise<Episode[]> {
  const strapiData = await fetchFromStrapi<StrapiResponse<StrapiEpisode>>(
    `/episodes?filters[topics][slug][$eq]=${topicSlug}&populate=guest.photo,topics,cover&sort=date:desc&pagination[limit]=6`
  );

  if (strapiData?.data) {
    return strapiData.data.map(item => transformEpisode(item.attributes));
  }

  // Fallback to mock data - filter by topic
  return mockEpisodes.filter(episode =>
    episode.topics.some(t => t.toLowerCase().replace(/\s+/g, '-') === topicSlug)
  ).slice(0, 6);
}

// ============================================================================
// API Functions - Articles
// ============================================================================

/**
 * Get all published articles
 */
export async function getArticles(): Promise<Article[]> {
  const strapiData = await fetchFromStrapi<StrapiResponse<StrapiArticle>>(
    '/articles?populate=author.avatar,topics,coverImage&sort=publishedAt:desc'
  );

  if (strapiData?.data) {
    return strapiData.data.map(item => transformArticle(item.attributes));
  }

  // Fallback to mock data
  return mockArticles;
}

/**
 * Get a single article by slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const strapiData = await fetchFromStrapi<StrapiResponse<StrapiArticle>>(
    `/articles?filters[slug][$eq]=${slug}&populate=author.avatar,topics,coverImage`
  );

  if (strapiData?.data?.[0]) {
    return transformArticle(strapiData.data[0].attributes);
  }

  // Fallback to mock data
  return mockArticles.find(a => a.slug === slug) || null;
}

/**
 * Get articles related to a topic
 */
export async function getRelatedArticles(topicSlug: string): Promise<Article[]> {
  const strapiData = await fetchFromStrapi<StrapiResponse<StrapiArticle>>(
    `/articles?filters[topics][slug][$eq]=${topicSlug}&populate=author.avatar,topics,coverImage&sort=publishedAt:desc&pagination[limit]=6`
  );

  if (strapiData?.data) {
    return strapiData.data.map(item => transformArticle(item.attributes));
  }

  // Fallback to mock data - filter by topic
  return mockArticles.filter(article =>
    article.topic.toLowerCase().replace(/\s+/g, '-') === topicSlug
  ).slice(0, 6);
}

// ============================================================================
// API Functions - Guests
// ============================================================================

/**
 * Get all guests
 */
export async function getGuests(): Promise<GuestProfile[]> {
  const strapiData = await fetchFromStrapi<StrapiResponse<StrapiGuest>>(
    '/guests?populate=photo,topics,episodes&sort=name:asc'
  );

  if (strapiData?.data) {
    return strapiData.data.map(item => transformGuest(item.attributes));
  }

  // Fallback to mock data
  return mockGuests;
}

/**
 * Get a single guest by slug
 */
export async function getGuestBySlug(slug: string): Promise<GuestProfile | null> {
  const strapiData = await fetchFromStrapi<StrapiResponse<StrapiGuest>>(
    `/guests?filters[slug][$eq]=${slug}&populate=photo,topics,episodes.topics`
  );

  if (strapiData?.data?.[0]) {
    return transformGuest(strapiData.data[0].attributes);
  }

  // Fallback to mock data
  return mockGuests.find(g => g.slug === slug) || null;
}

// ============================================================================
// API Functions - Topics
// ============================================================================

/**
 * Get all topics
 */
export async function getTopics(): Promise<Topic[]> {
  const strapiData = await fetchFromStrapi<StrapiResponse<StrapiTopic>>(
    '/topics?sort=name:asc'
  );

  if (strapiData?.data) {
    // Note: We don't have episode/article counts in the base query
    // In a real implementation, you'd either:
    // 1. Add a custom Strapi endpoint that includes counts
    // 2. Fetch counts separately
    // 3. Use Strapi's built-in counting if available
    return strapiData.data.map(item =>
      transformTopic(item.attributes, 0, 0)
    );
  }

  // Fallback to mock data
  return mockTopics;
}

/**
 * Get a single topic by slug
 */
export async function getTopicBySlug(slug: string): Promise<Topic | null> {
  const strapiData = await fetchFromStrapi<StrapiResponse<StrapiTopic>>(
    `/topics?filters[slug][$eq]=${slug}`
  );

  if (strapiData?.data?.[0]) {
    // Fetch counts for this topic
    const [episodesData, articlesData] = await Promise.all([
      fetchFromStrapi<StrapiResponse<StrapiEpisode>>(
        `/episodes?filters[topics][slug][$eq]=${slug}&pagination[limit]=0`
      ),
      fetchFromStrapi<StrapiResponse<StrapiArticle>>(
        `/articles?filters[topics][slug][$eq]=${slug}&pagination[limit]=0`
      ),
    ]);

    const episodeCount = episodesData?.meta?.pagination?.total || 0;
    const articleCount = articlesData?.meta?.pagination?.total || 0;

    return transformTopic(strapiData.data[0].attributes, episodeCount, articleCount);
  }

  // Fallback to mock data
  return mockTopics.find(t => t.slug === slug) || null;
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Check if Strapi API is available
 */
export async function checkStrapiHealth(): Promise<boolean> {
  if (!USE_STRAPI) return false;

  try {
    const response = await fetch(`${STRAPI_URL}/_health`, {
      method: 'HEAD',
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Get API configuration status
 */
export function getApiConfig() {
  return {
    strapiUrl: STRAPI_URL,
    useStrapiApi: USE_STRAPI,
    apiBase: API_BASE,
  };
}
