import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputScreen = () => {
  const [verbalData, setVerbalData] = useState([106, 90, 100, 126, 106]);
  const [performanceData, setPerformanceData] = useState([85, 159, 100, 108, 85]);
  const [misicData, setMisicData] = useState([105.6, 107.4, 106.5]);

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Submit triggered");
    const inputData = { verbalData, performanceData, misicData };
    localStorage.setItem("chartData", JSON.stringify(inputData));
    navigate("/charts");
  };
  

  return (
    <div>
      <h2>Input Data for Charts</h2>
      <h3>Verbal Intelligence</h3>
      {verbalData.map((value, index) => (
        <input
          key={index}
          type="number"
          value={value}
          onChange={(e) => {
            const newVerbalData = [...verbalData];
            newVerbalData[index] = e.target.value;
            setVerbalData(newVerbalData);
          }}
        />
      ))}

      <h3>Performance Intelligence</h3>
      {performanceData.map((value, index) => (
        <input
          key={index}
          type="number"
          value={value}
          onChange={(e) => {
            const newPerformanceData = [...performanceData];
            newPerformanceData[index] = e.target.value;
            setPerformanceData(newPerformanceData);
          }}
        />
      ))}

      <h3>MISIC Profile</h3>
      {misicData.map((value, index) => (
        <input
          key={index}
          type="number"
          value={value}
          onChange={(e) => {
            const newMisicData = [...misicData];
            newMisicData[index] = e.target.value;
            setMisicData(newMisicData);
          }}
        />
      ))}

      <button onClick={handleSubmit}>Generate Charts</button>
    </div>
  );
};

export default InputScreen;
