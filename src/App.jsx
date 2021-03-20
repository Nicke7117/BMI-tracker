import { Title } from "./components/Title";
import { Userinput } from "./components/Userinput";
import { Chart } from "./components/Chart"

const App = () => {
  return (
    <div className="h-screen w-screen bg-green-200 relative">
      <Title />
      <Userinput />
      <Chart />
    </div>
  );
};

export default App;
