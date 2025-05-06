
import Image from "next/image";
import Posts from "@/components/Posts";
import Link from "next/link";
import allArticles from "@/constants/all";
import CreationDate from "@/components/Date";
import Breadcrumb from "@/components/Breadcrumb";
import Post3 from "@/components/Post3";
import Newsletter from "@/components/Newsletter";
import React from "react";

const formatTitle = (title: string) => title.replace(/[^A-Za-z0-9]+/g, "-");

// Yeh function ek random image pick karta hai
const getRandomImage = () => {
  const randomNumber = Math.floor(Math.random() * 220) + 1; // 1 to 221
  return `/articleassets/${randomNumber}.webp`;
};

export function generateStaticParams(): { articleTitle: string }[] {
  return allArticles.map(({ title }) => ({
    articleTitle: formatTitle(title),
  }));
}


// Metadata generation function, synchronously
export async function generateMetadata({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );
 
  if (!article) {
    return {
      title: "Article Not Found",
      description: "No article found for the given title",
    };
  }
 
  const description = article.contents.at(-1) || "";
 
  return {
    title: article.title,
    description,
    openGraph: {
      url: `/${articleTitle}`,
      title: article.title,
      description,
      images: [`/article/${article.imgUrl}`],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [`/article/${article.imgUrl}`],
    },
  };
}

