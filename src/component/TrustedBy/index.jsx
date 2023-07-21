import React from "react";
import { Img, List, Text } from "../../component";

const TrustedBy = (props) => {
  const imgSrcs = [
    "images/img_homestationinstalled.png",
    "images/img_homestationinstalled_64x190.png",
    "images/img_homestationinstalled_64x160.png",
    "images/img_homestationinstalled_64x180.png",
    "images/img_homestationinstalled_64x170.png",
  ];
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
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
        <div className="relative flex items-center">
          <List
            // deleted: sm:flex-col flex-row grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 flex gap-8  justify-center max-w-[1080px] w-full
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            orientation="horizontal"
          >
            {imgSrcs.map((src) => (
              //deleted: flex flex-1 flex-col h-full items-center justify-center w-full
              <div className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                <Img
                  className="h-16 md:h-auto object-cover w-[190px]"
                  src={src}
                  alt="homestationinst"
                />
              </div>
            ))}
          </List>
        </div>
      </div>
    </>
  );
};

TrustedBy.defaultProps = {};

export default TrustedBy;
