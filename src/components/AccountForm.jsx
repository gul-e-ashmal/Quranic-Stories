import React, { useState } from "react";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";

const AccountForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-sm  mt-6 gap-1 max-sm:w-[90%] ">
      <div className=" flex gap-8 mt-4 items-center ">
        <label htmlFor="name" className=" font-semibold w-16 ">
          Name
        </label>
        <input
        placeholder="Type here ..."
          className=" bg-[#F2E5DB] text-gray-500 rounded-md p-3  font-medium  w-72 text-sm"
          type="Type here..."
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className=" flex gap-8 mt-4 items-center ">
        <label htmlFor="username" className=" font-semibold w-16">
          Username
        </label>
        <input
        placeholder="Type here ..."
          className=" bg-[#F2E5DB]  text-gray-500 rounded-md p-3  font-medium text-sm w-72"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className=" flex gap-8 mt-4 items-center ">
        <label htmlFor="password" className=" font-semibold w-16">
          Password
        </label>
        <input
          className=" bg-[#F2E5DB] text-gray-500 rounded-md p-3  font-medium text-sm w-72"
          placeholder="Generated"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <EditNoteTwoToneIcon size={32} />
      </div>
      <div className=" flex gap-8 mt-4 items-center ">
        <label htmlFor="email" className=" font-semibold w-16">
          Email
        </label>
        <input
          className=" bg-[#F2E5DB] text-gray-500 rounded-md p-3  font-medium text-sm w-72"
          placeholder="Type here ..."
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className=" self-end lg:self-center">
        <button
          type="submit"
          className="  bg-[#8F532E] text-sm rounded-3xl p-3 text-white  m-2 max-w-48 self-center "
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default AccountForm;
