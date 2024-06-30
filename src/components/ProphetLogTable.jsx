import React, { useState } from "react";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import SearchIcon from "@mui/icons-material/Search";
import { ProphetTimelineLogData } from "../Data/Data";

const ProphetLogTable = () => {
  const [expandedProphets, setExpandedProphets] = useState({});

  const toggleDropEvent = (index) => {
    setExpandedProphets((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <section>
      <div className=" bg-[#E8D7C9] m-4 rounded-3xl p-1  w-[80%] max-sm:w-[90%] ">
        <SearchIcon className="m-2 " size={32} />
        <input
          type="text"
          className=" bg-[#E8D7C9] text-sm w-[60%] p-2 "
          placeholder="Start searching"
        />
        <button
          type="submit"
          className="  bg-[#8F532E] text-sm rounded-3xl p-3  text-white mb-1  max-w-48 float-end "
        >
          Search
        </button>
      </div>
      <div className=" max-sm:mr-2 max-sm:ml-2">
        <table className="min-w-full  border border-black text-sm">
          <thead className=" bg-[#D8C5B1]">
            <tr>
              <th className="py-2 px-4 border-b  text-start border-black">
                Prophets
              </th>
              <th className="py-2 px-4 border-b  text-start border-black">
                Last Edited
              </th>
              <th className="py-2 px-4 border-b  text-start border-black">
                User
              </th>
            </tr>
          </thead>
          <tbody>
            {ProphetTimelineLogData.map((prophet, i) => (
              <>
                <tr key={i} className="border-b border-black">
                  <td className="py-2 px-2 border-b border-black">
                    <ArrowDropDownCircleIcon
                      onClick={() => toggleDropEvent(i)}
                    />
                    <span className=" ml-2">{prophet.Name}</span>
                  </td>
                </tr>

                {expandedProphets[i] &&
                  prophet?.Events?.map((feature, index) => (
                    <tr key={index} className=" border-b border-black ">
                      <td className="py-2 px-10 border-b border-black ">
                        <span className="">{feature.Title}</span>
                        <EditNoteTwoToneIcon
                          size={32}
                          className=" float-end"
                          onClick={() => {
                            // setEdit(true);
                            // setEditInfo(feature);
                          }}
                        />
                      </td>
                      <td className="py-2 px-4 border-b border-black ">
                        {feature.LastEdit}
                      </td>
                      <td className="py-2 px-4 border-b border-black ">
                        {feature.User}
                      </td>
                    </tr>
                  ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProphetLogTable;
