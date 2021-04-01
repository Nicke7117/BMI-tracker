import React, { useState } from "react";
import { Line } from "react-chartjs-2";

export const Chart = ({ bmiData }) => {
  const [data, setData] = useState({
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "BMI",
        data: [], //The BMI value
        fill: false,
        backgroundColor: "rgb(100, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  });
  return (
    <div className="flex justify-center px-96">
      <Line data={data} height={400} options={{ maintainAspectRatio: false }} />
    </div>
  );
};
