import React from "react";
import AccountForm from "../components/AccountForm";

const Account = () => {
  return (
    <section className="sm:m-24  max-sm:w-full max-sm:mt-24 max-sm:mr-2 max-sm:ml-4 ">
      <h1 className=" font-semibold">Account</h1>
      <AccountForm />
    </section>
  );
};

export default Account;
