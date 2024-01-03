import React, { useState } from 'react'
import pageBanner from '../images/page-banner.jpg'
import {NavLink, useNavigate} from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LoginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('https://portfoliodb-wj77.onrender.com/signin', {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify({ email, password })
    })//.then(response => response.json())
    // .then(vals => console.log(vals))
    // .catch(console.error);

    const data = await res.json()
    console.log(data)

    if (res.status === 400 || !data) {
      alert("Invalid Email and Password!!!")
    } else {
      localStorage.setItem('jwtoken', data.token)
      alert("Login Successfull")
      navigate('/about')
    }
  }



  return (<>
    {/* main breadcrump start */}
    <section className="bg-breadcrump p-0">
      <img src={pageBanner} alt="" />
      <div className="breadcrump-main-paent">
        <div className="container">
          <div className="menu-breadcrump">
            <h1>Login</h1>
            <ul>
              <li><a exact="true" href="/">Home</a></li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* main breadcrump end */}
    <section className="formsubmission">
      <div className="box_div login">
        <div className="form">
          <h2>Log In</h2>
          <form method='POST'>
            <div className="inputBox">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <span>Password</span>
              <i></i>
            </div>
            <div className="inputBox">
              <NavLink to='/signup' className="haveAcc">don't have account</NavLink>
            </div>
            <input type="SUBMIT" defaultValue="LOGIN" onClick={LoginUser} />
          </form>
        </div>
      </div>
    </section>
  </>)
}

export default Login
