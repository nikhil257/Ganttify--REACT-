import React from "react";
import logo from "/Logo.png";

const TopNav = () => {
  return (
    <div className="nav w-full h-[80px] flex items-center justify-between px-10">
      <section className="flex items-center gap-20">
        <img className="w-[103px] h-[28px] object-cover " src={logo} alt="" />
        <div className="link flex gap-10">
          <a href="/">Product</a>
          <a href="/">Solutions</a>
          <a href="/">Resources</a>
          <a href="/">Company</a>
          <a href="/">Pricing</a>
        </div>
      </section>
      <div className=" flex items-center gap-6">
        <i className="menu hidden ri-menu-line"></i>
        <button className="bg-transparent px-6 py-2 border-[2px] border-[#DFE1E6] shadow-[0px_3px_10px_0.1px_rgba(2,25,55,0.1)] rounded-xl hover:bg-black hover:text-white duration-200">
          Sign In
        </button>
        <button className="bg-black text-white rounded-xl px-6 py-2 border-[2px] shadow-[0px_3px_10px_0.1px_rgba(0,0,0,0.1)] hover:border-[#DFE1E6] hover:text-black hover:bg-transparent duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TopNav;
