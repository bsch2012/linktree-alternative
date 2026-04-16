/**
 * Site Configuration
 *
 * This file contains all customizable content for your link portal.
 * Edit the values below to personalize your site.
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  title: string;
  handle: string;
  url: string;
  /** Icon type: "github" | "twitter" | "instagram" | "linkedin" | "youtube" | "tiktok" | "substack" | "medium" | "figma" | "dribbble" | "custom" */
  icon: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  badge: "live" | "coming-soon";
  link: string;
  buttonLabel: string;
}

export interface TagData {
  label: string;
  bg: string;
  text: string;
}

export interface Tool {
  id: string;
  name: string;
  /** Path to icon (PNG recommended, 100x100 or larger) */
  icon: string;
  url: string;
  description: string;
  tags: TagData[];
  /** Set to true for smaller icons (optional) */
  smallIcon?: boolean;
}

export interface SiteConfig {
  metadata: {
    title: string;
    description: string;
    /** Path to favicon (relative to /public) */
    favicon: string;
  };
  analytics: {
    /** Google Analytics Measurement ID (leave empty to disable) */
    googleAnalyticsId: string;
  };
  branding: {
    /** Path to logo image (relative to basePath, or null to hide) */
    logo: string | null;
    /** Alt text for logo */
    logoAlt: string;
    /** Main website URL (linked from globe icon) */
    websiteUrl: string;
    /** Tagline displayed in footer */
    tagline: string;
    /** Contact email displayed in footer */
    email: string;
    /** Copyright year(s) */
    copyrightYear: string;
  };
  features: {
    /** Enable the CRT terminal background effect */
    crtEffect: boolean;
    /** CRT effect tint color (hex) */
    crtTint: string;
    /** CRT effect brightness (0-1) */
    crtBrightness: number;
    /** Enable the subscribe modal for resources */
    subscribeModal: boolean;
  };
  theme: {
    /** Primary accent color (hex) - used for CTAs, links, badges */
    accentColor: string;
    /** Dark background color (hex) */
    darkBg: string;
    /** Light background color (hex) */
    lightBg: string;
  };
  /** Navigation items shown in expandable header menu */
  nav: NavItem[];
  /** Social media links (max 5 recommended) */
  socialLinks: SocialLink[];
  /** Featured resources/projects (max 3 recommended) */
  resources: Resource[];
  /** Tools/tech stack items (16 slots, placeholder icons if needed) */
  tools: Tool[];
  blog: {
    /** Enable the blog section */
    enabled: boolean;
    /** RSS feed URL (e.g., Substack, Medium, or any RSS feed) */
    feedUrl: string;
    /** Section title */
    title: string;
    /** Substack subscribe URL (for newsletter form, leave empty to hide) */
    subscribeUrl: string;
  };
}

// ============================================
// CONFIGURATION
// ============================================

// Common tag styles for reuse
const COMMON_TAG_STYLES = { bg: "#f5f5f5", text: "#414651" };

// Category colors for primary tags (accessible with white text)
const CATEGORY_COLORS = {
  Affiliate: "#E1306C",
  AI: "#F77737",
  Creator: "#FD1D1D",
  Social: "#E1306C",
};

