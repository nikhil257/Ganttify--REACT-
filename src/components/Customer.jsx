import React from "react";

const Customer = () => {
  return (
    <div className="customer-main w-full h-[1099px] p-[104px] flex flex-col items-center">
      <section className="bg-transparent bg-opacity-80 py-[8px] px-[10px] rounded-lg w-fit border-[1px] border-[#56555a] border-opacity-25 text-[14px] flex items-center gap-2">
        <i className="ri-user-3-line"></i>
        Customers
      </section>

      <h1 className="text-[56px] font-semibold py-[20px] text-center">
        See What Our Customers Are Saying
      </h1>
      <p className="text-[18px] text-[#666D80] mb-[80px]">
        Here's what some of our customers say about our platform.
      </p>

      {/* Reviews */}
      <div className="review-main relative w-full h-[584px] flex items-center justify-evenly flex-wrap gap-4">
      <div className="overlay absolute bottom-[-10%] bg-gradient-to-t from-[#ffffffcd] to-[#ffffff0f] w-full h-[455px]"></div>
        <section className="review-card w-[394.67px] h-[280px] border-[2px] rounded-[20px] p-[24px] text-[#0D0D12]">
          <h1>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <span className="text-sm ml-2">4.8</span>
          </h1>
          <p className="mt-4">
            “Ganttify has revolutionized the way we manage our projects.
            Connecting tasks and workflows to our overall company goals has
            never been easier.”.
          </p>
          <div className="flex items-center gap-2 mt-10">
            <section className="w-[44px] h-[44px] object-cover rounded-full bg-[#FFEBC9]"></section>
            <section>
              <h3 className="font-semibold ">Charolette Hanlin</h3>
              <h3 className="text-[#666D80] text-[14px]">
                Co-Founder, Heroes Digital
              </h3>
            </section>
          </div>
        </section>

        <section className="review-card w-[394.67px] h-[280px] border-[2px] rounded-[20px] p-[24px] text-[#0D0D12]">
          <h1>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <span className="text-sm ml-2">4.8</span>
          </h1>
          <p className="mt-4">
            “Using Ganttify has streamlined our project management process. It's
            incredibly effective in aligning our daily tasks with the company's
            strategic goals.”.
          </p>
          <div className="flex items-center gap-2 mt-10">
            <section className="w-[44px] h-[44px] object-cover rounded-full bg-[#FDD8E1]"></section>
            <section>
              <h3 className="font-semibold ">Eleanor Pena</h3>
              <h3 className="text-[#666D80] text-[14px]">
                Co-Founder, Heroes Digital
              </h3>
            </section>
          </div>
        </section>

        <section className="review-card w-[394.67px] h-[280px] border-[2px] rounded-[20px] p-[24px] text-[#0D0D12]">
          <h1>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <span className="text-sm ml-2">4.8</span>
          </h1>
          <p className="mt-4">
            “Ganttify has provided us with a unified view of our projects. It
            connects our workflows directly to our business goals, making it
            easier to track progress.”.
          </p>
          <div className="flex items-center gap-2 mt-10">
            <section className="w-[44px] h-[44px] object-cover rounded-full bg-[#ADECFF]"></section>
            <section>
              <h3 className="font-semibold ">Guy Hawkins</h3>
              <h3 className="text-[#666D80] text-[14px]">
                Co-Founder, Heroes Digital
              </h3>
            </section>
          </div>
        </section>

        <section className="review-card2 w-[394.67px] h-[280px] border-[2px] rounded-[20px] p-[24px] text-[#0D0D12]">
          <h1>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <span className="text-sm ml-2">4.8</span>
          </h1>
          <p className="mt-4">
            “Ganttify's ability to connect tasks with our company's goals has
            given us a new level of clarity and efficiency in our project
            management efforts”.
          </p>
          <div className="flex items-center gap-2 mt-10">
            <section className="w-[44px] h-[44px] object-cover rounded-full bg-[#E1D7FD]"></section>
            <section>
              <h3 className="font-semibold ">Kristin Watson</h3>
              <h3 className="text-[#666D80] text-[14px]">
                Co-Founder, Heroes Digital
              </h3>
            </section>
          </div>
        </section>

        <section className="review-card2 w-[394.67px] h-[280px] border-[2px] rounded-[20px] p-[24px] text-[#0D0D12]">
          <h1>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <span className="text-sm ml-2">4.8</span>
          </h1>
          <p className="mt-4">
            “Using Ganttify, we’ve been able to ensure that all our project
            activities are aligned with our overarching business objectives,
            leading to better coordination and success.”.
          </p>
          <div className="flex items-center gap-2 mt-10">
            <section className="w-[44px] h-[44px] object-cover rounded-full bg-[#FFEBC9]"></section>
            <section>
              <h3 className="font-semibold ">Jane Cooper</h3>
              <h3 className="text-[#666D80] text-[14px]">
                Co-Founder, Heroes Digital
              </h3>
            </section>
          </div>
        </section>

        <section className="review-card2 w-[394.67px] h-[280px] border-[2px] rounded-[20px] p-[24px] text-[#0D0D12]">
          <h1>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <i className="text-[#5B49E9] ri-star-fill"></i>
            <span className="text-sm ml-2">4.8</span>
          </h1>
          <p className="mt-4">
            “Ganttify has transformed our approach to project management. It
            ensures that every task, no matter how small, is aligned with our
            company's mission and goals.".
          </p>
          <div className="flex items-center gap-2 mt-10">
            <section className="w-[44px] h-[44px] object-cover rounded-full bg-[#E7DEFD]"></section>
            <section>
              <h3 className="font-semibold ">Leslie Alexander</h3>
              <h3 className="text-[#666D80] text-[14px]">
                Co-Founder, Heroes Digital
              </h3>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Customer;
