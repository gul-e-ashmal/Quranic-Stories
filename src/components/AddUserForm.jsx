import React from 'react';

export const AddUserForm = ({ onSubmit }) => {
    return (
         <div>
            <h2>Add User</h2>
         
        <form onSubmit={onSubmit}>
                <div className="form-group" >
                    <label htmlFor="name" className='formLabel'>Name</label>
                    <input className="form-control formTextBox" id="name" />
            </div>
                <div className="form-group" >
                    <label htmlFor="name" className='formLabel'>Username</label>
                    <input className="form-control formTextBox" id="username" />
            </div>
                <div className="form-group" >
                    <label htmlFor="checkboxAdmin" className='formLabel'>Access Group</label>
                    <div className="form-groupCheckbox">
                        <div className="checkbox-wrapper">
                            <input
                            type="checkbox"
                            className="form-control"
                            id="checkboxAdmin"
                            
                        /> <span>Admin</span>
                        </div>
                        <div className="checkbox-wrapper">
                        <input
                            type="checkbox"
                            className="form-control"
                            id="checkboxContent"

                        /> <span>Content</span>
                        </div>
                        <div className="checkbox-wrapper">
                            <input
                            type="checkbox"
                            className="form-control"
                            id="checkboxDeveloper"

                        /> <span>Developer</span>
                        </div>
                    </div>
            </div>
                <div className="form-group" >
                    <label htmlFor="name" className='formLabel'>Password</label>
                    <input className="form-control formTextBox" id="password" type='password' />
            </div>
                <div className="form-group" >
                    <label htmlFor="email" className='formLabel'>Email address</label>
                <input
                    type="email"
                        className="form-control  formTextBox"
                    id="email"
                    placeholder="name@example.com"
                />
            </div>
          
    
                <div className="form-group" >
                <button className="form-control btn btn-primary" type="submit">
                    Submit
                </button>
            </div>
        </form>
        </div>
    );
};
export default AddUserForm;