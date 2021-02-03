import React, { useState , useEffect} from "react"
import axios from "axios";
import { Link } from "react-router-dom";
const Home =()=>{
    const [users,setUser] = useState([]);
    useEffect(()=>{
        loadUsers();
    },[]);
    const loadUsers = async ()=>{
        const result = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
        setUser(result.data.data);
    }
    return(
        <div>
            <Link className="btn btn-outline-primary" to="/users/add">Create User</Link>
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Age</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {Array.isArray(users) && users.map((user,index)=>{return(
        <tr>
        <th scope="row">{index+1}</th>
        <td>{user.id}</td>
        <td>{user.employee_name}</td>
        <td>{user.employee_salary}</td>
        <td>{user.employee_age}</td>
        <td>
            <Link className="btn btn-primary mr2">View</Link>
            <Link className="btn btn-outline-primary mr2">Edit</Link>
            <Link className="btn btn-danger">Delete</Link>
        </td>
        </tr>
    )})}
  </tbody>
</table>
        </div>
    )
}

export default Home