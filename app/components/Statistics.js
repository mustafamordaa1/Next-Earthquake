import React from 'react'

const Statistics = ({StatisticsData}) => {

  const convertTime = (timeString) => {
    const now = new Date();
    const dateNow = now.getTime();
    const date = new Date(timeString);
    const timestamp = date.getTime(); 
    const diff = dateNow - timestamp
    return diff > 3600000 ? `${parseInt(diff / 3600000)} Hours` : `${parseInt(diff / 60000)} minutes`
  }

  const data = StatisticsData?.slice(0,5).map((item, index) => (
    <div className='flex flex-row justify-between text-xl font-thin leading-tight' key={index}>
    <div>
      <span className='text-main text-xl'>{index + 1}.
      </span> magnitude: <span className='text-main text-2xl'>{item[0]}</span>
      , depth: <span className='text-main text-2xl'>{item[2]}</span> KM
    </div>
   <span className='text-sm text-accent2'> since {convertTime(item[1])}</span></div>
  ));

  return (
    <div className='flex flex-col gap-4'>
    <p className='py-4 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-main via-accent2 to-accent1'>
        Latest<br />
        <span className=''>Earthquakes Data</span>
    </p>
    {data}
    </div>
  )
}

export default Statistics