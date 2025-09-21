import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ModernDashboard = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M3 9L12 2L21 9V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V9Z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-800">ServicePro Dashboard</h2>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          <Card className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
            <div className="text-2xl font-bold">$45,200</div>
            <div className="text-sm opacity-90">Monthly Revenue</div>
            <div className="text-xs opacity-75 mt-1">↗ +18% vs last month</div>
          </Card>
          <Card className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
            <div className="text-2xl font-bold">23</div>
            <div className="text-sm opacity-90">Active Projects</div>
            <div className="text-xs opacity-75 mt-1">↗ +3 this week</div>
          </Card>
          <Card className="p-4 bg-gradient-to-r from-secondary to-orange-500 text-white border-0">
            <div className="text-2xl font-bold">8</div>
            <div className="text-sm opacity-90">New Leads</div>
            <div className="text-xs opacity-75 mt-1">This week</div>
          </Card>
          <Card className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
            <div className="text-2xl font-bold">97%</div>
            <div className="text-sm opacity-90">Client Satisfaction</div>
            <div className="text-xs opacity-75 mt-1">Based on reviews</div>
          </Card>
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <Card className="p-4">
            <h3 className="font-semibold text-slate-800 mb-3">Revenue Overview</h3>
            <div className="h-24 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg relative overflow-hidden">
              <svg width="100%" height="100%" viewBox="0 0 300 96" className="absolute inset-0">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M0,80 Q75,20 150,40 T300,25" 
                  fill="none" 
                  stroke="#3B82F6" 
                  strokeWidth="3"
                />
                <path 
                  d="M0,80 Q75,20 150,40 T300,25 L300,96 L0,96 Z" 
                  fill="url(#chartGradient)"
                />
              </svg>
            </div>
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
            </div>
          </Card>

          {/* Recent Projects */}
          <Card className="p-4">
            <h3 className="font-semibold text-slate-800 mb-3">Recent Projects</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium text-blue-700">JS</div>
                  <div>
                    <div className="text-sm font-medium">John Smith Roofing</div>
                    <div className="text-xs text-slate-500">Residential Repair</div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700">In Progress</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-xs font-medium text-purple-700">MJ</div>
                  <div>
                    <div className="text-sm font-medium">Mary Johnson</div>
                    <div className="text-xs text-slate-500">Commercial Install</div>
                  </div>
                </div>
                <Badge variant="outline" className="border-yellow-300 text-yellow-700">Pending</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-xs font-medium text-green-700">AB</div>
                  <div>
                    <div className="text-sm font-medium">Alice Brown</div>
                    <div className="text-xs text-slate-500">Roof Replacement</div>
                  </div>
                </div>
                <Badge variant="default" className="bg-blue-100 text-blue-700">Scheduled</Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-lg font-bold text-blue-700">15</div>
            <div className="text-sm text-blue-600">Quotes Pending</div>
          </Card>
          <Card className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="text-lg font-bold text-green-700">$12.5K</div>
            <div className="text-sm text-green-600">This Week Revenue</div>
          </Card>
          <Card className="p-3 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <div className="text-lg font-bold text-orange-700">98%</div>
            <div className="text-sm text-orange-600">On-Time Completion</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModernDashboard;