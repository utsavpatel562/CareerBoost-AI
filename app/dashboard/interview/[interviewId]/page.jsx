"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../../../utils/db";
import { MockInterview } from "../../../../utils/schema";
import { eq } from "drizzle-orm";
import Webcam from "react-webcam";
import { Lightbulb, WebcamIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState(null); // Initialize with null
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    console.log(params.interviewId);
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
      <div className="my-10 text-red-1">
        <h2 className="font-bold text-2xl">Let's Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col my-5 gap-4">
            <div className="flex flex-col rounded-lg p-3 gap-4">
              {interviewData ? (
                <>
                  <div className="p-5 border rounded-lg border-yellow-200 bg-yellow-100 text-black">
                    <h2 className="text-lg">
                      <strong>Job Position: </strong>
                      {interviewData.jobPosition}
                    </h2>
                    <h2 className="text-lg">
                      <strong>Job Description: </strong>
                      {interviewData.jobDesc}
                    </h2>
                    <h2 className="text-lg">
                      <strong>Years of Experience: </strong>
                      {interviewData.jobExperience}
                    </h2>
                  </div>
                </>
              ) : (
                <p>Loading interview details...</p>
              )}
            </div>
            <div className="flex flex-col rounded-lg p-3 gap-4">
              <div className="p-5 border rounded-lg border-blue-200 bg-blue-100 text-black">
                <h2 className="flex gap-2 items-center text-blue-500">
                  <Lightbulb />
                  <strong>Information</strong>
                </h2>
                <h2 className="text-justify mt-3 text-blue-500 font-bold">
                  {process.env.NEXT_PUBLIC_INFORMATION}
                </h2>
              </div>
            </div>
          </div>
          <div>
            {webCamEnabled ? (
              <Webcam
                onUserMedia={() => {
                  setWebCamEnabled(true);
                }}
                onUserMediaError={() => setWebCamEnabled(false)}
                style={{
                  height: 300,
                  width: 300,
                }}
              />
            ) : (
              <>
                <WebcamIcon className="w-full h-64 rounded-lg my-7 p-20 bg-secondary text-black border" />
                <Button
                  onClick={() => setWebCamEnabled(true)}
                  className="w-full bg-blue-700 hover:bg-blue-600"
                >
                  Enable Web Cam and Microphone
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-end items-end">
          <Link href={"/dashboard/interview/" + params.interviewId + "/start"}>
            <Button className="bg-blue-700 hover:bg-blue-600">
              Start Interview
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Interview;
