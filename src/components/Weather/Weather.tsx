import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export interface Coord {
    lon: number;
    lat: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Clouds {
    all: number;
}

export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface RootObject {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

const Weather = () => {
    const [data, setData] = useState<RootObject | null>(null)
    let params = useParams();
    console.log(data)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=${process.env.REACT_APP_API_KEY}`)
            setData(res.data)
        }
        fetchData()
    }, [])

    function KelvinToCelsius(kelvinTemp: number | undefined) {
        if (data !== null) {
            return Math.round(kelvinTemp! - 273.15).toString() + "°C";
        }
    }

    function format_time(s: number) {
        return new Date(s * 1e3).toISOString().slice(-13, -5);
    }

    return (
        <div className='bg-sky-900 h-screen flex justify-center flex-col items-center'>
            <div className='flex flex-col items-center border-2 border-solid border-sky-900 w-80 h-[400px] justify-center rounded-3xl shadow-neumorphism'>
                <img src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="" />
                <h1 className='text-white font-bold text-3xl'>{data?.name}</h1>
                <p className='text-white capitalize'>{data?.weather[0].description} - {KelvinToCelsius(data?.main.temp)}</p>
            </div>

        </div>
    );
};

export default Weather;