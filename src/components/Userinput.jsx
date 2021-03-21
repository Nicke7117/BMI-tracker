import React, { useState } from "react";
import { Input } from "./Input";
import { Inputlabel } from "./Inputlabel";

export const Userinput = ({ onClick, setWeight, setHeight }) => {




  return (
    <div className="flex justify-center w-full mt-12 h-32">
      <form className="w-1/3 grid relative grid-cols-2 items-center">
        <Inputlabel
          htmlFor="weight"
          className="col-start-1 col-end-2 right-0 "
        />
        <Input
          className="col-start-1 col-end-2 right-3 absolute items-center"
          id="weight"
          onKeyUp={setWeight}
        />
        <Inputlabel
          htmlFor="height"
          className="left-0 col-start-2 col-end-3 "
        />
        <Input
          className="col-start-2 col-end-3 left-3 absolute "
          id="height"
          onKeyUp={setHeight}
        />
        <input
          type="submit"
          value="submit"
          className="absolute bottom-1 left-72 rounded-xl p-1"
          onClick={onClick}
/*           disabled={weight === null || height === null} */
        />
      </form>
    </div>
  );
};
