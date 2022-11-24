import React from 'react'
import BarCharts from './BarCharts'
import PieCharts from './PieCharts'
import './chart.css'

const Charts = () => {
  return (
    <div className='charts'>
        <div className='barChart'>

        <BarCharts/>
        </div>
        <div className='pieChart'>

        <PieCharts/>
        </div>
      
    </div>
  )
}

export default Charts
