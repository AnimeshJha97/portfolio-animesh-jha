export type ProductAccent = "ai" | "oss";

export type ProductStatus = "live" | "waitlist" | "wip";

export type ProductType = "AI PRODUCT" | "OPEN-CORE";

export type ChapterSlug =
  | "studio"
  | "about"
  | "products"
  | "work"
  | "services"
  | "thanks";

export interface ProductAccentStyle {
  readonly color: string;
  readonly glow: string;
}

export interface ProductStatusStyle {
  readonly label: string;
  readonly dotColor: string;
}

export interface Product {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly icon: string;
  readonly type: ProductType;
  readonly accent: ProductAccent;
  readonly pitch: string;
  readonly status: ProductStatus;
  readonly cta: string;
  readonly ctaBig: string;
  readonly ctaHref: string;
  readonly what: string;
  readonly why: string;
  readonly who: string;
  readonly how: readonly string[];
  readonly tryHead: string;
  readonly trySub: string;
}

export interface Stat {
  readonly num: string;
  readonly label: string;
}

export interface Belief {
  readonly tag: string;
  readonly text: string;
}

export interface CaseStudy {
  readonly name: string;
  readonly problem: string;
  readonly role: string;
  readonly impact: string;
}

export interface LeadCaseSection {
  readonly tag: string;
  readonly text: string;
}

export interface LeadCase {
  readonly title: string;
  readonly status: string;
  readonly metrics: readonly Stat[];
  readonly sections: readonly LeadCaseSection[];
}

export interface Job {
  readonly years: string;
  readonly company: string;
  readonly role: string;
  readonly blurb: string;
  readonly skills: readonly string[];
}

export interface Service {
  readonly icon: string;
  readonly name: string;
  readonly desc: string;
}

export interface EngagementModel {
  readonly accent: ProductAccent;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly closing: {
    readonly lead: string;
    readonly detail?: string;
  };
}

export interface Chapter {
  readonly n: string;
  readonly slug: ChapterSlug;
  readonly label: string;
  readonly href: string;
  readonly tag: string;
  readonly note: string;
}

export interface ContactLink {
  readonly glyph: string;
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
  readonly download?: boolean;
}

export interface HomeCta {
  readonly label: string;
  readonly href: string;
  readonly variant: "filled" | "outline";
  readonly download?: boolean;
}

export interface RouteCard {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
}

export interface SiteIdentity {
  readonly name: string;
  readonly role: string;
  readonly studio: string;
  readonly email: string;
  readonly linkedIn: string;
  readonly github: string;
  readonly resume: string;
  readonly wordmark: string;
  readonly footerLine: string;
  readonly canonicalUrl: string;
}
