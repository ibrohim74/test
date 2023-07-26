import React, { useState } from "react";
import "../../src/assets/css/question.css";

const Question = (props) => {
  const { question, answer } = { ...props.faq };
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <>
      <div
        className={`${props.className}`}
        onClick={handleClick}
        id={props.id}
        style={{ cursor: `${showAnswer ? "zoom-out" : "zoom-in"}` }}
      >
        {/* deleted: sm:flex-col */}
        {/* flex  flex-row gap-8 items-center justify-center  sm:px-5 rounded-[28px] w-full */}
        <div className="question-box">
          <div
            /* flex-1 text-base text-black-900 tracking-[0.16px] w-auto */
            className="question"
            size="txtRubikRegular16"
          >
            {question}
          </div>
          <div className="answer-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.797 7.89836C10.7971 7.89856 10.7973 7.89876 10.7975 7.89896L10.797 7.89836ZM1 12C1 18.0757 5.92428 23 12 23C18.0757 23 23 18.0757 23 12C23 5.92428 18.0757 1 12 1C5.92428 1 1 5.92428 1 12Z"
                stroke="#2478F5"
                stroke-width="2"
              />
            </svg>
          </div>
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
          <div
            /* m-5 flex-1 text-base text-black-900 tracking-[0.16px] w-auto */
            className="answer"
            size="txtRubikRegular16"
          >
            {answer}
          </div>
        </div>
      </div>
    </>
  );
};

Question.defaultProps = {};

export default Question;