export const siteConfig: SiteConfig = {
  // ============================================
  // METADATA
  // ============================================
  metadata: {
    title: "BSCH.VAULT | Moments Locked, Stories Unlocked",
    description: "AI Visual Struggler Explorer - Affiliate links, social media, and creative tools",
    favicon: "/favicon.png",
  },

  // ============================================
  // ANALYTICS
  // ============================================
  analytics: {
    // Leave empty to disable Google Analytics
    googleAnalyticsId: "",
  },

  // ============================================
  // BRANDING
  // ============================================
  branding: {
    // Set to null to hide logo, or provide path like "/images/logo.svg"
    logo: null,
    logoAlt: "BSCH.VAULT",
    websiteUrl: "https://bsch.vault",
    tagline: "Moments locked | Stories Unlocked",
    email: "bsch@vault.ai",
    copyrightYear: "2026",
  },

  // ============================================
  // FEATURES
  // ============================================
  features: {
    // Toggle the animated CRT terminal background
    crtEffect: true,
    crtTint: "#FFFAEE",
    crtBrightness: 0.08,
    // Show subscribe modal before opening resources
    subscribeModal: false,
  },

  // ============================================
  // THEME COLORS
  // ============================================
  theme: {
    // Primary accent color (used for buttons, links, highlights)
    accentColor: "#E1306C", // Instagram Red - BSCH.VAULT brand
    // Dark mode background
    darkBg: "#191919",
    // Light mode background
    lightBg: "#FFFAEE",
  },

  // ============================================
  // NAVIGATION
  // ============================================
  nav: [
    { id: "nav-1", label: "About", href: "#" },
    { id: "nav-2", label: "Projects", href: "#" },
    { id: "nav-3", label: "Contact", href: "#" },
  ],

  // ============================================
  // SOCIAL LINKS
  // ============================================
  socialLinks: [
    {
      id: "instagram",
      platform: "instagram",
      title: "Instagram",
      handle: "@bsch.vault",
      url: "https://www.instagram.com/bsch.vault/",
      icon: "instagram",
    },
    {
      id: "tiktok",
      platform: "tiktok",
      title: "TikTok",
      handle: "@bsch.vault",
      url: "https://www.tiktok.com/@bsch.vault",
      icon: "tiktok",
    },
    {
      id: "twitter",
      platform: "twitter",
      title: "Twitter/X",
      handle: "@baskojpeg",
      url: "https://x.com/baskojpeg",
      icon: "twitter",
    },
  ],

  // ============================================
  // RESOURCES / PROJECTS (AFFILIATE LINKS)
  // ============================================
  resources: [
    {
      id: "flora-ai",
      title: "Flora Fauna AI",
      description:
        "Visual systems for creative campaigns. From core identity to full-scale campaigns, zero noise, pure fidelity.",
      badge: "live",
      link: "https://refer.flora.ai/bsch",
      buttonLabel: "Explore Flora",
    },
    {
      id: "openart",
      title: "OpenArt",
      description:
        "AI-powered creative suite for visual generation, editing, and animation. Perfect for creators and artists.",
      badge: "live",
      link: "https://openart.ai/home?utm_source=tolt&utm_medium=affiliate&utm_campaign=affiliate-tolt--acq-web&ref=bsch",
      buttonLabel: "Try OpenArt",
    },
  ],

  // ============================================
  // TOOLS / TECH STACK
  // ============================================
  tools: [
    {
      id: "tool-1",
      name: "Flora Fauna",
      icon: "/icons/tech/command/placeholder.svg",
      url: "https://refer.flora.ai/bsch",
      description: "Visual system builder for creative campaigns",
      tags: [
        { label: "AI", bg: CATEGORY_COLORS.AI, text: "#fff" },
        { label: "Affiliate", ...COMMON_TAG_STYLES },
      ],
    },
    {
      id: "tool-2",
      name: "OpenArt",
      icon: "/icons/tech/command/placeholder.svg",
      url: "https://openart.ai/home?utm_source=tolt&utm_medium=affiliate&utm_campaign=affiliate-tolt--acq-web&ref=bsch",
      description: "AI image generation and creative tools",
      tags: [
        { label: "AI", bg: CATEGORY_COLORS.AI, text: "#fff" },
        { label: "Affiliate", ...COMMON_TAG_STYLES },
      ],
    },
    {
      id: "tool-3",
      name: "Instagram",
      icon: "/icons/tech/command/placeholder.svg",
      url: "https://www.instagram.com/bsch.vault/",
      description: "Follow for AI visual content and updates",
      tags: [
        { label: "Social", bg: CATEGORY_COLORS.Social, text: "#fff" },
        { label: "Creator", ...COMMON_TAG_STYLES },
      ],
    },
    {
      id: "tool-4",
      name: "TikTok",
      icon: "/icons/tech/command/placeholder.svg",
      url: "https://www.tiktok.com/@bsch.vault",
      description: "Short-form AI visual content",
      tags: [
        { label: "Social", bg: CATEGORY_COLORS.Social, text: "#fff" },
        { label: "Creator", ...COMMON_TAG_STYLES },
      ],
    },
    {
      id: "tool-5",
      name: "Twitter/X",
      icon: "/icons/tech/command/placeholder.svg",
      url: "https://x.com/baskojpeg",
      description: "AI art and visual exploration updates",
      tags: [
        { label: "Social", bg: CATEGORY_COLORS.Social, text: "#fff" },
        { label: "Creator", ...COMMON_TAG_STYLES },
      ],
    },
  ],

  // ============================================
  // BLOG SECTION
  // ============================================
  blog: {
    enabled: false,
    feedUrl: "",
    title: "Recent Posts",
    subscribeUrl: "",
  },
};
