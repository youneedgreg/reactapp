import React from 'react'

export default function Collection() {
  return (
<section
  aria-label="collection"
  className="section collection"
  id="collection"
>
  <div className="container">
    <ul className="collection-list">
      <li>
        <div className="collection-card has-before hover:shine">
          <h2 className="h2 card-title">
            Verified shops
          </h2>
          <p className="card-text">
            All our verified shops
          </p>
          <a
            className="btn-link"
            href="#"
          >
            <span className="span">
              Check out
            </span>
            <ion-icon
              aria-hidden="true"
              name="arrow-forward"
            />
          </a>
          <div
            className="has-bg-image"
            style={{
              backgroundImage: 'url(\'./assets/images/collection-1.jpg\')'
            }}
          />
        </div>
      </li>
      <li>
        <div className="collection-card has-before hover:shine">
          <h2 className="h2 card-title">
            Hot Deals
          </h2>
          <p className="card-text">
            All mall hot deals
          </p>
          <a
            className="btn-link"
            href="#"
          >
            <span className="span">
              Get the best value for your money
            </span>
            <ion-icon
              aria-hidden="true"
              name="arrow-forward"
            />
          </a>
          <div
            className="has-bg-image"
            style={{
              backgroundImage: 'url(\'./assets/images/collection-2.jpeg\')'
            }}
          />
        </div>
      </li>
      <li>
        <div className="collection-card has-before hover:shine">
          <h2 className="h2 card-title">
            Stock Clearance
          </h2>
          <p className="card-text">
            Clear stocks at best prices
          </p>
          <a
            className="btn-link"
            href="#"
          >
            <span className="span">
              Rush onboard
            </span>
            <ion-icon
              aria-hidden="true"
              name="arrow-forward"
            />
          </a>
          <div
            className="has-bg-image"
            style={{
              backgroundImage: 'url(\'./assets/images/collection-3.jpg\')'
            }}
          />
        </div>
      </li>
    </ul>
  </div>
</section>
  )
}
