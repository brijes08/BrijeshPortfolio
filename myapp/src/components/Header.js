import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  
  // eslint-disable-next-line
  const [login, setLogin] = useState(localStorage.getItem('jwtoken'));
  const navigate = useNavigate()

  useEffect(() => {
    setLogin(localStorage.getItem('jwtoken'));
    // eslint-disable-next-line
  }, [localStorage])

  const logOutData =() =>{
    fetch("https://portfoliodb-wj77.onrender.com/logout", {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: 'include'
    }).then((res) => {
      console.log(res, "logotwrvfd")
      if (res.status === 200) {
        localStorage.removeItem("jwtoken");
        navigate("/login");
      } else {
        throw new Error(res.error);
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">Portfo<span>lio.</span></div>
          <ul className="menu">
            <li><a exact="true" href="/" className="menu-btn">Home</a></li>
            <li><NavLink exact="true" to="/about" className="menu-btn">About</NavLink></li>
            <li><NavLink exact="true" to="/services" className="menu-btn">Services</NavLink></li>
            <li><NavLink exact="true" to="/skills" className="menu-btn">Skills</NavLink></li>
            <li><NavLink exact="true" to="/myprojects" className="menu-btn">My Projects</NavLink></li>
            <li><a href="#contact" className="menu-btn">Contact</a></li>
            {localStorage.getItem("jwtoken") ?
              <li><NavLink exact="true" to="/logout" onClick={logOutData} className="menu-btn">Logout</NavLink></li>
              :
              <>
                <li><NavLink exact="true" to="/login" className="menu-btn">Login</NavLink></li>
                <li><NavLink exact="true" to="/signup" className="menu-btn">Registration</NavLink></li>
              </>
            }
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
