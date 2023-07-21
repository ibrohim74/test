import React, { useState } from "react";
import "../../utils/faq";
import { Img, Text } from "../../component";

const Question = (props) => {
  const { question, answer } = { ...props.faq };
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <>
      <div
        className={`${props.className} ${
          showAnswer ? "cursor-zoom-out" : "cursor-zoom-in"
        }`}
        onClick={handleClick}
        id={props.id}
      >
        {/* deleted: sm:flex-col */}
        <div className="flex  flex-row gap-8 items-center justify-center  sm:px-5 rounded-[28px] w-full">
          <Text
            className="flex-1 text-base text-black-900 tracking-[0.16px] w-auto"
            size="txtRubikRegular16"
          >
            {question}
          </Text>
          <Img className="h-5 w-5" src="images/img_refresh.svg" alt="refresh" />
        </div>
        {/* The answer container */}
        <div
          className={`answer-container ${showAnswer ? "show" : ""}`}
          style={{
            maxHeight: showAnswer ? "1000px" : "0",
            overflow: "hidden",
            transition: "max-height 0.5s ease-in-out",
          }}
        >
          <Text
            className="m-5 flex-1 text-base text-black-900 tracking-[0.16px] w-auto"
            size="txtRubikRegular16"
          >
            {answer}
          </Text>
        </div>
      </div>
    </>
  );
};

Question.defaultProps = {};

export default Question;

// import React, { useState } from "react";
// import "../../utils/faq.js";
// import { Img, Text } from "components";

// const Question = (props) => {
//   const { question, answer } = { ...props.faq };
//   const [showAnswer, setShowAnswer] = useState(false);

//   const handleClick = () => {
//     setShowAnswer(!showAnswer);
//   };

//   return (
//     <>
//       <div
//         className={props.className}
//         onClick={handleClick}
//         id={props.id}
//         style={{
//           cursor: "pointer",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           transition: "all 0.3s ease-in-out", // Adding the transition here
//         }}
//       >
//         <Text
//           className="flex-1 text-base text-black-900 tracking-[0.16px] w-auto"
//           size="txtRubikRegular16"
//         >
//           {showAnswer ? answer : question}
//         </Text>
//         <Img className="h-5 w-5" src="images/img_refresh.svg" alt="refresh" />
//       </div>
//     </>
//   );
// };

// Question.defaultProps = {};

// export default Question;

// import React from "react";

// import "../../utils/faq.js";
// import { Img, Text } from "components";

// const Question = (props) => {
//   const { question, answer } = { ...props.faq };
//   return (
//     <>
//       <div className={props.className} onClick={props.onClick} id={props.id}>
//         <Text
//           className="flex-1 text-base text-black-900 tracking-[0.16px] w-auto"
//           size="txtRubikRegular16"
//         >
//           {question}
//         </Text>
//         <Img className="h-5 w-5" src="images/img_refresh.svg" alt="refresh" />
//       </div>
//     </>
//   );
// };

// Question.defaultProps = {};

// export default Question;
