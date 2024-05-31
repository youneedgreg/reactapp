import React, { useEffect } from 'react';
import { setupCarousel } from './Carousel';

export default function Hero() {
  useEffect(() => {
    setupCarousel();

    // Cleanup function to remove event listeners if needed
    return () => {
      const nextDom = document.getElementById('next');
      const prevDom = document.getElementById('prev');
      if (nextDom) nextDom.onclick = null;
      if (prevDom) prevDom.onclick = null;
    };
  }, []);

  return (
<section
  aria-label="hero"
  className="section hero"
  id="home"
>
  <div className="carousel">
    <div className="list">
    <div className="item">
        <img src="image/img2.jpg" />
        <div className="content">
          <div id="search-bar">
            <input
              placeholder="Search..."
              type="text"
            />
            <select id="location-filter">
              <option value="roysambu">
                Roysambu
              </option>
              <option value="juja">
                Juja
              </option>
              <option value="githurai">
                Githurai
              </option>
            </select>
            <button type="button">
              <i className="fas fa-search" />
            </button>
          </div>
          <div className="author">
            GROOMING
          </div>
          <div className="title">
            LOOK FRESH!
          </div>
          <div className="platter">
            <div className="des">
              Our grooming services cater to both men and women, offering everything from haircuts and styling to manicures and pedicures. With top-notch professionals, you can enjoy a relaxing and rejuvenating experience that leaves you looking your best.
            </div>
            <div className="buttons">
              <button>
                SEE DEALS
              </button>
              <button>
                SEARCH SHOPS
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="image/img1.jpg" />
        <div className="content">
          <div id="search-bar">
            <input
              placeholder="Search..."
              type="text"
            />
            <select id="location-filter">
              <option value="roysambu">
                Roysambu
              </option>
              <option value="juja">
                Juja
              </option>
              <option value="githurai">
                Githurai
              </option>
            </select>
            <button type="button">
              <i className="fas fa-search" />
            </button>
          </div>
          <div className="author">
            SERVICES.
          </div>
          <div className="title">
            ELECTRONIC SERVICING.
          </div>
          <div className="platter">
            <div className="des">
              We offer a wide range of electronic services shops to meet your needs, from repairing your gadgets to setting up home entertainment systems. Our skilled technicians ensure your devices are always running smoothly and efficiently.
            </div>
            <div className="buttons">
              <button>
                SEE DEALS
              </button>
              <button>
                SEARCH SHOPS
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="item">
        <img src="image/img3.jpg" />
        <div className="content">
          <div id="search-bar">
            <input
              placeholder="Search..."
              type="text"
            />
            <select id="location-filter">
              <option value="roysambu">
                Roysambu
              </option>
              <option value="juja">
                Juja
              </option>
              <option value="githurai">
                Githurai
              </option>
            </select>
            <button type="button">
              <i className="fas fa-search" />
            </button>
          </div>
          <div className="author">
            RECREATIONAL CENTERS
          </div>
          <div className="title">
            FEEL FRESH
          </div>
          <div className="platter">
            <div className="des">
              MtaaMall provides an array of recreational services, including fitness classes, sports activities, and leisure events. Whether you're looking to stay fit or unwind after a long day, our offerings are designed to keep you active and entertained.
            </div>
            <div className="buttons">
              <button>
                SEE DEALS
              </button>
              <button>
                SEARCH SHOPS
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="image/img4.jpg" />
        <div className="content">
          <div id="search-bar">
            <input
              placeholder="Search..."
              type="text"
            />
            <select id="location-filter">
              <option value="roysambu">
                Roysambu
              </option>
              <option value="juja">
                Juja
              </option>
              <option value="githurai">
                Githurai
              </option>
            </select>
            <button type="button">
              <i className="fas fa-search" />
            </button>
          </div>
          <div className="author">
            EATERIES
          </div>
          <div className="title">
            HEALTHY LIVING
          </div>
          <div className="platter">
            <div className="des">
              Discover a variety of eateries at MtaaMall, from fast food to gourmet dining. Our food courts and restaurants serve delicious meals and snacks, ensuring you have plenty of options to satisfy your culinary cravings while you shop.
            </div>
            <div className="buttons">
              <button>
                SEE DEALS
              </button>
              <button>
                SEARCH SHOPS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="thumbnail">
      <div className="item">
        <img src="image/img1.jpg" />
        <div className="content">
          <div className="title">
            SERVICES
          </div>
          <div className="description">
            1.1.1.1.1
          </div>
        </div>
      </div>
      <div className="item">
        <img src="image/img2.jpg" />
        <div className="content">
          <div className="title">
            GROOMING SERVICES
          </div>
          <div className="description">
            2.2.2.2.2
          </div>
        </div>
      </div>
      <div className="item">
        <img src="image/img3.jpg" />
        <div className="content">
          <div className="title">
            RECREATIONAL CENTERS
          </div>
          <div className="description">
            2.2.2.2.2
          </div>
        </div>
      </div>
      <div className="item">
        <img src="image/img4.jpg" />
        <div className="content">
          <div className="title">
            EATERIES
          </div>
          <div className="description">
            2.2.2.2.2
          </div>
        </div>
      </div>
    </div>
    <div className="arrows">
      <button id="prev">
        {`<`}
      </button>
      <button id="next">
        {`>`}
      </button>
    </div>
    <div className="time" />
  </div>
</section>
  );
}
