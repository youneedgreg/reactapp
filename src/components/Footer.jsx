import React from 'react'
import './style.css'

export default function Header() {
  return(
    <footer
  className="footer"
  
>
  <div className="container">
    <div className="footer-top">
      <ul className="footer-list">
        <li>
          <p className="footer-list-title">
            Store Locations
          </p>
        </li>
        <li>
          <p className="footer-list-text">
            Find a location nearest you. See{' '}
            <a
              className="link"
              href="#"
            >
              Our Stores
            </a>
          </p>
        </li>
        <li>
          <p className="footer-list-text bold">
            +254 759442583
          </p>
        </li>
        <li>
          <p className="footer-list-text">
            mtaamall@gmail.com
          </p>
        </li>
      </ul>
      <ul className="footer-list">
        <li>
          <p className="footer-list-title">
            Useful links
          </p>
        </li>
        <li>
          <a
            className="footer-link"
            href="#"
          >
            Hot deals
          </a>
        </li>
        <li>
          <a
            className="footer-link"
            href="#"
          >
            Verified stores
          </a>
        </li>
        <li>
          <a
            className="footer-link"
            href="#"
          >
            Bundle & Save
          </a>
        </li>
        <li>
          <a
            className="footer-link"
            href="#"
          >
            Loyalty Card
          </a>
        </li>
      </ul>
      <ul className="footer-list">
        <li>
          <p className="footer-list-title">
            Infomation
          </p>
        </li>
        <li>
          <a
            className="footer-link"
            href="#"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            className="footer-link"
            href="#"
          >
            Terms & Conditions
          </a>
        </li>
        <li>
          <a
            className="footer-link"
            href="#"
          >
            Privacy Policy
          </a>
        </li>
      </ul>
      <div className="footer-list">
        <p className="newsletter-title">
          Promo emails.
        </p>
        <p className="newsletter-text">
          Enter your email below to be the first to know about deals about promotions.
        </p>
        <form
          action=""
          className="newsletter-form"
        >
          <input
            className="email-field"
            name="email_address"
            placeholder="Enter your email address"
            required
            type="email"
          />
          <button
            className="btn btn-primary"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="wrapper">
        <p className="copyright">
          © 2024 @gregcodes
        </p>
        <ul className="social-list">
          <li>
            <a
              className="social-link"
              href="#"
            >
              <ion-icon name="logo-twitter" />
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="#"
            >
              <ion-icon name="logo-facebook" />
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="#"
            >
              <ion-icon name="logo-instagram" />
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="#"
            >
              <ion-icon name="logo-youtube" />
            </a>
          </li>
        </ul>
      </div>
      <a
        className="logo"
        href="#"
      >
        <h1>
          MtaaMall
        </h1>
      </a>
    </div>
  </div>
</footer>
  )
}
