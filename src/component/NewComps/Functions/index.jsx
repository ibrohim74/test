import React from "react";

import { Button, Img, Text } from "../../../component";

const Functions = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 items-center justify-center max-w-[1080px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
            size="txtRubikSemiBold36"
          >
            <>Functions that you&#39;ll love and need</>
          </Text>
          <div className="bg-gray-100 flex flex-row gap-8 items-center justify-center p-2 rounded-[32px] w-80">
            <Button className="bg-white-A700 cursor-pointer font-rubik font-semibold py-[18px] rounded-[28px] text-base text-black-900 text-center tracking-[0.32px] w-full">
              Yourself
            </Button>
            <div className="flex flex-col items-center justify-center p-4 w-full">
              <Text
                className="text-base text-black-900 text-center tracking-[0.32px] w-auto"
                size="txtRubikSemiBold16"
              >
                Team
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1082px] w-full">
          <div className="flex flex-1 flex-col gap-8 h-full items-start justify-center w-full">
            <div className="flex flex-col gap-4 items-start justify-center w-full">
              <Text
                className="leading-[32.00px] max-w-[524px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtRubikSemiBold28"
              >
                Create and customize your digital profile in minutes.
              </Text>
              <Text
                className="leading-[24.00px] max-w-[524px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                size="txtRubikRegular16"
              >
                Our product is designed to simplify the way you share all the
                necessary information about yourself with others.
              </Text>
            </div>
            <div className="flex flex-col gap-4 items-start justify-center w-full">
              <Text
                className="leading-[32.00px] max-w-[524px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                size="txtRubikSemiBold28"
              >
                Create and customize your digital profile in minutes.
              </Text>
              <Text
                className="leading-[24.00px] max-w-[524px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                size="txtRubikRegular16"
              >
                Our product is designed to simplify the way you share all the
                necessary information about yourself with others.
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
            <Img
              className="h-[480px] md:h-auto object-cover rounded-bl-[40px] rounded-br-[40px] w-full"
              src="images/img_homestationinstalled_480x526.png"
              alt="homestationinst_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

Functions.defaultProps = {};

export default Functions;
