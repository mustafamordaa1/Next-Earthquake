import Image from 'next/image'

const Map = ({cordinatesData}) => {

  const img = cordinatesData ? (`https://www.mapquestapi.com/staticmap/v5/map?locations=${cordinatesData}%7Cvia-sm-ff0000&size=400%2C300%402x&type=map&key=PQCMDKpFJGfgajubdKoYdZdWT3tT7Sx6&zoom=1`) : ("/Media.svg")
  console.log(img)
  
  return (
    <Image
    src= {img}
    alt="map"
    width={600}
    height={450}
    priority
    className='shadow-2xl shadow-main-700/50 rounded-lg'
     />
  )
}

export default Map