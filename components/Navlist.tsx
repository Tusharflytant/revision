'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import CreationDate from '@/components/Date';
import Breadcrumb from '@/components/Breadcrumb'; 
import Newsletter from './Newsletter';

interface Post {
  title: string;
  imgUrl: string;
  authorName: string;
  articleNumber: number;
  contents: string[];
}

interface NavlistProps {
  posts: Post[];
  sectionTitle: string;
}

const Navlist: React.FC<NavlistProps> = ({ posts, sectionTitle }) => {
  const [visiblePosts, setVisiblePosts] = useState(12);
  const pathname = usePathname();

  const loadMore = () => setVisiblePosts((prev) => prev + 12);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="mt-10 pt-8 flex flex-col justify-center">
        <div className="max-w-md text-left px-6 sm:px-4 lg:px-0">
          <Breadcrumb /> 
        </div>

        <div className="max-w-7xl mx-auto text-left lg:p-4">
          <div className="flex justify-between mb-4 items-center sm:px-4 lg:px-0 px-6">
            <Link href={pathname}>
              <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:text-gray-300 cursor-pointer font-bold">
                {sectionTitle}
              </span>
            </Link>
          </div>

          <div className="border-t border-gray-700 mt-10 mb-10 w-full"></div>

          <div className="grid mt-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center w-full mx-auto">
            {posts.slice(0, visiblePosts).map((post, index) => (
              <Link
                key={index}
                href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, '-')}`}
                className="bg-black p-4 lg:p-0"
              >
                <Image
                  src={`/articleassets/${post.imgUrl}`}
                  width={1000}
                  height={1000}
                  alt={post.title}
                  className="h-[250px] xl:h-[200px] w-full rounded-xl shadow-md object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-125"
                />
                <div className="mt-6 flex items-center">
                  <Link href={`/authors/${post.authorName.replace(/[^A-Za-z0-9]+/g, '-').toLowerCase()}`}>
                    <p className="text-white hover:text-gray-300 font-medium mt-1 text-sm">{post.authorName}</p>
                  </Link>
                  <span className="text-gray-500 ml-2 mt-1 text-sm">
                    on <CreationDate articleNumber={post.articleNumber} />
                  </span>
                </div>
                <h2 className="mt-3 text-xl text-left font-bold text-white">{post.title}</h2>
                <p className="line-clamp-2 mt-2 mb-10 text-gray-300">
                  {post.contents.join(' ')} {/* ✅ Join array into single string */}
                </p>
              </Link>
            ))}
          </div>

          {visiblePosts < posts.length && (
            <div className="flex justify-center mb-10 mt-10">
              <button
                onClick={loadMore}
                className="mt-6 px-6 py-3 bg-neutral-900 border border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:cursor-pointer shadow-md hover:shadow-lg"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        <Newsletter/>
      </div>
    </div>
  );
};

export default Navlist;
