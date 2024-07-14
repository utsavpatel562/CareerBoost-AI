"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../../../utils/db";
import { MockInterview } from "../../../../utils/schema";
import { eq } from "drizzle-orm";
import Webcam from "react-webcam";
import { WebcamIcon } from "lucide-react";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();

  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  // Used to get intview details by MockID/Interview ID
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));
    setInterviewData(result[0]);
  };

  return (
    <>
      <div className="my-10 flex justify-center flex-col items-center text-gray-50">
        <h2 className="font-bold text-2xl">Let's Get Started</h2>
        <div>
          {/*<Webcam />*/}
          <WebcamIcon className="h-12 w-12 mt-3 bg-black rounded-[50%] p-2" />
        </div>
      </div>
    </>
  );
}

export default Interview;
