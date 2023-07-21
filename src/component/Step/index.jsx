import React from "react";

import { Button, Line, List, Text } from "../../component";

const Step = (props) => {
  const { key, header, text } = { ...props.step };
  return (
    <>
      <div className={props.className}>
        {/* deleted: sm:flex-col */}
        <div className="flex flex-row gap-7 items-center justify-start w-full">
          <Text
            className="text-base text-blue-A400 tracking-[0.32px] w-auto"
            size="txtRubikSemiBold16BlueA400"
          >
            STEP 0{key}
          </Text>
          <Line className="bg-gray-200 h-px w-4/5 sm:w-[70%] w-[70%]" />
        </div>
        <div className="flex flex-col gap-5 items-start justify-start w-full">
          <Text
            className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
            size="txtRubikMedium24"
          >
            <>{header}</>
          </Text>
          <Text
            className="leading-[24.00px] max-w-[702px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
            size="txtRubikRegular16"
          >
            {text}
          </Text>
        </div>
      </div>
    </>
  );
};

Step.defaultProps = {};

export default Step;
