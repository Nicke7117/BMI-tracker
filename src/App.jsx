import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export const App = () => {
  const [bmiData, setbmiData] = useState(
    localStorage.getItem("Bmi data") === null
      ? ""
      : JSON.parse(localStorage.getItem("Bmi data"))
  );

  useEffect(() => {
    localStorage.setItem("Bmi data", JSON.stringify(bmiData));
  });

  useEffect(() => {
    setData({
      labels: getValue("date"),
      datasets: [
        {
          label: "BMI",
          data: getValue("bmi"), //The BMI value
          fill: false,
          backgroundColor: "rgb(100, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    });
  }, [bmiData]);

  const [data, setData] = useState();

  function getValue(key) {
    const arr = [];
    for (let i = 0; i < bmiData.length; i++) {
      arr.push(bmiData[i][`${key}`]);
    }
    return arr;
  }
  function bmiDataToHook(newbmiData) {
    setbmiData([...bmiData, newbmiData]);
  }

  return (
    <div className="bg-pink-300 w-screen h-screen">
      <Title />
      <Form addData={bmiDataToHook} />
      <div className="flex justify-center px-96">
        <Line
          data={data}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
};
