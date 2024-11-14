import React from "react";
import creditCard from "/creditCard.png";
import Toggle from "../components/Toggle";

const Pricing = () => {
  return (
    <div className="pricing-main w-screen h-[989px] bg-[#0D0D12] text-white p-[104px] flex flex-col justify-between">
      <div className="pricing-cont w-[1232px] h-[188px] flex items-end justify-between">
        <div>
          <section className="bg-[#26262A] bg-opacity-80 py-[8px] px-[10px] rounded-lg w-fit border-[1px] border-[#56555a] border-opacity-25 text-[14px] flex items-center gap-2">
            <img
              className="h-[20px] w-[20px] object-cover"
              src={creditCard}
              alt=""
            />
            Pricing
          </section>
          <h1 className="w-[90%] text-[56px] font-semibold mt-[20px] leading-[80px]">
            Simple and Flexible
            Pricing
          </h1>
        </div>

        <div>
          <Toggle />
        </div>
      </div>

      <div className="prices w-full h-[513px] flex items-center justify-between">
        {/* Card-1 */}
        <div className="pricing-card w-[394.67px] h-[513px] bg-[#ffffff10] rounded-[24px] border-[1px] border-[#ffffff18] p-[24px] flex flex-col justify-between">
          <section className="mb-4">
            <h3 className="text-[18px] text-[#ffffff80] font-medium">
              Personal
            </h3>
            <h1 className="font-semibold text-[40px] mb-3 mt-4">
              $29{" "}
              <span className="text-[18px] text-[#ffffff80]">per month</span>{" "}
            </h1>
            <p className="text-[16px] text-[#ffffff80]">
              For individuals and small teams looking to manage their tasks
            </p>
          </section>

          <section>
            <h1 className="mb-2 pt-5 border-t-2 border-dashed border-[#ffffff30] font-semibold">
              This Plan Includes:{" "}
            </h1>
            <p className="text-[#ffffff91] mb-2">
              <i className="ri-checkbox-circle-fill"></i> Unlimited contacts
            </p>
            <p className="text-[#ffffff91] mb-2">
              <i className="ri-checkbox-circle-fill"></i> Bulk emailing
            </p>
            <p className="text-[#ffffff91] mb-2">
              <i className="ri-checkbox-circle-fill"></i> AI Integration
            </p>
            <p className="text-[#ffffff91] mb-2">
              <i className="ri-checkbox-circle-fill"></i> View & share up to 3
              years
            </p>
            <p className="text-[#ffffff91] mb-2">
              <i className="ri-checkbox-circle-fill"></i> Collaboration &
              permissions
            </p>
          </section>
          <button className="w-full h-[52px] bg-[#ffffff38] rounded-[16px] border-[1px] border-white border-opacity-[12%] font-semibold hover:bg-white hover:text-black duration-200">
            Get Started
          </button>
        </div>

        {/* Card-2 */}
        <div className="pricing-card w-[394.67px] h-[513px] text-black bg-[#ffff] rounded-[24px] border-[1px] border-[#ffffff18] p-[24px] flex flex-col justify-between">
          <section className="mb-4">
            <h3 className="text-[18px] text-[#666D80] font-medium">Pro</h3>
            <h1 className="font-semibold text-[40px] mb-3 mt-4">
              $39 <span className="text-[18px] text-[#666D80]">per month</span>{" "}
            </h1>
            <p className="text-[16px] text-[#666D80]">
              For growing teams that need to track their projects' progress and
              hit deadlines
            </p>
          </section>

          <section>
            <h1 className="mb-2 pt-5 border-t-2 border-dashed border-[#666d802f] font-semibold">
              Everything in Standard, plus:{" "}
            </h1>
            <p className="text-[#666D80] mb-2">
              <i className="ri-checkbox-circle-fill"></i> Email sequences
            </p>
            <p className="text-[#666D80] mb-2">
              <i className="ri-checkbox-circle-fill"></i> Send emails from
              multiple domains
            </p>
            <p className="text-[#666D80] mb-2">
              <i className="ri-checkbox-circle-fill"></i> Connect multiple email
              accounts
            </p>
            <p className="text-[#666D80] mb-2">
              <i className="ri-checkbox-circle-fill"></i> Fully adjustable
              sharing permissions
            </p>
            <p className="text-[#666D80] mb-2">
              <i className="ri-checkbox-circle-fill"></i> Migration services
            </p>
          </section>
          <button className="w-full h-[52px] bg-black text-white rounded-[16px] border-[1px] border-black border-opacity-[12%] font-semibold hover:bg-[#8282823d] hover:text-black duration-200">
            Get Started
          </button>
        </div>

        {/* Card-3 */}
        <div className="pricing-card w-[394.67px] h-[513px] bg-[#ffffff10] rounded-[24px] border-[1px] border-[#ffffff18] p-[24px] flex flex-col justify-between">
          <section className="mb-4">
            <h3 className="text-[18px] text-[#ffffff80] font-medium">
              Beyond limits
            </h3>
            <h1 className="font-semibold text-[40px] mb-3 mt-4">Custom Plan</h1>
            <p className="text-[16px] text-[#ffffff80]">
              For companies that need to manage a portfolio of work and goals
              across departments
            </p>
          </section>

          <section>
            <h1 className="mb-2 pt-5 border-t-2 border-dashed border-[#ffffff30] font-semibold">
              Everything in Standard & Pro, plus:{" "}
            </h1>
            <p className="text-[#ffffff91] mb-2">
              <i className="ri-checkbox-circle-fill"></i> White glove onboarding
            </p>
            <p className="text-[#ffffff91] mb-2">
              <i className="ri-checkbox-circle-fill"></i> Custom billing
            </p>
            <p className="text-[#ffffff91] mb-2">
              <i className="ri-checkbox-circle-fill"></i> Dedicated slack
              channel
            </p>
            <p className="text-[#ffffff91] mb-2">
              <i className="ri-checkbox-circle-fill"></i> Dedicated point of
              contact
            </p>
            <p className="text-[#ffffff91] mb-2">
              <i className="ri-checkbox-circle-fill"></i> Unlimited reporting
            </p>
          </section>
          <button className="w-full h-[52px] bg-[#ffffff38] rounded-[16px] border-[1px] border-white border-opacity-[12%] font-semibold hover:bg-white hover:text-black duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
