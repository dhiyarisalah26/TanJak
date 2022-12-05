import { Box } from '@mui/material';
import axios from "axios";
import { MatxProgressBar, SimpleCard } from 'app/components';
import { Small } from 'app/components/Typography';

// function Home() {
//   const [cities, setCities] = useState([
//     {
//       name: "Jakarta",
//       currentTemp: "0",
//       weatherType: "",
//       color: "bg-yellow-500",
//     },
//     {
//       name: "Bandung",
//       currentTemp: "0",
//       weatherType: "",
//       color: "bg-pink-500",
//     },
//     {
//       name: "Milan",
//       currentTemp: "0",
//       weatherType: "",
//       color: "bg-purple-500",
//     },
//     {
//       name: "Crema",
//       currentTemp: "0",
//       weatherType: "",
//       color: "bg-pink-300",
//     },
//     {
//       name: "Paris",
//       currentTemp: "0",
//       weatherType: "",
//       color: "bg-purple-200",
//     },
//     {
//       name: "Tokyo",
//       currentTemp: "0",
//       weatherType: "",
//       color: "bg-red-300",
//     },
//   ]);

//   useEffect(() => {
//     updateAllWeatherData();
//   }, []);

//   // Fetch the weather data for 1 city
//   async function fetchWeatherData(cityName) {
//     const res = await axios
//       .get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
//       )
//       .then(function (response) {
//         // Successful request
//         const weather = response.data;
//         return weather;
//       })
//       .catch(function (error) {
//         // The best practice of coding is to not use console.log
//         console.warn(error);
//       });

//     return res;
//   }

//   // update the list data
//   async function updateAllWeatherData(params) {
//     cities.forEach(function (citiesItems, index) {
//       let weatherData = {};
//       let newCities = [...cities];

//       fetchWeatherData(citiesItems.name).then((res) => {
//         weatherData = res;

//         newCities[index].currentTemp = `${Math.round(weatherData.main.temp)}°C`;
//         newCities[index].weatherType = weatherData.weather[0].main;
//         setCities(newCities);
//       });
//     });
//   }

const Campaigns = () => {
  return (
    <Box>
      {/* <SimpleCard title="Campaigns">
        <Small color="text.secondary">Today</Small>
        <MatxProgressBar value={75} color="primary" text="Google (102k)" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <MatxProgressBar value={75} color="primary" text="Tensor (80k)" />

        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <MatxProgressBar value={75} color="primary" text="Google (102k)" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <MatxProgressBar value={75} color="primary" text="Tensor (80k)" />

        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <MatxProgressBar value={75} color="primary" text="Google (102k)" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <MatxProgressBar value={75} color="primary" text="Tensor (80k)" />
      </SimpleCard> */}
    </Box>
  );
};

export default Campaigns;
