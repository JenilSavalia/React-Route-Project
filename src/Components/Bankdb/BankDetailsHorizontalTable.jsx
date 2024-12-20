import React from "react";

const HorizontalScrollableTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="p-4 text-gray-600">No data available to display.</div>;
  }

  return (
    <div className="p-4">
      <div className="overflow-x-auto w-[450px] sm:w-[680px] md:w-[890px] lg:w-[1200px] xl:w-[1300px] 2xl:w-[1600px] flex border border-gray-300 rounded-lg shadow-md">
        <table className="table-auto w-full bg-white text-left text-sm">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              {Object.keys(data[0]).map((key, index) => (
                <th key={index} className="px-4 py-2 border-b">
                  {key.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex} className="px-4 py-2 border-b">
                    {typeof value === "boolean" ? (value ? "Yes" : "No") : value || "N/A"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HorizontalScrollableTable;
