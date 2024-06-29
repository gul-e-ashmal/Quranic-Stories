import React from "react";
import ManageUsersTable from "../components/ManageUsersTable";
import PermissionTable from "../components/PermissionTable";
import { useState } from "react";
import AddUser from "../components/AddUser";
import EditGroup from "../components/EditGroup";

const Users = () => {
  const [EditUser, setEditUser] = useState(false);
  const [GroupPermission, setGroupPermission] = useState(false);

  const [EditUserInfo, setEditUserInfo] = useState({});
  const [EditGroupInfo, setEditGroupInfo] = useState({});
  // ${EditUser ? "opacity-50" : ""}
  return (
    <section className={`m-24 `}>
      <h1 className="font-semibold">Manage Users</h1>

      <ManageUsersTable setEditUser={setEditUser} EditUserInfo={EditUserInfo} />
      {EditUser && (
        <AddUser
          setEditUser={setEditUser}
          setEditUserInfo={setEditUserInfo}
          className={` ${EditUser ? "Show" : "Hide"}`}
        />
      )}

      <h1 className="font-semibold">Permissions</h1>

      <PermissionTable
        setGroupPermission={setGroupPermission}
        EditGroupInfo={EditGroupInfo}
      />
      {GroupPermission && (
        <EditGroup
          setGroupPermission={setGroupPermission}
          setEditGroupInfo={setEditGroupInfo}
        />
      )}
    </section>
  );
};

export default Users;
