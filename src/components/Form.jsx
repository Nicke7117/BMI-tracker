import React, { useState, useRef } from "react";
import { Input } from "./Input";
import { Inputlabel } from "./Inputlabel";

export const Form = ({ addData }) => {
  const [userData, setUserData] = useState({
    weight: "",
    height: "",
    bmi: null,
    date: new Date().toISOString().split("T")[0],
  });

  const initialState = {
    weight: "",
    height: "",
    bmi: null,
    date: new Date().toISOString().split("T")[0],
  };

  const ref = useRef(null);

  function updateState(e) {
    const targetId = e.target.id;
    setUserData({ ...userData, [targetId]: e.target.value });
    localStorage.setItem(`${targetId}`, e.target.value);
    const localStorageItem = localStorage.getItem(targetId);
  }

  function sendDataToApp(e) {
    e.preventDefault();
    const heightSquared = Math.pow(userData.height / 100, 2);
    const calculateBMI = userData.weight / heightSquared;
    userData.bmi = calculateBMI;
    addData(userData);
    setUserData({ ...initialState });
    ref.current.reset();
  }

  return (
    <div className="flex justify-center w-full mt-12 h-32">
      <form
        className="w-1/3 grid relative grid-cols-2 items-center"
        onSubmit={sendDataToApp}
        ref={ref}
      >
        <Inputlabel
          htmlFor="weight"
          className="col-start-1 col-end-2 right-0 "
        />
        <Input
          className="col-start-1 col-end-2 right-3 absolute items-center"
          id="weight"
          onChange={updateState}
          value={localStorage.getItem("weight")}
        />
        <Inputlabel
          htmlFor="height"
          className="left-0 col-start-2 col-end-3 "
        />
        <Input
          className="col-start-2 col-end-3 left-3 absolute "
          id="height"
          onChange={updateState}
          value={localStorage.getItem("height")}
        />
        <input
          type="submit"
          value="submit"
          className="absolute bottom-1 left-72 rounded-xl p-1"
          disabled={userData.weight === "" || userData.height === ""}
        />
      </form>
    </div>
  );
};
