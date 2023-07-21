import React from "react";

import { Img, Text } from "../../../component";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row sm:gap-[auto] items-center sm:justify-between justify-center max-w-[1080px] w-full">
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
              >
                <Text size="txtRubikRegular16">Home chargers</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="text-base text-black-900 tracking-[0.16px]"
              >
                <Text size="txtRubikRegular16">Charging stations</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="text-base text-black-900 tracking-[0.16px]"
              >
                <Text size="txtRubikRegular16">Applications</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="text-base text-black-900 tracking-[0.16px]"
              >
                <Text size="txtRubikRegular16">Contacts</Text>
              </a>
            </li>
          </ul>
          <div className="flex flex-row gap-7 h-7 md:h-auto items-center justify-end sm:m-[] sm:mb-[] sm:ml-[] sm:mr-[] sm:mt-[] sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[1rem] sm:pt-[]">
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
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
