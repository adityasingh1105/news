import React, { Component, useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import './Weather.css'
function Weather() {
    const apiKey = "292248836d682f071c05baa2ff825b39"
    const [data, setData] = useState({})
    const getweatherDetails = () => {
        const apiURL = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=" + apiKey
        axios.get(apiURL).then((res) => { console.log(res) }).catch((err) => { console.log(err) })
    }
    useEffect(() => { getweatherDetails("delhi") },[])
    return (
        <div className="col-md-12 text centre mt-5">
            <div className="shadow rounded weatherBox">
                <img className="weatherIcon" src='https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png' />
                <h5 className='weatherTemp'>18°C</h5>
            </div>
        </div>
    )

}

export default Weather