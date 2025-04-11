import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-customGray shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/tmdb-logo.svg"
              alt="TMDB Logo"
              width={80}
              height={20}
              className="h-6 w-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
