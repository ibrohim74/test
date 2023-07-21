import React from "react";

import { List, Text } from "../../../component";

const Wps = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start max-w-[1080px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
            size="txtRubikSemiBold36"
          >
            What people say
          </Text>
        </div>
        <List
          className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1080px] w-full"
          orientation="horizontal"
        >
          <div className="bg-gray-100 flex flex-1 flex-col gap-5 h-full items-start justify-start p-7 sm:px-5 rounded-[28px] w-full">
            <Text
              className="text-black-900 text-xl w-full"
              size="txtRubikMedium20"
            >
              Heading
            </Text>
            <Text
              className="leading-[24.00px] max-w-[285px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
              size="txtRubikRegular16"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
          <div className="bg-gray-100 flex flex-1 flex-col gap-5 h-full items-start justify-start p-7 sm:px-5 rounded-[28px] w-full">
            <Text
              className="text-black-900 text-xl w-full"
              size="txtRubikMedium20"
            >
              Heading
            </Text>
            <Text
              className="leading-[24.00px] max-w-[285px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
              size="txtRubikRegular16"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
          <div className="bg-gray-100 flex flex-1 flex-col gap-5 h-full items-start justify-start p-7 sm:px-5 rounded-[28px] w-full">
            <Text
              className="text-black-900 text-xl w-full"
              size="txtRubikMedium20"
            >
              Heading
            </Text>
            <Text
              className="leading-[24.00px] max-w-[285px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
              size="txtRubikRegular16"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
        </List>
      </div>
    </>
  );
};

Wps.defaultProps = {};

export default Wps;
