import React from "react";
import AddNewInterView from "./_components/AddNewInterview";
function Dashboard() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl text-gray-200">Dashboard</h2>
      <h2 className="text-gray-300">
        Create and Start your AI Mockup Interview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <AddNewInterView />
      </div>
    </div>
  );
}

export default Dashboard;
