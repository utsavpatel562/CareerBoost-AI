"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../../../utils/db";
import { MockInterview } from "../../../../utils/schema";
import { eq } from "drizzle-orm";
import Webcam from "react-webcam";
import { FaCircleInfo } from "react-icons/fa6";
import { Button } from "../../../../components/ui/button";
import { MdWorkOutline } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineVideocam } from "react-icons/md";
import { VscDebugStart } from "react-icons/vsc";
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
      <div className="my-10 text-slate-800">
        <div className="flex flex-wrap gap-10">
          <div className="bg-slate-100 flex flex-col my-5 gap-4 rounded-lg shadow-sm border md:w-[70%]">
            <div className="pl-5 pt-5">
              <h2 className="font-bold text-2xl">Let's Get Started</h2>
            </div>
            <div className="flex flex-col rounded-lg p-3 gap-4">
              {interviewData ? (
                <>
                  <div className="p-5 border rounded-lg bg-slate-800 text-black">
                    <h2 className="flex gap-1 text-lg text-slate-200">
                      <strong className="p-1">
                        <MdWorkOutline className="w-5 h-5" />
                      </strong>
                      <strong>Job Position: </strong>
                      {interviewData.jobPosition}
                    </h2>
                    <h2 className="flex gap-1 text-lg text-slate-200">
                      <strong className="p-1">
                        <TbFileDescription className="w-5 h-5" />
                      </strong>
                      <strong>Job Description: </strong>
                      {interviewData.jobDesc}
                    </h2>
                    <h2 className="flex gap-1 text-lg text-slate-200">
                      <strong className="p-1">
                        <LuCalendarDays className="w-5 h-5" />
                      </strong>
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
          <div>
            {webCamEnabled ? (
              <div className="flex justify-center">
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
              </div>
            ) : (
              <>
                <div className="flex justify-center">
                  <img
                    src="/webcam3.png"
                    className="w-[300px] h-[300px] rounded-lg my-7 p-14 bg-secondary text-black border"
                  />
                </div>
                <div className="grid grid-cols-1 gap-2 place-items-center">
                  <Button
                    onClick={() => setWebCamEnabled(true)}
                    className="md:w-[300px] gap-1 bg-green-600 hover:bg-green-500"
                  >
                    <MdOutlineVideocam className="w-5 h-5" />
                    Enable Web Cam and Microphone
                  </Button>
                </div>
              </>
            )}
            <Link
              href={"/dashboard/interview/" + params.interviewId + "/start"}
            >
              <Button className="md:w-[300px] mt-5 gap-1 bg-green-600 hover:bg-green-500">
                <VscDebugStart className="w-5 h-5" />
                Start Interview
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-end"></div>
      </div>
    </>
  );
}

export default Interview;
