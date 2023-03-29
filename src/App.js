import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import './style.css';
import Navbar from './components/Navbar';


const App = () => {
  
  const [users,setUsers] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className='app'>
      <Navbar openForm={openForm} setOpenForm={setOpenForm} />
      {openForm && <Form users={users} setUsers={setUsers} setOpenForm={setOpenForm} />}
      {(!openForm) && (users.length == 0 ? <h1>No User Registered </h1> : <Table users={users} setUsers={setUsers} />) } 
    </div>
  )
}

export default App