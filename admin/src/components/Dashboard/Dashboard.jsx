/*

Copyright 2024 Himanshu Dinkar

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";
import {
  BarChart,
  TrendingUp,
  Users,
  Award,
  CircleDollarSign,
  Briefcase,
  GraduationCap,
  Activity
} from "lucide-react";

const DataCard = ({ title, value, icon: Icon, color, trend }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
        <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
      </div>
      {trend && (
        <span className={`text-sm font-medium ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {trend}
        </span>
      )}
    </div>
    <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

const Dashboard = () => {
  const stats = [
    {
      title: "Average Attendance",
      value: "84.2%",
      icon: Activity,
      color: "bg-blue-500",
      trend: "+2.4%"
    },
    {
      title: "Average Marks",
      value: "76.5 / 100",
      icon: Award,
      color: "bg-purple-500",
      trend: "+1.2%"
    },
    {
      title: "Top Students count",
      value: "4500",
      icon: Users,
      color: "bg-orange-500",
      trend: "+120"
    },
    {
      title: "Total Fees Collected",
      value: "₹2.4 Cr",
      icon: CircleDollarSign,
      color: "bg-green-500",
      trend: "+8%"
    },
    {
      title: "Placement Rate",
      value: "92%",
      icon: Briefcase,
      color: "bg-indigo-500",
      trend: "+5.1%"
    },
    {
      title: "Graduation Rate",
      value: "98.5%",
      icon: GraduationCap,
      color: "bg-pink-500",
      trend: "+0.5%"
    }
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Analytics Overview</h2>
        <p className="text-gray-500">Real-time performance metrics for UG & PG Programs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <DataCard key={index} {...stat} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <BarChart className="h-5 w-5 text-blue-500" />
            Course Distribution
          </h3>
          <div className="space-y-4">
            {[
              { branch: "MBA / MCA", count: "1,450", percent: 40 },
              { branch: "BBA / BCA", count: "1,100", percent: 30 },
              { branch: "M.Sc / MA", count: "800", percent: 20 },
              { branch: "B.Com", count: "350", percent: 10 }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 font-medium">{item.branch}</span>
                  <span className="text-gray-800 font-bold">{item.count}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            Program Breakdown
          </h3>
          <div className="space-y-4">
            {[
              { status: "Post Graduate (5 Courses)", count: "MBA, MCA, MSc, MA", color: "bg-purple-500" },
              { status: "Under Graduate (3 Courses)", count: "BBA, BCA, B.Com", color: "bg-blue-500" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm text-gray-600 font-medium">{item.status}</span>
                </div>
                <span className="text-xs text-gray-500 font-bold">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
