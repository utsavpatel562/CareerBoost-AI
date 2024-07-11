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
  DialogTrigger,
} from "../../../components/ui/dialog";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [JobExperience, setJobExperience] = useState();
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
                <form>
                  <div>
                    <h2>
                      Add Details about your job position/role, Job description
                      and years of experience
                    </h2>
                    <div className="mt-7 my-3">
                      <label>Job Role / Job Position</label>
                      <Input
                        placeholder="Ex. Full Stack Developer"
                        required
                        autocomplete="off"
                      />
                    </div>
                    <div className="my-3">
                      <label>Job Description / Tech Stack </label>
                      <Textarea
                        placeholder="Ex. ReactJS, NextJS, TypeScript, Java, Python etc."
                        autocomplete="off"
                        required
                      />
                    </div>
                    <div className="my-3">
                      <label>Years of experience</label>
                      <Input
                        placeholder="Ex. 5"
                        type="number"
                        autocomplete="off"
                        required
                        max="50"
                      />
                    </div>
                  </div>
                  <div className="flex gap-5 justify-end">
                    <Button
                      variant="ghost"
                      onClick={() => setOpenDialog(false)}
                      type="button"
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Start Interview</Button>
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
