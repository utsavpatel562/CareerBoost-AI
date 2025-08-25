"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../../../utils/db";
import { MockInterview } from "../../../../utils/schema";
import { eq } from "drizzle-orm";
import Webcam from "react-webcam";
import { FaCircleInfo } from "react-icons/fa6";
import { Button } from "../../../../components/ui/button";
import { MdWorkOutline, MdOutlineVideocam } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import { VscDebugStart } from "react-icons/vsc";
import Link from "next/link";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState(null);
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

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
    <div className="my-10 text-slate-800">
      {/* Use flex-col on small screens and row on md+ screens */}
      <div className="flex flex-col md:flex-row flex-wrap gap-10">
        {/* Left Section */}
        <div className="bg-slate-100 flex flex-col my-5 gap-4 rounded-lg shadow-sm border w-full md:w-[70%]">
          <div className="pl-5 pt-5">
            <h2 className="font-bold text-2xl text-slate-600">
              Let's Get Started
            </h2>
          </div>
          <div className="flex flex-col rounded-lg p-3 gap-4">
            {interviewData ? (
              <div className="p-5 rounded-lg bg-slate-200 border-2 text-black">
                <h2 className="flex flex-wrap gap-1 text-lg text-slate-700">
                  <strong className="p-1">
                    <MdWorkOutline className="w-5 h-5" />
                  </strong>
                  <strong>Job Position: </strong>
                  {interviewData.jobPosition}
                </h2>
                <h2 className="flex flex-wrap gap-1 text-lg text-slate-700">
                  <strong className="p-1">
                    <TbFileDescription className="w-5 h-5" />
                  </strong>
                  <strong>Job Description: </strong>
                  {interviewData.jobDesc}
                </h2>
                <h2 className="flex flex-wrap gap-1 text-lg text-slate-700">
                  <strong className="p-1">
                    <LuCalendarDays className="w-5 h-5" />
                  </strong>
                  <strong>Years of Experience: </strong>
                  {interviewData.jobExperience}
                </h2>
              </div>
            ) : (
              <p>Loading interview details...</p>
            )}
          </div>
          <div className="flex flex-col rounded-lg p-3 gap-4">
            <div className="p-5 border rounded-lg border-blue-200 bg-sky-100 text-black">
              <h2 className="flex gap-1 items-center text-slate-700">
                <strong className="p-1">
                  <FaCircleInfo className="w-5 h-5" />
                </strong>
                <strong>Information</strong>
              </h2>
              <h2 className="text-justify mt-3 text-slate-700 font-bold">
                {process.env.NEXT_PUBLIC_INFORMATION}
              </h2>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center w-full md:w-auto">
          {webCamEnabled ? (
            <div className="flex justify-center">
              <Webcam
                onUserMedia={() => setWebCamEnabled(true)}
                onUserMediaError={() => setWebCamEnabled(false)}
                className="rounded-lg border"
                style={{ height: 300, width: 300 }}
              />
            </div>
          ) : (
            <div className="flex justify-center">
              <img
                src="/videocam.png"
                className="w-[300px] h-[300px] rounded-lg my-7 p-16 bg-secondary text-black border"
                alt="Webcam placeholder"
              />
            </div>
          )}

          <div className="flex flex-col gap-2 w-full items-center">
            <Button
              onClick={() => setWebCamEnabled(true)}
              className="w-full md:w-[300px] gap-1 rounded-full bg-sky-500 hover:bg-sky-600"
            >
              <MdOutlineVideocam className="w-5 h-5" />
              Enable Web Cam and Microphone
            </Button>
            <Link href={`/dashboard/interview/${params.interviewId}/start`}>
              <Button className="w-full rounded-full md:w-[300px] gap-1 bg-sky-500 hover:bg-sky-600">
                <VscDebugStart className="w-5 h-5" />
                Start Interview
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interview;
