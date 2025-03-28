
import { Link } from 'react-router-dom';
import { NewsArticle } from '@/types/news';
import { Calendar, Clock } from 'lucide-react';

interface FeaturedNewsCardProps {
  article: NewsArticle;
}

const FeaturedNewsCard = ({ article }: FeaturedNewsCardProps) => {
  return (
    <Link to={`/article/${article.id}`} className="block">
      <div className="relative bg-white rounded-lg overflow-hidden shadow-md card-hover-effect h-full">
        <div className={`category-indicator bg-category-${article.category}`} />
        <div className="relative">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent w-full h-48" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="inline-block bg-primary px-3 py-1 rounded text-sm font-medium mb-2 capitalize">
              {article.category}
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold mb-2">{article.title}</h2>
            <p className="text-white/90 text-sm md:text-base line-clamp-2 mb-2">{article.summary}</p>
            <div className="flex items-center text-xs text-white/80 space-x-4">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{article.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedNewsCard;
