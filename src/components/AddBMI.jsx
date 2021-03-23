import React, { useState } from "react";
import { Input } from "./Input";
import { Inputlabel } from "./Inputlabel";

export const AddBMI = ({ onClick }) => {
  const [userData, setUserData] = useState({
    weight: null,
    height: null,
    bmi: 22,
    date: new Date().toISOString().split("T")[0],
  });

  function sendDataToApp(e){
    e.preventDefault()
    console.log(userData)
    return userData;
  }

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
          onKeyUp={(e) => setUserData({ ...userData, weight: e.target.value })}
        />
        <Inputlabel
          htmlFor="height"
          className="left-0 col-start-2 col-end-3 "
        />
        <Input
          className="col-start-2 col-end-3 left-3 absolute "
          id="height"
          onKeyUp={(e) => setUserData({ ...userData, height: e.target.value })}
        />
        <input
          type="submit"
          value="submit"
          className="absolute bottom-1 left-72 rounded-xl p-1"
          onClick={() => onClick(sendDataToApp)}
          disabled={userData.weight === null || userData.height === null}
        />
      </form>
    </div>
  );
};

