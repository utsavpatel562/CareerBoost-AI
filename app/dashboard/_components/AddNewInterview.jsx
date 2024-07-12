"use client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
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

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [JobExperience, setJobExperience] = useState();

  const [loading, setLoading] = useState(false);
  const [JsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();

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
    const MockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);

    if (MockJsonResp) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
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
      }
    } else {
      console.log("ERROR!!! CHECK YOUR CODE UTSAV");
    }
    setLoading(false);
  };
  return (
    <>
      <div>
        <div
          className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
          style={{
            background: "rgba(31,30,30,0.5)",
            boxShadow: "1px solid rgba(110,110,110,0.25)",
            backdropFilter: "blur( 8px )",
          }}
          onClick={() => setOpenDialog(true)}
        >
          <h2 className="font-bold text-lg text-center text-white">
            Add New +
          </h2>
        </div>
        <Dialog open={openDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-gray-700 text-2xl">
                Tell us more about your job interviwing
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
                    <Button type="submit" disabled={loading}>
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
