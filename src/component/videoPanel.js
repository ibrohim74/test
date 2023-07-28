import React from "react";
import "../../src/assets/css/videoPanel.css";

const VideoPanel = (props) => {
  return (
    <>
      {/* flex flex-col items-center justify-center sm:m-[] sm:mb-[] sm:ml-[] sm:mr-[] sm:mt-[] sm:p-[] pt-16 sm:px-5 w-full */}
      <div className="videoPanel">
        {/* bg-gray-100 flex flex-col h-[600px] md:h-auto items-center justify-center max-w-[1080px] p-7 sm:rounded-[64px] rounded-[80px] w-full */}
        <div className="video-container">
          {/* flex flex-col gap-12 h-full items-start sm:items-start justify-center w-full */}
          <div className="video-box">
            {/* flex flex-col items-start justify-start w-full */}
            <div className="title-container">
              <div
                //   leading-[44.00px] max-w-[498px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-black-900
                className="video-title"
                size="txtRubikSemiBold36"
              >
                Connect and Share with a Single Tap!
              </div>
            </div>
            {/* flex sm:flex-col flex-row gap-8 items-center justify-start w-auto sm:w-full */}
            <div className="v-btns-container">
              {/* bg-light_green-A200 cursor-pointer font-inter font-semibold min-w-[157px] py-[15px] rounded-[28px] text-black-900 text-center text-xl */}
              <button className="v-start-btn">Start for free</button>
              <button
                //   border-2 border-solid border-white-A700 cursor-pointer flex items-center justify-center min-w-[189px] px-3.5 py-[15px] rounded-[28px]
                className="clock-svg"
                leftIcon={
                  // h-5 mt-[3px] mb-px mr-4 w-5 outline-teal-A400 outline-[2px] outline
                  <div className="">
                    <img
                      className="h-5"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                  </div>
                }
              >
                {/* font-inter font-semibold text-black-900 text-left text-xl */}
                <div className="">Watch video</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

VideoPanel.defaultProps = {};

export default VideoPanel;
