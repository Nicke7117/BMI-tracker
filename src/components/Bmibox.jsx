import { Bmi } from "./Bmi";

export const Bmibox = ({ bmiData }) => {
  return (
    <div className="flex justify-center h-80 mt-7 pb-7">
      <div className={`bg-blue-200 w-5/12 pt-2 rounded-xl grid ${bmiData.length <= 2 ? "grid-rows-2 " : ""} grid-cols-2 ${bmiData.length > 4 ? "overflow-y-auto" : ""}`}>
      {bmiData.length > 0 ? bmiData.map(bmi => <Bmi bmiData={bmi}/>) : ""}
      </div>
    </div>
  );
};
