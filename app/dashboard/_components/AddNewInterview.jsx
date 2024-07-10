import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";

const AddNewInterview = () => {
  return (
    <>
      <div>
        <div
          className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
          style={{
            background: "rgba(31,30,30,0.5)",
            boxShadow: "1px solid rgba(110,110,110,0.25)",
            backdropFilter: "blur( 10px )",
          }}
        >
          <h2 className="font-bold text-lg text-center text-white">
            Add New +
          </h2>
        </div>
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default AddNewInterview;
