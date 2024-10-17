import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import { TbVolume } from "react-icons/tb";
import React from "react";

function QuestionSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry! Your browser does not suppoer text to speech ");
    }
  };
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
                    "bg-green-600 text-white border border-green-700"
                  }`}
                >
                  Question #{index + 1}
                </h2>
              ))}
          </div>
          <h2 className="my-5 text-md md:text-lg">
            {mockInterviewQuestion[activeQuestionIndex]?.question}
          </h2>
          <Button
            className="flex gap-2 cursor-pointer bg-slate-700 hover:bg-slate-600"
            onClick={() =>
              textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)
            }
          >
            Question Audio
            <TbVolume className="w-5 h-5" />
          </Button>
          <div className="border rounded-lg p-5 bg-blue-100 mt-14">
            <h2 className="flex gap-2 items-center text-blue-700">
              <Lightbulb />
              <strong>Note:</strong>
            </h2>
            <h2 className="text-sm text-blue-700 my-2">
              {process.env.NEXT_PUBLIC_QUESTION_NOTE}
            </h2>
          </div>
        </div>
      </>
    )
  );
}

export default QuestionSection;
