
import React from "react";
import { Card } from "@/components/ui/card";

const DashboardPreview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Header with logo */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-servicepro-orange rounded-md flex items-center justify-center mr-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 8L12 14L22 8L12 2Z" fill="white" stroke="white" strokeWidth="2" />
              <path d="M5 11L2 12.5L12 19L22 12.5L19 11" fill="white" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <span className="font-bold text-xl">SERVICEPRO</span>
        </div>
        <div className="w-24 h-6 bg-gray-200 rounded-md"></div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Card className="bg-servicepro-orange text-white p-3 flex flex-col">
          <span className="text-2xl font-bold">$18,200</span>
          <span className="text-xs">Total sales</span>
        </Card>
        <Card className="bg-servicepro-navy text-white p-3 flex flex-col">
          <span className="text-2xl font-bold">12</span>
          <span className="text-xs">Open Jobs</span>
        </Card>
        <Card className="bg-servicepro-navy text-white p-3 flex flex-col">
          <span className="text-2xl font-bold">8</span>
          <span className="text-xs">Pending</span>
        </Card>
      </div>

      {/* Sales Overview */}
      <div className="mb-6">
        <h3 className="font-bold text-sm mb-2">Sales Overview</h3>
        <div className="bg-gray-50 p-2 rounded-lg h-24 relative">
          {/* Chart */}
          <svg width="100%" height="100%" viewBox="0 0 300 80" preserveAspectRatio="none">
            <polyline 
              points="0,60 30,50 60,45 90,55 120,40 150,45 180,35 210,25 240,30 270,20 300,15" 
              fill="none" 
              stroke="#0A2342" 
              strokeWidth="2"
            />
          </svg>
          {/* X-axis labels */}
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Job List (left) */}
        <div className="flex-1">
          <h3 className="font-bold text-sm mb-2">Job List</h3>
          <table className="w-full text-xs">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left py-1 px-1">Name</th>
                <th className="text-center py-1">Status</th>
                <th className="text-center py-1">Date</th>
                <th className="text-right py-1 px-1">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-1 px-1">Joe Smith</td>
                <td className="text-center">In Progress</td>
                <td className="text-center">12 apr.</td>
                <td className="text-right px-1">$228.00</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-1 px-1">Mary Johnson</td>
                <td className="text-center">Pending</td>
                <td className="text-center">11 apr.</td>
                <td className="text-right px-1">$550.00</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-1 px-1">Alice Brown</td>
                <td className="text-center">Approved</td>
                <td className="text-center">16 maj.</td>
                <td className="text-right px-1">$500.00</td>
              </tr>
              <tr>
                <td className="py-1 px-1">Mike Davis</td>
                <td className="text-center">Pending</td>
                <td className="text-center">11 apr.</td>
                <td className="text-right px-1">$420.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Job List (right - summarized) */}
        <div className="hidden sm:block w-1/3">
          <h3 className="font-bold text-sm mb-2">Job List</h3>
          <div className="bg-white border rounded-lg shadow-sm text-xs">
            <div className="grid grid-cols-2 bg-gray-100 p-1">
              <div className="font-medium">Name</div>
              <div className="font-medium">Date</div>
            </div>
            <div className="grid grid-cols-2 p-1 border-b border-gray-100">
              <div>Joe Smith</div>
              <div>In Progress</div>
            </div>
            <div className="grid grid-cols-2 p-1 border-b border-gray-100">
              <div>Mary Johnson</div>
              <div>Pending</div>
            </div>
            <div className="grid grid-cols-2 p-1 border-b border-gray-100">
              <div>Alice Brown</div>
              <div>Approved</div>
            </div>
            <div className="grid grid-cols-2 p-1">
              <div>Mike Davis</div>
              <div>Pending</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
