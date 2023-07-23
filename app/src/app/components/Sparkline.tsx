import React from 'react';

const Sparkline = ({ data }: { data: number[]}) => {
  // Helper function to calculate the SVG path data
  const getPathData = (data: number[]) => {
    const maxValue = Math.max(...data);
    const scaledData = data.map((value) => (value / maxValue) * 50); // Scale the data to fit within the SVG height
    const points = scaledData.map((value: number, index: number) => `${index * 20},${60 - value}`);
    return `M${points.join(' L')}`;
  };

  return (
    <svg
      viewBox={`0 0 ${(data.length - 1) * 20} 60`}
      className="w-full h-16 bg-blue-200"
    >
      <path
        fill="none"
        strokeWidth="3"
        stroke="blue"
        strokeLinejoin="round"
        strokeLinecap="round"
        d={getPathData(data)}
      />
      {/* Add a dot at the end of the sparkline */}
      <circle cx={(data.length - 1) * 20} cy={60 - (data[data.length - 1] / Math.max(...data)) * 50} r="3" fill="black" />
    </svg>
  );
};

export default Sparkline;
