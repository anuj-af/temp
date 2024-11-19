import React from "react";
import ActionBar from "../../components/SAG/ActionBar.jsx";
import DisplayDocs from "../../components/SAG/DisplayDocs.jsx";
import DocumentChecklist from "../../components/SAG/DocumentChecklist.jsx";

const DocumentVerification = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4">
        <div className="mb-4">
          <DisplayDocs />
        </div>
        <div className="mt-full">
          <ActionBar />
        </div>
      </div>

      {/* Left Checklist Panel */}
      <div className="w-1/4 h-screen bg-gray-100 border-r-2 flex flex-col justify-center">
        <DocumentChecklist />
      </div>
    </div>
  );
};

export default DocumentVerification;
