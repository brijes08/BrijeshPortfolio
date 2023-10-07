import React from 'react'
import pageBanner from '../images/page-banner.jpg'

const Skills = () => {
  return (<>
    {/* main breadcrump start */}
    <section className="bg-breadcrump p-0">
      <img src={pageBanner} alt="" />
      <div className="breadcrump-main-paent">
        <div className="container">
          <div className="menu-breadcrump">
            <h1>Skills</h1>
            <ul>
                  <li><a exact="true" href="/">Home</a></li>
                  <li>Skills</li>
                </ul>
          </div>
        </div>
      </div>
    </section>
    {/* main breadcrump end */}
    <section className="skills">
        <div className="max-width">
          <h2 className="title">My Skills</h2>
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
  </>)
}

export default Skills
