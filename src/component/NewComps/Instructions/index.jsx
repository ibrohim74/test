import React from "react";

import { Button, Line, List, Text } from "../../../component";

const Instructions = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 items-center justify-start w-2/5 md:w-full">
          <div className="flex flex-col items-center justify-center max-w-[766px] w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
              size="txtRubikSemiBold36"
            >
              Launch your online profile today
            </Text>
          </div>
          <div className="flex flex-col gap-7 items-start justify-start max-w-[766px] w-full">
            <div className="bg-gray-100 flex flex-col gap-8 items-start justify-center p-8 sm:px-5 rounded-[32px] w-full">
              <div className="flex sm:flex-col flex-row gap-7 items-center justify-center w-full">
                <Text
                  className="text-base text-blue-A400 tracking-[0.32px] w-auto"
                  size="txtRubikSemiBold16BlueA400"
                >
                  STEP 01
                </Text>
                <Line className="bg-gray-200 h-px w-4/5 sm:w-[87%]" />
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
                  className="leading-[24.00px] max-w-[702px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                  size="txtRubikRegular16"
                >
                  Choose the product you like and provide minimal information
                  such as your name, email, phone number, and job title to get
                  started.
                </Text>
              </div>
            </div>
            <List
              className="flex flex-col gap-7 items-center w-full"
              orientation="vertical"
            >
              <div className="bg-gray-100 flex flex-1 flex-col gap-8 items-start justify-center p-8 sm:px-5 rounded-[32px] w-full">
                <div className="flex sm:flex-col flex-row gap-7 items-center justify-center w-full">
                  <Text
                    className="text-base text-blue-A400 tracking-[0.32px] w-auto"
                    size="txtRubikSemiBold16BlueA400"
                  >
                    STEP 02
                  </Text>
                  <Line className="bg-gray-200 h-px w-4/5 sm:w-[87%]" />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                    size="txtRubikMedium24"
                  >
                    Set up your profile
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[702px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                    size="txtRubikRegular16"
                  >
                    Enter our web platform to add all additional information and
                    add your style to your profile. It all comes together in a
                    link designed in the landing page format.
                  </Text>
                </div>
              </div>
              <div className="bg-gray-100_01 flex flex-1 flex-col gap-8 items-start justify-center p-8 sm:px-5 rounded-[32px] w-full">
                <div className="flex sm:flex-col flex-row gap-7 items-center justify-center w-full">
                  <Text
                    className="text-base text-blue-A400 tracking-[0.32px] w-auto"
                    size="txtRubikSemiBold16BlueA400"
                  >
                    STEP 03
                  </Text>
                  <Line className="bg-gray-200 h-px w-4/5 sm:w-[87%]" />
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                    size="txtRubikMedium24"
                  >
                    All set and ready!
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[702px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                    size="txtRubikRegular16"
                  >
                    The web platform allows you to store and edit your profile,
                    and in an offline gathering, you can easily share your
                    business card in one click with our product.
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <Button className="bg-light_green-A200 cursor-pointer font-medium font-rubik min-w-[228px] py-1.5 rounded-[16px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl">
            Get started today
          </Button>
        </div>
      </div>
    </>
  );
};

Instructions.defaultProps = {};

export default Instructions;
