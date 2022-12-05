import { Button, Card, styled } from '@mui/material';
import { convertHexToRGB } from 'app/utils/utils';

import { MatxProgressBar, SimpleCard } from 'app/components';
import { Small } from 'app/components/Typography';
import React, { useState, useEffect, useMemo, useHistory } from 'react';
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import WeatherImage from './WeatherImage.js';
import { Divider } from '@mui/material';

const CardRoot = styled(Card)(({ theme }) => ({
  marginBottom: '24px',
  padding: '24px !important',
  [theme.breakpoints.down('sm')]: { paddingLeft: '16px !important' },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  position: 'relative',
  padding: '24px !important',
  // background: `rgb(${convertHexToRGB(theme.palette.primary.main)}, 0.15) !important`,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  // textTransform: 'capitalize',
}));

const Paragraph = styled('p')(({ theme }) => ({
  margin: 0,
  paddingTop: '0.5px',
  paddingBottom: '0.5px',
  // color: theme.palette.text.secondary,
}));

const Details = () => {
  // const history = useNavigate()
  const [weatherData, setWeatherData] = useState(null);
  const [city] = useState('Jakarta');

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4e4680b861e7370dd650a7ebdc7d0f26`
      )
      .then((res) => {
        // Successful request
        const weather = res.data;
        setWeatherData(weather);
      })
      .catch((err) => {
        // The best practice of coding is to not use console.log
        console.log(err);
      });
  }, [city]);

  // useEffect(() => {
  //   const searchParams = history.location.search
  //   const urlParams = new URLSearchParams(searchParams)
  //   const city = urlParams.get("name")
  //   if (city) {
  //     setCity(city);
  //   }
  // }, [history]);

  const { cloudiness, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed } =
    useMemo(() => {
      let cloudiness = '';
      let currentTemp = '';
      let highTemp = '';
      let humidity = '';
      let lowTemp = '';
      let weatherType = '';
      let windSpeed = '';

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
    <CardRoot>
      <StyledCard elevation={0}>
        <Paragraph className="flex flex-col items-center bg-yellow-300">
          <Title>Weather in {city}</Title>

          <Paragraph className="flex flex-col p-8 m-4 border-2 rounded-md border-gray-700 items-center">
            <WeatherImage weatherType={weatherType} className="text-xl" />
            <Paragraph>{weatherType}</Paragraph>
            <Paragraph>Current Temperature : {currentTemp}</Paragraph>
          </Paragraph>

          <Paragraph>High Temperature : {highTemp}</Paragraph>
          <Paragraph>Cloudiness : {cloudiness}</Paragraph>
          <Paragraph>Low Temperature : {lowTemp}</Paragraph>
          <Paragraph>Humidity : {humidity}</Paragraph>
          <Paragraph>Wind Speed : {windSpeed}</Paragraph>
        </Paragraph>
      </StyledCard>
    </CardRoot>
  );
};

export default Details;
