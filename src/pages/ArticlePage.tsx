
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share } from 'lucide-react';
import { mockNewsData } from '@/data/mockNewsData';
import { NewsArticle } from '@/types/news';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    // Find the article by ID
    const foundArticle = mockNewsData.find(article => article.id === id) || null;
    setArticle(foundArticle);

    if (foundArticle) {
      // Find related articles of the same category
      const related = mockNewsData
        .filter(a => a.category === foundArticle.category && a.id !== foundArticle.id)
        .slice(0, 3);
      setRelatedArticles(related);
    }

    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <Link to="/" className="text-primary mt-4 inline-block">
          Return to homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary">
          <ArrowLeft size={16} className="mr-1" />
          Back to Home
        </Link>
      </div>

      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-1 bg-category-${article.category}" />
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-6">
            <span className="inline-block bg-category-${article.category} text-white px-3 py-1 rounded text-sm font-medium mb-4 capitalize">
              {article.category}
            </span>
            <h1 className="font-headline text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6">
              <span className="mr-4 font-medium">By {article.author}</span>
              <div className="flex items-center mr-4">
                <Calendar size={16} className="mr-1" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{article.readTime} min read</span>
              </div>
            </div>
            
            <div className="border-l-4 border-gray-200 pl-4 italic text-gray-700 my-6">
              {article.summary}
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />

          <div className="mt-8 pt-6 border-t">
            <div className="flex justify-between items-center">
              <span className="font-medium">Share this article:</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Share size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-headline font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticlePage;
