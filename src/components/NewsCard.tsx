
import { Link } from 'react-router-dom';
import { NewsArticle } from '@/types/news';
import { Calendar, Clock } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard = ({ article }: NewsCardProps) => {
  return (
    <Link to={`/article/${article.id}`} className="block">
      <div className="relative bg-white rounded-lg overflow-hidden shadow card-hover-effect">
        <div className={`category-indicator bg-category-${article.category}`} />
        <div className="relative">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full h-16" />
          <span className="absolute bottom-2 left-2 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded capitalize">
            {article.category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-headline text-lg font-bold line-clamp-2 mb-2">{article.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3 mb-3">{article.summary}</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
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
    </Link>
  );
};

export default NewsCard;
