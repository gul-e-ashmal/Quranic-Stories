import React from 'react'
import AddUserContainer from '../components/AddUserContainer'
const Users = () => {
    const triggerText = 'Add Users';
    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    };
    return (
        <div>Users
            <AddUserContainer triggerText={triggerText} onSubmit={onSubmit} />
        </div>
    )
}

export default Users