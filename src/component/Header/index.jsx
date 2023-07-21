import React, { useState, useEffect } from "react";
import { handleSectionNavigation } from "../../utils/handleSectionNavigation";
import { Img, Text } from "../../component";
import { debounce } from "lodash";
import "../../assets/css/home.css";

const Header = (props) => {
  // create a state variable to store the menu visibility
  const [showMenu, setShowMenu] = useState(false);

  // create a function to toggle the menu visibility
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };
  const handleNavClick = (id) => {
    handleToggle();
    handleSectionNavigation(id);
  };

  useEffect(() => {
    // Function to toggle the disable-scroll class on the body element
    const toggleScroll = () => {
      const bodyElement = document.querySelector("body");
      if (showMenu) {
        bodyElement.classList.add("disable-scroll");
      } else {
        bodyElement.classList.remove("disable-scroll");
      }
    };

    // Call the toggleScroll function when the showMenu state changes
    toggleScroll();

    // Add a debounced resize event listener to handle screen size changes
    const handleResize = debounce(() => {
      if (window.innerWidth >= 0) {
        // Assuming md breakpoint is 768px P.S. 768 is working strangly so I made 0
        setShowMenu(false);
      }
    }, 200); // Adjust the debounce delay as needed

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
      const bodyElement = document.querySelector("body");
      bodyElement.classList.remove("disable-scroll");
    };
  }, [showMenu]);

  return (
    <>
      <header className={props.className}>
        <div
          className={`flex flex-row sm:gap-[auto] items-center md:justify-between justify-center max-w-[1080px] w-full`}
        >
          <div className="flex flex-col h-7 md:h-auto items-center justify-start">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
              size="txtRubikMedium24"
            >
              LOGO
            </Text>
          </div>
          <ul className="flex flex-1 sm:flex-col flex-row gap-14 h-full md:hidden items-center justify-center w-full common-row-list">
            <li>
              <a
                href="javascript:"
                className="text-base text-black-900 tracking-[0.16px]"
                onClick={() => handleSectionNavigation("Product")}
              >
                <Text size="txtRubikRegular16">Product</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="text-base text-black-900 tracking-[0.16px]"
                onClick={() => handleSectionNavigation("Functions")}
              >
                <Text size="txtRubikRegular16">Functions</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="text-base text-black-900 tracking-[0.16px]"
                onClick={() => handleSectionNavigation("Instructions")}
              >
                <Text size="txtRubikRegular16">Instructions</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="text-base text-black-900 tracking-[0.16px]"
                onClick={() => handleSectionNavigation("Faq")}
              >
                <Text size="txtRubikRegular16">FAQ</Text>
              </a>
            </li>
          </ul>
          <div className="flex flex-row gap-7 h-7 md:h-auto md:hidden items-center justify-end sm:m-[] sm:mb-[] sm:ml-[] sm:mr-[] sm:mt-[] sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[] sm:pt-[]">
            <div className="flex flex-row h-7 md:h-auto items-center justify-start sm:pr-5 pr-6">
              <Img
                className="h-full w-6"
                src="images/img_globe.svg"
                alt="globe"
              />
              <Text
                className="text-base text-black-900 w-auto"
                size="txtMontserratRomanMedium16"
              >
                Uzb
              </Text>
            </div>
            <Img className="h-full w-4" src="images/img_user.svg" alt="user" />
          </div>
          {/* burger icon to show or hide the navbar */}
          <div
            className="hidden cursor-pointer md:flex ml-auto"
            onClick={handleToggle}
          >
            {/* SVG element for the burger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              // add style attribute to change transform-origin
              style={{ transformOrigin: "" }}
            >
              {/* conditional rendering of the icon based on isOpen state */}
              {showMenu ? (
                // X icon when isOpen is true
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  // add style attribute to change transform-origin
                  style={{ transformOrigin: "center" }}
                  // add classes for animation
                  className="transition ease-in-out duration-300 transform rotate-180"
                />
              ) : (
                // burger icon when showMenu is false
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  // add style attribute to change transform-origin
                  style={{ transformOrigin: "center" }}
                  // add classes for animation
                  className="transition ease-in-out duration-300 transform rotate-0"
                />
              )}
            </svg>
          </div>
        </div>

        <div
          className={`flex flex-col gap-5 sm:gap-[auto] items-left md:justify-start ${
            showMenu ? "slide-in" : "slide-out hidden"
          } justify-center h-screen max-w-[1080px] w-full transition ease-in-out duration-300`}
          // add style attribute to change translate-y based on showMenu state
          // style={{
          //   transform: showMenu ? "translateY(0)" : "translateY(-200%)",
          // }}
        >
          <a
            href="javascript:"
            className="text-base text-black-900 tracking-[0.16px]"
            onClick={() => handleNavClick("Product")}
          >
            <Text size="txtRubikRegular16">Product</Text>
          </a>
          <a
            href="javascript:"
            className="text-base text-black-900 tracking-[0.16px]"
            onClick={() => handleNavClick("Functions")}
          >
            <Text size="txtRubikRegular16">Functions</Text>
          </a>
          <a
            href="javascript:"
            className="text-base text-black-900 tracking-[0.16px]"
            onClick={() => handleNavClick("Instructions")}
          >
            <Text size="txtRubikRegular16">Instructions</Text>
          </a>
          <a
            href="javascript:"
            className="text-base text-black-900 tracking-[0.16px]"
            onClick={() => handleNavClick("Faq")}
          >
            <Text size="txtRubikRegular16">FAQ</Text>
          </a>
          <div className="flex flex-row h-7 md:h-auto items-center justify-start sm:pr-5 pr-6">
            <Img
              className="h-full w-6"
              src="images/img_globe.svg"
              alt="globe"
            />
            <Text
              className="text-base text-black-900 w-auto"
              size="txtMontserratRomanMedium16"
            >
              Uzb
            </Text>
          </div>
          <Img className="h-fit w-4" src="images/img_user.svg" alt="user" />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
