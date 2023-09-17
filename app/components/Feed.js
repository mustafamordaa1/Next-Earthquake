"use client"
import React, { useEffect, useState } from 'react';
import Map from './Map';
import Statistics from './Statistics';
import LineChart from './LineChart';

const Feed = () => {
    
    const [cordinatesData, setCordinatesData] = useState(null);
    const [StatisticsData, setStatisticsData] = useState(null);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          await fetch('https://www.seismicportal.eu/fdsnws/event/1/query?limit=20&start=13-9-2023&format=json')
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Request failed');
            }
          })
          .then(data => {
            const unstructuredData = data.features;
            const finalCoordinatesData = unstructuredData.map(item => { return item.geometry.coordinates.slice(0,2).reverse().join('%2C') }).slice(0,3).join('%7Cvia-ff0000-sm||');
            setCordinatesData(finalCoordinatesData);
            const finalStatisticsData = unstructuredData.map(item => { return [item.properties.mag, item.properties.time, item.properties.depth, item.properties.flynn_region] });
            setStatisticsData(finalStatisticsData)
            setChartData(finalStatisticsData)
          })
          .catch(error => {
            console.error(error);
          });
          
        };
    
        fetchData();
    }, []);

  return (
    <div className="flex flex-col w-full gap-40 py-10 px-20">
      <section className='flex flex-row w-full justify-between items-center'>
        <Statistics StatisticsData={StatisticsData} />
        <Map cordinatesData={cordinatesData} />
      </section>
      <section className='flex flex-col gap-8 justify-center items-center'>
        <p className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-main via-accent2 to-accent1'>Last 24H Earthquakes Graph</p>
        <LineChart chartData={chartData} />
      </section>
    </div>
  )
}

export default Feed