import React from "react";

import { Button, Img, Text } from "../../../component";

const VideoPanel = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-col h-[600px] md:h-auto items-center justify-center sm:m-[] max-w-[1080px] sm:mb-[] sm:ml-[] sm:mr-[] sm:mt-[] p-7 sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[] sm:pt-[] rounded-[80px] w-full">
          <div className="flex flex-col gap-12 h-full items-start sm:items-start justify-center sm:m-[] sm:mb-[] sm:ml-[] sm:mr-[] sm:mt-[] sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[] sm:pt-[] w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="leading-[44.00px] max-w-[498px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtRubikSemiBold36"
              >
                Connect and Share with a Single Tap!
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-8 items-center justify-start w-auto sm:w-full">
              <Button className="bg-light_green-A200 cursor-pointer font-inter font-semibold min-w-[157px] py-[15px] rounded-[28px] text-black-900 text-center text-xl">
                Start for free
              </Button>
              <Button
                className="border-2 border-solid border-white-A700 cursor-pointer flex items-center justify-center min-w-[189px] px-3.5 py-[15px] rounded-[28px]"
                leftIcon={
                  <div className="h-5 mt-[3px] mb-px mr-4 w-5 outline-teal-A400 outline-[2px] outline">
                    <Img
                      className="h-5"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                  </div>
                }
              >
                <div className="font-inter font-semibold text-black-900 text-left text-xl">
                  Watch video
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

VideoPanel.defaultProps = {};

export default VideoPanel;
