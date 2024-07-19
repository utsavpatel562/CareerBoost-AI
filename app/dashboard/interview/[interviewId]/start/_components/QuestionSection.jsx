import { Lightbulb } from "lucide-react";
import React from "react";

function QuestionSection({ mockInterviewQuestion, activeQuestionIndex }) {
  return (
    mockInterviewQuestion && (
      <>
        <div className="p-5 border rounded-lg bg-white my-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {mockInterviewQuestion &&
              mockInterviewQuestion.map((question, index) => (
                <h2
                  className={`p-2 border border-gray-400 rounded-full cursor-pointer text-xs md:text-sm text-center 
                  ${
                    activeQuestionIndex == index &&
                    "bg-primary text-white border border-primary"
                  }`}
                >
                  Question #{index + 1}
                </h2>
              ))}
          </div>
          <h2 className="my-5 text-md md:text-lg">
            {mockInterviewQuestion[activeQuestionIndex]?.question}
          </h2>
          <div className="border rounded-lg p-5 bg-blue-100">
            <h2 className="flex gap-2 items-center">
              <Lightbulb />
              <strong>Note:</strong>
            </h2>
          </div>
        </div>
      </>
    )
  );
}

export default QuestionSection;
