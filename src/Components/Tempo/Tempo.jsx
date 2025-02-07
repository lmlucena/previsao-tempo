/* eslint-disable react/prop-types */

function Tempo ({ weather }) {
    return (
        <div className="bg-white/50 rounded-md p-5 mt-5 mb-5">
            <h2 className="text-3xl font-bold">{weather.name}</h2>
            <div className="flex items-center justify-center">
                <img className="w-28" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="icone" />
                <p className="font-bold text-4xl">{Math.round(weather.main.temp)}ºC</p>
            </div>

            <p className="capitalize font-bold text-2xl mb-2.5">{weather.weather[0].description}</p>
            <div className="flex justify-around">
                <p className="font-bold">Sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
                <p className="font-bold">Umidade: {weather.main.humidity}%</p>
                <p className="font-bold">Pressão: {weather.main.pressure} hPa</p>
            </div>

        </div>
    )
}

export default Tempo