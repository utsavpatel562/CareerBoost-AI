"use client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
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
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                <div>
                  <h2>Tell us more about your job interviwing</h2>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button variant="ghost" onClick={() => setOpenDialog(false)}>
                    Cancel
                  </Button>
                  <Button>Start Interview</Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default AddNewInterview;
