import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function CurrentWeather() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weeklyForecast, setWeeklyForecast] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = "115755479fb967da01cccef7ca283966";

      async function checkWeather() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;

            const response = await fetch(apiUrl);
            const data = await response.json();

            // Get current weather data
            const currentWeatherData = data.list[0];
            setCurrentWeather(currentWeatherData);

            // Extract weekly forecast data
            const weeklyForecastData = data.list.filter((forecast, index) => index % 8 === 0); // Select forecast for every 24 hours (every 8th data point and the next 6 data points)
            setWeeklyForecast(weeklyForecastData);
          });
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      }

      // Call the checkWeather function to fetch and update the weather data
      checkWeather();
    };

    fetchWeatherData();
  }, []); // Empty dependency array to ensure it only runs once on mount
  return (
    <>
      <Sidebar />
      <Topbar />

      <div className="bg-secondary">
        <div className="page-wrapper">
          <div className="page-content">

            <TopMenu/>
            <div className="row">
              <CurrentWeatherCard currentWeather={currentWeather} />
              <WeeklyForecastCard weeklyForecast={weeklyForecast} />
              <DailyWeatherCard currentWeather={currentWeather} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}






const TopMenu = () => {
  const api = {
  key: "d933136c5d5fd441b856c7e1e8952f32",
  base: "https://api.openweathermap.org/data/2.5/",
};
  const [search, setSearch] = useState('-----');

  const searchPressed = () => {
    console.log("data")
  //   if (navigator.geolocation) {
  //     const apiKey = "115755479fb967da01cccef7ca283966";

  //     navigator.geolocation.getCurrentPosition(async (position) => {
  //       const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;

  //       const response = await fetch(apiUrl);
  //       const data = await response.json();

  // console.log(data)
  //     });
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  };

  return (
    <div className="top-menu ms-auto">
      <ul className="navbar-nav align-items-left">
        <li className="nav-item mobile-search-icon">
          <div className="d-flex align-items-right">
            <input
              type="text"
              placeholder="Search by location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchPressed}>Search</button>
          </div>
        </li>
      </ul>
    </div>
  );
};



