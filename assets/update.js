/* Read Files */
function readFile(file)
{
    var result = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText.replace(/\n/g, "<br>");
                result = allText;
            }
        }
    }
    rawFile.send(null);

    if((/\.(gif|jpe?g|tiff|png|webp|bmp)$/i).test(file))
    {
        return `<a href="` + file + `" target="_new"><img src="` + file + `" class="blogImg"></a>`;
    }
    
    return result;
}

/* Weather */
zipCode = readFile('secure/ZipCode');
apiKey = readFile('secure/WeatherAPI');
const updateWeather = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + '&appid=' + apiKey);
    const weather = await response.json(); //extract JSON from the http response
    // console.log(weather);

    // get temperature
    if(!(typeof weather === 'undefined'))
    {
        temperature = Math.round((weather.main.temp - 273.15) * 9/5 + 32);
        console.log("Temperature: " + temperature);
    
        // set temperature element
        document.getElementById("temperature").innerHTML = temperature + "°";
        document.getElementById("location").innerHTML = weather.name;
        document.getElementById("weatherIcon").src = "assets/weather/" + weather.weather[0].icon + ".svg";
    }
}

/* Clock */
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    document.getElementById("clock").innerHTML = `<em class="fa fa-clock-o"></em>` + strTime;
}

$( document ).ready(function() {
    /* Execute */
    console.log();
    updateWeather();
    formatAMPM(new Date);
});
