import React, { useState, useEffect } from 'react'
import TypingEffect from './TypingEffect';
import brijesh from '../images/brijesh.webp'
import sumit from '../images/sumit.webp'
import rajan from '../images/rajan.webp'
import aayu from '../images/aayu.webp'
import sourabh from '../images/sourabh.webp'
import Resume from '../images/brijesh-cv.pdf'
import asianHeart from '../images/websitesdevelopedbyme/asian-heart.jpg'
import asianUrology from '../images/websitesdevelopedbyme/asian-urology.jpg'
import asiantalent from '../images/websitesdevelopedbyme/asiantalent.jpg'
import uflex from '../images/websitesdevelopedbyme/uflex.jpg'
import gdxgroup from '../images/websitesdevelopedbyme/gdxgroup.jpg'
import netkarmaZoho from '../images/websitesdevelopedbyme/netkarma-zoho.jpg'
import netkarmaCdap from '../images/websitesdevelopedbyme/netkarma-cdap.jpg'
import qraahealth from '../images/websitesdevelopedbyme/qraahealth.jpg'
import behlmach from '../images/websitesdevelopedbyme/behlmach.jpg'
import poojaforge from '../images/websitesdevelopedbyme/poojaforge.jpg'
import tamansinghlaw from '../images/websitesdevelopedbyme/tamansinghlaw.jpg'
import plazatimes from '../images/websitesdevelopedbyme/plazatimes.jpg'
import roopkoepp from '../images/websitesdevelopedbyme/roopkoepp.jpg'
import kleenoilindia from '../images/websitesdevelopedbyme/kleenoilindia.jpg'
import starnea from '../images/websitesdevelopedbyme/starnea.jpg'
import foracegroup from '../images/websitesdevelopedbyme/foracegroup.jpg'
import energizedSolu from '../images/websitesdevelopedbyme/energized-solu.jpg'
import ryonan from '../images/websitesdevelopedbyme/ryonan.jpg'
import astiindia from '../images/websitesdevelopedbyme/astiindia.jpg'
import heatmax from '../images/websitesdevelopedbyme/heatmax.jpg'
import janaksons from '../images/websitesdevelopedbyme/janaksons.jpg'
import deltadisplays from '../images/websitesdevelopedbyme/deltadisplays.jpg'
import ionotronicsdigital from '../images/websitesdevelopedbyme/ionotronicsdigital.jpg'
import zenner from '../images/websitesdevelopedbyme/zenner.jpg'
import willsor from '../images/websitesdevelopedbyme/willsor.jpg'
import reactIcon from '../images/react-icon-theme.svg'
import reactIconHover from '../images/react-icon-white.svg'

