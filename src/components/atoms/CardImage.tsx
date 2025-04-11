import React, {useState} from 'react';
import Image from 'next/image';

export interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: 'portrait' | 'landscape';
  className?: string;
}

const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  aspectRatio = 'portrait',
  className = '',
}) => {
  const aspectRatioClass = aspectRatio === 'portrait' ? 'aspect-[2/3]' : 'aspect-[16/9]';
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${aspectRatioClass} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`
          object-cover rounded-lg rounded-r-none transition-opacity duration-300 ease-in-out
          ${isLoading ? 'opacity-0' : 'opacity-100'}
        `}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default CardImage;
