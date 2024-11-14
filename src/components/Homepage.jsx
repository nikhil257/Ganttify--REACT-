import React from "react";
import goals from "/goals.png";
import logo from "/comLogo.png";
import logo1 from "/comLogo1.png";
import logo2 from "/comLogo2.png";
import logo3 from "/comLogo3.png";
import spending from "/spending.png";
import viewers from "/viewers.png";
import home1 from "/homepage1.png";
import home2 from "/homepage2.png";
import home3 from "/homepage3.png";

const Homepage = () => {
  return (
    <div className="homepage bg-black text-white w-screen h-[740px] flex p-[104px]">
      <div className="left-container w-[50%]">
        <section className="goals bg-[#26262A] bg-opacity-80 py-[8px] px-[10px] rounded-lg w-fit border-[1px] border-[#56555a] border-opacity-25 text-[14px] flex items-center gap-2">
          <img className="h-[20px] w-[20px] object-cover" src={goals} alt="" />
          Goals & Reporting
        </section>
        <h1 className="maintext text-[64px] font-semibold mt-[20px] leading-[80px]">
          Goals and Reporting <br />
          In One Place
        </h1>
        <p className="text-[18px] opacity-[60%] font-light -tracking-tight mt-[20px]">
          Connect every team's work to company objectives, then track
          progress with real-time data
        </p>

        <section className="btn mt-[40px] flex items-center gap-7">
          <button className="bg-white text-black text-[16px] px-6 py-4 border-[1px] rounded-xl hover:bg-black hover:text-white duration-200 hover:border-[#DFE1E6]">
            Get Started
          </button>
          <button className="bg-white bg-opacity-[10%] text-[16px] text-white px-6 py-4 border-[1px] border-[#DFE1E6] border-opacity-[8%] rounded-xl hover:bg-white hover:text-black duration-200">
            How it Works
          </button>
        </section>

        <section className="coBox mt-[72px]">
          <h1 className="text-[#868689]">Trusted by 2 million+ teams</h1>
          <div className="flex items-center gap-14 mt-4">
            <img
              className="mailchamp w-[119px] h-[34px] object-cover"
              src={logo}
              alt=""
            />
            <img
              className="medium w-[102.85px] h-[34px] object-cover"
              src={logo1}
              alt=""
            />
            <img
              className="ms w-[110.4px] h-[34px] object-fit"
              src={logo2}
              alt=""
            />
            <img
              className="upwork w-[81.6px] h-[34px] object-cover"
              src={logo3}
              alt=""
            />
          </div>
        </section>
      </div>

      <div className="right-container w-[50%]">
        <div className="mb-4 flex items-end gap-8 justify-center">
          <img
            className="viewers w-[175px] h-[217px] object-cover"
            src={viewers}
            alt=""
          />

          <section className="relative">
            <img
              className="spending w-[266px] h-[274px] object-cover"
              src={spending}
              alt=""
            />
            <img className="clock w-[94px] h-[94px] object-cover absolute -top-[16%] -left-[27%]" src={home1} alt="" />
          </section>
        </div>

        <div className="card relative">
          <div className="tools">
            <div className="red box"></div>
            <div className="yellow box"></div>
            <div className="green box"></div>
          </div>
          <div className="card-content">
            <section className="flex items-center justify-between text-black text-[12px] px-4 py-2 m-2 mt-4 rounded-lg bg-[#f2f2f2]">
              <h1>🚀 Users newly onboarded</h1>
              <p className="text-[#515F6A]">2 days ago</p>
            </section>
            <section className="flex items-center justify-between text-[#828C95] text-[12px] px-4 py-2 m-2 mt-3 rounded-lg bg-[#f2f2f2]">
              <h1>💰 Made an purchase</h1>
              <p className="text-[#515F6A]">5 days ago</p>
            </section>

            <img className="box2 w-[94px] h-[94px] object-contain absolute -left-[30%] top-4" src={home2} alt="" />
            <img className="calendar w-[94px] h-[94px] object-contain absolute -right-[42%] -bottom-[20%]" src={home3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
