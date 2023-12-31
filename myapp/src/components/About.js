import React, { useState, useEffect } from 'react'
import pageBanner from '../images/page-banner.jpg'
import image from "../images/user.png"
import { useNavigate } from 'react-router-dom';
import brijesh from '../images/brijesh.webp'
import Resume from '../images/brijesh-cv.pdf'
import TypingEffect from './TypingEffect';

const About = () => {

  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({});
  const forAboutData = async () => {
    const authToken = localStorage.getItem('jwtoken');

      if (!authToken) {
        // Handle the case where the JWT token is not available
        console.error('JWT token not found');
        return;
      }
    try {
      const res = await fetch('https://portfoliodb-wj77.onrender.com/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}` // Include the JWT token in the Authorization header
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
      navigate('/login')
    }
  }

  useEffect(() => {
    forAboutData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (<>
    {/* main breadcrump start */}
    <section className="bg-breadcrump p-0">
      <img src={pageBanner} alt="" />
      <div className="breadcrump-main-paent">
        <div className="container">
          <div className="menu-breadcrump">
            <h1>About You</h1>
            <ul>
              <li><a exact="true" href="/">Home</a></li>
              <li>About You</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* main breadcrump end */}


    <section className='ab_profile'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-12 m-auto'>

            <div className='row abt_profile'>
              <div className='col-md-4' style={{ padding: "0" }}>
                <div className='prfl_img'>
                  <img src={!show ? image : userData.images} alt="UserImage" />
                  {/* <ul>
                    <li>
                      <a href="https://www.instagram.com/brijes08" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true"></i> Instagram</a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/Brijes08" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" aria-hidden="true"></i> Facebook</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/brijes08" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" aria-hidden="true"></i> linkedin</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/brijes08" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true"></i> Twitter</a>
                    </li>
                    <li>
                      <a href="https://github.com/brijes08" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" aria-hidden="true"></i> Github</a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className='col-md-8'>
                <div className='prfl_cont' >
                  <h2>Hello {!show ? "User Name" : userData.name}</h2>
                  <span>I'm Happy to Hear That You are {!show ? "User Designation" : userData.work}</span>
                  <p>Welcome to my world! I've glad you have decided to join me.</p>
                  <p>I want to make your onboarding experience free of worry. Feel free to send me an email if you have any questions at any point in time. I also recommend checking out these resources to get you off the ground.</p>
                </div>
                <div className='pfl_dtls'>
                  <h3>Your Details Are</h3>
                  <ul>
                    <li><p>Your User ID is</p><b>{!show ? "User ID" : userData._id}</b></li>
                    <li className='nameAbout'><p>Name</p><b>{!show ? "User Name" : userData.name}</b></li>
                    <li className='nameAbout'><p>Designation</p><b>{!show ? "User Designation" : userData.work}</b></li>
                    <li className='emailAbout'><p>Email</p><b>{!show ? "User Email" : userData.email}</b></li>
                    <li><p>Phone</p><b>{!show ? "User Mobile Number" : userData.phone}</b></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className="about fromAboutPage">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src={brijesh} alt="" />
            </div>
            <div className="column right">
              <div className="text">I'm Brijesh and I'm a <span className="typing"><TypingEffect /></span></div>
              <p>Experienced Website and Wordpress Developer with over years of experience in Abacusdesk IT Solution Pvt. Ltd. And now I am working as a React Developer at Web2Rise. Excellent reputation for resolving problems and improving customer satisfaction.
                Enthusiastic Website Developer eager to contribute to team success through hard work, attention to detail and excellent organizational skills.
                Organized and dependable candidate successful at managing multiple priorities with a positive attitude.
                Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level Website Developer position. Ready to help team for achieve goals. </p>
              <a target="_brijes" href={Resume}>Download My CV</a>
            </div>
          </div>
        </div>
      </section>

  </>)
}

export default About
