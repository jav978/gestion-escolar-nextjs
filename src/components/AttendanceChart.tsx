"use client"
import Image from 'next/image'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data =[
    {
        name:'Mon',
        present:60,
        absent:40
    },
    {
        name:'Tue',
        present:70,
        absent:30
    },
    {
        name:'Wed',
        present:80,
        absent:50
    },
    {
        name:'Thu',
        present:80,
        absent:20
    },
    {
        name:'Fri',
        present:90,
        absent:10
    }
]

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
         {/* TITLE */}
        <div className="flex justify-between items-center">
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20} />
        </div>
         {/* CHART */}
         <ResponsiveContainer width="100%" height="90%">
            <BarChart width={500} height={300} data={data} barSize={20}>
                <CartesianGrid  strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                <XAxis dataKey="name" axisLine={false} tick ={{fill:"#d1d5db" }} tickLine={false}/>
                <YAxis axisLine={false} tick ={{fill:"#d1d5db" }} tickLine={false} />
                <Tooltip />
                <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
                <Bar 
                    dataKey="present"
                    fill='#FAE27C'
                    legendType='circle'
                    radius={[10,10,0,0]}

                />
                <Bar 
                    dataKey="absent"
                    fill='#C3EBFA'
                    legendType='circle'
                    radius={[10,10,0,0]}
                    
                />
            </BarChart>
         </ResponsiveContainer>
      
    </div>
  )
}

export default AttendanceChart
