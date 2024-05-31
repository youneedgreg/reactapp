import React from 'react';
import './style.css'

export default function Blog() {
  return (
<section
  aria-label="blog"
  className="section blog"
  id="blog"
>
  <div className="container">
    <h2 className="h2-large section-title">
      More to Discover
    </h2>
    <ul className="flex-list">
      <li className="flex-item">
        <div className="blog-card">
          <figure
            className="card-banner img-holder has-before hover:shine"
            style={{
              '--height': '450',
              '--width': '700'
            }}
          >
            <img
              alt="Find a Store"
              className="img-cover"
              height="450"
              loading="lazy"
              src="./assets/images/blog-1.jpg"
              width="700"
            />
          </figure>
          <h3 className="h3">
            <a
              className="card-title"
              href="#"
            >
              Find a Store
            </a>
          </h3>
          <a
            className="btn-link"
            href="#"
          >
            <span className="span">
              Find Stores
            </span>
            <ion-icon
              aria-hidden="true"
              name="arrow-forward-outline"
            />
          </a>
        </div>
      </li>
      <li className="flex-item">
        <div className="blog-card">
          <figure
            className="card-banner img-holder has-before hover:shine"
            style={{
              '--height': '450',
              '--width': '700'
            }}
          >
            <img
              alt="From Our Blog"
              className="img-cover"
              height="450"
              loading="lazy"
              src="./assets/images/blog-2.jpg"
              width="700"
            />
          </figure>
          <h3 className="h3">
            <a
              className="card-title"
              href="#"
            >
              From Our Patners
            </a>
          </h3>
          <a
            className="btn-link"
            href="#"
          >
            <span className="span">
              Find Stores.
            </span>
            <ion-icon
              aria-hidden="true"
              name="arrow-forward-outline"
            />
          </a>
        </div>
      </li>
      <li className="flex-item">
        <div className="blog-card">
          <figure
            className="card-banner img-holder has-before hover:shine"
            style={{
              '--height': '450',
              '--width': '700'
            }}
          >
            <img
              alt="Our Story"
              className="img-cover"
              height="450"
              loading="lazy"
              src="./assets/images/blog-4.jpg"
              width="700"
            />
          </figure>
          <h3 className="h3">
            <a
              className="card-title"
              href="#"
            >
              Best deals
            </a>
          </h3>
          <a
            className="btn-link"
            href="#"
          >
            <span className="span">
              Find Stores.
            </span>
            <ion-icon
              aria-hidden="true"
              name="arrow-forward-outline"
            />
          </a>
        </div>
      </li>
    </ul>
  </div>
</section>

  )
}
