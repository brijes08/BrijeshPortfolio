import React from 'react'
import pageBanner from '../images/page-banner.jpg'

const ThankYou = () => {
    return (
        <>
            {/* main breadcrump start */}
            <section className="bg-breadcrump p-0">
                <img src={pageBanner} alt="" />
                    <div className="breadcrump-main-paent">
                        <div className="container">
                            <div className="menu-breadcrump">
                                <h1>Thank You</h1>
                                {/* <ul>
                                    <li><a href="<?php// echo site_url();?>">Home</a></li>
                                    <li><?php// the_title(); ?></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
            </section>
            {/* main breadcrump end */}

            <section className="thank-you-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-content thank">
                                <h3>Thank You for Contacting Me!</h3>
                                <h5>I have received your message and would like to thank you for writing to me. If your inquiry is
                                    urgent, please use the mobile number listed below to talk to me.</h5>
                                <ul>
                                    <li>Call @
                                        <span><a href="tel:+918285354511">+91 8285354511</a></span>
                                    </li>
                                </ul>
                                <div className="thank-info">
                                    <h4>I will reply by email as soon as possible.</h4>
                                    <p>Talk to you soon!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThankYou
