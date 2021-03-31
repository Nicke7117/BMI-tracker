import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Chart } from "./components/Chart";
import { useState } from "react";

export const App = () => {
  const [bmiData, setbmiData] = useState([])
  function bmiDataToHook(newbmiData) {
    setbmiData([...bmiData, newbmiData]);
    localStorage.setItem("Bmi data", JSON.stringify(bmiData));
  }

  return (
    <div className="bg-green-200">
      <Title />
      <Form addData={bmiDataToHook} />
      <Chart />
    </div>
  );
};
