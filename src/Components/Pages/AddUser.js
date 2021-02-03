import axios from "axios";
import React, { useState } from "react";
import {useHistory} from "react-router-dom";

const AddUser =()=>{
    let history = useHistory();
    const [user,setUser]= useState({
        id:"",
        employee_name:"",
        employee_salary:"",
        employee_age:"",
        profile_image:""
    })
    const onInputChange = e =>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const OnSubmit = async e =>{
        axios.post('http://dummy.restapiexample.com/api/v1/create',user);
        history.push("/")
    }
    const {id,employee_name,employee_salary,employee_age,profile_image}= user;
    return(
        <div>
            <form className="form-horizontal" action='' method="POST" onSubmit={e=>OnSubmit(e)}>
  <fieldset>
    <div id="legend">
      <legend className="">Register User</legend>
    </div>
    <div className="control-group">
      <label className="control-label"  for="username">Id</label>
      <div className="controls">
        <input type="text" id="username" name="id" placeholder="" className="input-xlarge" value={id}
        onChange={e=>onInputChange(e)}/>
        <p className="help-block">Enter user's ID</p>
      </div>
    </div>
 
    <div className="control-group">
      <label className="control-label" for="email">Name</label>
      <div className="controls">
        <input type="text" id="email" name="employee_name" placeholder="" className="input-xlarge" value={employee_name}
        onChange={e=>onInputChange(e)}/>
        <p className="help-block">enter user's Full Name</p>
      </div>
    </div>
 
    <div className="control-group">
      <label className="control-label" for="password">Salary</label>
      <div className="controls">
        <input type="text" id="password" name="employee_salary" placeholder="" className="input-xlarge" value={employee_salary}
        onChange={e=>onInputChange(e)}/>
        <p className="help-block">Enter user's salary</p>
      </div>
    </div>
 
    <div className="control-group">
      <label className="control-label"  for="password_confirm">Age</label>
      <div className="controls">
        <input type="text" id="password_confirm" name="employee_age" placeholder="" className="input-xlarge" value={employee_age} 
        onChange={e=>onInputChange(e)}/>
        <p className="help-block">Enter User's age</p>
      </div>
    </div>
 
    <div className="control-group">
      <div className="controls">
        <button className="btn btn-success">Add User</button>
      </div>
    </div>
  </fieldset>
</form>
        </div>
    )
}

export  default AddUser