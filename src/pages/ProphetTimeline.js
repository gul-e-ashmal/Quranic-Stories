import React from "react";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import ProphetLogTable from "../components/ProphetLogTable";
import EditSeerahTimelineLog from "../components/EditSeerahTimelineLog";

const ProphetTimeline = () => {
  // const [Edit, setEdit] = useState(false);
  return (
    <section className="sm:m-24  w-[70%]   max-sm:w-full max-sm:mt-24 ">
      <h1 className=" font-semibold max-sm:m-2">Prophet Timeline</h1>

      {/* {!Edit ? (
        <> */}
      <div className=" flex flex-row  gap-4 items-center m-4  max-w-[100%]">
        <EditNoteTwoToneIcon size={32} />

        <div className="bg-[#F2E5DB]  p-4 max-w-[95%]">
          <p className="  text-sm ">
            A historical bibliography from Al-Mubarakpuri's ‘The Sealed Nectar’
            and Ibn Kathir, embedded with lessons of our Prophet’s ﷺ character
            from Al-Qahtani’s ‘A Mercy To The Universe’ - all condensed into
            short, easy-to-understand events, with references to Quran and
            hadith
          </p>
        </div>
      </div>

      <ProphetLogTable />
      {/* </>
      ) : (
        <EditSeerahTimelineLog />
      )} */}
    </section>
  );
};

export default ProphetTimeline;
