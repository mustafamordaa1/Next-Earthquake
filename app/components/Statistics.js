import Image from 'next/image'

const Statistics = ({StatisticsData}) => {

  const convertTime = (timeString) => {
    const now = new Date();
    const dateNow = now.getTime();
    const date = new Date(timeString);
    const timestamp = date.getTime(); 
    const diff = dateNow - timestamp
    return diff > 3600000 ? `${parseInt(diff / 3600000)} Hours` : `${parseInt(diff / 60000)} minutes`
  }

  const data = StatisticsData?.slice(0,3).map((item, index) => (
    <div className='flex flex-row justify-between border-solid w-full p-2 shadow-md shadow-main-700/50 text-xl font-thin leading-normal rounded-lg hover:shadow-main-600/90 hover:border-2 & border-main' key={index}>
    <div>
      <span className='flex flex-row text-main text-2xl items-start'>
      <Image
            src="/pin.svg"
            alt="Logo"
            width={25}
            height={25}
            priority
          /> <p>{item[3]}</p> <br />
      </span>
      <span className='flex flex-row items-top gap-1 ms-6'>
          <p>magnitude: <span className='text-main text-2xl me-4'>{item[0]}</span></p>
          <p>depth: <span className='text-main text-2xl'>{item[2]}</span> KM</p>
      </span>
    </div>
   <span className='text-sm text-accent2 float-right text-right'> since {convertTime(item[1])}</span></div>
  ));

  return (
    <div className='flex flex-col gap-4 me-4'>
      <p className='py-4 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-main via-accent2 to-accent1'>
          Latest<br />
          <span className=''>Earthquakes Data</span>
      </p>
      <div className='flex flex-col gap-2'>
        {data}
      </div>
    </div>
  )
}

export default Statistics