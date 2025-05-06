"use client"
import React, { useState } from 'react'
import Blogs from '../components/Blogs'
import Link from "next/link"
import Post3 from '@/components/Post3'
import allArticles from '@/constants/all'
import Newsletter from '@/components/Newsletter'

const Page = () => {
  const [visibleAfterNewsletter, setVisibleAfterNewsletter] = useState(12)
  const [loading, setLoading] = useState(false)

  const handleLoadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setVisibleAfterNewsletter(prev => prev + 12)
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      <div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Main Article Section */}
        <div className="flex-1 py-20">
          {/* Articles */}
          {allArticles.slice(0, visibleAfterNewsletter).map((post, index) => (
            <Link
              key={index}
              href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
              passHref
            >
              <Blogs
                maincontent={post.title}
                maindesc={post.contents[0]}
                mainimg={`/${['lovestories', 'relationship'].includes(post.category) ? 'articleassets' : 'blogassets'}/${post.imgUrl}`}
                author={post.authorName}
                days={post.articleNumber}
                category={post.category}
                readtime={post.readTime}
              />
            </Link>
          ))}

          {/* Animated Loading */}
          {loading && (
            <div className="flex flex-col items-center mt-8 space-y-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
              </div>
              <p className="text-white text-sm mt-2">Loading more articles...</p>
            </div>
          )}

          {/* Load More Button */}
          {!loading && visibleAfterNewsletter < allArticles.length && (
            <div className="flex justify-center mt-8">
              <button
             onClick={handleLoadMore}
             className="mt-6 px-6 py-3 bg-neutral-900 border border-white text-white font-semibold rounded-lg transition-all duration-300
               hover:bg-white hover:text-black hover:cursor-pointer shadow-md hover:shadow-lg"
           >
             Load More
           </button>
            </div>
          )}
          
        </div>

        {/* Sidebar Section */}
        <div className="w-full mb-24  sticky top-30 lg:mt-24 rounded-xl  lg:h-[1200px] px-6
         lg:w-[400px]  ">
  <h2 className="text-white ml-4 hover:text-gray-300 hover:cursor-pointer text-left font-bold tracking-wide text-3xl sm:text-xl mb-6">
    FEATURED POSTS
  </h2>
  <div className="grid grid-cols-1 gap-6">
    {allArticles.slice(27, 30).map((post, index) => (
      <Link
        key={index}
        href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
        passHref
      >
        <div className=" p-3 rounded-lg hover:bg-neutral-700 ">
          <Post3
            pimg={`/${['lovestories', 'relationship'].includes(post.category) ? 'articleassets' : 'blogassets'}/${post.imgUrl}`}
            pheading={post.title}
            pcontent={post.contents}
            articleNumber={post.articleNumber}
            author={post.authorName}
          />
        </div>
      </Link>
    ))}
  </div>
  
</div>
</div>

<div>
  <Newsletter/>
</div>


      </div>
    </>
  )
}

export default Page
