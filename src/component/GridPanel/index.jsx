import React from "react";

import { Text } from "../../component";

const GridPanel = (props) => {
  return (
    <>
      <div className={props.className} onClick={props?.onClick} id={props.id}>
        <div className="flex flex-col gap-5 items-center justify-center max-w-[1080px] md:px-10 sm:px-5 px-[60px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
            size="txtRubikSemiBold36"
          >
            Приложения, которые вам понравятся
          </Text>
          <Text
            className="leading-[24.00px] max-w-[710px] md:max-w-full text-base text-black-900 text-center tracking-[0.16px]"
            size="txtRubikRegular16"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
        <div className="gap-7 grid md:grid-cols-1 grid-cols-2 items-start max-w-[1080px] min-h-[auto] w-fit">
          <div className="bg-gray-100 flex flex-1 flex-col gap-5 h-[400px] items-start justify-end p-7 sm:px-5 rounded-[28px] w-[400px]">
            <Text
              className="text-base text-blue-A400 tracking-[0.32px] w-auto"
              size="txtRubikSemiBold16"
            >
              Мобильное приложение
            </Text>
            <Text
              className="leading-[28.00px] max-w-[313px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtRubikMedium24"
            >
              Заряжайте и оплачивайте в выбранном пункте оплаты.
            </Text>
          </div>
          <div className="bg-gray-100 flex flex-1 flex-col gap-5 h-[400px] items-start justify-end p-7 sm:px-5 rounded-[28px] w-[400px]">
            <Text
              className="text-base text-blue-A400 tracking-[0.32px] w-auto"
              size="txtRubikSemiBold16"
            >
              Мобильное приложение
            </Text>
            <Text
              className="leading-[28.00px] max-w-[470px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtRubikMedium24"
            >
              Найдите доступные точки зарядки, ближайшие к вам в любом месте.
            </Text>
          </div>
          <div className="bg-gray-100 flex flex-1 flex-col gap-5 h-[400px] items-start justify-end p-7 sm:px-5 rounded-[28px] w-[400px]">
            <Text
              className="text-base text-blue-A400 tracking-[0.32px] w-auto"
              size="txtRubikSemiBold16"
            >
              Мобильное приложение
            </Text>
            <Text
              className="leading-[28.00px] max-w-[313px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtRubikMedium24"
            >
              Заряжайте и оплачивайте в выбранном пункте оплаты.
            </Text>
          </div>
          <div className="bg-gray-100 flex flex-1 flex-col gap-5 h-[400px] items-start justify-end p-7 sm:px-5 rounded-[28px] w-[400px]">
            <Text
              className="text-base text-blue-A400 tracking-[0.32px] w-auto"
              size="txtRubikSemiBold16"
            >
              Мобильное приложение
            </Text>
            <Text
              className="leading-[28.00px] max-w-[470px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtRubikMedium24"
            >
              Найдите доступные точки зарядки, ближайшие к вам в любом месте.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

GridPanel.defaultProps = {};

export default GridPanel;
