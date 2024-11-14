import React from "react";
import ContactForm from "./partials/ContactForm";

const Contact = () => {
  return (
    <div className="contact w-full h-[782px] bg-[#0D0D12] text-white p-[104px] flex items-start justify-between">
      <div className="contact-left w-[40%]">
        <section className="bg-[#26262A] bg-opacity-80 py-[8px] px-[10px] rounded-lg w-fit border-[1px] border-[#56555a] border-opacity-25 text-[14px] flex items-center gap-2">
          <i className="ri-headphone-line"></i>
          Contact
        </section>

        <h1 className="text1 text-[48px] font-semibold py-[20px]">
          Get in Touch with Us
        </h1>
        <h1 className="text2 hidden text-[48px] font-semibold py-[20px]">
          A Better Way to Work Today, Together 
        </h1>
       
        <p className="text-[18px] text-[#ffffff7d] ">
          Ganttify enables you to achieve clarity and significant results on a
          large scale by linking tasks and workflows to the overarching
          objectives of the company
        </p>
        <div>
        <button className="contactbutton2 hidden mt-7 bg-white py-2 text-black rounded-[10px] w-full text-center">Get Started</button>
        <button className="contactbutton2 hidden mt-3  bg-[#252529] py-2 text-white rounded-[10px] w-full text-center">How it Works</button>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
