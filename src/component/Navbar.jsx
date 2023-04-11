import React from "react";

const Navbar = () => {
  return (
    <div>
         <nav className="flex justify-between items-center py-4 border-b-2 lg:mx-40 md:mx-20 ">
      <div className="text-xl font-bold">Knowledge Cafe</div>
      <div className="">
        <img className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/150?img=52" alt="" />
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
