import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as apis from '../../api'
import ChartZing from '../../components/ChartZing'
import TopChartList from '../../components/TopChartList'
import WeeklyChart from '../../components/WeeklyChart'

function ZingChart() {
    const [data, setData] = useState()
    useEffect(() => {
      const zingChart = async () => {
        const res = await apis.ApiChartHome()
        setData(res?.data?.data)
      } 
      zingChart()
    }, [])
  return (
    <div className=''>
      <ChartZing />
      <TopChartList data={data?.RTChart.items}/>
      <WeeklyChart data={data?.weekChart}/>
    </div>
  )
}

export default ZingChart