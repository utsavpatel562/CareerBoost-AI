import React from "react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

function InterviewCard({ interview }) {
  const router = useRouter();
  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
  };
  const onFeedbackPress = () => {
    router.push("/dashboard/interview/" + interview.mockId + "/feedback");
  };

  return (
    <div className="border shadow-sm rounded-lg p-3 bg-gray-900">
      <h2 className="font-bold text-gray-300 text-lg">
        {interview?.jobPosition}
      </h2>
      <h2 className="text-[16px] text-gray-400">
        {interview?.jobExperience} Years of Experience
      </h2>
      <h2 className="text-xs text-gray-400">
        Created At: {interview?.createdAt}
      </h2>
      <div className="flex justify-between mt-5 gap-3">
        <Button
          size="sm"
          variant="outline"
          className="w-full"
          onClick={onFeedbackPress}
        >
          Feedback
        </Button>
        <Button
          size="sm"
          className="bg-cyan-600 hover:bg-cyan-700 w-full"
          onClick={onStart}
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default InterviewCard;
