import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const EditGroup = ({ setGroupPermission }) => {
  const [checkboxes, setCheckboxes] = useState([
    {
      id: 1,
      access: { view: false, change: false, add: false, delete: false },
    },
    {
      id: 2,
      access: { view: false, change: false, add: false, delete: false },
    },
    {
      id: 3,
      access: { view: false, change: false, add: false, delete: false },
    },
  ]);

  const handleCheckboxChange = (key, id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id
        ? {
            ...checkbox,
            access: { ...checkbox.access, [key]: !checkbox.access[key] },
          }
        : checkbox
    );

    setCheckboxes(updatedCheckboxes);
    setFormData({ ...formData, access: updatedCheckboxes });
  };
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    access: checkboxes,
  });

  const handleChange = (e) => {
    console.log("another", checkboxes);
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
      <div className=" bg-[#EDDDD0]   z-10 p-8">
        <CloseIcon
          size={32}
          className=" float-end "
          onClick={() => setGroupPermission(false)}
        />
        <h1 className="font-semibold">Add/Edit Groups</h1>
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
            {/* <div className=" "> */}
            {checkboxes.map((checkbox) => (
              <div key={checkbox.id} className=" flex flex-col">
                <label className=" font-medium text-sm">
                  <input
                    type="checkbox"
                    checked={checkbox.checked}
                    onChange={() => handleCheckboxChange("view", checkbox.id)}
                    className=" mr-3"
                  />
                  View
                </label>
                <label className=" font-medium text-sm">
                  <input
                    type="checkbox"
                    checked={checkbox.checked}
                    onChange={() => handleCheckboxChange("change", checkbox.id)}
                    className=" mr-3"
                  />
                  Change
                </label>
                <label className=" font-medium text-sm">
                  <input
                    type="checkbox"
                    checked={checkbox.checked}
                    onChange={() => handleCheckboxChange("add", checkbox.id)}
                    className=" mr-3"
                  />
                  Add
                </label>
                <label className=" font-medium text-sm">
                  <input
                    type="checkbox"
                    checked={checkbox.checked}
                    onChange={() => handleCheckboxChange("delete", checkbox.id)}
                    className=" mr-3"
                  />
                  Delete
                </label>
              </div>
            ))}
            {/* </div> */}
          </div>
          <button
            type="submit"
            className="  bg-[#8F532E] text-sm rounded-3xl p-3 text-white  m-2 max-w-48  ml-96  "
          >
            Save
          </button>
          {/* </div> */}
        </form>
      </div>
    </section>
  );
};

export default EditGroup;
