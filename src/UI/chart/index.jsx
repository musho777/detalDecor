"use client"
import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};


export function Chart({ data, title }) {
  const [dataa, setDataa] = useState({
    labels: [],
    datasets: [{}],
  })


  useEffect(() => {
    let item = { ...dataa }
    if (data?.length) {
      let view = []
      let lables = []
      data.map((elm, i) => {
        lables.push(elm.date.substring(8, 10))
        view.push(elm.view_count)
      })
      item.datasets = [{
        label: title,
        data: view,
        backgroundColor: '#FFB800',
      }]
      item.labels = lables
    }
    setDataa(item)
  }, [data])

  return <Bar options={options} data={dataa} />;
}
