import React from "react";

import "../../utils/faq.js";
import { Img, Text } from "../../component";
import Question from "../Question/index.jsx";

const Faq = (props) => {
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <div className={props.className} onClick={props.onClick} id={props.id}>
        <div className="flex flex-col items-center justify-center max-w-[766px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
            size="txtRubikSemiBold36"
          >
            Frequently asked questions
          </Text>
        </div>
        <div className="flex flex-col gap-8 items-start justify-start max-w-[766px] w-full">
          {faqs.map((faq, index) => (
            <Question
              // deleted this:  gap-8
              className="bg-gray-100 flex flex-col items-center justify-center p-8 sm:px-5 rounded-[28px] w-full"
              faq={faq}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

Faq.defaultProps = {};

export default Faq;

// <!-- FAQs -->
//     <section class="faq">
//       <div class="container-sm">

//         <!-- description -->
//         <div class="section_description s_d__small">

//           <h2 class="h_large">Часто задаваемые вопросы</h2>

//         </div>
//         <!-- description -->

//         <div class="accordion">

//           <!-- item -->
//           <div class="accordion-item">

//             <button id="accordion-button-1" aria-expanded="false">
//               <p class="accordion-title" id="faq_q_1"></p>
//               <span class="icon" aria-hidden="true"></span>
//             </button>

//             <div class="accordion-content">
//               <p id="faq_a_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//                 et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse
//                 potenti.
//               </p>
//             </div>

//           </div>
//           <!-- item -->

//           <!-- item -->
//           <div class="accordion-item">

//             <button id="accordion-button-2" aria-expanded="false">
//               <p class="accordion-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
//               <span class="icon" aria-hidden="true"></span>
//             </button>

//             <div class="accordion-content">
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//                 et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse
//                 potenti.
//               </p>
//             </div>

//           </div>
//           <!-- item -->

//           <!-- item -->
//           <div class="accordion-item">

//             <button id="accordion-button-3" aria-expanded="false">
//               <p class="accordion-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
//               <span class="icon" aria-hidden="true"></span>
//             </button>

//             <div class="accordion-content">
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//                 et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse
//                 potenti.
//               </p>
//             </div>

//           </div>
//           <!-- item -->

//           <!-- item -->
//           <div class="accordion-item">

//             <button id="accordion-button-4" aria-expanded="false">
//               <p class="accordion-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
//               <span class="icon" aria-hidden="true"></span>
//             </button>

//             <div class="accordion-content">
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//                 et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse
//                 potenti.
//               </p>
//             </div>

//           </div>
//           <!-- item -->

//         </div>

//       </div>
//     </section>
//     <!-- FAQs -->
