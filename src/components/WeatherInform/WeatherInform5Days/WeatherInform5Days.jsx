import './WeatherInform5Days.css'

function WeatherInform5Days({ weather5Days }) {
    console.log(weather5Days)

    let dailyforecast = {}

    for (let forescast of weather5Days.list) {
        const date = new Date(forescast.dt * 1000).toLocaleDateString()

        if (!dailyforecast[date]) {
            dailyforecast[date] = forescast
        }
    }

    const next5DaysForescast = Object.values(dailyforecast).slice(0, 6)

    function convertDate(date) {
        
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })
        return newDate
    }
    return (
        <div className='weather-container'>
            <h3>Previão para daqui a 5 Dias</h3>
            <div className='weather-list'>
                {next5DaysForescast.map(forescast => (
                    <div key={forescast.dt} className='weather-item'>
                        <p className='forecast-day'>{convertDate(forescast)}</p>
                        <img src={`http://openweathermap.org/img/wn/${forescast.weather[0].icon}.png`} alt="" />
                        <p className='forecast-description'>{forescast.weather[0].description}</p>
                        <p>
                            {Math.round(forescast.main.temp_min)}ºC min /{' '}
                            {Math.round(forescast.main.temp_max)}ºC máx</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherInform5Days