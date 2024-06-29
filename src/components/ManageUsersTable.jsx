import React from "react";
import { UserTableColoumn, UserTable } from "../Data/Data";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";

const ManageUsersTable = ({setEditUser}) => {
  return (
    <div className="mt-4 mb-4">
      <button
        className=" bg-[#8F532E] text-sm  rounded-3xl p-3 text-white float-end m-1"
        onClick={() => setEditUser(true)}
      >
        Add User
      </button>
      <table className="min-w-full  border border-black text-sm ">
        <thead className=" bg-[#D8C5B1]">
          <tr>
            {UserTableColoumn.map((ele, i) => (
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
          {UserTable.map((feature, index) => (
            <tr key={index} className=" border-b border-black ">
              <td className="py-2 px-4 border-b border-black ">
                <span>{feature.Username}</span>
              </td>
              <td className="py-2 px-4 border-b border-black ">
                {feature.AccessGroup}
              </td>
              <td className="py-2 px-4 border-b border-black ">
                {feature.LastActivity}
              </td>
              <td className="py-2 px-4 border-b  text-start border-black">
                <EditNoteTwoToneIcon
                  size={32}
                  className=" float-end"
                  onClick={() => {
                    setEditUser(true)
                    //   setEditInfo(feature);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsersTable;
