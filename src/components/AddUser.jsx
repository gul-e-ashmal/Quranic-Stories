import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import { useState } from "react";

const AddUser = ({setEditUser}) => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Admin", checked: false },
    { id: 2, label: "Content", checked: false },
    { id: 3, label: "Developer", checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    accessgroup: checkboxes,
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
    <section className=" flex absolute left-0 top-0  justify-center items-center h-full  w-full ">
      <div className=" absolute left-0 top-0 bg-black opacity-30 h-full  w-full z-0"></div>
      <div className=" bg-[#EDDDD0]    z-10 p-8">
        <CloseIcon size={32} className=" float-end "  onClick={()=>setEditUser(false)}/>
        <h1 className="font-semibold">Manage Users</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-sm  mt-6 gap-1 "
        >
          <div className=" flex gap-8 mt-4 items-center ">
            <label htmlFor="name" className=" font-semibold w-16">
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
          <div className=" flex gap-8 mt-4  ">
            <label htmlFor="accessgroup" className=" font-semibold w-16">
              Access Group
            </label>
            <div className=" mt-1">
              <p className=" mb-3">Select below !!</p>
              {checkboxes.map((checkbox) => (
                <div key={checkbox.id}>
                  <label className=" font-medium text-sm">
                    <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={() => handleCheckboxChange(checkbox.id)}
                      className=" mr-3"
                    />
                    {checkbox.label}
                  </label>
                </div>
              ))}
            </div>
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
          {/* <div className="flex-end"> */}
          <button
            type="submit"
            className="  bg-[#8F532E] text-sm rounded-3xl p-3 text-white  m-2 max-w-48  ml-96  "
          >
            Save Changes
          </button>
          {/* </div> */}
        </form>
      </div>
    </section>
  );
};

export default AddUser;
