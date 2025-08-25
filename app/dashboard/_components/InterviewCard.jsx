import React from "react";
import { Button } from "../../../components/ui/button";
import { useRouter } from "next/navigation";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { db } from "../../../utils/db"; // Import your database connection
import { MockInterview } from "../../../utils/schema"; // Import your schema
import { eq } from "drizzle-orm";
import { FaTrashCan } from "react-icons/fa6";

function InterviewCard({ interview, onDeleteSuccess }) {
  const router = useRouter();

  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
  };

  const onFeedbackPress = () => {
    router.push("/dashboard/interview/" + interview.mockId + "/feedback");
  };

  const onDelete = async () => {
    const confirmation = window.confirm(
      `Are you sure you want to delete the interview for ${interview?.jobPosition}?`
    );

    if (confirmation) {
      try {
        // Deleting the interview by its mockId using Drizzle ORM
        const result = await db
          .delete(MockInterview)
          .where(eq(MockInterview.mockId, interview?.mockId)); // Correct deletion query syntax

        console.log("Interview deleted successfully:", result);

        if (onDeleteSuccess) {
          onDeleteSuccess(interview?.mockId);
        }
      } catch (error) {
        console.error("Error deleting interview:", error);
      }
    }
  };

  return (
    <>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg border-2 border-gray-400-1">
        <div className="bg-white p-4 sm:p-6">
          <time className="block text-xs text-gray-600">
            <span className="font-semibold">Created at:</span>
            {interview?.createdAt}
          </time>
          <a href="#">
            <h3 className="flex gap-1 mt-0.5 text-lg text-gray-900 font-sans">
              <span className="p-1 rounded-sm">
                <FaGraduationCap className="w-5 h-5" />
              </span>
              <span className="font-bold">Position -</span>
              {interview?.jobPosition}
            </h3>
          </a>
          <h3 className="flex gap-1 text-md text-gray-900 font-sans">
            <span className="p-1 rounded-sm">
              <MdOutlineWork className="w-5 h-5" />
            </span>
            <span className="font-bold">Years of Experience - </span>
            {interview?.jobExperience}
          </h3>
          <Button
            size="sm"
            className="w-full mt-4 bg-slate-600 hover:bg-slate-700 active:bg-slate-600 duration-150"
            onClick={onFeedbackPress}
          >
            Feedback
          </Button>
          <div className="flex items-center justify-between mt-2 gap-1">
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 w-full"
              onClick={onStart}
            >
              Start
            </Button>
            <Button
              size="sm"
              className="bg-red-600 hover:bg-red-700 w-full"
              onClick={onDelete}
            >
              <FaTrashCan />
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}

export default InterviewCard;
