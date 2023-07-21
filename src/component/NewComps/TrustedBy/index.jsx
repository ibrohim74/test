import React from "react";

import { Img, List, Text } from "../../../component";

const TrustedBy = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start max-w-[1080px] w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
            size="txtRubikSemiBold28"
          >
            Trusted by industry leaders
          </Text>
        </div>
        <List
          className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1080px] w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Img
              className="h-16 md:h-auto object-cover w-[190px]"
              src="images/img_homestationinstalled.png"
              alt="homestationinst"
            />
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Img
              className="h-16 md:h-auto object-cover w-[190px]"
              src="images/img_homestationinstalled_64x190.png"
              alt="homestationinst"
            />
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Img
              className="h-16 md:h-auto object-cover w-40"
              src="images/img_homestationinstalled_64x160.png"
              alt="homestationinst"
            />
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Img
              className="h-16 md:h-auto object-cover w-[180px]"
              src="images/img_homestationinstalled_64x180.png"
              alt="homestationinst"
            />
          </div>
          <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
            <Img
              className="h-16 md:h-auto object-cover w-[170px]"
              src="images/img_homestationinstalled_64x170.png"
              alt="homestationinst"
            />
          </div>
        </List>
      </div>
    </>
  );
};

TrustedBy.defaultProps = {};

export default TrustedBy;
