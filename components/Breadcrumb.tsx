'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((seg) => seg && seg !== 'post');

  const generatePath = (index: number) => {
    return '/' + pathSegments.slice(0, index + 1).join('/');
  };

  return (
    <nav
      className="text-sm text-white py-3 w-full"
      aria-label="breadcrumb"
    >
      <ol className="flex justify-center items-center flex-wrap gap-x-2 text-sm">
        <li className="flex items-center">
          <Link
            href="/"
            className="text-white text-base sm:text-lg md:text-sm hover:underline"
          >
            Home
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const path = generatePath(index);
          const label = decodeURIComponent(segment).replace(/-/g, ' ');

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {isLast ? (
                <span
                  title={label}
                  className="text-white text-sm sm:text-base md:text-sm uppercase truncate max-w-[150px] sm:max-w-[250px] md:max-w-[300px]"
                >
                  {label}
                </span>
              ) : (
                <Link
                  href={path}
                  title={label}
                  className="text-white hover:underline capitalize text-sm sm:text-base truncate max-w-[150px] sm:max-w-[250px] md:max-w-[300px]"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
