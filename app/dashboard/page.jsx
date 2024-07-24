import React from "react";
import AddNewInterView from "./_components/AddNewInterview";
import InterviewHistory from "./_components/InterviewHistory";
function Dashboard() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl text-red-1">Dashboard</h2>
      <h2 className="text-gray-500">
        Create and Start your AI Mockup Interview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <AddNewInterView />
      </div>
      {/* Previous Interview List */}
      <InterviewHistory />
    </div>
  );
}

export default Dashboard;
