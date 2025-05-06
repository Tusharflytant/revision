"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CreationDate from "./Date";

const Blogs = ({
  mainimg,
  maincontent,
  maindesc,
  author,
  days,
  readtime,
  category,
}: {
  mainimg: string;
  maincontent: string;
  maindesc: string;
  author: string;
  days: number;
  readtime: string;
  category: string;
}) => {
  return (
    <div className="p-8">
      <section className="relative w-full h-[450px] rounded-2xl overflow-hidden group">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={mainimg}
            alt="blog"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Top Labels */}
        <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
          {/* Category */}
          <span className="bg-white/30 hover:bg-white/50  uppercase text-xs font-semibold px-3 py-2 rounded-md">
            {category}
          </span>

          {/* Read Time (on hover) */}
          <span className="bg-white/10 hover:bg-white/50  uppercase text-xs font-semibold px-3 py-2 rounded-md
           opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {readtime}
          </span>
        </div>

        {/* Content Inside Image */}
        <div className="absolute lg:w-2xl inset-0 z-20  flex flex-col justify-end p-6">
          {/* Author Info */}
          <div className="flex items-center mb-3">
            
            <div className=" flex items-center flex-wrap text-white">
              <Link
                href={`/authors/${author.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}
                className="font-semibold text-lg hover:text-gray-300"
              >
                {author}
              </Link>
              <span className="text-sm ml-3 text-gray-300">
                on <CreationDate articleNumber={days} />
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white hover:text-gray-300 underline-offset-4">
            {maincontent}
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-300 line-clamp-2">
            {maindesc}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
