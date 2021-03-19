import React from "react";
import { Input } from "./Input"
export const Userinput = () => {
  return (
    <div className="flex justify-center bg-black w-full mt-12 h-32">
      <form className="w-1/3 relative grid grid-column-2">
          <Input className="left-4 " id="weight"/>
          <Input className="right-4 " id="height"/>
      </form>
    </div>
  );
};
