window.addEventListener('load', () => {
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', () => {
      const locationInput = document.getElementById('location-input');
      const location = locationInput.value;
      getWeatherData(location);
    });
  
    const currentLocationBtn = document.getElementById('current-location-btn');
    currentLocationBtn.addEventListener('click', () => {
      getCurrentLocationWeather();
    });
  });
  
  function getWeatherData(location) {
    const apiKey = 'e48ab61b30db9d8eccb0c4b25b0e293b'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayWeatherData(data);
        
     
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  function displayWeatherData(data) {
    console.log(data)
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = '';
  
    const cityName = document.createElement('h2');
    cityName.innerHTML = `${data.name}`;
    weatherContainer.appendChild(cityName);

    const description = document.createElement('h4');

    description.innerHTML = `<img class="icons" src="icons/${data.weather[0].icon}.png"/><br><h4>${data.weather[0].description}</h4>`;
    weatherContainer.appendChild(description);
  
    const temperature = document.createElement('p');
    temperature.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thermometer"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg><br>${data.main.temp}°C<br>Temperature`;
    weatherContainer.appendChild(temperature);
  
    const humidity = document.createElement('p');
    humidity.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg><br>${data.main.humidity}%<br>Humidity`;
    weatherContainer.appendChild(humidity);
  
    const windSpeed = document.createElement('p');
    windSpeed.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wind"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg><br>${data.wind.speed} m/s<br>Wind Speed`;
    weatherContainer.appendChild(windSpeed);
  
    const visibility = document.createElement('p');
    visibility.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg><br>${data.visibility} meters<br>Visibility`;
    weatherContainer.appendChild(visibility);
  
    const pressure = document.createElement('p');
    pressure.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-compass"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg><br>${data.main.pressure} hPa<br>Pressure`;
    weatherContainer.appendChild(pressure);
  
    const sunriseTime = new Date(data.sys.sunrise * 1000);
    const sunrise = document.createElement('p');
    sunrise.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunrise"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg><br>${sunriseTime.toLocaleTimeString()}<br>Sunrise`;
    weatherContainer.appendChild(sunrise);
  
    const sunsetTime = new Date(data.sys.sunset * 1000);
    const sunset = document.createElement('p');
    sunset.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sunset"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline></svg><br>${sunsetTime.toLocaleTimeString()}<br>Sunset`;
    weatherContainer.appendChild(sunset);
  
    
    
  
    
 
  }
 
  function getCurrentLocationWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const apiKey = 'e48ab61b30db9d8eccb0c4b25b0e293b'; 
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
        fetch(url)
          .then(response => response.json())
          .then(data => {
            displayWeatherData(data);
          })
          .catch(error => {
            console.log('Error:', error);
          });
      }, () => {
        console.log('Error: Unable to retrieve your location.');
      });
    } else {
      console.log('Error: Geolocation is not supported by your browser.');
    }
  }