import React from 'react'
import '../App.css'

const WeatherBox = ({ datas }) => {

    let d = new Date();
    let day = d.getDay();
    let date = d.toLocaleString("default", { weekday: "short" });
    let month = d.toLocaleString("default", { month: "short" });
    let year = d.getFullYear();

    let time = d.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    let cover = null;
    if (typeof datas.main !== "undefined") {
        if (datas.weather[0].main === "Clouds") {
            cover = "cover-pic cloud";
        } else if (datas.weather[0].main === "Rain") {
            cover = "cover-pic rain";
        } else if (datas.weather[0].main === "Thunderstorm") {
            cover = "cover-pic thunder";
        } else if (datas.weather[0].main === "Drizzle") {
            cover = "cover-pic drizzle";
        } else if (datas.weather[0].main === "Snow") {
            cover = "cover-pic winter";
        } else if (datas.weather[0].main === "Clear") {
            cover = "cover-pic sunny";
        } else if (datas.weather[0].main === "Mist") {
            cover = "cover-pic mist";
        } else if (datas.weather[0].main === "Haze") {
            cover = "cover-pic haze";
        } else {
            cover = "cover-pic random";
        }
    }

    let emoji = null;
    if (typeof datas.main !== "undefined") {
        if (datas.weather[0].main === "Clouds") {
            emoji = "fa-cloud";
        } else if (datas.weather[0].main === "Rain") {
            emoji = "fa-cloud-showers-heavy";
        } else if (datas.weather[0].main === "Thunderstorm") {
            emoji = "fa-cloud-bolt";
        } else if (datas.weather[0].main === "Drizzle") {
            emoji = "fa-cloud-drizzle";
        } else if (datas.weather[0].main === "Snow") {
            emoji = "fa-snowflake";
        } else if (datas.weather[0].main === "Sunny") {
            emoji = "fa-sun";
        } else if (datas.weather[0].main === "Mist") {
            emoji = "fa-smog";
        } else {
            emoji = "fa-cloud-sun";
        }
    }

    return (
        <div className={`main ${cover}`}>
            <div className="data1">
                <h2 className="location">
                    {datas.name}, {datas.sys.country}
                </h2>
                <h4 className="date">
                    {day}, {date}-{month}-{year} <br />
                    {time}
                </h4>
            </div>

            <div className="data2">
                <br />
                <i className={`fa-solid ${emoji}`}></i>
                <p className="temp">{Math.round(datas.main.temp)}°C</p>
                <h4 className="descr">{datas.weather[0].main}</h4>
                <h4 className="temp-range">
                    {Math.round(datas.main.temp_min)}°C |{" "}
                    {Math.round(datas.main.temp_max)}°C
                </h4>
            </div>

            <div className="data3">
                <br />
                <h4 className="humidity">Humidity: {datas.main.humidity}%</h4>
                <h4 className="wind">
                    Wind Speed: {datas.wind.speed} metre/sec
                </h4>
                <br />
            </div>
        </div>
    )
}

export default WeatherBox