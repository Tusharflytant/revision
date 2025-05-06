'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black  text-white border-t py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Logo & Description */}
        <div className="md:w-1/3">
          <Link href="/">
            <Image 
              src="/logo-revision.png" 
              alt="Logo" 
              width={160} 
              height={60} 
              className="mb-4"
            />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
          Welcome to ultimate source for fresh perspectives! Explore curated content to enlighten, entertain and engage global readers.
          </p>
          
        </div>

        {/* Right Side Sections */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-16 md:w-2/3 justify-end text-sm">
          {/* Categories */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">CATEGORIES</h2>
            <nav className="space-y-2 text-gray-400">
              <Link href="/lovestories" className="block hover:text-white">Lovestories</Link>
              <Link href="/relationship" className="block hover:text-white">Relationship</Link>
              <Link href="/love" className="block hover:text-white">Love & Lifestyle</Link>
              <Link href="/dating" className="block hover:text-white">Dating</Link>
            </nav>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">QUICK LINKS</h2>
            <nav className="space-y-2 text-gray-400">
              <Link href="/privacy" className="block hover:text-white">Privacy Policy</Link>
              <Link href="/contact" className="block hover:text-white">Contact Us</Link>
              <Link href="/about" className="block hover:text-white">About Us</Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">LEGAL</h2>
            <nav className="space-y-2 text-gray-400">
              <Link href="/terms" className="block hover:text-white">Terms & Conditions</Link>
              <Link href="/dmca" className="block hover:text-white">DMCA</Link>
              <Link href="/cookies" className="block hover:text-white">Cookies Policy</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        2025 REVISION | ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};

export default Footer;
