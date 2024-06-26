import React from "react";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";

const SeerahLogTable = ({ logData ,setEdit}) => {
  return (
    <section className=" mt-10">
      <table className="min-w-full  border border-black text-sm">
        <thead className=" bg-[#D8C5B1]">
          <tr>
            <th className="py-2 px-4 border-b  text-start border-black">
              {logData[0].Title}
            </th>
            <th className="py-2 px-4 border-b  text-start border-black">
              {logData[0].LastEdit}
            </th>
            <th className="py-2 px-4 border-b  text-start border-black">
              {logData[0].User}
            </th>
          </tr>
        </thead>
        <tbody>
          {logData.slice(1).map((feature, index) => (
            <tr key={index} className=" border-b border-black ">
              <td className="py-2 px-4 border-b border-black ">
                <span>{feature.Title}</span>
                <EditNoteTwoToneIcon size={32} className=" float-end" onClick={()=>setEdit(true)} />
              </td>
              <td className="py-2 px-4 border-b border-black ">
                {feature.LastEdit}
              </td>
              <td className="py-2 px-4 border-b border-black ">
                {feature.User}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SeerahLogTable;
