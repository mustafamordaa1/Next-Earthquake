import React from 'react'

const Table = ({tableData}) => {

    const rows = tableData?.slice(0,5).map((item, index) => (
        <tr key={index}>
            <td className="border-2 text-lg ps-2 p-1 text-start border-main">{item[1]}</td>
            <td className="border-2 text-lg p-1 border-main">{item[0]}</td>
        </tr>
    ))

    return (
    <table className="border-collapse border-2 border-main w-full text-center">
        <thead className='text-xl font-bold'>
        <tr>
            <th className="border-2 text-main border-main">Region</th>
            <th className="border-2 text-main border-main">Magnitude</th>
        </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
  )
}

export default Table