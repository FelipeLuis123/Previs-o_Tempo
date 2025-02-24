import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInform from './components/WeatherInform/WeatherInform'
import WeatherInform5Days from './components/WeatherInform/WeatherInform5Days/WeatherInform5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "4435687d515872e0940d798183974e33"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)

    setWeather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite uma cidade'></input>
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInform weather={weather} />}
      {weather5Days && <WeatherInform5Days weather5Days={weather5Days} />}

    </div>
  )
}

export default App
