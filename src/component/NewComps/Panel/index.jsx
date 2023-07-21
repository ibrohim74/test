import React from "react";

import { Img, Text } from "../../../component";

const Panel = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start sm:p-[] sm:pl-[] sm:pr-[] w-[57%] md:w-full">
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1080px] w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
              <Img
                className="h-[480px] md:h-auto sm:m-[] sm:mb-[] sm:ml-[] sm:mr-[] sm:mt-[] object-cover sm:p-[] sm:pl-[] sm:pr-[] rounded-bl-[40px] rounded-br-[40px] w-full"
                src="images/img_homestationinstalled_480x526.png"
                alt="homestationinst"
              />
            </div>
            <div className="flex flex-1 flex-col gap-8 h-full items-start justify-center w-full">
              <Text
                className="leading-[44.00px] max-w-[524px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtRubikSemiBold36"
              >
                Create and customize your digital profile in minutes.
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="leading-[24.00px] max-w-[524px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                  size="txtRubikRegular16"
                >
                  Our product is designed to simplify the way you share all the
                  necessary information about yourself with others. No more
                  fumbling with business cards or manually typing in contact
                  details. With a single click, you can instantly share your
                  complete profile, making networking and connecting with others
                  a breeze.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Panel.defaultProps = {};

export default Panel;
