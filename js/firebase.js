const iconElement = document.querySelector(".weather-icon");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const key = "5b67ad92ff7aa1b6610d7a73884e9eb7";
const weather = {};


weather.temperature = {
  unit : "celsius"
}

if('geolocation' in navigator){
  navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}




function setPosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  
  getWeather(latitude, longitude);
}

function showError(error){
  notificationElement.style.display = "block";
  notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

function getWeather(latitude, longitude){
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
  
  fetch(api)
      .then(function(response){
          let data = response.json();
          return data;
      })
      .then(function(data){
          
          weather.description = data.weather[0].description;
          weather.iconId = data.weather[0].icon;
          weather.city = data.name;
          weather.country = data.sys.country;
      })
      .then(function(){
          displayWeather();
      });
}

function displayWeather(){
  iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
 
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}



//=========================================== END WEATHER SECTION =========================//
var firebaseConfig = {
    apiKey: "AIzaSyDGETvT_7V1IUYkVrijo1fL-2SCNMb5CjM",
    authDomain: "tubes-iot-d12e1.firebaseapp.com",
    databaseURL: "https://tubes-iot-d12e1.firebaseio.com",
    projectId: "tubes-iot-d12e1",
    storageBucket: "tubes-iot-d12e1.appspot.com",
    messagingSenderId: "435263132157",
    appId: "1:435263132157:web:c1bb18214325331f900994",
    measurementId: "G-25YW649YG7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); 

  

    const database = firebase.database();
    const data = database.ref('Weather');


  function JSalert(){
    swal("Waspada!"," Banjir ","error");

  }

  var temperature = firebase.database().ref('data/Temperature/value');
  var humidity = firebase.database().ref('data/Humidity/value');
  var raindrop = firebase.database().ref('data/RainDrop/value');
  var wind = firebase.database().ref('data/Wind/value');


    //------------------------- Humidity ---------------------------//
    var nilaihumidity = 0,
     nilaiTemperature = 0,
     nilaiWind = 0;
  
    humidity.on('value', function(dataSnapshot){
    const valueHumidity = dataSnapshot.val();

    nilaihumidity = valueHumidity;
    document.getElementById('humidity').innerText = valueHumidity;
  })
    //-------------------------- Temperature --------------------------//  
    
      temperature.on('value', function(dataSnap){
      const valueTemperature = dataSnap.val();
        document.getElementById('temperature').innerText = valueTemperature;

      nilaiTemperature = valueTemperature;
    })
      
    //-------------------------- Rain Drop ----------------------------//
    
    raindrop.on('value', function(snapRain){

      const valueRain = snapRain.val();

      document.getElementById('rainDetected').innerText = valueRain;

      
    });
    



    //-------------------------- Wind ------------------------------//

        wind.on('value', function(snapwind){

        const windValue = snapwind.val();

        document.getElementById('wind').innerText = windValue;

        nilaiWind = windValue;  

        });





        if(nilaihumidity >= 50 && nilaiTemperature >=40 ){

          JSalert();
          
        }
      
        
    
 

  //============================ Chart ==========================//

 // Create the chart


