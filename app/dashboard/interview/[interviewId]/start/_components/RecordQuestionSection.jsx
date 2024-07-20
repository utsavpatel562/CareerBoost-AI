"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "../../../../../../components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic, StopCircle } from "lucide-react";
import { toast } from "sonner";

function RecordQuestionSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const [userAnswer, setUserAnswer] = useState("");
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) => {
      setUserAnswer((prevAnswer) => prevAnswer + result?.transcript);
    });
  }, [results]);

  const SaveUserAnswer = () => {
    if (isRecording) {
      stopSpeechToText();
      if (userAnswer?.length < 10) {
        toast("Error while saving your answer, please record again");
        return;
      }
      const feedbackPrompt =
        "Question:" +
        mockInterviewQuestion[activeQuestionIndex]?.question +
        ", User Answer: " +
        userAnswer +
        " ,Depends on question and user answer for give interview question" +
        " please give us rating for answer and feedback as area of improvement" +
        "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field ";
    } else {
      startSpeechToText();
    }
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-col justify-center items-center rounded-lg p-5 mt-20 bg-black">
          <Image
            src="/webcam3.png"
            alt="WebCAM"
            width={140}
            height={140}
            className="absolute"
          />
          <Webcam
            mirrored={true}
            style={{
              height: 300,
              width: "100%",
              zIndex: 100,
            }}
          />
        </div>
        <Button variant="outline" className="my-10" onClick={SaveUserAnswer}>
          {isRecording ? (
            <h2 className="text-red-1 flex animate-pulse items-center gap-2">
              <StopCircle />
              Stop Recording...
            </h2>
          ) : (
            <h2 className="flex gap-2 items-center">
              <Mic /> Record Answer
            </h2>
          )}
        </Button>
        <Button onClick={() => console.log(userAnswer)}>
          Show User Answer
        </Button>
      </div>
    </>
  );
}

export default RecordQuestionSection;
