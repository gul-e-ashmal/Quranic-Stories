import React from "react";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import RestoreSeerahTable from "./RestoreSeerahTable";

const EditSeerahTimelineLog = ({ EditInfo, setEdit }) => {
  return (
    <div className=" mt-6  max-w-[100%] max-sm:w-[90%] max-sm:m-5 ">
      <div className=" flex flex-row gap-5 text-sm">
        <h1 className=" font-semibold">{EditInfo.Title}</h1>
        <EditNoteTwoToneIcon size={32} />
      </div>
      <div className=" flex flex-row  gap-4 items-center m-4 w-[100%]">
        <EditNoteTwoToneIcon size={32} />

        <input type="text" className="bg-[#F2E5DB]  p-4 flex-1" />
      </div>
      <div className="">
        <div className="flex flex-row justify-between mt-8 items-baseline max-sm:flex-col ">
          <p className="  text-[#666666] text-sm">
            Last Edit: {EditInfo.LastEdit}
          </p>
          <div className="flex flex-row gap-2  max-sm:mt-4">
            <button className=" bg-[#E6D9CB] text-sm rounded-3xl p-3 ">
              Discard
            </button>
            <button
              className=" bg-[#8F532E] text-sm  rounded-3xl p-3 text-white "
              onClick={() => {
                setEdit(false);
              }}
            >
              {" "}
              Save Changes
            </button>
          </div>
        </div>

        <div>
          <p className="  bg-[#FEF9F5] rounded-md  p-8 mt-6 text-sm">
            lore snkdfsn s dfjsf knmsnf f dsmncief znmncic nxvsdvhidovnmsdos
            csdod
          </p>
        </div>

        <RestoreSeerahTable />
      </div>
    </div>
  );
};

export default EditSeerahTimelineLog;
