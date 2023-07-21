import React from "react";

import { Button, Line, List, Text } from "../../component";
import Step from "../../component/Step";

const StepsPanel = (props) => {
  const steps = [
    {
      header: "Click on the 'Get started' button and fill out the form",
      text: "Choose the product you like and provide minimal information such as your name, email, phone number, and job title to get started.",
    },
  ];
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-[766px] md:px-10 sm:px-5 px-[60px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
            size="txtRubikSemiBold36"
          >
            Launch your online profile today
          </Text>
        </div>
        <List
          className="flex flex-col gap-7 items-start max-w-[766px] w-full"
          orientation="vertical"
        >
          <Step
            className="bg-gray-100 flex flex-1 flex-col gap-10 items-start justify-center my-0 p-7 sm:px-5 rounded-[24px] w-full"
            step={{ key: 1, ...steps[0] }}
          />
          <Step />
          <div className="bg-gray-100 flex flex-1 flex-col gap-10 items-start justify-center my-0 p-7 sm:px-5 rounded-[24px] w-full">
            <div className="flex sm:flex-col flex-row gap-7 items-center justify-start w-full">
              <Text
                className="text-base text-blue-A400 tracking-[0.32px] w-auto"
                size="txtRubikSemiBold16"
              >
                STEP 01
              </Text>
              <Line className="bg-gray-200 h-px w-[86%]" />
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                size="txtRubikMedium24"
              >
                <>
                  Click on the &#39;Get started&#39; button and fill out the
                  form
                </>
              </Text>
              <Text
                className="leading-[24.00px] max-w-[710px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                size="txtRubikRegular16"
              >
                Choose the product you like and provide minimal information such
                as your name, email, phone number, and job title to get started.
              </Text>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-1 flex-col gap-10 items-start justify-center my-0 p-7 sm:px-5 rounded-[24px] w-full">
            <div className="flex sm:flex-col flex-row gap-7 items-center justify-start w-full">
              <Text
                className="text-base text-blue-A400 tracking-[0.32px] w-auto"
                size="txtRubikSemiBold16"
              >
                STEP 01
              </Text>
              <Line className="bg-gray-200 h-px w-[86%]" />
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                size="txtRubikMedium24"
              >
                <>
                  Click on the &#39;Get started&#39; button and fill out the
                  form
                </>
              </Text>
              <Text
                className="leading-[24.00px] max-w-[710px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                size="txtRubikRegular16"
              >
                Choose the product you like and provide minimal information such
                as your name, email, phone number, and job title to get started.
              </Text>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-1 flex-col gap-10 items-start justify-center my-0 p-7 sm:px-5 rounded-[24px] w-full">
            <div className="flex sm:flex-col flex-row gap-7 items-center justify-start w-full">
              <Text
                className="text-base text-blue-A400 tracking-[0.32px] w-auto"
                size="txtRubikSemiBold16"
              >
                STEP 01
              </Text>
              <Line className="bg-gray-200 h-px w-[86%]" />
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                size="txtRubikMedium24"
              >
                <>
                  Click on the &#39;Get started&#39; button and fill out the
                  form
                </>
              </Text>
              <Text
                className="leading-[24.00px] max-w-[710px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                size="txtRubikRegular16"
              >
                Choose the product you like and provide minimal information such
                as your name, email, phone number, and job title to get started.
              </Text>
            </div>
          </div>
        </List>
        <Button className="bg-light_green-A200 cursor-pointer font-medium font-rubik mb-[60px] min-w-[228px] py-1.5 rounded-[16px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl">
          Get started today
        </Button>
      </div>
    </>
  );
};

StepsPanel.defaultProps = {};

export default StepsPanel;
