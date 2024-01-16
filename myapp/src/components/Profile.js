import React, { useState, useEffect } from 'react'
import pageBanner from '../images/page-banner.jpg'
import image from "../images/user.png"
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({});
  // const [updtUserData, setUpdtUserData] = useState({
  //   id:userData._id,
  //   name: userData.name,
  //   email: userData.email,
  //   phone: userData.phone,
  //   work: userData.work,
  // });

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const postData = async (e) => {
    e.preventDefault()
    const {_id, name, email, phone, work, images, file} = userData

    const formData  = new FormData();
    formData.append('_id', _id);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('work', work);
    formData.append('images', images);
    formData.append('file', file);
    
    console.log(formData)

    // const res = await fetch('https://portfoliodb-wj77.onrender.com/update', {
    //   credentials: 'include',
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: formData,
    // })

    // const data = await res.json()

    // if (res.status === 400 || !data) {
    //   forAboutData()
    //   alert("User Detailes Update Failed")
    // } else {
    //   alert("User Detailes Updated Successfull")
    //   setEditBtn(false)
    // }
  }



  const [editBtn, setEditBtn] = useState(false);
  const editBtnAbout = () => {
    setEditBtn(true)
    if (editBtn === true) {
      setEditBtn(false)
    }
  }

  const forAboutData = async () => {
    const authToken = localStorage.getItem('jwtoken');

    if (!authToken) {
      // Handle the case where the JWT token is not available
      // console.error('JWT token not found');
      navigate('/login')
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
            <h1>Your Profile</h1>
            <ul>
              <li><a exact="true" href="/">Home</a></li>
              <li>Your Profile</li>
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

            <form className="updateFormAbout">
              <div className="updateButtonAbout" onClick={!editBtn ? editBtnAbout : null} >{!editBtn ? "Edit" : <input type="submit" value="Save" onClick={postData} />}</div>
              <div className='row abt_profile'>
                <div className='col-md-4' style={{ padding: "0" }}>
                  <div className='prfl_img'>
                    {!editBtn ? "" : (
                      <div className="editImgBtn">
                        <label>
                          <input type="file" />
                          <i className="fas fa-edit"></i>
                        </label>
                      </div>
                    )}
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
                    <div className="forDetailsBrdr">
                      <h3 className="frUpdtFromBtnAbout">Your Details Are </h3>
                      <ul>
                        <li><p>Your User ID is</p><b>{!show ? "User ID" : userData._id}</b></li>
                        <li className='nameAbout'><p>Name</p><b>{!editBtn ? !show ? "User Name" : userData.name : <input type="text" name="name" value={userData.name} onChange={handleInput} required />}</b></li>
                        <li className='nameAbout'><p>Designation</p><b>{!editBtn ? !show ? "User Designation" : userData.work : <input type="text" name="work" value={userData.work} onChange={handleInput} required />}</b></li>
                        <li className='emailAbout'><p>Email</p><b>{!editBtn ? !show ? "User Email" : userData.email : <input type="email" name="email" value={userData.email} onChange={handleInput} required />}</b></li>
                        <li><p>Phone</p><b>{!editBtn ? !show ? "User Mobile Number" : userData.phone : <input type="tel" name="phone" value={userData.phone} onChange={handleInput} pattern="[1-9]{1}[0-9]{9}" minLength="10" maxLength="10" required />}</b></li>
                        {/* {!editBtn ? "" : <li><div></div><input type="submit" value="Update" /></li>} */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>

  </>)
}

export default About
