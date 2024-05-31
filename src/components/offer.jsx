import React from 'react'

export default function offer() {
  return (
<section
  aria-label="offer"
  className="section offer"
  id="offer"
>
  <div className="container">
    <figure className="offer-banner">
      <img
        alt="offer products"
        className="w-100"
        height="408"
        loading="lazy"
        src="./assets/images/product-1.jpg"
        width="305"
      />
      <img
        alt="offer products"
        className="w-100"
        height="625"
        loading="lazy"
        src="./assets/images/offer-banner-2.jpg"
        width="450"
      />
    </figure>
    <div className="offer-content">
      <p className="offer-subtitle">
        <span className="span">
          Special Offer
        </span>
      </p>
      <h2 className="h2-large section-title">
        States Barbershop.
      </h2>
      <p className="section-text">
        Fresh, clean looks and cuts for everyone.
      </p>
      <div className="countdown">
        <span
          aria-label="days"
          className="time"
        >
          15
        </span>
        <span
          aria-label="hours"
          className="time"
        >
          21
        </span>
        <span
          aria-label="minutes"
          className="time"
        >
          46
        </span>
        <span
          aria-label="seconds"
          className="time"
        >
          08
        </span>
      </div>
      <a
        className="btn btn-primary"
        href="#"
      >
        All services with 20% discount
      </a>
    </div>
  </div>
</section>
  )
}
