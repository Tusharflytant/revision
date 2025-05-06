import React from 'react';
import Image from 'next/image';
import CreationDate from './Date';

interface PostProps {
  pimg: string;
  pheading: string;
  pcontent: string[];
  articleNumber: number;
  author:string
}



const Posts: React.FC<PostProps> = ({ pimg, pheading, articleNumber , pcontent , author }) => {
  return (
    <div className="text-white rounded-md w-full">
      <Image
        src={pimg}
        className="w-full h-[200px] rounded-md object-cover"
        width={1000}
        height={1000}
        alt="Post Image"
        title="Post"
      />
      <div className="p-4">
      <div className='flex'>
      <p className="font-semibold text-md hover:text-gray-300">
          {author}
      </p>

      <p className="text-sm text-gray-300 mt-1 ml-3">
         on <CreationDate articleNumber={articleNumber} />
      </p>
      </div>
        <h4 className="text-xl line-clamp-2 mt-2 sm:text-2xl lg:text-xl text-left  font-bold mb-2">
          {pheading}
        </h4>
        <p className='line-clamp-2 text-gray-400'>{pcontent[0]}</p>
       
      </div>
    </div>
  );
};

export default Posts;
