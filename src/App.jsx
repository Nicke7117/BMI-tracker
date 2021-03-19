import { Title } from "./components/Title"
import { Userinput } from "./components/Userinput"

const App = () => {
  return (
    <div className="h-screen w-screen bg-purple-400 relative">
    <Title /> 
    <Userinput />
{/*       <Chart />  */}
    </div>
  );
};

export default App;
