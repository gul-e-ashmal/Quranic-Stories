import React, { useState } from "react";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import SeerahLogTable from "../components/SeerahLogTable";
import { PhysicalFeaturesLogs, EventsLogs } from "../Data/Data";
import EditSeerahTimelineLog from "../components/EditSeerahTimelineLog";

const SeerahTimeline = () => {
  const [Edit, setEdit] = useState(false);
  const [EditInfo, setEditInfo] = useState({});
  return (
    <section className=" m-24 w-[70%]   ">
      <h1 className=" font-semibold">Seerah Timeline</h1>

      {!Edit ? (
        <div>
          <div className=" flex flex-row  gap-4 items-center m-4  max-w-[100%]">
            <EditNoteTwoToneIcon size={32} />

            <div className="bg-[#F2E5DB]  p-4 max-w-[95%]">
              <p className="  text-sm ">
                A historical bibliography from Al-Mubarakpuri's ‘The Sealed
                Nectar’ and Ibn Kathir, embedded with lessons of our Prophet’s ﷺ
                character from Al-Qahtani’s ‘A Mercy To The Universe’ - all
                condensed into short, easy-to-understand events, with references
                to Quran and hadith
              </p>
            </div>
          </div>
          <SeerahLogTable
            logData={PhysicalFeaturesLogs}
            setEdit={setEdit}
            setEditInfo={setEditInfo}
          />
          <SeerahLogTable
            logData={EventsLogs}
            setEdit={setEdit}
            setEditInfo={setEditInfo}
          />
        </div>
      ) : (
        <EditSeerahTimelineLog setEdit={setEdit} EditInfo={EditInfo} />
      )}
    </section>
  );
};

export default SeerahTimeline;
