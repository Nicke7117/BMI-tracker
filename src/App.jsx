import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Bmibox } from "./components/Bmibox";

export const App = () => {
  // Every object submitted by the form will be stored in this hook
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
          data: getValue("bmi"),
          fill: false,
          backgroundColor: "rgb(100, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    });
  }, [bmiData]);

  // The hook where the chart settings are stored
  const [data, setData] = useState();

  //Function to get data from the bmiData hook in an array
  function getValue(key) {
    const arr = [];
    for (let i = 0; i < bmiData.length; i++) {
      arr.push(bmiData[i][`${key}`]);
    }
    return arr;
  }

  //Function to set the object submitted into the bmiData hook
  function bmiDataToHook(newbmiData) {
    setbmiData([...bmiData, newbmiData]);
  }

  function removeItem(id) {
    const filteredArr = bmiData.filter((item) => id !== item.id);
    setbmiData(filteredArr);
  }

  return (
    <div className="bg-pink-300 w-full h-full overflow-x-hidden">
      <Title />
      <Form addData={bmiDataToHook} />
      <div className="flex justify-center px-96">
        <Line
          data={data}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <Bmibox bmiData={bmiData} removeItem={removeItem} />
    </div>
  );
};