const Main = () => {
  const curdate = new Date().getHours();
  const [GetTime, settTime] = useState(curdate);

  const [show, setShow] = useState(false);

  const updateTime = () => {
    let timeupdt = new Date().getHours();
    settTime(timeupdt)
  }
  setInterval(updateTime, 1000);

  const css = {};
  let greeting = '';
  if (GetTime >= 1 && GetTime < 12) {
    greeting = 'Good Morning';
    css.color = 'green';
  } else if (GetTime >= 12 && GetTime < 17) {
    greeting = 'Good Afternoon';
    css.color = 'yellow';
  } else if (GetTime >= 17 && GetTime < 21) {
    greeting = 'Good Evening';
    css.color = 'orange';
  } else {
    greeting = 'Hope You Had a Great Day Today';
    css.color = 'black';
  }


  const [userData, setUserData] = useState({});
  const forMainData = async () => {
    try {
      const authToken = localStorage.getItem('jwtoken');

      if (!authToken) {
        // Handle the case where the JWT token is not available
        console.error('JWT token not found');
        return;
      }
      const res = await fetch('https://portfoliodb-wj77.onrender.com/getdata', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: authToken // Include the JWT token in the Authorization header
        },
        credentials: 'include'
      })

      const data = await res.json();
      setUserData(data);
      setShow(true);

      if (res.status !== 200) {
        throw new Error(data.error); // Assuming the error message is available in the response data
      }
    } catch (err) {
      console.error(err);
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  }

  useEffect(() => {
    forMainData()
  }, [])

  return (
    <>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello {!show ? "There" : userData.name}! <span style={css}>{greeting}</span></div>
            <div className="text-nameis">My Name is</div>
            <div className="text-2">Brijesh Singh</div>
            <div className="text-3">And I'm a Creative <span className="typing"><TypingEffect /></span></div>
            <a href="#contact">Hire me</a>
          </div>
        </div>
      </section>

      <section className="about">
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

      <section className="services">
        <div className="max-width">
          <h2 className="title">My services</h2>
          <div className="serv-content">
            <div className="carousel owl-carousel">
              <div className="card">
                <div className="box">
                  <img className="serviceReactIcon" src={reactIcon} alt="" />
                  <img className="serviceReactIconHover" src={reactIconHover} alt="" />
                  <div className="text">React Web Application</div>
                  <p>I ensures that delivers excellent web Applications services. I focus on high-end designs and latest technologies.</p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fas fa-paint-brush"></i>
                  <div className="text">Websites Design</div>
                  <p>I ensures that delivers excellent website services. I focus on high-end designs and latest technologies.</p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fas fa-code"></i>
                  <div className="text">Websites Development</div>
                  <p>I take website development as a holistic process. I strive to develop your website that not only looks great but also perform at all levels.</p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fab fa-wordpress"></i>
                  <div className="text">Wordpress Websites</div>
                  <p>Wordpress Website Design Helps to manage your content by yourself. Its Easy to manage because of its frameworks.</p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fas fa-mobile-alt"></i>
                  <div className="text">Responsive Website</div>
                  <p>The dynamic web development approach that makes your web pages fit in entire screens available in the digital world.</p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fas fa-business-time"></i>
                  <div className="text">Small Business Website</div>
                  <p>A business, which is yet to explore the entire marketplaces, needs website design to portray it as a brand.</p>
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <i className="fas fa-window-restore"></i>
                  <div className="text">Corporate Website</div>
                  <p>The website, which is often used as a landing page for advertising purposes, requires high UI and UX development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="max-width">
          <h2 className="title">My skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My creative skills & experiences.</div>
              <ul>
                <li>Increased customer satisfaction by resolving issues.</li>
                <li>Learned new skills and applied to daily tasks to improve efficiency and productivity. </li>
                <li>Worked flexible hours across night, weekend and holiday shifts.</li>
                <li>Used critical thinking to break down problems, evaluate solutions and make decisions.</li>
                <li>Adhered to social distancing protocols and wore mask or face shield.</li>
                <li>Maintained excellent attendance record, consistently arriving to work on time.</li>
                <li>Identified issues, analyzed information and provided solutions to problems.</li>
                <li>Worked to maintain outstanding attendance record, consistently arriving to work ready to start immediately.</li>
                <li>Worked with customers to understand needs and provide excellent service</li>
              </ul>
              {/* <p>Having good interpersonal skills is important to be successful as a web developer, as this role requires interacting with clients and colleagues regularly. I will have positive body language and a strong work ethic. If i can get along with people well, I will communicate well with our colleagues and clients and perform well in my role.</p> 
              <a href="#.">Read more</a>  */}
            </div>
            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>React.js</span>
                  <span>80%</span>
                </div>
                <div className="line react"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Redux</span>
                  <span>80%</span>
                </div>
                <div className="line redux"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>80%</span>
                </div>
                <div className="line js"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>CSS</span>
                  <span>90%</span>
                </div>
                <div className="line css"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Bootstrap</span>
                  <span>90%</span>
                </div>
                <div className="line bootstrap"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Wordpress</span>
                  <span>90%</span>
                </div>
                <div className="line wordpress"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>Responsive Web Development</span>
                  <span>90%</span>
                </div>
                <div className="line responsive"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="teams">
        <div className="max-width">
          <h2 className="title">Other people</h2>
          <div className="carousel owl-carousel">
            <div className="card">
              <div className="box">
                <img src={sumit} alt="" />
                <div className="text">Sumit Singh</div>
                <p>I am really happy with your service, it is exceptional, When I have a question they answer it at once.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={rajan} alt="" />
                <div className="text">Rajan</div>
                <p>I just wanted to say that i'm very impressed with the customer service, skills and dedication.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={aayu} alt="" />
                <div className="text">Aayu</div>
                <p>I will surely refer you to any business associates who are looking for quality web developer!</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={sourabh} alt="" />
                <div className="text">Sourabh Singh</div>
                <p>I was very impressed with the quality of work, customer care, and meticulous attention to detail.</p>
              </div>
            </div>
            {/* <div className="card">
              <div className="box">
                <img src="images/ankit.webp" alt="" />
                  <div className="text">Ankit Chahal</div>
                  <p>He has created 4 different websites for my companies; all with excellent results.</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>



      <section className="projects">
        <div className="max-width">
          <h2 className="title">My projects</h2>
          <div className="carousel owl-carousel">
            <div className="card">
              <a target="_brijes" href="https://aimsindia.com/asian-advanced-heart-centre/">
                <div className="box">
                  <img src={asianHeart} alt="" />
                  <div className="text">Asian Advanced Heart Center</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://www.aimsindia.com/asian-centre-for-urology-and-kidney-transplant/">
                <div className="box">
                  <img src={asianUrology} alt="" />
                  <div className="text">Asian Kidney Transplant</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://asiantalent.aimsindia.com/asian-talent-hunt.php">
                <div className="box">
                  <img src={asiantalent} alt="" />
                  <div className="text">Asian Talent Hunt</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://uflexmoulding.com/">
                <div className="box">
                  <img src={uflex} alt="" />
                  <div className="text">Uflex Moulding</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://gdxgroup.in/">
                <div className="box">
                  <img src={gdxgroup} alt="" />
                  <div className="text">GDX Group</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://www.netkarma.ca/zoho-authorized-partner/">
                <div className="box">
                  <img src={netkarmaZoho} alt="" />
                  <div className="text">Netkarma ZOHO Authorised</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://www.netkarma.ca/cdap/">
                <div className="box">
                  <img src={netkarmaCdap} alt="" />
                  <div className="text">Netkarma CDAP Advisor</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://www.qraahealth.com/">
                <div className="box">
                  <img src={qraahealth} alt="" />
                  <div className="text">Qraa Health</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://behlmach.com/">
                <div className="box">
                  <img src={behlmach} alt="" />
                  <div className="text">Behlmach</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="http://poojaforgeltd.com/">
                <div className="box">
                  <img src={poojaforge} alt="" />
                  <div className="text">Pooja Forge Ltd.</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://tamansinghlaw.com/">
                <div className="box">
                  <img src={tamansinghlaw} alt="" />
                  <div className="text">Taman Singh Law</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="http://plazatimes.com/">
                <div className="box">
                  <img src={plazatimes} alt="" />
                  <div className="text">Plaza Times</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://roopkoepp.com/">
                <div className="box">
                  <img src={roopkoepp} alt="" />
                  <div className="text">Roop Koepp</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://kleenoilindia.com/">
                <div className="box">
                  <img src={kleenoilindia} alt="" />
                  <div className="text">Kleenoil India</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="http://starnea.in/">
                <div className="box">
                  <img src={starnea} alt="" />
                  <div className="text">Starnea Furniture</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="http://foracepolymers.net/">
                <div className="box">
                  <img src={foracegroup} alt="" />
                  <div className="text">Forace Group</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://www.energizedsolutions.org/">
                <div className="box">
                  <img src={energizedSolu} alt="" />
                  <div className="text">Energized Solutions</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="http://ryonan.co.in/">
                <div className="box">
                  <img src={ryonan} alt="" />
                  <div className="text">Ryonan</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://www.astiindia.com/">
                <div className="box">
                  <img src={astiindia} alt="" />
                  <div className="text">ASTI Electronics India</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://www.heatmaxindia.com/">
                <div className="box">
                  <img src={heatmax} alt="" />
                  <div className="text">Heatmax India</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="http://www.janaksons.com/">
                <div className="box">
                  <img src={janaksons} alt="" />
                  <div className="text">Janaksons</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://www.deltadisplays.com/">
                <div className="box">
                  <img src={deltadisplays} alt="" />
                  <div className="text">Delta Displays</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="http://ionotronics.in/">
                <div className="box">
                  <img src={ionotronicsdigital} alt="" />
                  <div className="text">Ionotronics Digital</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://zenneraquamet.com/">
                <div className="box">
                  <img src={zenner} alt="" />
                  <div className="text">Zenner Aquamet</div>
                </div>
              </a>
            </div>
            <div className="card">
              <a target="_brijes" href="https://willsor.in/">
                <div className="box">
                  <img src={willsor} alt="" />
                  <div className="text">Ambica Polymer</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="google-map">
        <iframe title="myMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1043.5948920592766!2d77.27022496871095!3d28.382397842263835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdf04a73942a1%3A0xe13a529870a2f008!2sBrijesh%20Web%20Designer!5e0!3m2!1sen!2sin!4v1660057611586!5m2!1sen!2sin" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  )
}

export default Main
