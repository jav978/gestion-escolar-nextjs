"use client"

import Image from 'next/image'
import React from 'react'
import {} from 'recharts';

const data = [
    {
        name:'Jan',
        uv:400,
        pv:2400,
        amt:2400
    },
    {
        name:'Feb',
        uv:400,
        pv:2400,
        amt:2400
    },{
        name:'Mar',
        uv:400,
        pv:2400,
        amt:2400
    },{
        name:'Ap',
        uv:400,
        pv:2400,
        amt:2400
    },
    {
        name:'May',
        uv:400,
        pv:2400,
        amt:2400
    },
    {
        name:'Jun',
        uv:400,
        pv:2400,
        amt:2400
    },{
        name:'Jul',
        uv:400,
        pv:2400,
        amt:2400
    },{
        name:'Ago',
        uv:400,
        pv:2400,
        amt:2400
    },
    {
        name:'Sep',
        uv:400,
        pv:2400,
        amt:2400
    },
    {
        name:'Oct',
        uv:400,
        pv:2400,
        amt:2400
    },{
        name:'Nov',
        uv:400,
        pv:2400,
        amt:2400
    },{
        name:'Dic',
        uv:400,
        pv:2400,
        amt:2400
    }

]

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
            {/* TITLE */}
           <div className="flex justify-between items-center">
               <h1 className='text-lg font-semibold'>Finance</h1>
               <Image src="/moreDark.png" alt='' width={20} height={20} />
           </div>
            {/* CHART */}
      
    </div>
  )
}

export default FinanceChart
