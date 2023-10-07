import React from 'react'
import pageBanner from '../images/page-banner.jpg'
import reactIcon from '../images/react-icon-theme.svg'
import reactIconHover from '../images/react-icon-white.svg'

const Services = () => {
  return (<>
    {/* main breadcrump start */}
    <section className="bg-breadcrump p-0">
      <img src={pageBanner} alt="" />
      <div className="breadcrump-main-paent">
        <div className="container">
          <div className="menu-breadcrump">
            <h1>Services</h1>
            <ul>
              <li><a exact="true" href="/">Home</a></li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* main breadcrump end */}
    <section className="services fromServicePage">
      <div className="max-width">
        <h2 className="title">My Services</h2>
        <div className="serv-content">
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
    </section>
  </>)
}

export default Services
