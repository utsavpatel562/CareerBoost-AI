import React from "react";

function QuestionSection({ mockInterviewQuestion }) {
  return (
    <>
      <div className="p-5 border rounded-lg">
        <div className="grid">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((question, index) => (
              <h2 className="p-2 bg-secondary rounded-full">
                Question #{index + 1}
              </h2>
            ))}
        </div>
      </div>
    </>
  );
}

export default QuestionSection;