const CurrentWeatherCard = ({ currentWeather }) => {
  return (
    <div className="col-12 col-xl-4 d-flex">
      <div className="card radius-50 w-100 overflow-hidden">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <h3 className="mb-0">Current Weather</h3>
            </div>
            <div className="font-22 ms-auto">
              <i></i>
            </div>
          </div>
        </div>

        <div className="store-metrics container py-4 bg-primary text-white">
          <div className="row">
            <div className="col-md-6">
              {currentWeather && (
                <img
                  src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                  className="img-fluid"
                  width="500"
                  height="400"
                  alt="Weather Icon"
                />
              )}
              <br />
              <br />
              <br />
              <br />
              <div className="mt-2">
                <i className="bx bx-time"></i> Last updated: 5 minutes ago
              </div>
              <div className="d-flex mt-2">
                <i className="bx bx-bar-chart"></i> Historical Data
                <i className="bx bx-info-circle ms-auto"></i> More Info
              </div>
              <br />
              <br />
            </div>
            <div className="col-md-6">
              <div className="bg-primary p-4 rounded mb-4">
                <h1>{currentWeather && currentWeather.weather[0].main}</h1>
                <h1>{currentWeather && Math.round(currentWeather.main.temp)}°C</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="d-flex mt-2">
                  <div className="mr-2">
                    <img
                      src="assets/images/avatars/sunrise.png"
                      className="img-fluid"
                      width="50"
                      height="50"
                      alt=""
                    />
                  </div>
                  <div className="mr-2">
                    <img
                      src="assets/images/avatars/hot.png"
                      className="img-fluid"
                      width="50"
                      height="50"
                      alt=""
                    />
                  </div>
                  <div className="mr-2">
                    <img
                      src="assets/images/avatars/sun.png"
                      className="img-fluid"
                      width="50"
                      height="50"
                      alt=""
                    />
                  </div>
                  <div className="mr-2">
                    <img
                      src="assets/images/avatars/wind.png"
                      className="img-fluid"
                      width="50"
                      height="50"
                      alt=""
                    />
                  </div>
                  <br />
                  <div className="col">
                    <img
                      src="assets/images/avatars/hot.png"
                      className="img-fluid"
                      width="50"
                      height="50"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const WeeklyForecastCard = ({ weeklyForecast }) => {
  return (
    <div className="col-12 col-xl-4 d-flex">
      <div className="card radius-10 w-100">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <h3 className="mb-0">Weekly Forecast Updates</h3>
            </div>
            <div className="font-22 ms-auto">
              <i></i>
            </div>
          </div>
        </div>
        <div className="customers-list bg-blue p-3 mb-3">
          {weeklyForecast.map((forecast, index) => (
            <div
              key={index}
              className="customers-list-item d-flex align-items-center border-bottom p-2 cursor-pointer"
            >
              <div className="">
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                  className="rounded-circle"
                  width="46"
                  height="46"
                  alt="Weather Icon"
                />
              </div>
              <div className="ms-2">
                <h6 className="mb-1 font-14">{forecast.weather[0].description}</h6>
              </div>
              <div className="list-inline d-flex customers-contacts ms-auto">
                <a href="javascript:;" className="list-inline-item">
                  <i></i>
                </a>
                <p>{new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const DailyWeatherCard = ({ currentWeather }) => {
  return (
    <div className="col-12 col-xl-4 d-flex">
      <div className="card radius-10 w-100">


        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <h5 className="mb-1">Today's Weather</h5>
            </div>
          </div>
          

     


        </div>

        <div className="product-list p-3 mb-3">
          {currentWeather && (
            <>
              <div className="d-flex align-items-center py-3 border-bottom cursor-pointer">
                <div className="product-img me-2">
                  <img
                    src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                    alt="Weather Icon"
                  />
                </div>
                <div className="">
                  <h6 className="mb-0 font-14">Morning</h6>
                  <p className="mb-0">{Math.round(currentWeather.main.temp)}(℃)</p>
                </div>
              </div>

              <div className="d-flex align-items-center py-3 border-bottom cursor-pointer">
                <div className="product-img me-2">
                  <img
                    src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                    alt="Weather Icon"
                  />
                </div>
                <div className="">
                  <h6 className="mb-0 font-14">Mid-Morning</h6>
                  <p className="mb-0">{Math.round(currentWeather.main.temp)}(℃)</p>
                </div>
              </div>

              <div className="d-flex align-items-center py-3 border-bottom cursor-pointer">
                <div className="product-img me-2">
                  <img
                    src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                    alt="Weather Icon"
                  />
                </div>
                <div className="">
                  <h6 className="mb-0 font-14">Noon</h6>
                  <p className="mb-0">{Math.round(currentWeather.main.temp)}(℃)</p>
                </div>
              </div>
 
              <div className="d-flex align-items-center py-3 border-bottom cursor-pointer">
                <div className="product-img me-2">
                  <img
                    src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                    alt="Weather Icon"
                  />
                </div>
                <div className="">
                  <h6 className="mb-0 font-14">Evening</h6>
                  <p className="mb-0">{Math.round(currentWeather.main.temp)}(℃)</p>
                </div>
              </div>
 
              <div className="d-flex align-items-center py-3 border-bottom cursor-pointer">
                <div className="product-img me-2">
                  <img
                    src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                    alt="Weather Icon"
                  />
                </div>
                <div className="">
                  <h6 className="mb-0 font-14">Night</h6>
                  <p className="mb-0">{Math.round(currentWeather.main.temp)}(℃)</p>
                </div>
              </div>
 
              <div className="d-flex align-items-center py-3 border-bottom cursor-pointer">
                <div className="product-img me-2">
                  <img
                    src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                    alt="Weather Icon"
                  />
                </div>
                <div className="">
                  <h6 className="mb-0 font-14">Midnight</h6>
                  <p className="mb-0">{Math.round(currentWeather.main.temp)}(℃)</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
 };
 






















export default CurrentWeather; 