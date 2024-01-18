import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import image from "../images/user.png"

const Header = () => {

  const [toggleStatus, setToggleStatus] = useState(false);
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({});
  // eslint-disable-next-line
  const [login, setLogin] = useState(localStorage.getItem('jwtoken'));
  const navigate = useNavigate()

  useEffect(() => {
    setLogin(localStorage.getItem('jwtoken'));
    // eslint-disable-next-line
  }, [localStorage])

  const logOutData = () => {
    setToggleStatus(false)
    fetch("https://portfoliodb-wj77.onrender.com/logout", {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: 'include'
    }).then((res) => {
      // console.log(res, "logotwrvfd")
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

  const deleteAcc = () => {
    const { _id } = userData
    setToggleStatus(false)
    fetch("https://portfoliodb-wj77.onrender.com/delete", {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({ _id })
    }).then((res) => {
      // console.log(res, "logotwrvfd")
      if (res.status === 200) {
        localStorage.removeItem("jwtoken");
        navigate("/signup");
      } else {
        throw new Error(res.error);
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  const toggleProfile = () => {
    setToggleStatus(true)
    if (toggleStatus === true) {
      setToggleStatus(false)
    }
  } 
  const toggleFalse = () => {
    setToggleStatus(false)
  }

  const forAboutData = async () => {
    const authToken = localStorage.getItem('jwtoken');

    if (!authToken) {
      // Handle the case where the JWT token is not available
      // console.error('JWT token not found');
      // navigate('/login')
      return;
    }
    try {
      const res = await fetch('https://portfoliodb-wj77.onrender.com/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: authToken // Include the JWT token in the Authorization header
        },
        credentials: 'include'
      })


      const data = await res.json()
      setUserData(data)
      setShow(true)

      if (!res.status === 200) {
        throw new Error(res.error)
      }

    } catch (err) {
      console.log(err)
      // navigate('/login')
    }
  }

  useEffect(() => {
    forAboutData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">Portfo<span>lio.</span></div>
          <ul className="menu headerProfile">

            <li><a exact="true" href="/" className="menu-btn">Home</a></li>
            <li><NavLink exact="true" to="/about" className="menu-btn">About</NavLink></li>
            <li><NavLink exact="true" to="/services" className="menu-btn">Services</NavLink></li>
            <li><NavLink exact="true" to="/skills" className="menu-btn">Skills</NavLink></li>
            <li><NavLink exact="true" to="/myprojects" className="menu-btn">My Projects</NavLink></li>
            <li><a href="#contact" className="menu-btn">Contact</a></li>
            <li className='profileToggle'>
              <div className="profileBtn" onClick={toggleProfile}><img src={!show ? image : userData.images} alt="Profile" /></div>
              {!toggleStatus ? "" : (<div className='toggleBox'>
                {localStorage.getItem("jwtoken") ?
                  <>
                    <li><NavLink exact="true" to="/profile" onClick={toggleFalse} className="menu-btn">Profile</NavLink></li>
                    <li><NavLink exact="true" to="#." onClick={logOutData} className="menu-btn">Logout</NavLink></li>
                    <li><NavLink exact="true" to="/delete" onClick={deleteAcc} className="menu-btn">Delete Account</NavLink></li>
                  </>
                  :
                  <>
                    <li><NavLink exact="true" to="/login" onClick={toggleFalse} className="menu-btn">Login</NavLink></li>
                    <li><NavLink exact="true" to="/signup" onClick={toggleFalse} className="menu-btn">Registration</NavLink></li>
                  </>
                }
              </div>
              )}
            </li>

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
