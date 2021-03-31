import React, { useState, useRef } from "react";
import { Input } from "./Input";
import { Inputlabel } from "./Inputlabel";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ addData }) => {
  const [userData, setUserData] = useState({
    weight: localStorage.getItem("weight"),
    height: localStorage.getItem("height"),
    bmi: null,
    date: new Date().toISOString().split("T")[0],
    id: uuidv4(),
  });

  const initialState = {
    weight: "",
    height: "",
    bmi: null,
    date: new Date().toISOString().split("T")[0],
    id: uuidv4(),
  };

  function updateState(e) {
    const targetId = e.target.id;
    setUserData({ ...userData, [targetId]: e.target.value });
    localStorage.setItem(`${targetId}`, e.target.value);
  }

  function sendDataToApp(e) {
    e.preventDefault();
    const calculateBMI = userData.weight / Math.pow(userData.height / 100, 2);
    userData.bmi = calculateBMI;
    addData(userData);
    setUserData({ ...initialState });
    Object.keys(localStorage).forEach((key) => {
      if (key === "Bmi data") {
      } else {
        localStorage.setItem(key, "");
      }
    });
  }

  return (
    <div className="flex justify-center w-full mt-12 h-32">
      <form
        className="w-1/3 grid relative grid-cols-2 items-center"
        onSubmit={sendDataToApp}
      >
        <Inputlabel
          htmlFor="weight"
          className="col-start-1 col-end-2 right-0 "
        />
        <Input
          className="col-start-1 col-end-2 right-3 absolute items-center"
          id="weight"
          onChange={updateState}
          value={userData.weight}
        />
        <Inputlabel
          htmlFor="height"
          className="left-0 col-start-2 col-end-3 "
        />
        <Input
          className="col-start-2 col-end-3 left-3 absolute "
          id="height"
          onChange={updateState}
          value={userData.height}
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
