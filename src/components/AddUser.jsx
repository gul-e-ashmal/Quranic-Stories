import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import { useState } from "react";

const AddUser = ({ setEditUser, setEditUserInfo }) => {
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
    Name: "",
    Username: "",
    AccessGroup: "",
    Password: "",
    Email: "",
    LastActivity: Date.now(),
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
    console.log(checkboxes)
    // let selectedNames = checkboxes
    //   .filter((checkbox) => checkbox.checked)
    //   .map((checkbox) => checkbox.label)
    //   .join(", ");
    // setFormData({
    //   ...formData,
    //   LastActivity: Date.now(),
    //   AccessGroup: selectedNames,
    // });
    setEditUser(false);
    setEditUserInfo(formData);
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <section className=" flex absolute left-0 top-0  justify-center items-center h-full  w-full ">
      <div className=" absolute left-0 top-0 bg-black opacity-30 h-full  w-full z-0"></div>
      <div className=" bg-[#EDDDD0]    z-10 p-8">
        <CloseIcon
          size={32}
          className=" float-end "
          onClick={() => setEditUser(false)}
        />
        <h1 className="font-semibold">Manage Users</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-sm  mt-6 gap-1 "
        >
          <div className=" flex gap-8 mt-4 items-center ">
            <label htmlFor="Name" className=" font-semibold w-16">
              Name
            </label>
            <input
              placeholder="Type here ..."
              className=" bg-[#F2E5DB] text-gray-500 rounded-md p-3  font-medium  w-72 text-sm"
              type="Type here..."
              id="name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
            />
          </div>
          <div className=" flex gap-8 mt-4 items-center ">
            <label htmlFor="Username" className=" font-semibold w-16">
              Username
            </label>
            <input
              placeholder="Type here ..."
              className=" bg-[#F2E5DB]  text-gray-500 rounded-md p-3  font-medium text-sm w-72"
              type="text"
              id="username"
              name="Username"
              value={formData.Username}
              onChange={handleChange}
            />
          </div>
          <div className=" flex gap-8 mt-4  ">
            <label htmlFor="AccessGroup" className=" font-semibold w-16">
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
            <label htmlFor="Password" className=" font-semibold w-16">
              Password
            </label>
            <input
              className=" bg-[#F2E5DB] text-gray-500 rounded-md p-3  font-medium text-sm w-72"
              placeholder="Generated"
              type="password"
              id="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
            />
            <EditNoteTwoToneIcon size={32} />
          </div>
          <div className=" flex gap-8 mt-4 items-center ">
            <label htmlFor="Email" className=" font-semibold w-16">
              Email
            </label>
            <input
              className=" bg-[#F2E5DB] text-gray-500 rounded-md p-3  font-medium text-sm w-72"
              placeholder="Type here ..."
              type="email"
              id="email"
              name="Email"
              value={formData.Email}
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
