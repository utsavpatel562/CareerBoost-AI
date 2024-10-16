import React from "react";
import { Button } from "../../../components/ui/button";
import { useRouter } from "next/navigation";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

function InterviewCard({ interview }) {
  const router = useRouter();
  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
  };
  const onFeedbackPress = () => {
    router.push("/dashboard/interview/" + interview.mockId + "/feedback");
  };

  return (
    <>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg border-2 border-gray-400-1">
        <div className="bg-white p-4 sm:p-6">
          <time className="block text-xs text-gray-600">
            {" "}
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
          <div className="flex justify-between mt-5 gap-3">
            <Button
              size="sm"
              className="w-full bg-slate-600 hover:bg-slate-700"
              onClick={onFeedbackPress}
            >
              Feedback
            </Button>
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 w-full"
              onClick={onStart}
            >
              Start
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}

export default InterviewCard;
