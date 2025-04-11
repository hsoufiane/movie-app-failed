import React from 'react';
import Link from 'next/link';

export interface BackButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({href, children, className = ''}) => {
  return (
    <Link
      href={href}
      className={`text-primary hover:underline inline-flex items-center gap-2 ${className}`}>
      <span>←</span>
      {children}
    </Link>
  );
};

export default BackButton;
