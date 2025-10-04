import React from "react";
import Sessions from "../StudySession/components/Sessions.jsx";
const StudySessions = () => {
  return (
    <div className=" gap-4 p-4">
      <h1 className="text-3xl font-bold mb-4">Study Sessions</h1>
      <p className="text-gray-600">Manage your study sessions here.</p>
      <div className="flex flex-row">
        <Sessions />
      </div>
    </div>
  );
};

export default StudySessions;
