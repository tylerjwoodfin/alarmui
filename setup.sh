#!/bin/bash
cd /var/www/html
rm index.html
mkdir secure

# Secure files
cd secure

make ZipCode
echo "# Enter a US ZIP code below. If you live outside the US, enter something else (like a city/state/country code).\n# If you enter something else, you need to update the API URL in the Weather section of update.js.\n# See https://openweathermap.org/current to see the different URL formats.\n# Enter your ZIP code here ↓" >> ZipCode

make WeatherAPI
echo "# Enter your OpenWeather API on the line below ↓ You can get this for free at https://openweathermap.org/api." >> WeatherAPI

make TasksFile
make BedtimeFile

make Greeting
echo "# This file can have 2 non-comment/blank lines: the top for a headline and the bottom for a subheadline.\nUse Greeting Mode to welcome guests.\n# Blank lines, like the one above, aren't counted.\nChange your message in /secure/Greeting." >> Greeting