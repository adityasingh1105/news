import React, {  useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import './Weather.css'

function Weather() {

    const apiKey = "292248836d682f071c05baa2ff825b39"
    const [data, setData] = useState({});
    const getweatherDetails = () => {
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=ahmedabad" + "&appid=" + apiKey
        axios.get(apiURL).then((res) => {
          console.log(res.data)
            setData(res.data.main.temp)
            data = res.data.main.temp
        }).catch((err) => {
        

        })
    }
    useEffect(() => { getweatherDetails() }, [])
    return (
        <div className="col-md-12 text-centre mt-3">
            <div className="shadow rounded weatherBox">
                <img className="weatherIcon" src='https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png' alt='..'/>
                <h5 className='weatherTemp'>{(data - 273.15).toFixed(1)}°C</h5>
            </div>
        </div>
    )


}

export default Weather