import React, { useState } from 'react'
import pageBanner from '../images/page-banner.jpg'
import {useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    images: "",
    password: "",
    cpassword: ""
  });

  const handleInput = (e) =>{
    setUserData({...userData, [e.target.name]:e.target.value})
  }
  const handleFileInput = (e) => {
    setUserData({...userData, file:e.target.files[0], [e.target.name]:e.target.value})
  }

  const postData = async (e) =>{
    e.preventDefault()

    const {name, email, phone, work, images, file, password, cpassword} = userData

    const formData  = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('work', work);
    formData.append('password', password);
    formData.append('cpassword', cpassword);
    formData.append('images', images);
    formData.append('file', file);
    
    const res = await fetch('http://localhost:5001/register', {
      method:"POST",
      body: formData,
    })

    const data = await res.json()
     
    if (res.status === 400 || !data) {
      alert("Registration Failed From Signup")
    } else {
      alert("Registration Successfull")
      navigate('/login')
    }
  }
  return (<>
    {/* main breadcrump start */}
    <section className="bg-breadcrump p-0">
      <img src={pageBanner} alt="banner" />
      <div className="breadcrump-main-paent">
        <div className="container">
          <div className="menu-breadcrump">
            <h1>Signup</h1>
            <ul>
              <li><a exact="true" href="/">Home</a></li>
              <li>Signup</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* main breadcrump end */}
    <section className="formsubmission">
      <div className="box_div register">
        <div className="form">
          <h2>Register Now</h2>
          <form method='POST'>
            <div className="inputBox">
              <input type="text" name="name" value={userData.name} onChange={handleInput} required />
              <span>Full Name</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="email" name="email" value={userData.email} onChange={handleInput} required />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="tel" name="phone" value={userData.phone} onChange={handleInput} pattern="[1-9]{1}[0-9]{9}" minLength="10" maxLength="10" required />
              <span>Phone</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" name="work" value={userData.work} onChange={handleInput} required />
              <span>Designation</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="file" accept=".png, .jpg, .jpeg, .gif" name="images" value={userData.images} onChange={handleFileInput} required />
              <span>Upload Image</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" name="password" value={userData.password} onChange={handleInput} required />
              <span>Password</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" name="cpassword" value={userData.cpassword} onChange={handleInput} required />
              <span>Confirm Password</span>
              <i></i>
            </div>
            <div className="inputBox haveAcc_main">
              <NavLink to='/login' className="haveAcc">already have account</NavLink>
            </div>
            {/* <div className="links">
                  <a href="https://akhs1.com/">Forgot password?</a>
                  <a href="https://akhs1.com/">Sign Up</a>
                </div> */}
            <input type="submit" defaultValue="REGISTER" onClick={postData} />
          </form>
        </div>
      </div>
    </section>
  </>)
}

export default Signup
