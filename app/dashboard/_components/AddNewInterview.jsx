"use client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { IoMail } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { chatSession } from "../../../utils/GeminiAIModal";
import { db } from "../../../utils/db";
import { LoaderCircle } from "lucide-react";
import { MockInterview } from "../../../utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment/moment";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [JobExperience, setJobExperience] = useState();

  const [loading, setLoading] = useState(false);
  const [JsonResponse, setJsonResponse] = useState([]);
  const router = useRouter();
  const { isSignedIn, user } = useUser();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, JobExperience);

    const InputPrompt =
      "Job Position: " +
      jobPosition +
      ", Job Description: " +
      jobDesc +
      ", Years of Experience: " +
      JobExperience +
      ". Depends on Job Position, Job Description & Years of Experience give me the " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " interview question along with answer in JSON format, give me question and answer field on JSON.";

    const result = await chatSession.sendMessage(InputPrompt);

    // Log the raw response before parsing
    const rawResponse = await result.response.text();
    console.log("Raw Response:", rawResponse);

    // Clean the response
    let cleanedResponse = rawResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim(); // Trim any surrounding whitespace or new lines

    try {
      const MockJsonResp = JSON.parse(cleanedResponse); // Parse the cleaned JSON string
      console.log(MockJsonResp);
      setJsonResponse(MockJsonResp);

      if (MockJsonResp) {
        const resp = await db
          .insert(MockInterview)
          .values({
            mockId: uuidv4(),
            jsonMockResp: cleanedResponse, // Store cleaned JSON string
            jobPosition: jobPosition,
            jobDesc: jobDesc,
            jobExperience: JobExperience,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format("DD-MM-yyyy"),
          })
          .returning({ mockId: MockInterview.mockId });

        console.log("Inserted ID: ", resp);
        if (resp) {
          setOpenDialog(false);
          router.push("/dashboard/interview/" + resp[0]?.mockId);
        }
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
      console.log("Cleaned Response:", cleanedResponse);
    }

    setLoading(false);
  };

  return (
    <>
      <div>
        <div className="p-4 shadow-sm rounded-lg border-2 border-gray-200">
          {isSignedIn && (
            <div className="flex items-center space-x-4 my-5">
              <div>
                <h2 className="flex gap-1 text-slate-800 font-bold text-lg">
                  <span className="p-1 rounded-sm">
                    <FaUser />
                  </span>
                  <span className="font-normal">{user?.fullName}</span>
                </h2>
                <p className="flex gap-1 text-slate-800 font-bold text-lg">
                  <span className="p-1 rounded-sm">
                    <IoMail className="w-5 h-5" />
                  </span>
                  <span className="font-normal">
                    {user?.primaryEmailAddress?.emailAddress}
                  </span>
                </p>
              </div>
            </div>
          )}
          <Button
            onClick={() => setOpenDialog(true)}
            className="w-full rounded-md bg-slate-600 hover:bg-slate-700"
          >
            Create New Interview +
          </Button>
        </div>

        <Dialog open={openDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-gray-700 text-2xl">
                Tell us more about your job interviewing
              </DialogTitle>
              <DialogDescription>
                <form onSubmit={onSubmit}>
                  <div>
                    <h2>
                      Add Details about your job position/role, Job description
                      and years of experience
                    </h2>
                    <div className="mt-7 my-3">
                      <label className="text-gray-600 font-bold">
                        Job Role / Job Position
                      </label>
                      <Input
                        placeholder="Ex. Full Stack Developer"
                        required
                        autocomplete="off"
                        onChange={(event) => setJobPosition(event.target.value)}
                        className="mt-2 bg-slate-100 focus-visible:border-none hover:1px border-gray-400"
                      />
                    </div>
                    <div className="my-3">
                      <label className="text-gray-600 font-bold">
                        Job Description / Tech Stack{" "}
                      </label>
                      <Textarea
                        className="mt-2 bg-slate-100 focus-visible:border-none hover:1px border-gray-400"
                        placeholder="Ex. ReactJS, NextJS, TypeScript, Java, Python etc."
                        autocomplete="off"
                        required
                        onChange={(event) => setJobDesc(event.target.value)}
                      />
                    </div>
                    <div className="my-3">
                      <label className="text-gray-600 font-bold">
                        Years of experience
                      </label>
                      <Input
                        className="mt-2 bg-slate-100 mb-5 focus-visible:border-none hover:1px border-gray-400"
                        placeholder="Ex. 5"
                        type="number"
                        autocomplete="off"
                        required
                        max="50"
                        onChange={(event) =>
                          setJobExperience(event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="flex gap-5 justify-end">
                    <Button
                      variant="ghost"
                      onClick={() => setOpenDialog(false)}
                      type="button"
                    >
                      Close
                    </Button>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {loading ? (
                        <>
                          <LoaderCircle className="animate-spin" />
                          'Generating from AI'
                        </>
                      ) : (
                        "Start Interview"
                      )}
                    </Button>
                  </div>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default AddNewInterview;
