import React from "react";
import feature from "/feature.png";

const Features = () => {
  return (
    <div className="feature pt-[104px] px-28">
      <section className="featbtn bg-transparent bg-opacity-80 py-[8px] px-[10px] rounded-lg w-fit border-[1px] border-[#56555a] border-opacity-25 text-[14px] flex items-center gap-2">
        <img className="h-[20px] w-[20px] object-cover" src={feature} alt="" />
        Features
      </section>

      <div>
        <h1 className="text-[56px] font-semibold py-[20px]">
          Everything Your Team Looking For
        </h1>
        <p className="text-[18px] text-[#666D80]">
          Ganttify's exceptional flexibility can handle any type of work. And we
          never stop innovating
        </p>
      </div>
    </div>
  );
};

export default Features;
