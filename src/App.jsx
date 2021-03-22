import { Title } from "./components/Title";
import { AddBMI } from "./components/AddBMI";
import { Chart } from "./components/Chart";
import { useState } from "react";

const App = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [bmi, setBmi] = useState([
    { weight: 55, height: 155, date: currentDate, id: 1 },
  ]);

  function bmiToChart(e) {
    e.preventDefault();
    setBmi([...bmi, {weight: 55, height: 133, date: currentDate, id: 3}]);
    console.log(bmi);
  }
  return (
    <div className="h-screen w-screen bg-green-200 relative">
      <Title />
      <AddBMI 
        onClick={bmiToChart}
/>
      <Chart onClick={bmiToChart} />
    </div>
  );
};

export default App;


