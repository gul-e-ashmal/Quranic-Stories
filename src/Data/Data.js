// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";


// Sidebar Data
export const SidebarData = [
  {
    heading: "Content",
    children: [
      {
        id: 1,
        heading: "Seerah Timeline",
        url: "Seerah-Timeline",
      },
      {
        id: 2,
        heading: "Other Prophet Timeline",
        url: "Other-Prophet-Timeline",
      },
      {
        id: 3,
        heading: "Tafsir",
        url: "tafsir",
      },
      {
        id: 4,
        heading: "Quran Links",
        url: "Quran-Links",
      },
      {
        id: 5,
        heading: "Miracles",
        url: "Miracles",
      },
      {
        id: 6,
        heading: "Reflection Questions",
        url: "Reflection-Questions",
      },
      {
        id: 7,
        heading: "About Us",
        url: "aboutUs",
      },
    ],
  },
  {
    heading: "Settings",
  },
];

// Analytics Cards Data
// export const cardsData = [
//   {
//     title: "Sales",
//     color: {
//       backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
//       boxShadow: "0px 10px 20px 0px #e0c6f5",
//     },
//     barValue: 70,
//     value: "25,970",
//     png: UilUsdSquare,
//     series: [
//       {
//         name: "Sales",
//         data: [31, 40, 28, 51, 42, 109, 100],
//       },
//     ],
//   },
//   {
//     title: "Revenue",
//     color: {
//       backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
//       boxShadow: "0px 10px 20px 0px #FDC0C7",
//     },
//     barValue: 80,
//     value: "14,270",
//     png: UilMoneyWithdrawal,
//     series: [
//       {
//         name: "Revenue",
//         data: [10, 100, 50, 70, 80, 30, 40],
//       },
//     ],
//   },
//   {
//     title: "Expenses",
//     color: {
//       backGround:
//         "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
//       boxShadow: "0px 10px 20px 0px #F9D59B",
//     },
//     barValue: 60,
//     value: "4,270",
//     png: UilClipboardAlt,
//     series: [
//       {
//         name: "Expenses",
//         data: [10, 25, 15, 30, 12, 15, 20],
//       },
//     ],
//   },
// ];

// Recent Update Card Data
// export const UpdatesData = [
//   {
//     img: img1,
//     name: "Andrew Thomas",
//     noti: "has ordered Apple smart watch 2500mh battery.",
//     time: "25 seconds ago",
//   },
//   {
//     img: img2,
//     name: "James Bond",
//     noti: "has received Samsung gadget for charging battery.",
//     time: "30 minutes ago",
//   },
//   {
//     img: img3,
//     name: "Iron Man",
//     noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
//     time: "2 hours ago",
//   },
// ];
