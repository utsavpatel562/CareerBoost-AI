import React from "react";

function QuestionSection({ mockInterviewQuestion, activeQuestionIndex }) {
  return (
    <>
      <div className="p-5 border rounded-lg bg-white">
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
      </div>
    </>
  );
}

export default QuestionSection;
