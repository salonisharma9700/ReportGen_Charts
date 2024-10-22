// import React, { useEffect, useState } from "react";
// import ChartComponent from "./ChartComponent"; // Ensure this is correctly imported
// import { useNavigate } from "react-router-dom";

// const ChartScreen = () => {
//   const [verbalData, setVerbalData] = useState([]);
//   const [performanceData, setPerformanceData] = useState([]);
//   const [misicData, setMisicData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedData = localStorage.getItem("chartData");
//     if (storedData) {
//       const chartData = JSON.parse(storedData);
//       setVerbalData(chartData.verbalData);
//       setPerformanceData(chartData.performanceData);
//       setMisicData(chartData.misicData);
//     } else {
//       navigate("/"); // Redirect to input screen if no data is found
//     }
//   }, [navigate]);

//   if (verbalData.length === 0 || performanceData.length === 0 || misicData.length === 0) {
//     return <p>Loading...</p>; // Show loading message if data is not yet available
//   }

//   const verbalChartData = {
//     labels: ["Information", "Comprehension", "Arithmetic", "Similarities", "Digit Span"],
//     datasets: [
//       {
//         label: "Verbal Intelligence",
//         data: verbalData,
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const performanceChartData = {
//     labels: ["Picture Completion", "Block Design", "Object Assembly", "Coding", "Mazes"],
//     datasets: [
//       {
//         label: "Performance Intelligence",
//         data: performanceData,
//         backgroundColor: "rgba(255, 99, 132, 0.2)",
//         borderColor: "rgba(255, 99, 132, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const misicChartData = {
//     labels: ["Verbal scale", "Performance scale", "Full IQ"],
//     datasets: [
//       {
//         label: "MISIC Profile Score",
//         data: misicData,
//         backgroundColor: "rgba(153, 102, 255, 0.2)",
//         borderColor: "rgba(153, 102, 255, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div>
//       <h2>Verbal Intelligence Profile</h2>
//       <ChartComponent chartData={verbalChartData} />

//       <h2>Performance Intelligence Profile</h2>
//       <ChartComponent chartData={performanceChartData} />

//       <h2>MISIC Profile Score</h2>
//       <ChartComponent chartData={misicChartData} />
//     </div>
//   );
// };

// export default ChartScreen;


// import React, { useEffect, useState } from "react";
// import ChartComponent from "./ChartComponent"; // Ensure this is correctly imported
// import { useNavigate } from "react-router-dom";

// const ChartScreen = () => {
//   const [verbalData, setVerbalData] = useState([]);
//   const [performanceData, setPerformanceData] = useState([]);
//   const [misicData, setMisicData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedData = localStorage.getItem("chartData");
//     if (storedData) {
//       const chartData = JSON.parse(storedData);
//       setVerbalData(chartData.verbalData);
//       setPerformanceData(chartData.performanceData);
//       setMisicData(chartData.misicData);
//     } else {
//       navigate("/"); // Redirect to input screen if no data is found
//     }
//   }, [navigate]);

//   if (verbalData.length === 0 || performanceData.length === 0 || misicData.length === 0) {
//     return <p>Loading...</p>; // Show loading message if data is not yet available
//   }

//   const verbalChartData = {
//     labels: ["Information", "Comprehension", "Arithmetic", "Similarities", "Digit Span"],
//     datasets: [
//       {
//         label: "Verbal Intelligence",
//         data: verbalData,
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const performanceChartData = {
//     labels: ["Picture Completion", "Block Design", "Object Assembly", "Coding", "Mazes"],
//     datasets: [
//       {
//         label: "Performance Intelligence",
//         data: performanceData,
//         backgroundColor: "rgba(255, 99, 132, 0.2)",
//         borderColor: "rgba(255, 99, 132, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const misicChartData = {
//     labels: ["Verbal scale", "Performance scale", "Full IQ"],
//     datasets: [
//       {
//         label: "MISIC Profile Score",
//         data: misicData,
//         backgroundColor: "rgba(153, 102, 255, 0.2)",
//         borderColor: "rgba(153, 102, 255, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div>
//       <h2>Verbal Intelligence Profile</h2>
//       <ChartComponent chartData={verbalChartData} />

//       <h2>Performance Intelligence Profile</h2>
//       <ChartComponent chartData={performanceChartData} />

//       <h2>MISIC Profile Score</h2>
//       <ChartComponent chartData={misicChartData} />
//     </div>
//   );
// };

// export default ChartScreen;


import React, { useEffect, useState } from "react";
import ChartComponent from "./ChartComponent"; // Ensure this is correctly imported
import { useNavigate } from "react-router-dom";

const ChartScreen = () => {
  const [verbalData, setVerbalData] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);
  const [misicData, setMisicData] = useState([]);
  const [chartImages, setChartImages] = useState({}); // To hold Base64 strings
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("chartData");
    if (storedData) {
      const chartData = JSON.parse(storedData);
      setVerbalData(chartData.verbalData);
      setPerformanceData(chartData.performanceData);
      setMisicData(chartData.misicData);
    } else {
      navigate("/"); // Redirect to input screen if no data is found
    }
  }, [navigate]);

  const handleImageReady = (imageData, chartType) => {
    setChartImages((prev) => ({
      ...prev,
      [chartType]: imageData, // Correctly set the chart images here
    }));
  };
  

  const saveCharts = async () => {
    try {
      const response = await fetch("http://localhost:5000/save-charts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chartObj: chartImages }),
      });
      const result = await response.text();
      console.log(result); // Handle the response from the server
    } catch (error) {
      console.error("Error saving charts:", error);
    }
  };

  if (verbalData.length === 0 || performanceData.length === 0 || misicData.length === 0) {
    return <p>Loading...</p>; // Show loading message if data is not yet available
  }

  const verbalChartData = {
    labels: ["Information", "Comprehension", "Arithmetic", "Similarities", "Digit Span"],
    datasets: [
      {
        label: "Verbal Intelligence",
        data: verbalData,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const performanceChartData = {
    labels: ["Picture Completion", "Block Design", "Object Assembly", "Coding", "Mazes"],
    datasets: [
      {
        label: "Performance Intelligence",
        data: performanceData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const misicChartData = {
    labels: ["Verbal scale", "Performance scale", "Full IQ"],
    datasets: [
      {
        label: "MISIC Profile Score",
        data: misicData,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Function to get the graph buffers (dictionary of chart images)
  const getGraphBuffers = () => {
    return {
      verbalGraph: chartImages.verbalGraph || null,
      performanceGraph: chartImages.performanceGraph || null,
      misicProfileGraph: chartImages.misicProfileGraph || null,
    };
  };

  // Move the button logic to directly use graph buffers
  const handleLogGraphBuffers = () => {
    console.log(getGraphBuffers());
  };

  return (
    <div>
      <h2>Verbal Intelligence Profile</h2>
      <ChartComponent chartData={verbalChartData} onImageReady={(img) => handleImageReady(img, 'verbalGraph')} />

      <h2>Performance Intelligence Profile</h2>
      <ChartComponent chartData={performanceChartData} onImageReady={(img) => handleImageReady(img, 'performanceGraph')} />

      <h2>MISIC Profile Score</h2>
      <ChartComponent chartData={misicChartData} onImageReady={(img) => handleImageReady(img, 'misicProfileGraph')} />

      <button onClick={saveCharts}>Save Charts</button>
      <button onClick={handleLogGraphBuffers}>Log Graph Buffers</button>
    </div>
  );
};

export default ChartScreen;
