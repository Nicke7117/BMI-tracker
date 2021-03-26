import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { Chart } from "./components/Chart";
import { useState } from "react";

export const App = () => {
  const [bmi, setBmi] = useState([]);

  function bmiToHook(newBmi) {
    setBmi([...bmi, newBmi]);
    console.log(bmi);
  }
  return (
    <div className="h-screen w-screen bg-green-200 relative">
      <Title />
      <Form addData={bmiToHook} />
      <Chart dataToChart={bmi}/>
    </div>
  );
};

