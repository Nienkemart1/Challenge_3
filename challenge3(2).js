function getAPIdata() {
    //fetch ('http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric')
    fetch('https://api.openweathermap.org/data/2.5/weather?q=delft&units=metric&APPID=19e14188d36447cec206386b930807ea')

    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
      console.log(response.main.temp);
     document.getElementById('weather').innerHTML = Math.round(response.main.temp,0);
    })

    .catch(function (error) {
      //console.error('Request failed', error);
    });
}

getAPIdata();