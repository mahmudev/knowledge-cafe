import React, { useEffect, useState } from "react";

const Bookmark = ({ totalReadTime }) => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  const [time, setTime] = useState(totalReadTime);

  useEffect(() => {
    const getReadTime = localStorage.getItem("readTime");
    setTime(getReadTime);
  }, [totalReadTime]);

  return (
    <div className="sticky top-0 rounded-lg">
      <div className="mb-2 rounded-lg bg-white p-3 shadow-md text-center">
        <h2 className="text-lg font-bold text-gray-900">
          Spent time on read : {time} min
        </h2>
      </div>
      <div className="mt-2 h-full rounded-lg border bg-white p-3 shadow-md">
        <div className="mb-2 rounded-lg bg-white p-3 shadow-md text-center">
          <h2 className="text-lg font-bold text-gray-900">
            Bookmarked Blogs : {bookmarks.length}
          </h2>
        </div>
        {bookmarks.map((bookmark) => (
          <div className="mb-2 rounded-lg bg-white p-3 shadow-md text-center">
            <h2 className="text-lg font-bold text-gray-900">{bookmark}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
