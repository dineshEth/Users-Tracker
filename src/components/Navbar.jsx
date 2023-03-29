import React from 'react';
import "./nav.css";
// import { CgZoomIn } from "react-icons/cg";
import IMG from '../assets/search.png';

const Navbar = ({openForm, setOpenForm}) => {
  return (
    <div className='navbar'>
      <div className='search'>
        <input type="text" name='search' placeholder='search...' />
        <img src={IMG} alt="img" />
        {/* <CgZoomIn /> */}
      </div>
      <div className='add' onClick={()=>setOpenForm(!openForm)}>
        <span style={{background:"black"}}>+</span>
      </div>
    </div>
  )
}

export default Navbar