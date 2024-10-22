// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const ChartComponent = ({ chartData }) => {
//   return (
//     <div>
//       <Bar 
//         data={chartData}
//         options={{
//           responsive: true,
//           plugins: {
//             legend: {
//               position: 'top',
//             },
//             title: {
//               display: true,
//               text: chartData.datasets[0].label,
//             },
//           },
//           scales: {
//             y: {
//               beginAtZero: true,
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default ChartComponent;


// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels"; // Import Data Labels Plugin

// // Register Chart.js components and Data Labels Plugin
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

// const ChartComponent = ({ chartData }) => {
//   return (
//     <div>
//       <Bar
//         data={chartData}
//         options={{
//           responsive: true,
//           plugins: {
//             legend: {
//               position: 'top',
//             },
//             title: {
//               display: true,
//               text: chartData.datasets[0].label,
//             },
//             datalabels: {
//               anchor: 'end',
//               align: 'end',
//               color: '#000', // Text color
//               formatter: (value) => value, // Show the value
//             },
//           },
//           scales: {
//             y: {
//               beginAtZero: true,
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default ChartComponent;

import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import Data Labels Plugin

// Register Chart.js components and Data Labels Plugin
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const ChartComponent = ({ chartData, onImageReady }) => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    const generateBase64Image = () => {
      if (chartRef.current) {
        const base64Image = chartRef.current.toBase64Image();
        onImageReady(base64Image); // Notify parent component when the image is ready
      }
    };

    // Generate the Base64 image only when the chartData changes and the chart is ready
    generateBase64Image();
  }, [chartData, onImageReady]); // Trigger when chartData changes

  return (
    <div>
      <Bar
        ref={chartRef}
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: chartData.datasets[0].label,
            },
            datalabels: {
              anchor: 'end',
              align: 'end',
              color: '#000', // Text color
              formatter: (value) => value, // Show the value
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default ChartComponent;
