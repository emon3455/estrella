import React from 'react';

interface TableProps {
  data: Array<{ [key: string]: any }>;
}

const CTable: React.FC<TableProps> = ({ data }) => {
  // Extract columns from the keys of the first object in the data array
  const columns = data.length > 0 ? Object?.keys(data[0]).filter(column => column !== '_id') : [];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={row._id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              {columns.map((column) => (
                <td key={column} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CTable;