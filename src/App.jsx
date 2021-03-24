import { Title } from "./components/Title";
import { AddBMI } from "./components/AddBMI";
import { Chart } from "./components/Chart";
import { useState } from "react";

const App = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [bmi, setBmi] = useState([]);

  function bmiToChart(newBmi) {
    setBmi([...bmi, newBmi]);
    console.log(bmi);

    /*     setBmi([...bmi, newBmi])
    console.log(bmi); */
  }
  return (
    <div className="h-screen w-screen bg-green-200 relative">
      <Title />
      <AddBMI addData={bmiToChart} />
      <Chart />
    </div>
  );
};

export default App;
