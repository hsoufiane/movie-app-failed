import React from 'react';
import {FaSearch, FaTimes} from 'react-icons/fa';
import Input from '../atoms/Input';
import Icon from '../atoms/Icon';

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({value, onChange, onClear}) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="relative">
        <Icon
          icon={FaSearch}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
        />
        <Input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Rechercher des films ou séries..."
          className="w-full pl-14 pr-12 py-4 bg-white shadow-lg text-gray-800 placeholder-gray-500 rounded-full border-2 border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
        />
        {value && (
          <button
            onClick={onClear}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors duration-300"
            aria-label="Clear search">
            <Icon icon={FaTimes} className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
