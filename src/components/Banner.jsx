import React from 'react'

export default function Banner() {
  return (
<section
  aria-label="banner"
  className="section banner"
 >
  <div className="container">
    <ul className="banner-list">
      <li>
        <div className="banner-card banner-card-1 has-before hover:shine">
          <p className="card-subtitle">
            Verified deals.
          </p>
          <h2 className="h2 card-title">
            Best deals from our verified shops.
          </h2>
          <a
            className="btn btn-secondary"
            href="#"
          >
            Explore More
          </a>
          <div
            className="has-bg-image"
            style={{
              backgroundImage: 'url(\'./assets/images/banner-1.jpg\')'
            }}
          />
        </div>
      </li>
      <li>
        <div className="banner-card banner-card-2 has-before hover:shine">
          <h2 className="h2 card-title">
            Loyalty Tokens
          </h2>
          <p className="card-text">
            Get redeemable loyalty tokens for transacting with us.
          </p>
          <a
            className="btn btn-secondary"
            href="#"
          >
            Shop Sale
          </a>
          <div
            className="has-bg-image"
            style={{
              backgroundImage: 'url(\'./assets/images/banner-2.jpg\')'
            }}
          />
        </div>
      </li>
    </ul>
  </div>
</section>
  )
}
