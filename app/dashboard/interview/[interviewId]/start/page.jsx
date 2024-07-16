"use client";
import React, { useEffect } from "react";
import { MockInterview } from "../../../../../utils/schema";
import { db } from "../../../../../utils/db";
import { eq } from "drizzle-orm";

function StartInterview({ params }) {
  useEffect(() => {
    GetInterviewDetails();
  }, []);
  // Used to get interview details by MockID/Interview ID
  const GetInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Error fetching interview details:", error);
    }
  };
  return (
    <>
      <div>Start Interview</div>
    </>
  );
}

export default StartInterview;
