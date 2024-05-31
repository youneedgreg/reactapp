import React from 'react'
import './style.css'

export default function Shop() {
  return (
<section
  aria-label="shop"
  className="section shop"
  id="shop"
>
  <div className="container">
    <div className="title-wrapper">
      <h2 className="h2 section-title">
        Our Verified Stores.
      </h2>
      <a
        className="btn-link"
        href="#"
      >
        <span className="span">
          Check out all stores.
        </span>
        <ion-icon
          aria-hidden="true"
          name="arrow-forward"
        />
      </a>
    </div>
    <ul className="has-scrollbar">
      <li className="scrollbar-item">
        <div className="shop-card">
          <div
            className="card-banner img-holder"
            style={{
              '--height': '720',
              '--width': '540'
            }}
          >
            <img
              alt="Facial cleanser"
              className="img-cover"
              height="720"
              loading="lazy"
              src="./assets/images/product-1.jpg"
              width="540"
            />
            <div className="card-actions">
              <button
                aria-label="add to cart"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="bag-handle-outline"
                />
              </button>
              <button
                aria-label="add to whishlist"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="star-outline"
                />
              </button>
              <button
                aria-label="compare"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="repeat-outline"
                />
              </button>
            </div>
          </div>
          <div className="card-content">
            <h3>
              <a
                className="card-title"
                href="#"
              >
                States Barbershop.
              </a>
            </h3>
            <div className="card-rating">
              <div
                aria-label="5 start rating"
                className="rating-wrapper"
              >
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
              </div>
              <p className="rating-text">
                5170 reviews
              </p>
            </div>
          </div>
        </div>
      </li>
      <li className="scrollbar-item">
        <div className="shop-card">
          <div
            className="card-banner img-holder"
            style={{
              '--height': '720',
              '--width': '540'
            }}
          >
            <img
              alt="Bio-shroom Rejuvenating Serum"
              className="img-cover"
              height="720"
              loading="lazy"
              src="./assets/images/product-2.jpg"
              width="540"
            />
            <div className="card-actions">
              <button
                aria-label="add to cart"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="bag-handle-outline"
                />
              </button>
              <button
                aria-label="add to whishlist"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="star-outline"
                />
              </button>
              <button
                aria-label="compare"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="repeat-outline"
                />
              </button>
            </div>
          </div>
          <div className="card-content">
            <h3>
              <a
                className="card-title"
                href="#"
              >
                Burger King
              </a>
            </h3>
            <div className="card-rating">
              <div
                aria-label="5 start rating"
                className="rating-wrapper"
              >
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
              </div>
              <p className="rating-text">
                5170 reviews
              </p>
            </div>
          </div>
        </div>
      </li>
      <li className="scrollbar-item">
        <div className="shop-card">
          <div
            className="card-banner img-holder"
            style={{
              '--height': '720',
              '--width': '540'
            }}
          >
            <img
              alt="Coffee Bean Caffeine Eye Cream"
              className="img-cover"
              height="720"
              loading="lazy"
              src="./assets/images/product-03.jpg"
              width="540"
            />
            <div className="card-actions">
              <button
                aria-label="add to cart"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="bag-handle-outline"
                />
              </button>
              <button
                aria-label="add to whishlist"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="star-outline"
                />
              </button>
              <button
                aria-label="compare"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="repeat-outline"
                />
              </button>
            </div>
          </div>
          <div className="card-content">
            <h3>
              <a
                className="card-title"
                href="#"
              >
                Chimec bar
              </a>
            </h3>
            <div className="card-rating">
              <div
                aria-label="5 start rating"
                className="rating-wrapper"
              >
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
              </div>
              <p className="rating-text">
                5170 reviews
              </p>
            </div>
          </div>
        </div>
      </li>
      <li className="scrollbar-item">
        <div className="shop-card">
          <div
            className="card-banner img-holder"
            style={{
              '--height': '720',
              '--width': '540'
            }}
          >
            <img
              alt="Facial cleanser"
              className="img-cover"
              height="720"
              loading="lazy"
              src="./assets/images/product-04.jpg"
              width="540"
            />
            <div className="card-actions">
              <button
                aria-label="add to cart"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="bag-handle-outline"
                />
              </button>
              <button
                aria-label="add to whishlist"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="star-outline"
                />
              </button>
              <button
                aria-label="compare"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="repeat-outline"
                />
              </button>
            </div>
          </div>
          <div className="card-content">
            <h3>
              <a
                className="card-title"
                href="#"
              >
                Elite Repairs
              </a>
            </h3>
            <div className="card-rating">
              <div
                aria-label="5 start rating"
                className="rating-wrapper"
              >
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
              </div>
              <p className="rating-text">
                5170 reviews
              </p>
            </div>
          </div>
        </div>
      </li>
      <li className="scrollbar-item">
        <div className="shop-card">
          <div
            className="card-banner img-holder"
            style={{
              '--height': '720',
              '--width': '540'
            }}
          >
            <img
              alt="Coffee Bean Caffeine Eye Cream"
              className="img-cover"
              height="720"
              loading="lazy"
              src="./assets/images/product-05.jpg"
              width="540"
            />
            <div className="card-actions">
              <button
                aria-label="add to cart"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="bag-handle-outline"
                />
              </button>
              <button
                aria-label="add to whishlist"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="star-outline"
                />
              </button>
              <button
                aria-label="compare"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="repeat-outline"
                />
              </button>
            </div>
          </div>
          <div className="card-content">
            <h3>
              <a
                className="card-title"
                href="#"
              >
                Pixman Photography
              </a>
            </h3>
            <div className="card-rating">
              <div
                aria-label="5 start rating"
                className="rating-wrapper"
              >
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
              </div>
              <p className="rating-text">
                5170 reviews
              </p>
            </div>
          </div>
        </div>
      </li>
      <li className="scrollbar-item">
        <div className="shop-card">
          <div
            className="card-banner img-holder"
            style={{
              '--height': '720',
              '--width': '540'
            }}
          >
            <img
              alt="Facial cleanser"
              className="img-cover"
              height="720"
              loading="lazy"
              src="./assets/images/product-06.jpg"
              width="540"
            />
            <div className="card-actions">
              <button
                aria-label="add to cart"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="bag-handle-outline"
                />
              </button>
              <button
                aria-label="add to whishlist"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="star-outline"
                />
              </button>
              <button
                aria-label="compare"
                className="action-btn"
              >
                <ion-icon
                  aria-hidden="true"
                  name="repeat-outline"
                />
              </button>
            </div>
          </div>
          <div className="card-content">
            <h3>
              <a
                className="card-title"
                href="#"
              >
                Carrefour
              </a>
            </h3>
            <div className="card-rating">
              <div
                aria-label="5 start rating"
                className="rating-wrapper"
              >
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
                <ion-icon
                  aria-hidden="true"
                  name="star"
                />
              </div>
              <p className="rating-text">
                5170 reviews
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>
  )
}
