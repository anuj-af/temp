import React, { useState } from "react";

const Table = () => {
    // Sample data for the table
    const tableData = [
      {
        sno: "01",
        appId: "JK22035678913",
        instituteCode: "M0167",
        instituteName: "Institute of Engineering and Technology, DAVV, Indore",
        courseYear: "First year",
        status: "New",
      },
      {
        sno: "02",
        appId: "JK22234567890",
        instituteCode: "A0738",
        instituteName: "National Institute of Technology, Nagpur [VNIT]",
        courseYear: "First year",
        status: "New",
      },
      {
        sno: "03",
        appId: "JK22234567890",
        instituteCode: "B0934",
        instituteName: "Birla Institute of Technology and Science Pilani",
        courseYear: "First year",
        status: "New",
      },
      {
        sno: "04",
        appId: "JK225678432152",
        instituteCode: "M0165",
        instituteName: "National Institute of Technology, Nagpur [VNIT]",
        courseYear: "First year",
        status: "New",
      },
      {
        sno: "05",
        appId: "JK220356789132",
        instituteCode: "R0712",
        instituteName: "Chameli Devi Group of Institutions, Indore",
        courseYear: "First year",
        status: "New",
      },
      {
        sno: "06",
        appId: "JK22045678914",
        instituteCode: "C0837",
        instituteName: "Indian Institute of Technology, Delhi",
        courseYear: "Second year",
        status: "Accepted",
      },
      {
        sno: "07",
        appId: "JK22055678915",
        instituteCode: "D0938",
        instituteName: "Anna University, Chennai",
        courseYear: "Third year",
        status: "Rejected",
      },
      {
        sno: "08",
        appId: "JK22035678913",
        instituteCode: "M0167",
        instituteName: "Institute of Engineering and Technology, DAVV, Indore",
        courseYear: "First year",
        status: "New",
      },
      {
        sno: "09",
        appId: "JK22234567890",
        instituteCode: "A0738",
        instituteName: "National Institute of Technology, Nagpur [VNIT]",
        courseYear: "First year",
        status: "New",
      },
      {
        sno: "10",
        appId: "JK22234567890",
        instituteCode: "B0934",
        instituteName: "Birla Institute of Technology and Science Pilani",
        courseYear: "First year",
        status: "New",
      },
      {
        sno: "11",
        appId: "JK225678432152",
        instituteCode: "M0165",
        instituteName: "National Institute of Technology, Nagpur [VNIT]",
        courseYear: "First year",
        status: "New",
      },
      {
        sno: "12",
        appId: "JK220356789132",
        instituteCode: "R0712",
        instituteName: "Chameli Devi Group of Institutions, Indore",
        courseYear: "First year",
        status: "New",
      },
      {
        sno: "13",
        appId: "JK22045678914",
        instituteCode: "C0837",
        instituteName: "Indian Institute of Technology, Delhi",
        courseYear: "Second year",
        status: "Accepted",
      },
      {
        sno: "14",
        appId: "JK22055678915",
        instituteCode: "D0938",
        instituteName: "Anna University, Chennai",
        courseYear: "Third year",
        status: "Rejected",
      },
    ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  // Calculate total pages
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  // Get current rows for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-11/12">
      <table className="bg-white shadow-md rounded-lg border-collapse w-full">
        <thead>
          <tr className="bg-hblue2 text-white">
            <th className="py-2 px-4 text-left border-r-2 border-slate-400">Sno.</th>
            <th className="py-2 px-4 text-left border-r-2 border-slate-400">Application ID</th>
            <th className="py-2 px-4 text-left border-r-2 border-slate-400">Institute Code</th>
            <th className="py-2 px-4 text-left border-r-2 border-slate-400">Institute Name</th>
            <th className="py-2 px-4 text-left border-r-2 border-slate-400">Course Year</th>
            <th className="py-2 px-4 text-left border-r-2 border-slate-400">Status</th>
            <th className="py-2 px-4 text-center">View</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-blue-50" : "bg-white"
              } text-gray-800`}
            >
              <td className="py-2 px-4 border-r-2 border-slate-300">{row.sno}</td>
              <td className="py-2 px-4 border-r-2 border-slate-300">{row.appId}</td>
              <td className="py-2 px-4 border-r-2 border-slate-300">{row.instituteCode}</td>
              <td className="py-2 px-4 border-r-2 border-slate-300">{row.instituteName}</td>
              <td className="py-2 px-4 border-r-2 border-slate-300">{row.courseYear}</td>
              <td className="py-2 px-4 border-r-2 border-slate-300">{row.status}</td>
              <td className="py-2 px-4 text-center">
                <a className="bg-hblue2 text-white px-4 py-1 rounded-md hover:bg-blue-700" href="/sag/documents">
                  OPEN
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center py-4 mt-4">
        <button
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === 1 ? "bg-gray-300" : "bg-hblue2 text-white hover:bg-blue-700"
          }`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === page + 1 ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </button>
        ))}
        <button
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === totalPages ? "bg-gray-300" : "bg-hblue2 text-white hover:bg-blue-700"
          }`}
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
