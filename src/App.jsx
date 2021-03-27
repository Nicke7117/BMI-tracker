import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Chart } from "./components/Chart";
import { useState } from "react";

export const App = () => {
  const [bmiData, setbmiData] = useState([]);

  function bmiDataToHook(newbmiData) {
    setbmiData([...bmiData, newbmiData]);
    console.log(bmiData);
  }

  return (
    <div className="h-screen w-screen bg-green-200 relative">
      <Title />
      <Form addData={bmiDataToHook} />
      <Chart />
    </div>
  );
};

