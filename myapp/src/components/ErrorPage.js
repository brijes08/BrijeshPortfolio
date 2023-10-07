import React from 'react'
import pageBanner from '../images/page-banner.jpg'

const ErrorPage = () => {
  return (
    <>

      {/* main breadcrump start */}
      <section className="bg-breadcrump p-0">
        <img src={pageBanner} alt="" />
        <div className="breadcrump-main-paent">
          <div className="container">
            <div className="menu-breadcrump">
              <h1>Error!</h1>
              {/* <ul>
				          	<li><a href="<?php// echo site_url();?>">Home</a></li>
					          <li><?php// the_title(); ?></li>
				      </ul> */}
            </div>
          </div>
        </div>
      </section>

      {/* main breadcrump end */}
      <section className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="text-center page404">
                <h1 className="titleerr">404</h1>
                <h3>The requested page cannot be found!</h3>
                <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
                <a exact="true" href="/" className="single_button">Back to Home</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ErrorPage
