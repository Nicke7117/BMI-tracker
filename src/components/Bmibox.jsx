import { Bmi } from "./Bmi";

export const Bmibox = ({ bmiData }) => {
  return (
    <div className="flex justify-center h-80 mt-7 pb-7">
      <div className="bg-blue-200 w-5/12 gap-4 rounded-xl grid grid-cols-2 grid-rows-2 overflow-y-auto">
        <Bmi />
      </div>
    </div>
  );
};
