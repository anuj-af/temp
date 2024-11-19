import React from "react";

const DocumentChecklist = () => {
  const documents = [
    "Passport Size Photo",
    "Scanned Signature",
    "Father/Guardian Photo",
    "Mother/Guardian Photo",
    "SSC Marksheet",
    "Domicile Certificate",
    "Income Certificate",
    "Undertaking Certificate",
    "Caste Certificate",
    "Aadhar Card",
  ];

  return (
    <div className="bg-blue-200 w-full max-w-sm p-6 rounded-lg shadow-lg mr-0">
      <div className="bg-blue-800 text-white text-center rounded-t-lg py-2 font-bold">
        Document Checklist
      </div>
      <ul className="bg-white py-4 px-6 rounded-b-lg space-y-4">
        {documents.map((doc, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 text-gray-700 text-sm"
          >
            <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0"></div>
            <span>{doc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentChecklist;