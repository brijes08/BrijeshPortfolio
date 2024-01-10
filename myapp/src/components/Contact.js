import React, { useState, useEffect } from 'react'
import pageBanner from '../images/page-banner.jpg'

const Contact = () => {

  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });
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
          Authorization: authToken // Include the JWT token in the Authorization header
        },
        credentials: 'include'
      })

      const data = await res.json()
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone })

      if (!res.status === 200) {
        throw new Error(res.error)
      }

    } catch (err) {
      console.log(err)
    }
  }

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const contactSubmit = async (e) => {
    e.preventDefault()

    const { name, email, phone, message } = userData;

    const res = await fetch('https://portfoliodb-wj77.onrender.com/contact', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message })
    })
    const data = await res.json()
    if (!data) {
      alert("Message Not Send")
    } else {
      alert("Message Send Successfully")
      setUserData({ ...userData, message: "" })
    }
  }


  useEffect(() => {
    forContactData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (<>
    {/* main breadcrump start */}
    <section className="bg-breadcrump p-0">
      <img src={pageBanner} alt="" />
      <div className="breadcrump-main-paent">
        <div className="container">
          <div className="menu-breadcrump">
            <h1>Contact US</h1>
            <ul>
              <li><a exact="true" href="/">Home</a></li>
              <li>Contact US</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* main breadcrump end */}
    <section className="contact-address-area">
      <div className="container">
        <div className="sec-title-style1 text-center max-width">
          {/* <div className="title">Contact Us</div> */}
          <div className="text"><div className="decor-left"><span></span></div><p>Quick Contact</p><div className="decor-right"><span></span></div></div>
          <div className="bottom-text">
            <p>Fixyman is proud to be the name that nearly 1 million homeowners have trusted since 1996 for home improvement and repair, providing virtually any home repair.</p>
          </div>
        </div>
        <div className="contact-address-box row">
          {/* Start Single Contact Address Box */}
          <div className="single-contact-address-box text-center">
            <div className="icon-holder">
              <span className="icon-clock-1">
                <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span><span className="path12"></span><span className="path13"></span><span className="path14"></span><span className="path15"></span><span className="path16"></span><span className="path17"></span><span className="path18"></span><span className="path19"></span><span className="path20"></span>
              </span>
            </div>
            <h3>Lorem Ipsum</h3>
            <h2>Lorem Ipsum is simply dummy</h2>
          </div>
          {/* End Single Contact Address Box */}
          {/* Start Single Contact Address Box */}
          <div className="single-contact-address-box main-branch">
            <h3>Get in Touch</h3>
            <div className="inner">
              <ul>
                <li>
                  <div className="title_contact">
                    <h4>Address:</h4>
                  </div>
                  <div className="text">
                    <p>27 feet Road, Dabua Colony,<br /> Faridabad 121001, India</p>
                  </div>
                </li>
                <li>
                  <div className="title_contact">
                    <h4>Ph & Email:</h4>
                  </div>
                  <div className="text">
                    <p>+91 8285354511 <br /> brijes08@gmail.com</p>
                  </div>
                </li>
                <li>
                  <div className="title_contact">
                    <h4>Office Hrs:</h4>
                  </div>
                  <div className="text">
                    <p>Mon-Sat: 10:00am - 7:00pm<br /> Sunday Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* End Single Contact Address Box */}
          {/* Start Single Contact Address Box */}
          <div className="single-contact-address-box text-center">
            <div className="icon-holder">
              <span className="icon-question-2">
                <span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span>
              </span>
            </div>
            <h3>Lorem Ipsum</h3>
            <h2>Lorem Ipsum is simply dummy</h2>
          </div>
          {/* End Single Contact Address Box */}
        </div>
      </div>
    </section>
    {/* End Contact Address Area */}

    {/* Start contact form area */}
    <section className="contact-info-area">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="contact-form">
              <div className="row">
                <div className="col">
                  <div className="sec-title-style1 float-left">
                    <div className="title_contact">Send Your Message</div>
                    <div className="text"><div className="decor-left"><span></span></div><p>Contact Form</p></div>
                  </div>
                </div>
              </div>
              <div className="inner-box">
                <form className="default-form" method="POST">
                  <div className="row">
                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <div className="input-box">
                            <input type="text" name="name" value={userData.name} onChange={handleInput} placeholder="Name" required="" />
                          </div>
                          <div className="input-box">
                            <input type="text" name="phone" value={userData.phone} onChange={handleInput} placeholder="Phone" required="" />
                          </div>
                        </div>
                        <div className="col">
                          <div className="input-box">
                            <input type="email" name="email" value={userData.email} onChange={handleInput} placeholder="Email" required="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="input-box">
                        <textarea type="textarea" name="message" value={userData.message} onChange={handleInput} placeholder="Your Message..." required=""></textarea>
                      </div>
                      <div className="button-box">
                        <button type="submit" onClick={contactSubmit}>Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>)
}

export default Contact
