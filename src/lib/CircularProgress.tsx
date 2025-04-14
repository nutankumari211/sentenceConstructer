import React from "react";

interface CircularProgressProps {
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage }) => {
  const radius = 45;
  const circumference = Math.PI * 2 * radius;

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#22c55e"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (circumference * percentage) / 100}
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-green-600">{percentage}/10</span>
        <span className="text-xs text-gray-500 mt-1">Overall Score</span>
      </div>
    </div>
  );
};

export default CircularProgress;
