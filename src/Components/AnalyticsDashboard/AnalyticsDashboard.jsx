import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './AnalyticsDashboard.css';

const AnalyticsDashboard = ({ spendData, brandData }) => {
  return (
    <div className="analytics-dashboard">
      <h2>Analytics Dashboard</h2>
      <div className="charts">
        <div className="chart-container">
          <h3>User Spend Categories</h3>
          <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
            {/* Wrap LineChart with ResponsiveContainer */}
            <LineChart data={spendData}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="category" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="AmountSpent" stroke="#007bff" strokeWidth={1} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-container">
          <h3>Most Preferred Brands</h3>
          <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
            {/* Wrap LineChart with ResponsiveContainer */}
            <LineChart data={brandData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="brand" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="ItemsCount" stroke="#00c853" strokeWidth={1} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
