import React from "react";
import project from "/cards/project.png";
import report from "/cards/report.png";
import resource from "/cards/resource.png";
import workflow from "/cards/workflow.png";

const Cards = () => {
  return (
    <div className="card-main mt-[80px] px-[80px] pb-[104px]">
      <div className="card-box w-full flex items-center justify-between">
        <div className="w-[636px] h-[477px] p-[24px] flex flex-col justify-between ">
          <img
            className="w-[588px] h-[300px] object-cover"
            src={project}
            alt=""
          />
          <h1 className="text-[24px] text-[#0D0D12] font-semibold">
            Project Management
          </h1>
          <p className="text-[18px] text-[#666D80]">
            Manage your projects from start to finish. With all of your projects
            in Ganttify, you'll always know who's doing what, by when
          </p>
        </div>
        <div className="w-[636px] h-[477px] p-[24px] flex flex-col justify-between">
          <img
            className="w-[588px] h-[300px] object-cover"
            src={workflow}
            alt=""
          />
          <h1 className="text-[24px] text-[#0D0D12] font-semibold">
            Workflows and Automations
          </h1>
          <p className="text-[18px] text-[#666D80]">
            Create more efficient processes so you can seamlessly manage
            projects across departments and get more done in less time
          </p>
        </div>
      </div>

      <div className="card-box w-full flex items-center justify-between">
        <div className="w-[636px] h-[477px] p-[24px] flex flex-col justify-between ">
          <img
            className="w-[588px] h-[300px] object-cover"
            src={report}
            alt=""
          />
          <h1 className="text-[24px] text-[#0D0D12] font-semibold">
            Goals and Reporting
          </h1>
          <p className="text-[18px] text-[#666D80]">
            See how each project and portfolio ladders up to company objectives
            and keep everyone focused on the work that matters
          </p>
        </div>
        <div className="w-[636px] h-[477px] p-[24px] flex flex-col justify-between">
          <img
            className="w-[588px] h-[300px] object-cover"
            src={resource}
            alt=""
          />
          <h1 className="text-[24px] text-[#0D0D12] font-semibold">
            Resource Management
          </h1>
          <p className="text-[18px] text-[#666D80]">
            Get the visibility you need to plan accurate timelines, adjust
            workloads, and stay on track to achieve your objectives
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
