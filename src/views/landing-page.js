import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import OutlineButton from '../components/outline-button'
import PlaceCard from '../components/place-card'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>DJTravelsGlobal</title>
        <meta property="og:title" content="DJTravelsGlobal" />
      </Helmet>
      <div className="landing-page-top-container">
        <nav data-role="Header" className="landing-page-navbar">
          <img
            alt="image"
            src="/logo2-transformed-removebg-preview-200h.png"
            className="landing-page-image"
          />
          <div className="landing-page-right-side">
            <div className="landing-page-links-container">
              <Link to="/" className="landing-page-navlink">
                Home
              </Link>
              <span className="landing-page-text">About</span>
              <span className="landing-page-text01">Cruise Packages</span>
              <span className="landing-page-text02">90-Ticker Deals</span>
            </div>
            <a href="#main-section" className="landing-page-link">
              <SolidButton button="BOOK NOW"></SolidButton>
            </a>
          </div>
          <div data-role="BurgerMenu" className="landing-page-burger-menu">
            <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="landing-page-mobile-menu">
            <div className="landing-page-nav">
              <div className="landing-page-top">
                <h1>Travel</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="landing-page-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="landing-page-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="landing-page-right-side1">
                <div className="landing-page-links-container1">
                  <span className="landing-page-text03">Home</span>
                  <span className="landing-page-text04">About</span>
                  <span className="landing-page-text05">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="landing-page-link01">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="landing-page-follow-container">
              <span className="landing-page-text07">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="landing-page-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link02"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="landing-page-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link03"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="landing-page-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link04"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="landing-page-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="landing-page-hero">
          <div className="landing-page-content-container">
            <h1 className="Heading landing-page-text08">Exclusive Deals</h1>
            <h2 className="Subheading landing-page-subheading">Getaway now</h2>
            <SolidButton button="Explore DEALS"></SolidButton>
            <span className="landing-page-text09">.</span>
          </div>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <h1>Top Cruise Line DEALS</h1>
        <span className="landing-page-text11">Exclusive Offers</span>
        <div className="landing-page-cards-container Button">
          <div className="landing-page-container1">
            <img
              alt="image"
              src="/celebrity-cruises-3-logo-png-transparent-300h.png"
              className="landing-page-image1"
            />
            <div className="landing-page-container2">
              <span className="landing-page-text12">Celebrity Cruises</span>
              <span className="landing-page-text13">
                Elevating luxury at sea, Celebrity Cruises offers modern
                sophistication. Gourmet dining, spacious accommodations, and
                personalized service are accompanied by unique features like
                rooftop terraces and immersive entertainment.
              </span>
              <a
                href="https://www.djtravelsglobal.com/celebrity-cruises"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link05"
              >
                <OutlineButton
                  button1="Discover place"
                  className="landing-page-component3"
                ></OutlineButton>
              </a>
            </div>
          </div>
          <a
            href="https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&amp;USD[%E2%80%A6]lors=2&amp;toDate=2022-10-04&amp;agentId=20324&amp;agencyId=450"
            target="_blank"
            rel="noreferrer noopener"
            className="landing-page-link06"
          >
            <PlaceCard
              city="Virgin Voyages"
              image="/virgin_voyages_logo-300h.jpg"
              image_alt="50px"
              description="With the hottest itineraries and ships at sea, Virgin is redefining luxury cruises for adults with a modern and rebellious flair, featuring stylish design, immersive entertainment, and a focus on wellness."
              rootClassName="place-card-root-class-name"
              className="landing-page-virgin"
            ></PlaceCard>
          </a>
          <PlaceCard
            city="Royal Caribbean"
            image="/rc-300h.jpg"
            description="Known for innovative ship designs and onboard attractions like rock-climbing walls, surf simulators, and Broadway-style entertainment. Offers a variety of itineraries to popular destinations.."
          ></PlaceCard>
          <PlaceCard
            city="Princess Cruises"
            image="/pcl_logo_lg-300h.jpg"
            description=" Embracing the traditional charm of cruising, Princess Cruises provides a balanced mix of relaxation and entertainment. Passengers can indulge in exquisite cuisine, enjoy captivating live performances, and explore diverse ports of call."
            rootClassName="place-card-root-class-name1"
          ></PlaceCard>
          <PlaceCard
            city="Norwegian Cruise Line"
            image="/ad1e1b13677111.56276c4308346-300h.png"
            description='At the forefront of "freestyle cruising," Norwegian allows passengers to dine and entertain as they please. Their ships are plentiful with, Broadway-caliber performances, and unique amenities like onboard go-karts and virtual reality experiences.'
          ></PlaceCard>
          <PlaceCard
            city="Carnival"
            image="/carnival-300h.jpg"
            description="A vibrant and festive cruise experience awaits on Carnival ships. Packed with energetic entertainment, from water parks and Broadway-style shows to themed parties, they're a popular choice for those seeking fun-filled vacations without breaking the bank."
          ></PlaceCard>
        </div>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-menu">
          <a href="tel:813-438-6069" className="landing-page-link07">
            <h2 className="landing-page-logo1">
              <span>PHONE</span>
              <br></br>
            </h2>
          </a>
          <div className="landing-page-links-container2">
            <div className="landing-page-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link08"
              >
                Tour packages
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link09"
              >
                Personalized offers
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link10"
              >
                Special deals
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link11"
              >
                <span>DINK Specials;)</span>
                <br></br>
              </a>
            </div>
            <div className="landing-page-container4">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link12"
              >
                About us
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link13"
              >
                FAQ
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link14"
              >
                Terms and conditions
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link15"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="landing-page-follow-container1">
            <span className="landing-page-text18">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="landing-page-icons-container1">
              <a
                href="https://instagram.com/djtravelsglobal"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link16"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="landing-page-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
