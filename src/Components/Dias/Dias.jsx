/* eslint-disable react/prop-types */

function Dias ({ weatherDays }) {
    console.log(weatherDays)
    return (
        <div className="bg-white/50 rounded-md p-5 mt-5 mb-5">
            <h2 className="font-bold text-2xl ">Previsão para os próximos 5 dias</h2>
            
            <div className="flex p-3 justify-evenly mt-2.5 flex-wrap gap-2.5">

                {/* DIA 1*/}    
                <div className="flex flex-col items-center p-3.5 rounded-md bg-white">
                    <p className="text-2xl font-bold">Dia {new Date(weatherDays.list[7].dt_txt + " UTC").toLocaleDateString("pt-BR", {day: 'numeric', month: "short"})}</p>
                    <img className="" src={`http://openweathermap.org/img/wn/${weatherDays.list[7].weather[0].icon}.png`} alt="icone" />
                    <p>{Math.round(weatherDays.list[7].main.temp)}ºC</p>
                    <p className="capitalize text-[16px]">{weatherDays.list[7].weather[0].description}</p>
                </div>

                {/* DIA 2 */}
                <div className="flex flex-col items-center p-3.5 rounded-md bg-white">
                    <p className="text-2xl font-bold">Dia {new Date(weatherDays.list[15].dt_txt + " UTC").toLocaleDateString("pt-BR", {day: 'numeric', month: "short"})}</p>
                    <img className="" src={`http://openweathermap.org/img/wn/${weatherDays.list[15].weather[0].icon}.png`} alt="icone" />
                    <p>{Math.round(weatherDays.list[15].main.temp)}ºC</p>
                    <p className="capitalize text-[16px]">{weatherDays.list[15].weather[0].description}</p>
                </div>   

                {/* DIA 3 */}
                <div className="flex flex-col items-center p-3.5 rounded-md bg-white">
                    <p className="text-2xl font-bold">Dia {new Date(weatherDays.list[23].dt_txt + " UTC").toLocaleDateString("pt-BR", {day: 'numeric', month: "short"})}</p>
                    <img className="" src={`http://openweathermap.org/img/wn/${weatherDays.list[23].weather[0].icon}.png`} alt="icone" />
                    <p>{Math.round(weatherDays.list[23].main.temp)}ºC</p>
                    <p className="capitalize text-[16px]">{weatherDays.list[23].weather[0].description}</p>
                </div>   

                {/* DIA 4 */}
                <div className="flex flex-col items-center p-3.5 rounded-md bg-white">
                    <p className="text-2xl font-bold">Dia {new Date(weatherDays.list[31].dt_txt + " UTC").toLocaleDateString("pt-BR", {day: 'numeric', month: "short"})}</p>
                    <img className="" src={`http://openweathermap.org/img/wn/${weatherDays.list[31].weather[0].icon}.png`} alt="icone" />
                    <p>{Math.round(weatherDays.list[31].main.temp)}ºC</p>
                    <p className="capitalize text-[16px]">{weatherDays.list[31].weather[0].description}</p>
                </div>   

                {/* DIA 5 */}
                <div className="flex flex-col items-center p-3.5 rounded-md bg-white">
                    <p className="text-2xl font-bold font-bold">Dia {new Date(weatherDays.list[39].dt_txt + " UTC").toLocaleDateString("pt-BR", {day: 'numeric', month: "short"})}</p>
                    <img className="" src={`http://openweathermap.org/img/wn/${weatherDays.list[39].weather[0].icon}.png`} alt="icone" />
                    <p>{Math.round(weatherDays.list[39].main.temp)}ºC</p>
                    <p className="capitalize text-[16px]">{weatherDays.list[39].weather[0].description}</p>
                </div>            
            </div>
        </div>
    )
}

export default Dias