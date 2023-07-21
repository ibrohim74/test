import React from "react";

import { Button, Line, List, Text } from "../../component";
import Step from "../../component/Step";

const Instructions = (props) => {
  const steps = [
    {
      header: "Click on the 'Get started' button and fill out the form",
      text: "Choose the product you like and provide minimal information such as your name, email, phone number, and job title to get started.",
    },
    {
      header: "Set up your profile",
      text: "Enter our web platform to add all additional information and add your style to your profile. It all comes together in a link designed in the landing page format.",
    },
    {
      header: "All set and ready!",
      text: "The web platform allows you to store and edit your profile, and in an offline gathering, you can easily share your business card in one click with our product.",
    },
  ];
  return (
    <>
      <div className={props.className} onClick={props?.onClick} id={props.id}>
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
            <List
              className="flex flex-col gap-7 items-center w-full"
              orientation="vertical"
            >
              {steps.map((step, index) => (
                <Step
                  className="bg-gray-100 flex flex-col gap-8 items-start justify-center p-8 sm:px-5 rounded-[32px] w-full"
                  step={{ key: index + 1, ...steps[0] }}
                />
              ))}
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
