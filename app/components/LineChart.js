"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  );

ChartJS.register(CategoryScale, /* ... */)

const LineChart = ({chartData}) => {

    function transposeList(chartData) {
        const numColumns = chartData[0].length;
        const transposedList = [];
        for (let i = 0; i < numColumns; i++) {
          const column = chartData.map(row => row[i]);
          transposedList.push(column);
        }
        return transposedList;
      }

  return (
    <div className="flex justify-center w-full" >
      <Line
      data={{
          labels: chartData ? transposeList(chartData)[1].map(item => item.slice(11,16)).reverse() : "" ,
          datasets: [
          {
              data: chartData ? transposeList(chartData)[0].reverse() : "",
              backgroundColor: function(context) {
                  const index = context.dataIndex;
                  const value = context.dataset.data[index];
                  return value < 2 ? 'green' : 'red';},
          },
          ],
      }}
      options = {{
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }}  
      />
    </div>
  )
}

export default LineChart