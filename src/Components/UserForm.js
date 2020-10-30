import React, { useState } from 'react';

const UserForm = (props) =>{
    const {inputs, setState} = props;

    const onChange = e => {
        setState({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    return(
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={onChange} name="firstname" />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={onChange} name="lastname" />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={onChange} name="email" />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={onChange} name="password" />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={onChange} name="confirmPassword" />
            </div>
        </form>
    )
}

export default UserForm;

