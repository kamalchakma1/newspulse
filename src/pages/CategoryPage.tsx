
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockNewsData } from '@/data/mockNewsData';
import { Category, NewsArticle } from '@/types/news';
import NewsCard from '@/components/NewsCard';

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [validCategory, setValidCategory] = useState(false);

  useEffect(() => {
    // Check if the category is valid
    const validCategories: Category[] = ['politics', 'entertainment', 'sports', 'technology', 'business'];
    const isValid = validCategories.includes(categoryName as Category);
    setValidCategory(isValid);

    if (isValid) {
      // Filter articles by category
      const filteredArticles = mockNewsData.filter(
        article => article.category === categoryName
      );
      setArticles(filteredArticles);
    }

    // Scroll to top when category changes
    window.scrollTo(0, 0);
  }, [categoryName]);

  if (!validCategory) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">Category not found</h2>
        <p className="mt-4 text-gray-600">
          The category you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-headline font-bold capitalize">{categoryName} News</h1>
        <p className="text-gray-600 mt-2">
          The latest {categoryName} news and updates from around the world.
        </p>
      </div>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No articles found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
