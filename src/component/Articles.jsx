import React, { useEffect, useState } from "react";
import Bookmark from "./Bookmark";
import Article from "./Article";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Articles = () => {
  const [totalReadTime, setTotalReadTime] = useState("");
  const [articles, setArticles] = useState([]);
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || []
  );

  const handleReadTime = (time) => {
    const sum = (JSON.parse(localStorage.getItem("readTime")) || 0) + time;
    localStorage.setItem("readTime", sum);
    setTotalReadTime(sum);
  };

  const addToBookmark = (title) => {
    const currentBookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    if (currentBookmarks.includes(title)) {
      toast("already added to bookmark", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    const updatedBookmarks = [...currentBookmarks, title];
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setBookmarks(updatedBookmarks);
  };

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <>
      <div className="lg:mr-80 lg:ml-60 sm:grid grid-cols-4 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">
        <div className="col-span-3 ">
          <div className="grid grid-flow-row gap-5 text-neutral-600 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols- xl:grid-cols-1">
            {articles.map((article) => (
              <Article
                handleReadTime={handleReadTime}
                article={article}
                key={article.id}
                addToBookmark={addToBookmark}
              />
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <Bookmark totalReadTime={totalReadTime}  bookmarks={bookmarks}></Bookmark>
        </div>
      </div>
    </>
  );
};

export default Articles;
