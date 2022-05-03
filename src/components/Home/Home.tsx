import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
    let navigate = useNavigate();
    const [city, setCity] = useState('')
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value)
    }

    const handleSearch = async () => {
        navigate(`/weather/${city}`);
    }

    return (
        <div className="bg-sky-900 h-screen flex justify-center flex-col items-center">
            <h1 className='text-white font-bold text-7xl italic mb-5'>
                What weather ?
            </h1>

            <div>
                <input type="text" className="px-1" name="city" id="city" placeholder='Select a city' onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e)} />
                <button onClick={handleSearch} className='bg-indigo-900 h-full'><AiOutlineSearch className='inline w-8 text-xl text-center text-white' /></button>
            </div>
        </div>
    );
};

export default Home;