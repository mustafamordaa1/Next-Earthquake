"use client"
import React, { useEffect, useState } from 'react';
import Map from './StaticMap';
import Statistics from './Statistics';
import LineChart from './LineChart';
import Table from './Table';
import Image from 'next/image'

const Feed = () => {
    
    const [cordinatesData, setCordinatesData] = useState(null);
    const [StatisticsData, setStatisticsData] = useState(null);
    const [chartData, setChartData] = useState(null);
    const [tableData, setTableData] = useState(null);

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
            const table = unstructuredData.map(item => { return [item.properties.mag, item.properties.flynn_region] }).sort((a, b) => b[0] - a[0])
            setStatisticsData(finalStatisticsData)
            setChartData(finalStatisticsData)
            setTableData(table)
          })
          .catch(error => {
            console.error(error);
          });
          
        };
    
        fetchData();
    }, []);

    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsHidden(scrollPosition > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className="flex flex-col w-full lg:gap-40 md:gap-10 sm:gap-10 py-10 lg:px-20 md:px-5 sm:px-5">
      <section className='flex lg:flex-row md:flex-col-reverse gap-10 sm:flex-col-reverse w-full justify-between items-center'>
        <Statistics StatisticsData={StatisticsData} />
        <Map cordinatesData={cordinatesData} />
      </section>
      <span className={`flex fixed z-10 bottom-5 inset-x-0 justify-center animate-bounce ${isHidden ? 'hidden' : ''}`}>
        <Image
            src="/arrow.svg"
            alt="Logo"
            width={40}
            height={40}
            prior
          />
      </span>
      <section className='flex lg:flex-row md:flex-col sm:flex-col w-full gap-20 justify-between items-start'>
        <div className='flex flex-col lg:w-1/2 md:w-full sm:w-full gap-8 justify-center items-center'>
          <p className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-main via-accent2 to-accent1'>Last 24H Strongest Earthquakes</p>
          <Table tableData={tableData} />
        </div>
        <div className='flex flex-col lg:w-1/2 md:w-full sm:w-full gap-8 justify-center items-center'>
          <p className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-main via-accent2 to-accent1'>Last 24H Earthquakes Graph</p>
          <LineChart chartData={chartData} />
        </div>
      </section>
    </div>
  )
}

export default Feed