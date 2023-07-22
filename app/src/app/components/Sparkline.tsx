import React from 'react';

const Sparkline = ({ data }: { data: number[]}) => {
  // Helper function to calculate the SVG path data
  const getPathData = (data: number[]) => {
    const maxValue = Math.max(...data);
    const scaledData = data.map((value) => (value / maxValue) * 70); // Scale the data to fit within the SVG height
    const points = scaledData.map((value: number, index: number) => `${index * 20},${70 - value}`);
    return `M${points.join(' L')}`;
  };

  return (
    <svg
      viewBox={`0 0 ${(data.length - 1) * 20} 70`}
      className="w-80 h-16 bg-blue-200"
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
      <circle cx={(data.length - 1) * 20} cy={70 - (data[data.length - 1] / Math.max(...data)) * 70} r="3" fill="black" />
    </svg>
  );
};

export default Sparkline;
