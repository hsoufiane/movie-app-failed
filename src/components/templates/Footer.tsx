import React from 'react';
import Link from 'next/link';
import {footerContent} from './constants/footerContent';

const Footer: React.FC = () => {
  return (
    <footer className="bg-customGray text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerContent.about.title}</h3>
            <p className="text-sm">{footerContent.about.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerContent.quickLinks.title}</h3>
            <ul className="space-y-2">
              {footerContent.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerContent.legal.title}</h3>
            <ul className="space-y-2">
              {footerContent.legal.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
