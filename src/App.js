import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherBox from "./component/WeatherBox";
const api = {
  key: "b0be164a28f2a303441216d5ecaffd5f",
  url: "https://api.openweathermap.org/data/2.5/",
};

const getStoredItems = () => {
  let items = JSON.parse(localStorage.getItem("weather"));
  if (items) {
    return items
  } else {
    return [];
  }
};

function App() {
  //const [search, setSearch] = useState("Cochin");
  const [weatherDatas, setWeatherDatas] = useState(getStoredItems());
  const [input, setInput] = useState("");

  useEffect(() => {
    let weatherData = JSON.stringify(weatherDatas)
    localStorage.setItem("weather", weatherData)
  }, [weatherDatas])

  const getWeather = () => {
    axios
      .get(`${api.url}weather?q=${input}&units=metric&appid=${api.key}`)
      .then((Response) => {
        setWeatherDatas([...weatherDatas, Response.data]);
        setInput("");
      });
  }
  console.log("object", weatherDatas);

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather();
  };

  /*  */

  return (
    <div>
      <div id="container">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="search">
              <input
                type="text"
                className="search-bar"
                placeholder="Search City"
                name="search"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                required
              />
              <button type="submit" className="fas fa-search" ></button>
            </div>
          </form>

          <div className="list-box2">
            {
              weatherDatas?.map((datas, ind) => {
                return (
                  <WeatherBox datas={datas} key={ind} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
