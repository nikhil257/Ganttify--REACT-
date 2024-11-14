import React from "react";

const ContactForm = () => {
  return (
    <div className="contactForm w-[600px] h-[574px] bg-white rounded-[24px] p-[32px]">
      <div className="flex items-center justify-between gap-5">
        <div className="w-full mb-[24px]">
          <h1 className="text-[14px] font-medium text-[#818898]">First name</h1>
          <input
            className="w-full border-[1px] text-black outline-none mt-1 border-zinc-300 px-2 py-3 rounded-xl"
            type="text"
            placeholder="Enter your first name"
          />
        </div>
        <div className="w-full mb-[24px]">
          <h1 className="text-[14px] font-medium text-[#818898]">Last name</h1>
          <input
            className="w-full border-[1px] text-black outline-none mt-1 border-zinc-300 px-2 py-3 rounded-xl"
            type="text"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div className="w-full mb-[24px]">
        <h1 className="text-[14px] font-medium text-[#818898]">Email</h1>
        <input
          className="w-full border-[1px] text-black outline-none mt-1 border-zinc-300 px-2 py-3 rounded-xl"
          type="text"
          placeholder="Enter your Email"
        />
      </div>

      <div className="w-full mb-[24px]">
        <h1 className="text-[14px] font-medium text-[#818898]">
          Problem Descriptions
        </h1>
        <textarea
          className="w-full h-[200px] border-[1px] text-black outline-none mt-1 border-zinc-300 px-2 py-3 rounded-xl resize-none"
          name=""
          id=""
        ></textarea>
      </div>
      <button className="w-full bg-[#0D0D12] text-white rounded-[14px] py-[12px] font-semibold cursor-pointer hover:bg-zinc-400 hover:text-black duration-200 ">
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;
