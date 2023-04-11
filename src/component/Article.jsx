import React from "react";

const Article = (props) => {
  const {blogTitle, authorImage, readTime, authorName, publishDate, blogCoverImage, } = props.article;

  return (
    <div>
      <div className=" w-auto h-auto flex justify-center items-center">
        <div className="w- p-3 bg-white rounded-xl shadow-xl hover:shadow-2xl">
          <div class="relative">
            <img className="w-auto h-auto rounded-md" src={blogCoverImage} alt=""/>
          </div>
          <div className="mt-2  justify-between flex flex-col ">
            <div className=" justify-around flex flex-col">
              <div className="flex justify-between">
                <div className="flex mt-2 gap-3">
                  <div className="">
                    <img className="h-12 w-12 rounded-full" src={authorImage} alt=""/>
                  </div>
                  <div>
                    <p className="text-sm pb-1 font-bold text-gray-700">
                      {authorName}
                    </p>
                    <p className="text-sm font-bold text-gray-700">
                      {publishDate}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex gap-3 mr-2">
                  <p className="text-md font-bold  text-gray-500">
                    {readTime} min read
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 cursor-pointer"
                    onClick={() =>props.addToBookmark(blogTitle)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold py-2 text-gray-700">{blogTitle}</h1>
              </div>
              <a onClick={()=> props.handleReadTime(readTime)} className="text-xl cursor-pointer pb-4 text-blue-700 font-bold underline">
                Mark as read
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
