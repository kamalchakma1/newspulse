
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'Politics', path: '/category/politics' },
  { name: 'Business', path: '/category/business' },
  { name: 'Technology', path: '/category/technology' },
  { name: 'Health', path: '/category/health' },
  { name: 'Entertainment', path: '/category/entertainment' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-serif font-bold text-gray-800">
            NewsPulse
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex space-x-8">
              {categories.map((category) => (
                <NavigationMenuItem key={category.path}>
                  <Link
                    to={category.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      location.pathname === category.path 
                        ? "text-primary font-semibold" 
                        : "text-gray-700"
                    )}
                  >
                    {category.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
