import React from 'react';
import './table.css';
// import { users } from '../utils';

const Table = ({ users, setUsers }) => {

    const deleteUser = (id) =>{
        console.log(id)
        const updateUser = users.filter((elem,ind) =>{
            return (ind + 1001) !== id;
        });
        setUsers(updateUser);
        // console.log(updateUser)
    }

  return (
    <div className='table'>
        <table >
            <caption>Registered Users</caption>
            <thead>
                <tr className='header_tr'>
                    <th>Count</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index) => (
                    <tr className='tbody_tr' key={index}>
                        <td>{index+1}</td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.contact}</td>
                        <td>{user.email}</td>
                        <td>{user.city}</td>
                        <td><button className='btn' onClick={()=>deleteUser(index + 1001)}>Delete</button></td>
                    </tr>
                ) )}
            </tbody>
        </table>
    </div>
  )
}

export default Table