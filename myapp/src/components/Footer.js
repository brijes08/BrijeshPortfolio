import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"

const Footer = () => {

    const navigate = useNavigate()
    const [userData, setUserData] = useState({name:"", email:"", phone:"", subject:"", message:""});
    const forContactData = async () => {
        const authToken = localStorage.getItem('jwtoken');

      if (!authToken) {
        // Handle the case where the JWT token is not available
        console.error('JWT token not found');
        return;
      }
      try {
        const res = await fetch('https://portfoliodb-wj77.onrender.com/getdata', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}` // Include the JWT token in the Authorization header
          },
          credentials: 'include'
        })
  
        const data = await res.json()
        setUserData({...userData, name:data.name, email:data.email, phone:data.phone})
  
        if (!res.status === 200) {
          throw new Error(res.error)
        }
  
      } catch (err) {
        console.log(err)
      }
    }
  
    useEffect(() => {
      forContactData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const handleInput = (e) => {
      setUserData({...userData, [e.target.name]:e.target.value})
    }
  
    const contactSubmit = async (e) => {
      e.preventDefault()
  
      const {name, email, phone, subject, message} = userData;
  
      const res = await fetch('https://portfoliodb-wj77.onrender.com/contact', {
        credentials: 'include',
        method:'POST',
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, phone, subject, message})
      })
      const data = await res.json()
      if(!data) {
        alert("Message Not Send")
      } else {
        setUserData({...userData, subject:"", message:""})
        navigate('/thankyou')
      }
    }

  return (<>
        <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Please fill out the form to help us recommend a solution to meet your needs.</p>
                    <div className="icons">
                        <div className="row">
                            <div className="contact_icons">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">27 feet Road, Dabua Colony, Faridabad 121001, India</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="contact_icons">
                                <i className="fa fa-mobile" aria-hidden="true"></i>
                            </div>
                            <div className="info">
                                <div className="head">Mobile</div>
                                <div className="sub-title"> <a href="tel:918285354511">+918285354511</a> </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="contact_icons">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title"><a href="mailto:brijes08@gmail.com">brijes08@gmail.com</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    {/* <div className="text">Message me</div> */}
                    <form method='POST'>
                        <div className="fields">
                            <div className="field name">
                                <input name="name" type="text" value={userData.name} onChange={handleInput} autoComplete="off" placeholder="Name" required />
                            </div>
                            <div className="field email">
                                <input name="email" type="email" value={userData.email} onChange={handleInput} autoComplete="off" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="fields">
                            <div className="field mobile">
                                <input name="phone" type="tel" value={userData.phone} onChange={handleInput} autoComplete="off" pattern="[1-9]{1}[0-9]{9}" minLength="10" maxLength="10" placeholder="Mobile" required />
                            </div>
                            <div className="field subject">
                                <input name="subject" type="text" value={userData.subject} onChange={handleInput} autoComplete="off" placeholder="Subject" required />
                            </div>
                        </div>
                        <div className="field textarea">
                            <textarea type="textarea" name="message" cols="30" rows="10" value={userData.message} onChange={handleInput} autoComplete="off" placeholder="Message.."></textarea>
                        </div>

                        <div className="button-area">
                            <button type="submit" onClick={contactSubmit}>Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <footer >
            <div className="social_media_icons">
                <a target="_brijes" href="https://www.facebook.com/Brijes08/"><i className="fab fa-facebook-square"></i></a>
                <a target="_brijes" href="https://www.instagram.com/brijes08/"><i className="fab fa-instagram-square"></i></a>
                <a target="_brijes" href="https://twitter.com/brijes08"><i className="fab fa-twitter-square"></i></a>
                <a target="_brijes" href="https://www.linkedin.com/in/brijes08/"><i className="fab fa-linkedin"></i></a>
            </div>
            <div>
                <span>Website By <a href="https://brijes.in/">Brijesh Singh</a> | <span className="far fa-copyright"></span> <script>document.write(new Date().getFullYear())</script> All rights reserved.</span>
            </div>
        </footer>
    </section>
    </>)
}

export default Footer
