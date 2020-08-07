import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <footer id="footer">{/*Footer*/}
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-sm-2">
          <div className="companyinfo">
            <h2><span>SM</span>-Sammy Books</h2>
            <p>Bring knowledge for human</p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-widget">
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <div className="single-widget">
              <h2>Về Sammy Books</h2>
              <ul className="nav nav-pills nav-stacked">
                <li><a href="#">Online Help</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Change Location</a></li>
                <li><a href="#">FAQ’s</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="single-widget">
              <h2>Categories</h2>
              <ul className="nav nav-pills nav-stacked">
                <li><a href="#">T-Shirt</a></li>
                <li><a href="#">Mens</a></li>
                <li><a href="#">Womens</a></li>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Shoes</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="single-widget">
              <h2>Quy định và thanh toán</h2>
              <ul className="nav nav-pills nav-stacked">
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privecy Policy</a></li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">Billing System</a></li>
                <li><a href="#">Ticket System</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="single-widget">
              <h2>About Shopper</h2>
              <ul className="nav nav-pills nav-stacked">
                <li><a href="#">Company Information</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Store Location</a></li>
                <li><a href="#">Affillate Program</a></li>
                <li><a href="#">Copyright</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3 col-sm-offset-1">
            <div className="single-widget">
              <h2>Đăng ký nhận tin</h2>
              <form action="#" className="searchform">
                <input type="text" placeholder="Your email address" />
                <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right" /></button>
                <p>Get the most recent updates from <br />our site and be updated your self...</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <p className="pull-left">Copyright © 2020 Sammy Books. All rights reserved.</p>
          <p className="pull-right">Designed by <span><a target="_blank" href>Yên Trần</a></span></p>
        </div>
      </div>
    </div>
  </div></footer>

    )
}

Footer.propTypes = {

}

export default Footer
