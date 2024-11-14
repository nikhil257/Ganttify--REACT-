import React from "react";
import logo from "/page2/mediumLogo.png"
import logo1 from "/page2/mailLogo.png"
import logo2 from "/page2/everLogo.png"
import logo3 from "/page2/dropboxLogo.png"
import logo4 from "/page2/msLogo.png"

const ProofComp = () => {
  return (
    <div className="proof mt-[62px]">
      <section className="company px-28 mt-[72px] text-center">
        <h1 className="text-[#868689] text-[18px] font-semibold">
          Trusted by 2 million+ teams
        </h1>
        <div className="flex items-center mt-[48px] justify-between">
          <img
            className="img1 w-[138px] h-[40px] object-cover"
            src={logo}
            alt=""
          />
          <img
            className="img2 w-[140px] h-[40px] object-cover"
            src={logo1}
            alt=""
          />
          <img
            className="img3 w-[137px] h-[40px] object-contain"
            src={logo2}
            alt=""
          />
          <img
            className="img4 w-[121px] h-[40px] object-contain"
            src={logo3}
            alt=""
          />

          <img
            className="img5 w-[136px] h-[40px] object-fit"
            src={logo4}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default ProofComp;
