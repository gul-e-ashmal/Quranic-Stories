import React from "react";
import { GroupPermissionTable, GroupPermissionTableColumn } from "../Data/Data";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";

const PermissionTable = ({setGroupPermission}) => {
  return (
    <div className="mt-4 mb-4">
      <button
        className=" bg-[#8F532E] text-sm  rounded-3xl p-3 text-white float-end m-1"
        onClick={() => setGroupPermission(true)}
      >
        Add Group
      </button>
      <table className="min-w-full  border border-black text-sm max-sm:ml-2 max-sm:mr-2 ">
        <thead className=" bg-[#D8C5B1]">
          <tr>
            {GroupPermissionTableColumn.map((ele, i) => (
              <th
                key={i}
                className="py-2 px-4 border-b  text-start border-black"
              >
                {ele}
              </th>
            ))}
            <th className="py-2 px-4 border-b  text-start border-black"></th>
          </tr>
        </thead>
        <tbody>
          {GroupPermissionTable.map((feature, index) => (
            <tr key={index} className=" border-b border-black ">
              <td className="py-2 px-4 border-b border-black font-medium">
                {feature.Group}
              </td>
              <td className="py-2 px-4 border-b border-black  ">
                <div className=" flex flex-col">
                  <span>View</span>
                  <span>Change</span>
                  <span>Add</span>
                  <span>Delete</span>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-black  ">
                <div className=" flex flex-col">
                  <span>View</span>
                  <span>Change</span>
                  <span>Add</span>
                  <span>Delete</span>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-black ">
                <div className=" flex flex-col">
                  <span>View</span>
                  <span>Change</span>
                  <span>Add</span>
                  <span>Delete</span>
                </div>
              </td>
              <td className="py-2 px-4 border-b  text-start border-black">
                <EditNoteTwoToneIcon
                  size={32}
                  className=" float-end"
                  onClick={() => setGroupPermission(true)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionTable;
