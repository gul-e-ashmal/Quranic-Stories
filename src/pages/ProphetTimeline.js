import React from "react";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";

const ProphetTimeline = () => {
  return (
    <section className=" m-24 w-[70%]   ">
      <h1 className=" font-semibold">Prophet Timeline</h1>

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
    </section>
  );
};

export default ProphetTimeline;
