import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../assets/css/home.css";
import Question from "../component/question";
import Slider from "../component/slider";
import Wpsay from "../component/wpsay";
import VideoPanel from "../component/videoPanel";
import { LOGIN_ROUTE } from "../utils/consts";
import { Link } from "react-router-dom";
const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [funcIsActive, setfuncIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  const funcBox = () => {
    setfuncIsActive((current) => !current);
  };
  console.log(funcIsActive);

  const faqs = [
    {
      question: "What's a Site?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "What can I link to on my Site?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Where can I share my Site?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How do I update my link in my social media bios?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "What if I need more than one Site?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Are Sites free?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: 'What is a "link in bio"?',
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How do I put a link in my Tiktok and Instagram bio?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Where else can I share my link in bio  ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <div className={"container-landing"}>
        <div className="navBar">
          <div className="nav-box">
            <div className="logo-nav">LOGO</div>
            <div className={isActive ? "nav-content active" : "nav-content"}>
              <ul>
                <li>
                  <a href="#team">For Yourself</a>
                </li>
                <li>
                  <a href="#team">For Teams</a>
                </li>
                <li>
                  <a href="#product">Products</a>
                </li>
                <li>
                  <a href="#tutroil">Tutorials</a>
                </li>
              </ul>
            </div>
            <div className="nav-component">
              <select name="select">
                <option value="uz">Uz</option>
                <option value="ru"> Ru</option>
                <option value="en">En</option>
              </select>

              <Link to={LOGIN_ROUTE} className="account">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path
                    d="M8 9C10.525 9 12.5714 6.98555 12.5714 4.5C12.5714 2.01445 10.525 0 8 0C5.475 0 3.42857 2.01445 3.42857 4.5C3.42857 6.98555 5.475 9 8 9ZM6.36786 10.6875C2.85 10.6875 0 13.493 0 16.9559C0 17.5324 0.475 18 1.06071 18H14.9393C15.525 18 16 17.5324 16 16.9559C16 13.493 13.15 10.6875 9.63214 10.6875H6.36786Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <div className="menu" onClick={handleClick}>
                {isActive ? (
                  <svg
                    className={"x"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="25px"
                    height="25px"
                  >
                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="25px"
                    height="25px"
                  >
                    <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="header-box">
          <div className="header-landing">
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block"
                  src={require("../assets/testImg/braslet.png")}
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={require("../assets/testImg/braslet.png")}
                  alt="Second slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={require("../assets/testImg/braslet.png")}
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div> */}
        <VideoPanel />

        <Slider />

        <div className="info">
          <div className="info-box">
            <div className="left-el">
              <img src={require("../assets/img/wristband-duo.png")} alt="" />
            </div>
            <div className="right-el">
              <h1>Create and customize your digital profile in minutes.</h1>
              <p>
                Our product is designed to simplify the way you share all the
                necessary information about yourself with others. No more
                fumbling with business cards or manually typing in contact
                details. With a single click, you can instantly share your
                complete profile, making networking and connecting with others a
                breeze.
              </p>
            </div>
          </div>
        </div>

        <div className="function" id={"team"}>
          <div className="func-box">
            <div className="func-title">
              <h1>Functions that you'll love and need</h1>
              <div className="func-type">
                {funcIsActive ? (
                  <>
                    <div>
                      <h3 onClick={funcBox}>Yourself</h3>
                    </div>
                    <div>
                      <h3 style={{ background: "white" }}>Team</h3>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 style={{ background: "white" }}>Yourself</h3>
                    </div>
                    <div>
                      <h3 onClick={funcBox}>Team</h3>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="func-content">
              <div className="func-box-content">
                {funcIsActive ? (
                  <div className="func-left">
                    <div className="func-left-el">
                      <h1>Sustainable</h1>
                      <p>
                        When an employee leaves, you can reuse the card with new
                        employees, reducing waste and costs.
                      </p>
                    </div>
                    <div className="func-left-el">
                      <h1>Track your cards</h1>
                      <p>
                        Track your analytics and the number of people who have
                        viewed profiles to generate more leads.
                      </p>
                    </div>
                    <div className="func-left-el">
                      <h1>Stand out with innovation </h1>
                      <p>
                        Whatever you do, whatever you're into. Share it and
                        engage your audience by unifying them in one place, all
                        from the link in the bio.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="func-left">
                    <div className="func-left-el">
                      <h1>Share the way you want</h1>
                      <p>
                        You can share your profile and content in multiple ways,
                        including NFC tap, QR code, or Link through the
                        internet.
                      </p>
                    </div>
                    <div className="func-left-el">
                      <h1>Save paper cards</h1>
                      <p>
                        Take photo of paper cards handed to you in the events
                        and save them in the app, keep all cards in one place.
                      </p>
                    </div>
                    <div className="func-left-el">
                      <h1>Manage your profile</h1>
                      <p>
                        Edit, update, and schedule content with our quick, easy
                        editor and seamlessly connect your Site with the tools
                        you already use.
                      </p>
                    </div>
                  </div>
                )}
                {funcIsActive ? (
                  <div className="func-right">
                    <img
                      src={require("../assets/img/wristband-trio.png")}
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="func-right">
                    <img src={require("../assets/img/wristband.png")} alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="launch" id={"tutroil"}>
          <h1 className={"launch-h1"}>Launch your online profile today</h1>

          <div className="launch-box">
            <div className="launch-item">
              <div className="launch-step">
                <h3>STEP 01</h3>
              </div>
              <div className="launch-titel">
                <h1>Click on the 'Get started' button and fill out the form</h1>
              </div>
              <div className="launch-text">
                <p>
                  Choose the product you like and provide minimal information
                  such as your name, email, phone number, and job title to get
                  started.
                </p>
              </div>
            </div>
            <div className="launch-item">
              <div className="launch-step">
                <h3>STEP 02</h3>
              </div>
              <div className="launch-titel">
                <h1>Set up your profile</h1>
              </div>
              <div className="launch-text">
                <p>
                  Enter our web platform to add all additional information and
                  add your style to your profile. It all comes together in a
                  link designed in the landing page format.
                </p>
              </div>
            </div>
            <div className="launch-item">
              <div className="launch-step">
                <h3>STEP 03</h3>
              </div>
              <div className="launch-titel">
                <h1>All set and ready!</h1>
              </div>
              <div className="launch-text">
                <p>
                  The web platform allows you to store and edit your profile,
                  and in an offline gathering, you can easily share your
                  business card in one click with our product.
                </p>
              </div>
            </div>
          </div>
          <div className="launch-btn">
            <a href="#">Get started today</a>
          </div>
        </div>

        <div className="info" id={"product"}>
          <div className="info-box">
            <div className="left-el">
              <img
                src={require("../assets/img/wristband-reverse.png")}
                alt=""
              />
            </div>
            <div className="right-el">
              <h1>Our goal is to make our world more greener than ever!</h1>
              <p>
                Join us in our mission to create a greener world by embracing
                the our product. Say goodbye to wasteful paper business cards
                and join the sustainable revolution. With our product, you can
                instantly exchange your profile information, making networking
                eco-friendly and efficient. You can make a positive impact on
                the environment while effortlessly sharing your profile.
              </p>
            </div>
          </div>
        </div>

        <div className="faq">
          <h1>Frequently asked questions</h1>
          <div //flex flex-col gap-8 items-start justify-start max-w-[766px] w-full
            className="faq-container"
          >
            {faqs.map((faq, index) => (
              <Question
                // deleted this:  gap-8
                // bg-gray-100 flex flex-col items-center justify-center p-8 sm:px-5 rounded-[28px] w-full
                className="faq-item"
                faq={faq}
                key={index}
              />
            ))}
          </div>
        </div>
        <Wpsay />
        <footer style={{ fontFamily: "Rubik" }}>
          <div className="footer-container">
            <div className="footer-main">
              <div className="footer-text">
                <div className="footer-text-content" size="txtRubikRegular16">
                  One place for all yout paper cards, digital profiles, social
                  media, products, and analytics, all you need is one click
                  away!
                </div>
              </div>
              <div className="footer-links">
                <div className="footer-links-column">
                  <div className="footer-links-header" size="txtRubikMedium24">
                    Links
                  </div>
                  <ul className="footer-links-list">
                    <li>
                      <a href="javascript:" className="footer-link">
                        <div
                          className="footer-list-item"
                          size="txtRubikRegular16"
                        >
                          Product
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="footer-link">
                        <div
                          className="footer-list-item"
                          size="txtRubikRegular16"
                        >
                          FAQs
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="footer-link">
                        <div
                          className="footer-list-item"
                          size="txtRubikRegular16"
                        >
                          Blog
                        </div>
                      </a>
                    </li>
                    {/* <li>
                      <a href="javascript:" className="footer-link">
                        <div
                          className="footer-list-item"
                          size="txtRubikRegular16"
                        >
                          Blog
                        </div>
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div className="footer-links-column">
                  <div className="footer-links-header" size="txtRubikMedium24">
                    Information
                  </div>
                  <ul className="footer-links-list">
                    <li>
                      <a href="javascript:" className="footer-link">
                        <div
                          className="footer-list-item"
                          size="txtRubikRegular16"
                        >
                          About Us
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="footer-link">
                        <div
                          className="footer-list-item"
                          size="txtRubikRegular16"
                        >
                          Contacts
                        </div>
                      </a>
                    </li>
                    {/*<li>
                      <a href="javascript:" className="footer-link">
                        <div
                          className="footer-list-item"
                          size="txtRubikRegular16"
                        >
                          Cookie policy
                        </div>
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div className="footer-links-column">
                  <div className="footer-links-header" size="txtRubikMedium24">
                    Others
                  </div>
                  <ul className="footer-links-list">
                    <li>
                      <a href="javascript:" className="footer-link">
                        <div
                          className="footer-list-item"
                          size="txtRubikRegular16"
                        >
                          Terms and Conditions
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="footer-link">
                        <div
                          className="footer-list-item"
                          size="txtRubikRegular16"
                        >
                          Cookie Policy
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="line" />
              <div className="footer-logo">
                <div className="footer-logo-text" size="txtRubikRegular14">
                  All rights reserved
                </div>
                <div className="footer-logo-icon">
                  created by
                  {/* <img
                    className="footer-icon"
                    src="images/img_play.svg"
                    alt="play"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
