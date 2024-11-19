import React from "react";

const ActionBar = () => {
  return (
    <div className="bg-blue-200 shadow-md border-t border-gray-200 p-4 flex justify-center items-center">
      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 font-semibold drop-shadow-md"
        >
          Accept
        </button>
        <button
          className="px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition duration-300 font-semibold drop-shadow-md"
        >
          Reconsider
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 font-semibold drop-shadow-md"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
