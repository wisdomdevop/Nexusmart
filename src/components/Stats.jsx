import React from 'react'
import { statistics } from '../constants'

const Stats = () => {
  return (
    <div>
     <div className="flex lg:justify-start md:items-start flex-wrap  w-full mt-20 gap-16 items-center justify-center">
        {statistics.map((stat)=> (
          <div key={stat.label} className=''>
            <p className="text-4xl font-palanquin font-bold text-center mx-auto">{stat.value}</p>
            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats