import React from 'react'

export default function features() {
  return (
<section
  aria-label="feature"
  className="section feature"
>
  <div className="container">
    <h2 className="h2-large section-title">
      Why transact with MtaaMall?
    </h2>
    <ul className="flex-list">
      <li className="flex-item">
        <div className="feature-card">
          <img
            alt="Guaranteed PURE"
            className="card-icon"
            height="236"
            loading="lazy"
            src="./assets/images/feature-1.png"
            width="204"
          />
          <h3 className="h3 card-title">
            24/7 support
          </h3>
          <p className="card-text">
            Get high tech support and help from our highly eager team and engage with zero stress.
          </p>
        </div>
      </li>
      <li className="flex-item">
        <div className="feature-card">
          <img
            alt="Completely Cruelty-Free"
            className="card-icon"
            height="236"
            loading="lazy"
            src="./assets/images/feature-2.jpeg"
            width="204"
          />
          <h3 className="h3 card-title">
            Verified
          </h3>
          <p className="card-text">
            All our stores have been verified and work in accordance with our terms and conditions.
          </p>
        </div>
      </li>
      <li className="flex-item">
        <div className="feature-card">
          <img
            alt="Ingredient Sourcing"
            className="card-icon"
            height="236"
            loading="lazy"
            src="./assets/images/feature-3.jpg"
            width="204"
          />
          <h3 className="h3 card-title">
            Value
          </h3>
          <p className="card-text">
            Get the best value for your hard earned money at mtaamall with our satisfaction over profit policy.
          </p>
        </div>
      </li>
    </ul>
  </div>
</section>
  )
}
