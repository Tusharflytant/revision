import React from 'react';
import Image from 'next/image';
import CreationDate from './Date';

interface PostProps {
  pimg: string;
  pheading: string;
  pcontent: string[];
  articleNumber: number;
  author: string;
}

const Posts: React.FC<PostProps> = ({ pimg, pheading,author, articleNumber }) => {
  return (
    <div className="relative w-full h-[300px] rounded-2xl overflow-hidden group border border-white bg-neutral-900 shadow-md">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={pimg}
          alt="Post Thumbnail"
          layout="fill"
          objectFit="cover"
          className="object-cover transition-transform duration-300 "
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 transition duration-300 group-hover:bg-black/70" />

      

      {/* Text content */}
      <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end">
      <div className='flex'>
      <p className="font-semibold text-md hover:text-gray-300">
          {author}
      </p>

      <p className="text-sm text-gray-300 mt-1 ml-3">
         on <CreationDate articleNumber={articleNumber} />
      </p>
      </div>
        <h3 className="text-base mt-2 sm:text-lg font-semibold text-white leading-snug hover:text-gray-300 line-clamp-2">
          {pheading}
        </h3>
         
      </div>
    </div>
  );
};

export default Posts;
