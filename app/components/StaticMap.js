import Image from 'next/image'

const Map = ({cordinatesData}) => {

  const img = cordinatesData ? (`https://www.mapquestapi.com/staticmap/v5/map?locations=${cordinatesData}%7Cvia-sm-ff0000&size=400%2C300%402x&type=map&key=PQCMDKpFJGfgajubdKoYdZdWT3tT7Sx6&zoom=1`) : ("/Media.svg")
  
  return (
    <div className='flex flex-col w-full text-start items-center'>
      <p className='w-full py-4 lg:hidden md:text-4xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-main via-accent2 to-accent1'>
        Plotted Map
      </p>
      <Image
      src= {img}
      alt="map"
      width={400}
      height={300}
      priority
      className='w-fit h-fit shadow-2xl shadow-main-700/50 rounded-lg'
      />
    </div>
  )
}

export default Map