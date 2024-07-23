"use client";
import React, { useEffect, useState } from "react";
import { db } from "../../../../../utils/db";
import { UserAnswer } from "../../../../../utils/schema";
import { eq } from "drizzle-orm";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../../components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  };

  return (
    <>
      <div className="p-10">
        <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
        <h2 className="font-bold text-2xl">Here is your interview feedback</h2>
        <h2 className="text-primary">
          Your overall interview rating: <strong>8/10</strong>
        </h2>
        <h2 className="text-sm text-gray-500">
          Find below interview question with correct answer, Your answer and
          feedback for improvement.
        </h2>
        {feedbackList &&
          feedbackList.map((item, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 flex justify-between text-left gap-5 max-w-[900px]">
                {item.question}
                <ChevronsUpDown className="h-5 w-5" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                Yes. Free to use for personal and commercial projects. No
                attribution required.
              </CollapsibleContent>
            </Collapsible>
          ))}
      </div>
    </>
  );
}

export default Feedback;
