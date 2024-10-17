"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { db } from "../../../utils/db";
import { MockInterview } from "../../../utils/schema";
import { desc, eq } from "drizzle-orm";
import InterviewCard from "../_components/InterviewCard";

function InterviewHistory() {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);

  useEffect(() => {
    user && GetInterviewList();
  }, [user]);

  const GetInterviewList = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(
        eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress)
      )
      .orderBy(desc(MockInterview.id));

    console.log(result);
    setInterviewList(result);
  };

  const handleDeleteSuccess = (mockId) => {
    // Filter out the deleted interview from the state
    setInterviewList(
      interviewList.filter((interview) => interview.mockId !== mockId)
    );
  };

  return (
    <div>
      <h2 className="font-medium text-xl">Previous Mock Interview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {interviewList.map((interview) => (
          <InterviewCard
            interview={interview}
            key={interview.mockId} // Use a unique identifier as the key
            onDeleteSuccess={handleDeleteSuccess} // Pass the delete handler
          />
        ))}
      </div>
    </div>
  );
}

export default InterviewHistory;
