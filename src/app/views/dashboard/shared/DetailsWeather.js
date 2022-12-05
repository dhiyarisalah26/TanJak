import React, { useState, useEffect, useMemo, useHistory } from "react";
// import { useHistory } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import WeatherImage from "./WeatherImage.js";
import { Divider } from '@mui/material';

const Details = () => {
  // const history = useNavigate()
  const [weatherData, setWeatherData] = useState(null)
  const [city] = useState("Jakarta")

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4e4680b861e7370dd650a7ebdc7d0f26`
      )
      .then(res => {
        // Successful request
        const weather = res.data;
        setWeatherData(weather);
      })
      .catch(err => {
        // The best practice of coding is to not use console.log
        console.log(err);
      });
  }, [city])

  // useEffect(() => {
  //   const searchParams = history.location.search
  //   const urlParams = new URLSearchParams(searchParams)
  //   const city = urlParams.get("name")
  //   if (city) {
  //     setCity(city);
  //   }
  // }, [history]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    let cloudiness = "";
    let currentTemp = "";
    let highTemp = "";
    let humidity = "";
    let lowTemp = "";
    let weatherType = "";
    let windSpeed = "";

    if (weatherData) {
      cloudiness = `${weatherData.clouds.all}%`;
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
      highTemp = `${Math.round(weatherData.main.temp_max)}°C`;
      humidity = `${weatherData.main.humidity}%`;
      lowTemp = `${Math.round(weatherData.main.temp_min)}°C`;
      weatherType = `${weatherData.weather[0].description}`;
      windSpeed = `${weatherData.wind.speed} mph`;
    }

    return {
      cloudiness,
      currentTemp,
      highTemp,
      humidity,
      lowTemp,
      weatherType,
      windSpeed,
    };
  }, [weatherData]);

  return (
    // Container
    <Divider className="flex flex-col items-center bg-yellow-300">
      <Divider className="p-8 text-2xl font-bold">Weather in {city}</Divider>

      <Divider className="flex flex-col p-8 m-4 border-2 rounded-md border-gray-700 items-center">
        <WeatherImage weatherType={weatherType} className="text-xl" />
        <Divider>{weatherType}</Divider>
        <Divider>Current Temperature : {currentTemp}</Divider>
      </Divider>

      <Divider>High Temperature : {highTemp}</Divider>
      <Divider>Cloudiness : {cloudiness}</Divider>
      <Divider>Low Temperature : {lowTemp}</Divider>
      <Divider>Humidity : {humidity}</Divider>
      <Divider>Wind Speed : {windSpeed}</Divider>
    </Divider>
  );
}

export default Details;