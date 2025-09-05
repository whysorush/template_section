/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '../assets.json' {
  import { BackgroundConfig } from './components/SectionBackground';

  interface AssetBackgrounds {
    hero: BackgroundConfig;
    services: BackgroundConfig;
    why_choose_us: BackgroundConfig;
    transactions: BackgroundConfig;
    testimonials: BackgroundConfig;
    about: BackgroundConfig;
    contact: BackgroundConfig;
  }

  interface Assets {
    hero: string;
    about: string;
    services: string[];
    team_image: string;
    life: string;
    favicon: string;
    logo: string;
    video: string;
    clients_logo: string[];
    active_transaction: any[]; // You might want to define a more specific type here
    completed_transactions: any[]; // You might want to define a more specific type here
    life_gallery: any[]; // You might want to define a more specific type here
    team_members: any[]; // You might want to define a more specific type here
    services_detailed: any[]; // You might want to define a more specific type here
    blogs: any[]; // You might want to define a more specific type here
    company_info: any; // You might want to define a more specific type here
    testimonials: any[]; // You might want to define a more specific type here
    social_media: any; // You might want to define a more specific type here
    backgrounds: AssetBackgrounds;
  }

  const assets: Assets;
  export default assets;
}
