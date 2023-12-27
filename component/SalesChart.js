import React from 'react'
import BarChat from './BarChart';

const SalesChart = () => {
    // const data = {
    //     labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    //     datasets: [
    //       {
    //         data: [30, 59, 80, 89, 100, 150, 200],
    //         fill: false,
    //         tension: 0.1,
    //       },
    //     ],
    //   };
    
      const barChatData = {
        labels: [
          "Sep 10",
          "Sep 11",
          "Sep 12",
          "Sep 13",
          "Sep 14",
          "Sep 15",
          "Sep 16",
        ],
        datasets: [
          {
            label: "",
            data: [40, 20, 60, 140, 100, 120, 80],
            backgroundColor: ["#1F2B5B"],
            borderColor: ["rgb(201, 203, 207)"],
            borderWidth: 1,
            barThickness: 10,
            borderRadius: 10,
          },
        ],
      };
  return (
    <BarChat data={barChatData} options={{responsive:true}}/>
  )
}

export default SalesChart
