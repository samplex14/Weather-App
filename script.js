const cityInput = document.querySelector('.city-input');
const searchBtn = document.querySelector('.search-btn');
const locationBtn = document.querySelector('.location-btn');
const apiKey = 'YOUR_API_KEY';
const notFoundSection = document.querySelector('.not-found');
const searchCitySection = document.querySelector('.search-city');
const weatherInfoSection = document.querySelector('.weather-info');
const countryTxt = document.querySelector('.country-txt');
const tempTxt = document.querySelector('.temp-text');
const conditionTxt = document.querySelector('.condition-txt');
const humidValue = document.querySelector('.humidity-value');
const windValue = document.querySelector('.wind-value-txt');
const weatherSummaryImg = document.querySelector('.weather-summary-img');
const currentDateTxt = document.querySelector('.current-date-txt');
const forecastItemsContainer = document.querySelector('.forecast-item-container');


searchBtn.addEventListener('click',() => {
  if(cityInput.value.trim() !=''){
    updateWeatherInfo(cityInput.value.trim()); // Use .trim()
    cityInput.value='';
    cityInput.blur();
  }
});

cityInput.addEventListener('keydown',(event) => {
  if(event.key == 'Enter' && cityInput.value.trim()!='' )
  {
    updateWeatherInfo(cityInput.value.trim()); // Use .trim()
    cityInput.value='';
    cityInput.blur();
  }
});

// ----------------------------------------------------
// FIX #2: Add status check and throw error on failure
// ----------------------------------------------------
async function getFetchData(endPoint,city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);

    if(!response.ok){
      // Throw an error for 400 or 404 status codes
      throw new Error(`HTTP error! Status: ${response.status} for city: ${city}`);
    }

    return response.json(); // Return valid JSON data
}

function getWeatherIcon(id){
  if(id<= 232) return 'thunderstorm.svg';
  if(id<= 321) return 'drizzle.svg';
  if(id<= 531) return 'rain.svg';
  if(id<= 622) return 'snow.svg';
  if(id<= 800) return 'clear.svg';
  else return 'clouds.svg';
}

function getCurrentDate(){
    const currentDate = new Date();
    const options = {
      weekday:'short',
      day:'2-digit',
      month:'short'
    };
    return currentDate.toLocaleDateString('en-GB',options);
}

// ----------------------------------------------------
// FIX #2: Add try/catch block for error handling
// ----------------------------------------------------
async function updateWeatherInfo(city){
  try {
    const weatherData = await getFetchData('weather',city);

    // Destructure the data
    const {
      name:country, // Renamed 'name' to 'country' based on your usage
      main:{temp,humidity},
      weather:[{id, main }],
      wind: {speed}
    } = weatherData;
    
    // Update current weather display
    countryTxt.textContent = country;
    tempTxt.textContent = Math.round(temp)+' °C'; 
    conditionTxt.textContent = main;
    humidValue.textContent = humidity + '%';
    windValue.textContent = speed + ' M/s';
    currentDateTxt.textContent = getCurrentDate();
    weatherSummaryImg.src = `assets/weather/${getWeatherIcon(id)}`;
    
    // FIX #1: Call updateForecastsInfo with the correct city argument
    await updateForecastsInfo(city);

    showDisplaySection(weatherInfoSection);
  } catch (error) {
    console.error("Failed to update weather info:", error);
    // Display the Not Found section on any error (400, 404, or network)
    showDisplaySection(notFoundSection);
  }
}

// ----------------------------------------------------
// FIX #1 & #2: Ensure city is passed and data processing is safe
// ----------------------------------------------------
async function updateForecastsInfo(city){
  try {
    
    const forecastsData = await getFetchData('forecast',city);
  
    const timeTaken = '12:00:00';
    const todayDate = new Date().toISOString().split('T')[0]  
    forecastItemsContainer.innerHTML = ''

    forecastsData.list.forEach(forecastWeather => {
      if(forecastWeather.dt_txt.includes(timeTaken) && !forecastWeather.dt_txt.includes(todayDate) ){
          updateForecastsItems(forecastWeather)
      }
    });
  } catch (error) {
    // Re-throw the error so the main updateWeatherInfo catch block handles it
    throw error; 
  }
}
function updateForecastsItems(weatherData){
  console.log(weatherData);
  const {
    dt_txt:date,
    weather: [{ id }],
    main: { temp }
  } = weatherData
  const  dateTaken = new Date(date)
  const dateOption = {
    day:'2-digit',
    month:'short',

  }
  const dateResult = dateTaken.toLocaleDateString('en-US',dateOption)

  const forecastItem = `
      <div class="forecast-item">
        <h5 class="forecast-item-date regular-txt">${dateResult}</h5>
        <img src="assets/weather/${getWeatherIcon(id)}"class="forecast-item-img">
        <h5 class="forecast-item-temp">${Math.round(temp)} °C</h5>
      </div>
  `
  forecastItemsContainer.insertAdjacentHTML('beforeend',forecastItem)

}

function showDisplaySection(section)
{
  [weatherInfoSection,searchCitySection,notFoundSection]
      .forEach(sec => sec.style.display = 'none'); // Changed section to sec to avoid conflict

      section.style.display = 'flex';
}

async function getWeatherByCoords(lat, lon) {
  try {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const weatherResponse = await fetch(weatherUrl);
    if (!weatherResponse.ok) {
      throw new Error(`HTTP error! Status: ${weatherResponse.status}`);
    }
    const weatherData = await weatherResponse.json();

    const {
      name: country,
      main: { temp, humidity },
      weather: [{ id, main }],
      wind: { speed }
    } = weatherData;

    countryTxt.textContent = country;
    tempTxt.textContent = Math.round(temp) + ' °C';
    conditionTxt.textContent = main;
    humidValue.textContent = humidity + '%';
    windValue.textContent = speed + ' M/s';
    currentDateTxt.textContent = getCurrentDate();
    weatherSummaryImg.src = `assets/weather/${getWeatherIcon(id)}`;

    const forecastResponse = await fetch(forecastUrl);
    if (!forecastResponse.ok) {
      throw new Error(`HTTP error! Status: ${forecastResponse.status}`);
    }
    const forecastsData = await forecastResponse.json();

    const timeTaken = '12:00:00';
    const todayDate = new Date().toISOString().split('T')[0];
    forecastItemsContainer.innerHTML = '';

    forecastsData.list.forEach(forecastWeather => {
      if (forecastWeather.dt_txt.includes(timeTaken) && !forecastWeather.dt_txt.includes(todayDate)) {
        updateForecastsItems(forecastWeather);
      }
    });

    showDisplaySection(weatherInfoSection);
  } catch (error) {
    console.error("Failed to fetch weather by coordinates:", error);
    showDisplaySection(notFoundSection);
  }
}

function triggerGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        getWeatherByCoords(latitude, longitude);
      },
      () => {
        showDisplaySection(searchCitySection);
      }
    );
  } else {
    showDisplaySection(searchCitySection);
  }
}

locationBtn.addEventListener('click', triggerGeolocation);

triggerGeolocation();
