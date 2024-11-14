import React from "react";
import logo from "/LogoWhite.png";
import DropDown from "./partials/DropDown";

const Footer = () => {
  return (
    <div className="footer w-full h-[740px] bg-[#0D0D12] text-white p-[104px] mt-6">
      <section className="flex items-center justify-between">
        <img className="w-[103px] h-[28px] object-cover" src={logo} alt="" />
        <section className="footer-icon">
          <i className="p-[12px] rounded-[10px] border-[1px] border-[#272835] text-xl text-[#898a94] mr-3 ri-twitter-x-line"></i>
          <i className="p-[12px] rounded-[10px] border-[1px] border-[#272835] text-xl text-[#898a94] mr-3 ri-facebook-circle-fill"></i>
          <i className="p-[12px] rounded-[10px] border-[1px] border-[#272835] text-xl text-[#898a94] ri-instagram-fill"></i>
        </section>
      </section>

      <div className="footer-links w-full h-[371px] flex items-start justify-between mt-16">
        <ul>
          <h1>Ganttify</h1>
          <p className="text-[#818898] leading-10">
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Customer Success</li>
            <li>Templates</li>
            <li>Trust & Security</li>
          </p>
        </ul>

        <ul>
          <h1>Solutions</h1>
          <p className="text-[#818898] leading-10">
            <li>Project Management</li>
            <li>Goal Management</li>
            <li>Agile Management</li>
            <li>Task Management</li>
            <li>Productivity</li>
            <li>Work Management</li>
            <li>Project Planning</li>
            <li>To Do Lists</li>
          </p>
        </ul>

        <ul>
          <h1>About Us</h1>
          <p className="text-[#818898] leading-10">
            <li>Project Management</li>
            <li>Goal Management</li>
            <li>Agile Management</li>
            <li>Task Management</li>
            <li>Productivity</li>
            <li>Work Management</li>
            <li>Project Planning</li>
            <li>To Do Lists</li>
          </p>
        </ul>

        <ul>
          <h1>Resources</h1>
          <p className="text-[#818898] leading-10">
            <li>Help Center</li>
            <li>FAQ</li>
            <li>Developers & API</li>
            <li>Community</li>
            <li>Events</li>
            <li>Status</li>
          </p>
        </ul>

        <ul>
          <h1>Helpful Links</h1>
          <p className="text-[#818898] leading-10">
            <li>Legal center</li>
            <li>Privacy policy</li>
            <li>Partnerships</li>
          </p>
        </ul>
      </div>

      <hr className="hr mb-14 mt-10 border-none h-[1px] bg-zinc-600 opacity-40" />

      <div className="footer-end flex items-center justify-between">
        <DropDown />
        <p className="text-[#666D80]">© Ganttify 2024. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
