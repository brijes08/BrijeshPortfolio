import React, { useState, useEffect } from 'react';
import pageBanner from '../images/page-banner.jpg';
import image from '../images/user.png';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [studentImage, setStudentImage] = useState(null);
  const [file, setFile] = useState();
  const [userData, setUserData] = useState({
    _id: '',
    name: '',
    email: '',
    phone: '',
    work: '',
  });

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setStudentImage(selectedFile);
    }
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const postData = async (e) => {
    setEditBtn(false)
    e.preventDefault();
    const { _id, name, email, phone, work } = userData;

    const formData = new FormData();
    formData.append('_id', _id);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('work', work);
    if (studentImage) {
      formData.append('image', studentImage); // Use 'image' as the key for file upload
    }

    try {
      const res = await fetch('https://portfoliodb-wj77.onrender.com/update', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      const data = await res.json();

      if (res.status === 400 || !data) {
        alert('User Details Update Failed');
      } else {
        alert('User Details Updated Successfully');
        forAboutData()
        setStudentImage(null)
      }
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Internal Server Error');
    }
  };

  const [editBtn, setEditBtn] = useState(false);

  const editBtnAbout = () => {
    setEditBtn(!editBtn);
  };

  const forAboutData = async () => {
    const authToken = localStorage.getItem('jwtoken');

    if (!authToken) {
      navigate('/login');
      return;
    }

    try {
      const res = await fetch('https://portfoliodb-wj77.onrender.com/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
        credentials: 'include',
      });

      const data = await res.json();
      setUserData(data);
      setShow(true);
      setTimeout(setFile(), 5000);
      
      if (!res.ok) {
        throw new Error(data.error);
      }
    } catch (err) {
      console.error(err);
      navigate('/login');
    }
  };

  useEffect(() => {
    forAboutData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Main breadcrumb start */}
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

      {/* Main breadcrumb end */}
      <section className="ab_profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 m-auto">
              <form className="updateFormAbout">
                <div
                  className="updateButtonAbout"
                  onClick={!editBtn ? editBtnAbout : null}
                >
                  {!editBtn ? 'Edit' : <input type="submit" value="Save" onClick={postData} />}
                </div>
                <div className="row abt_profile">
                  {/* ... Your existing code for profile information ... */}
                  <div className="col-md-4" style={{ padding: '0' }}>
                    <div className="prfl_img">
                      {!editBtn ? (
                        ''
                      ) : (
                        <div className="editImgBtn">
                          <label>
                            <input
                              type="file"
                              accept=".png, .jpg, .jpeg, .gif"
                              name="image"
                              onChange={handleFileInput}
                              required
                            />
                            <i className="fas fa-edit"></i>
                          </label>
                        </div>
                      )}
                       
                      <img src={!show ? image : !studentImage ? userData.images : file} alt="UserImage" />
                    </div>
                  </div>
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
    </>
  );
};

export default About;
