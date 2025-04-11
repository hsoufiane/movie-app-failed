import React from 'react';

export interface TextWithCategoriesProps {
  categories: string[];
  className?: string;
}

const TextWithCategories: React.FC<TextWithCategoriesProps> = ({categories, className = ''}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {categories.map(category => (
        <span
          key={category}
          className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors">
          {category}
        </span>
      ))}
    </div>
  );
};

export default TextWithCategories;
