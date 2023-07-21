import React from "react";

import { Img, Line, Text } from "../../component";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-10 items-center justify-center w-3/4 md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1080px] w-full">
            <div className="flex flex-col items-start justify-start w-[356px]">
              <Text
                className="leading-[24.00px] max-w-[193px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                size="txtRubikRegular16"
              >
                Заряжайте свой автомобиль быстрее, удобнее и дешевле с нами.
              </Text>
            </div>
            <div className="flex flex-1 sm:flex-col flex-row gap-7 items-start justify-between w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtRubikMedium24"
                >
                  Links
                </Text>
                <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-black-900 tracking-[0.16px]"
                    >
                      <Text size="txtRubikRegular16">For home</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-black-900 tracking-[0.16px]"
                    >
                      <Text size="txtRubikRegular16">For business</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-black-900 tracking-[0.16px]"
                    >
                      <Text size="txtRubikRegular16">For drivers</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-black-900 tracking-[0.16px]"
                    >
                      <Text size="txtRubikRegular16">Blog</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtRubikMedium24"
                >
                  Information
                </Text>
                <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-black-900 tracking-[0.16px]"
                    >
                      <Text size="txtRubikRegular16">About Us</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-black-900 tracking-[0.16px]"
                    >
                      <Text size="txtRubikRegular16">
                        Return & Refund policy
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-black-900 tracking-[0.16px]"
                    >
                      <Text size="txtRubikRegular16">Cookie policy</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtRubikMedium24"
                >
                  Contacts
                </Text>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-base text-black-900 tracking-[0.16px] w-auto"
                    size="txtRubikRegular16"
                  >
                    hello@ecarchargers.uz
                  </Text>
                  <Text
                    className="text-base text-black-900 tracking-[0.16px] w-auto"
                    size="txtRubikRegular16"
                  >
                    +998 00 000 00 00
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start max-w-[1080px] w-full">
            <Line className="bg-gray-200_7e h-px w-full" />
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="text-black-900 text-sm w-auto"
                size="txtRubikRegular14"
              >
                eCARchargers
              </Text>
              <div className="flex flex-col items-start justify-start w-auto">
                <Img
                  className="h-6 w-[21px]"
                  src="images/img_play.svg"
                  alt="play"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
