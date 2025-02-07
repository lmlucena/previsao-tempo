import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import Tempo from './Components/Tempo/Tempo'
import Dias from './Components/Dias/Dias'

function App() {
  const [weather, setWeather] = useState()
  const [weatherDays, setWeatherDays] = useState()
  const inputRef = useRef()

  async function searchCity() { 
    const city = inputRef.current.value
    const key = "99fde19add0d3d89854ea0c3e8e8b29f" // chave necessario para nao ter conflito
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const urlDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const dataCity = await axios.get(url)
    const dataDays = await axios.get(urlDays)
    setWeather(dataCity.data)
    setWeatherDays(dataDays.data)
    


  }


  return (
    <div  className='max-w-5xl m-auto p-5 text-center'>
      <h1 className='text-[48px] text-white font-bold'>Previsão do Tempo</h1>
      <input className='p-[10px] max-w-72 w-[60%] mt-[30px] rounded-s-2xl border-none divide-none bg-white' ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity} className='bg-amber-500 p-2.5 rounded-e-2xl font-bold cursor-pointer hover:bg-amber-400'>Buscar</button>


      {weather && <Tempo weather={weather} />} {/* os && serve como if e else. no caso é se tiver algum dado, manda o valor*/}
      {weatherDays && <Dias weatherDays={weatherDays} />}

    </div>
  )
}

export default App
