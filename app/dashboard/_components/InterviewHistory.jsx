"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { db } from "../../../utils/db";
import { MockInterview } from "../../../utils/schema";
import { desc, eq } from "drizzle-orm";

function InterviewHistory() {
  const { user } = useUser();

  useEffect(() => {
    user && GetInterviewList();
  }, [user]);

  const GetInterviewList = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(
        eq(MockInterview.createdAt, user?.primaryEmailAddress?.emailAddress)
      )
      .orderBy(desc(MockInterview.id));
  };

  return (
    <div>
      <h2 className="font-medium text-xl">Previous Mock Interview</h2>
    </div>
  );
}

export default InterviewHistory;
