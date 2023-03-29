import React, { useState } from 'react';
import './form.css';
// import { users } from '../utils';

const Form = ({ users, setUsers, setOpenForm }) => {

    
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        address:"",
        contact:"",
        city:"",
        gender:"",
        dob:"",
        agreed: false
    });
    
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]:value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setUsers([...users,formData]);
        try {
            if(formData.name && formData.address && formData.city && formData.email){
                const user = {
                    id: new Date().getTime().toString(),
                    name:formData.name,
                    contact:formData.contact,
                    email:formData.email,
                    city:formData.city
                }
               await setUsers([
                    ...users,
                    user
               ]);
               setOpenForm(false);
            }
            else{
                window.alert("please field the form correctly")
            }
        } catch (error) {
            console.log(error)
        }
        
        
        // console.log(user)
    }

    const handleReset = (e) =>{
        e.preventDefault();
        setFormData({
            name:"",
            email:"",
            address:"",
            contact:"",
            city:"",
            gender:"",
            dob:"",
            agreed: false
        })
    }
  return (
    <div className='form_body   '>
        <h1 className='form_title'>Registration</h1>
        <form>
            <div className='name'>
                <span>Name</span>
                <input  name='name' type="text" placeholder='John Doe' onChange={handleChange} value={formData.name}   />
            </div>
            <div className='email'>
                <span>Email</span>
                <input name='email' type="email" placeholder='john32@gmail.com' onChange={handleChange} value={formData.email} required  />
            </div>
            <div className='contact'>
                <span>Mobile</span>
                <input name='contact' type="number" placeholder='9842322' onChange={handleChange} value={formData.contact} required />
            </div>
            <div className='address'>
                <span>Address</span>
                <textarea name="address" rows={5} cols={20} type="text" placeholder='Address' onChange={handleChange} value={formData.address} required  />
            </div> 
            <div className='gender'>
                <span>Gender</span>
                <div className='male_female'>
                    <input name='gender' onChange={handleChange} value={formData.gender = "male"} type="radio" /><span>male</span>
                    <input name='gender' onChange={handleChange} value={formData.gender = "female"} type="radio" /><span>female</span>
                </div>
            </div>
            <div className='city'>
                <span>City</span>
                <select name="city" id="city"  onChange={handleChange} value={formData.city} required >
                    <option >---city---</option>
                    <option  >mumbai</option>
                    <option  >sirohi</option>
                    <option  >ahmedabad</option>
                </select>
            </div>
            <div className='DOB'>
                <span>DOB</span>
                <input name='dob' onChange={handleChange} value={formData.dob} type="date"  required />
            </div>
            <div className='agree'>
                <input type="checkbox" onChange={handleChange} value={formData.agreed = true} required  />
                <span>I have read all the <a href='#'>terms</a> and <a href='#'>conditions</a></span>
            </div>
            <div className='buttons'>
               <button type='submit' onClick={handleSubmit}> Register </button>
               <button type='reset' onClick={handleReset}> Reset </button>
            </div>
        </form>
    </div>
  )
}

export default Form