
export type Category = 'politics' | 'entertainment' | 'sports' | 'technology' | 'business';

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  category: Category;
  imageUrl: string;
  readTime: number;
}
