import React from "react";
import doc1 from "../../data/docs/doc1.png";
import doc2 from "../../data/docs/doc2.png";
import doc3 from "../../data/docs/doc3.png";
import doc4 from "../../data/docs/doc4.png";
import doc5 from "../../data/docs/doc5.png";

function DisplayDocs() {
  return (
    <div className="text-center bg-white p-4">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Uploaded Documents</h2>

      {/* Document Grid */}
      <div className="flex flex-col">
        <div
          key=""
          className="border flex justify-center rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mx-4 my-2"
        >
          <img
            src={doc1}
            alt=""
            className="w-6/12 h-auto"
          />
        </div>
        <div
          key=""
          className="border flex justify-center rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mx-4 my-2"
        >
          <img
            src={doc2}
            alt=""
            className="w-6/12 h-auto"
          />
        </div>
        <div
          key=""
          className="border flex justify-center rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mx-4 my-2"
        >
          <img
            src={doc3}
            alt=""
            className="w-6/12 h-auto"
          />
        </div>
        <div
          key=""
          className="border flex justify-center rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mx-4 my-2"
        >
          <img
            src={doc4}
            alt=""
            className="w-6/12 h-auto"
          />
        </div>
        <div
          key=""
          className="border flex justify-center rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mx-4 my-2"
        >
          <img
            src={doc5}
            alt=""
            className="w-6/12 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayDocs;
