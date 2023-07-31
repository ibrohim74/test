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
              <button className="watch-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  // h-5 mt-[3px] mb-px mr-4 w-5 outline-teal-A400 outline-[2px] outline
                  className="play-icon"
                >
                  <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
                </svg>
                {/* font-inter font-semibold text-black-900 text-left text-xl */}
                <div className="watch-btn-text">Watch video</div>
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