const PostPage = async ({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) => {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );

  if (!article) return <h1>Post not found</h1>;

  let headingCount = 0;

  return (
    <div className="text-white min-h-screen">
      <div className="relative mt-10  px-6 md:px-10 lg:px-16 xl:px-24  gap-10">
        {/* Main Article Section */}
        <div>
        <div className="max-w-5xl mx-auto text-white text-center">
  <Breadcrumb />

  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-8 mb-6">
    <div className="flex flex-col lg:flex-row items-center justify-center gap-3 w-full">
      
      {/* Author Info */}
      <div className="flex items-center justify-center gap-2">
        <Image
          src={`/authors/${article.authorName}.jpg`}
          alt={article.authorName}
          width={50}
          height={50}
          className="rounded-full object-cover object-center size-12"
        />
        <Link
          href={`/authors/${article.authorName
            .replace(/[^A-Za-z0-9]+/g, "-")
            .toLowerCase()}`}
        >
          <p className="text-white hover:text-gray-300 font-medium text-lg">
            {article.authorName}
          </p>
        </Link>
      </div>

      {/* Date + Read Time */}
      <div className="flex justify-center items-center gap-4 text-sm lg:text-base text-gray-400">
        <p>
          on <CreationDate articleNumber={article.articleNumber} />
        </p>
        <p>Read Time: {article.readTime}</p>
      </div>
    </div>
  </div>

  <h1 className="text-3xl sm:text-4xl hover:text-gray-300 lg:text-5xl font-bold mb-6">
    {article.title}
  </h1>
</div>
         <div className="bg-white/10 hover:bg-white/50 w-fit mx-auto uppercase text-xs font-semibold px-3 py-2 rounded-md">
            {article.category}
          </div>


          <Image
           src={`/${['lovestories', 'relationship'].includes(article.category) ? 'articleassets' : 'blogassets'}/${article.imgUrl}`}
            width={1000}
            height={1000}
            alt={article.title}
            className="w-full h-[400px] lg:h-[700px] max-w-7xl object-cover mt-12 mx-auto rounded-xl"
          />

       

          {/* ARTICLE CONTENT */}
          <div className="flex flex-col   lg:flex-row gap-20 mt-10">
  
  <div className="w-full lg:ml-6 lg:w-3/4">
    <div className="text-white tracking-normal mx-auto mt-6 text-lg leading-relaxed space-y-4 text-left ">
      {article.contents.map((content, index) => {
        const isHeading = content.includes("***");
        if (isHeading) headingCount++;

        return (
          <React.Fragment key={index}>
            {/* Show Trending Around the Web after 3rd heading */}
            {headingCount === 3 && isHeading && (
  <div className="mt-16 mb-14 p-6 rounded-xl bg-neutral-900 shadow-lg">
    <h3 className="text-2xl font-bold text-white border-b border-neutral-700 pb-4 mb-6">
      🔥 Trending Around the Web
    </h3>

    <div className="space-y-6">
      {allArticles
        .filter(
          (post) =>
            post.category === article.category &&
            post.title !== article.title
        )
        .slice(0, 4)
        .map((item, idx) => (
          <Link
            key={idx}
            href={`/post/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            className="block bg-neutral-800 hover:bg-neutral-700 rounded-lg px-5 py-4 transition duration-200"
          >
            <p className="text-lg font-medium text-white">{item.title}</p>
            <p className="text-sm text-gray-400 mt-1">
              <CreationDate articleNumber={item.articleNumber} />
            </p>
          </Link>
        ))}
    </div>
  </div>
)}


            {/* Show Discover More from Section after 5th heading */}
{headingCount === 4 && isHeading && (
  <div className="mt-12 mb-10 p-5 rounded-xl bg-neutral-900 shadow-md">
    <h3 className="text-xl uppercase font-semibold text-white mb-4 border-b border-neutral-700 pb-2">
      💡 Discover More from {article.category}
    </h3>
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {allArticles
        .filter(
          (post) =>
            post.category === article.category &&
            post.title !== article.title
        )
        .slice(4, 5)
        .map((item, index) => (
          <Link
            key={index}
            href={`/post/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            className="flex items-center gap-4 w-full bg-neutral-800 hover:bg-neutral-700 transition rounded-lg p-3"
          >
            <Image
              src={`/${
                ["lovestories", "relationship"].includes(article.category)
                  ? "articleassets"
                  : "blogassets"
              }/${item.imgUrl}`}
              alt={item.title}
              width={100}
              height={80}
              className="rounded-md object-cover w-[100px] h-[80px] shrink-0"
            />
            <div className="text-left">
              <p className="text-sm uppercase text-gray-400 font-medium mb-1">
                {item.category}
              </p>
              <p className="text-base text-white font-semibold">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  </div>
)}


            {/* Insert random image in middle or second last paragraph */}
            {(index === 15 || index === article.contents.length - 2) && (
              <div className="rounded-xl flex justify-center">
                <Image
                  src={getRandomImage()}
                  alt="Random Feature"
                  width={1000}
                  height={600}
                  className="rounded-xl object-cover border-gray-500 w-full max-w-[1200px] h-[500px]"
                />
              </div>
            )}

            {/* Main Content Rendering */}
            {/\.webp$/i.test(content) ? (
              <Image
                width={600}
                height={400}
                src={`/${
                  ["lovestories", "relationship"].includes(article.category)
                    ? "articleassets"
                    : "blogassets"
                }/${content}`}
                alt="Image"
                className="mt-4 border-gray-500 w-full rounded-lg"
              />
            ) : isHeading ? (
              <strong className="block text-2xl sm:text-3xl mt-8">
                {content.replace(/\*\*\*/g, "")}
              </strong>
            ) : (
              <p>{content}</p>
            )}
          </React.Fragment>
        );
      })}
    </div>
  </div>

  {/* SIDEBAR */}
  <div className="w-full mb-24 lg:mr-4   rounded-xl  lg:h-[1200px] 
         lg:w-[400px] ">
  <h2 className="text-white mt-8 lg:ml-2 hover:text-gray-300 hover:cursor-pointer text-left font-bold tracking-wide text-3xl sm:text-xl mb-6">
    FEATURED POSTS
  </h2>
  <div className="grid grid-cols-1 gap-6">
    {allArticles.slice(27, 37).map((post, index) => (
      <Link
        key={index}
        href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
        passHref
      >
        <div className=" p-3 rounded-lg ">
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
        </div>
        </div>
      
      {/* About Author */}
      <div className="max-w-5xl mx-auto mt-20 bg-black rounded-2xl shadow-lg overflow-hidden">
  <div className="grid grid-cols-1 sm:grid-cols-3">
    {/* Author Image & Name */}
    <div className="bg-neutral-900 flex flex-col items-center justify-center p-6">
      <Image
        src={`/authors/${article.authorName}.jpg`}
        alt={article.authorName}
        width={100}
        height={100}
        className="rounded-full object-cover size-24 border border-gray-700 mb-4"
      />
      <h3 className="text-white text-xl font-semibold">{article.authorName}</h3>
      <p className="text-gray-400 text-sm mt-1">Author & Contributor</p>
    </div>

    {/* Author Bio & Link */}
    <div className="sm:col-span-2 p-6 flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-white mb-3 border-b border-gray-700 pb-2">
        Meet the Writer
      </h2>
      <p className="text-gray-300 text-sm leading-relaxed mb-5">
        With a passion for storytelling and a deep understanding of the subject,
        {article.authorName} crafts insightful and engaging articles that resonate
        with readers. Their clarity and creativity turn complex ideas into compelling narratives.
      </p>
      <Link
        href={`/authors/${article.authorName.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}
        className="self-start bg-white text-black font-medium px-4 py-2 rounded-md hover:bg-gray-200 transition"
      >
        Read More Articles →
      </Link>
    </div>
  </div>
</div>


      {/* Related Articles Section */}
      <div className="mt-20 max-w-7xl px-4 lg:px-0 mx-auto">
        <h2 className="text-white  hover:text-gray-300 hover:cursor-pointer text-left font-bold tracking-wide
         text-3xl sm:text-4xl lg:text-4xl mb-8">
          Read Next
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center ">
          {allArticles
            .filter(
              (post) =>
                post.category === article.category &&
                post.title !== article.title
            )
            .slice(15, 18)
            .map((post, index) => (
              <Link
                key={index}
                href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
              >
                <Posts
                    pimg={`/${['lovestories', 'relationship'].includes(article.category) ? 'articleassets' : 'blogassets'}/${post.imgUrl}`}
                    pheading={post.title}
                    pcontent={post.contents}
                    articleNumber={post.articleNumber}
                    author={post.authorName}
                  />
               
              </Link>
            ))}
        </div>
      </div>
<Newsletter/>
    
    </div>
  );
};

export default PostPage;
