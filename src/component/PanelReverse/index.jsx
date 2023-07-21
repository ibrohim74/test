import React from "react";

import { Img, Text } from "../../component";

const PanelReverse = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-8 items-center justify-start max-w-[1080px] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
            <Img
              className="h-[480px] md:h-auto object-cover rounded-bl-[40px] rounded-br-[40px] w-full"
              src="images/img_homestationinstalled_1.png"
              alt="homestationinst_Two"
            />
          </div>
          <div className="flex flex-1 flex-col gap-8 h-full items-start justify-center w-full">
            <Text
              className="leading-[44.00px] max-w-[524px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtRubikSemiBold36"
            >
              Our goal is to make our world more greener than ever!
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="leading-[24.00px] max-w-[524px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                size="txtRubikRegular16"
              >
                Join us in our mission to create a greener world by embracing
                the NFC Bracelet. Say goodbye to wasteful paper business cards
                and join the sustainable revolution. With our innovative NFC
                Bracelet, you can instantly exchange your profile information,
                making networking eco-friendly and efficient. You can make a
                positive impact on the environment while effortlessly sharing
                your profile.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PanelReverse.defaultProps = {};

export default PanelReverse;
