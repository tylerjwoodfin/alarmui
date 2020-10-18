# About AlarmUI

This project is meant to replace my alarm panel in my house- not for security, but for controlling my smart home and showing some basic information like the weather.

# Status

This is NOT a fully working project at this time! It's a work in progress with a functional layout. Please check the commit history for updates.

# Dependencies
- Raspberry Pi (or other Linux machine, but Pi strongly preferred)
- Apache
- PHP for Apache (sudo apt install php libapache2-mod-php -y)
- nmap (sudo apt install nmap)
- NodeJS

# Strongly Recommended
- Raspberry Pi running Raspberry Pi OS
- Official Raspberry Pi Touchscreen (or some other 800x480 touchscreen)

# Setup and Installation
1. Install all dependencies above
    - Check that Apache is working by going to your Pi's IP address in your browser. You should see a "It works!" page.

2. Copy and paste this code into the terminal:
    > cd /var/www/html; rm index.html; mkdir secure; cd secure; make WeatherAPI; make ZipCode;

3. Place this README and everything in this current directory in /var/www/html

4. Edit your crontab (crontab -e) and add the following line at the bottom:
    > cd /var/www/html/secure; nmap -sn -oN scan.txt 192.168.1.0/24

5. Edit /var/www/html/secure/ZipCode and enter a 5-digit US Zip Code on the first line.
    - If you live outside the US, visit https://openweathermap.org/current to find a different API call for your area, then update the URL in update.js.

6. Edit /var/www/html/weatherAPI and enter your OpenWeatherMap API key. You can get one for free at https://openweathermap.org/api.

# Running AlarmUI
Navigate to your Pi's local IP address in Chromium, then enter full-screen.