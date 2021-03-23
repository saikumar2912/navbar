import React, {useState} from 'react';
import '../App.css';

const  SignUp = ()=> {
  const [values,setValues]=useState({
   

  })

  const handlechamge =(e)=>{

    const {email,value}=e.target;
    setValues({
      ...values,[email]:value
    })
    return (handlechamge,values)
  }

  return (
  <div>
  <label htmlFor="email">
    Email
  </label>
  <input id="email" className="signup-email" type="email" placeholder=" Enter Your Email" value={values.email} onChange={handlechamge}/>
  <div>
  <label htmlFor="password">
    Password
  </label>
  <input id="password" type="password" className="signup-password" placeholder="Enter Your Password " value={values.password} onChange={handlechamge}/>
  </div>
  <button className="login">LOGIN</button>
  </div>
  
  )
  
};

export default SignUp