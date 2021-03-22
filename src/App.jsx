import { Title } from "./components/Title";
import { Userinput } from "./components/Userinput";
import { Chart } from "./components/Chart";
import { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState([
    { weight: null, height: null, date: null, id: null },
  ]);

  function bmiToChart(e) {
    e.preventDefault();
    setUserInput([...userInput]);
    console.log(userInput);
    /*     const heightToMeter = height / 100;
    const heightSquared = heightToMeter * heightToMeter;
    const bmi = weight / heightSquared;
    set
    console.log(bmi); */
  }
  return (
    <div className="h-screen w-screen bg-green-200 relative">
      <Title />
      <Userinput
        onClick={bmiToChart}
        setWeight={setUserInput}
        setWeight={(e) =>
          setUserInput({ ...userInput, weight: parseFloat(e.target.value) })
        }
        setHeight={(e) =>
          setUserInput({ ...userInput, height: parseFloat(e.target.value) })
        }
      />
      <Chart onClick={bmiToChart} />
    </div>
  );
};

export default App;
