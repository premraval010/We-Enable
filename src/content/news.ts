export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  date: string; // ISO
  dateLabel: string;
  author: string;
  readingTime: string;
  featured?: boolean;
  body: Block[];
};

/**
 * Newsroom articles are published here as they go live. Empty = the /newsroom
 * page shows an honest "publishing soon" state and generates no article pages.
 */
export const articles: Article[] = [];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export const featuredArticle: Article | undefined = articles.find((a) => a.featured);
export const gridArticles = articles.filter((a) => !a.featured);

/** Press mentions are added here as coverage is published. */
export const pressItems: { outlet: string; title: string; date: string; href?: string }[] = [];
