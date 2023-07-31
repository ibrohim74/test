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
        // style={{ cursor: `${showAnswer ? "zoom-out" : "zoom-in"}` }}
        style={{ cursor: "pointer" }}
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
          <div
            className="answer-icon"
            style={{
              rotate: showAnswer ? "-90deg" : "90deg",
              overflow: "hidden",
              transition: "0.5s",
            }}
          >
            {/* <svg
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
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 20 20"
              id="chevron"
            >
              <path
                d="M11 10 8.698 7.494a.512.512 0 0 1 0-.718.5.5 0 0 1 .71 0l2.807 2.864a.51.51 0 0 1 0 .717l-2.807 2.864a.498.498 0 0 1-.71 0 .51.51 0 0 1 0-.717L11 10zM10 .4a9.6 9.6 0 0 1 9.6 9.6c0 5.303-4.298 9.6-9.6 9.6S.4 15.303.4 10A9.6 9.6 0 0 1 10 .4zm0 17.954a8.354 8.354 0 1 0 0-16.709 8.354 8.354 0 0 0 0 16.709z"
                fill="#2478F5"
              ></path>
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
