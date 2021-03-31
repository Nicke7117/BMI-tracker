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
    <div className="py-5 justify-center flex">
      <form className="" onSubmit={sendDataToApp}>
        <section>
          <div className="float-left">
            <Inputlabel htmlFor="weight" />

            <Input
              id="weight"
              onChange={updateState}
              value={userData.weight}
            />
          </div>
          <div className="float-left">
            <Inputlabel htmlFor="height" />
            <Input
              id="height"
              onChange={updateState}
              value={userData.height}
            />
          </div>
        </section>
        <input
          type="submit"
          value="submit"
          className="rounded-xl w-48 h-10 mt-2 bg-blue-200 text-xl ml-4 disabled:bg-black"
          disabled={userData.weight === "" || userData.height === ""}
        />
      </form>
    </div>
  );
};
