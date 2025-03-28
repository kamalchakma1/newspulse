
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockNewsData } from '@/data/mockNewsData';
import NewsCard from '@/components/NewsCard';
import FeaturedNewsCard from '@/components/FeaturedNewsCard';
import { Category, NewsArticle } from '@/types/news';
import { Flame } from 'lucide-react';

const HomePage = () => {
  const [featuredArticle, setFeaturedArticle] = useState<NewsArticle | null>(null);
  const [newsByCategory, setNewsByCategory] = useState<Record<Category, NewsArticle[]>>({
    politics: [],
    entertainment: [],
    sports: [],
    technology: [],
    business: []
  });
  const [trendingArticles, setTrendingArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    // Select the most recent article as featured
    const sortedNews = [...mockNewsData].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    setFeaturedArticle(sortedNews[0]);
    
    // Group remaining articles by category
    const categorizedNews: Record<Category, NewsArticle[]> = {
      politics: [],
      entertainment: [],
      sports: [],
      technology: [],
      business: []
    };
    
    sortedNews.slice(1).forEach(article => {
      if (categorizedNews[article.category].length < 4) {
        categorizedNews[article.category].push(article);
      }
    });
    
    // Get trending articles (by views/popularity - simulated here)
    setTrendingArticles(sortedNews.slice(0, 4));
    
    setNewsByCategory(categorizedNews);
  }, []);

  const categories: Category[] = ['politics', 'technology', 'business'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content area - 2/3 width */}
        <div className="lg:col-span-2">
          {/* Featured Article */}
          <section className="mb-12">
            {featuredArticle && <FeaturedNewsCard article={featuredArticle} />}
          </section>

          {/* News By Category */}
          {categories.map((category) => (
            <section key={category} className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold capitalize">{category}</h2>
                <Link 
                  to={`/category/${category}`}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  View All
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsByCategory[category].slice(0, 2).map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Sidebar - 1/3 width */}
        <div className="lg:col-span-1">
          {/* Trending Now Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-xl font-bold mb-6 flex items-center text-gray-800">
              <Flame className="mr-2 text-orange-500" size={20} />
              Trending Now
            </h2>
            
            <div className="space-y-6">
              {trendingArticles.map((article, index) => (
                <div key={article.id} className="flex items-start space-x-4">
                  <div className="text-2xl font-bold text-primary">{index + 1}</div>
                  <div>
                    <Link to={`/article/${article.id}`} className="font-medium hover:text-primary transition-colors">
                      {article.title}
                    </Link>
                    <div className="text-sm text-gray-500 mt-1">{article.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Newsletter</h2>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest news and updates.</p>
            <div className="mt-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded border border-gray-300 mb-3"
              />
              <button className="w-full bg-primary text-white py-2 rounded font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
