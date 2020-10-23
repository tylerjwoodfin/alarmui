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
- Rclone

# Strongly Recommended
- Raspberry Pi running Raspberry Pi OS
- Official Raspberry Pi Touchscreen (or some other 800x480 touchscreen)

# Setup and Installation
1. Install all dependencies above
    - Check that Apache is working by going to your Pi's IP address in your browser. You should see a "It works!" page.

2. Copy and paste this code into the terminal:
    > ./setup.sh

3. Place this README and everything in this current directory in /var/www/html

4. Edit your crontab (crontab -e) and add the following line at the bottom:
    > cd /var/www/html/secure; nmap -sn -oN scan.txt 192.168.1.0/24

5. Edit /var/www/html/secure/ZipCode and enter a 5-digit US Zip Code on the first line.
    - If you live outside the US, visit https://openweathermap.org/current to find a different API call for your area, then update the URL in update.js.

6. Edit /var/www/html/weatherAPI and enter your OpenWeatherMap API key. You can get one for free at https://openweathermap.org/api.

## Rclone setup (for "Tasks" and "Bedtime")

7. > rclone config
    - "n" for new remote
    - Enter the name of your choice (I use "dropbox", and the scripts in this repo reflect that.)
        - If you choose something other than "dropbox", make sure to update tasks.php.
    - 9 for Dropbox (Others should work, update tasks.php and refer to the rclone documentation for syntax. The rest of these steps could be different depending on your choice)
    - Leave "client id" and "client secret" blank by pressing Enter
    - Don't edit advanced config ("n")
    - Use auto config ("y")
    - Follow the prompts to log into your Dropbox account and finish the rclone setup

8. Enable browser access:
    > sudo nano /etc/apache2/envvars
    - Replace "www-data" with "pi" (or your Pi's username) in APACHE_RUN_USER and APACHE_RUN_GROUP as follows:
        > export APACHE_RUN_USER=pi

        > export APACHE_RUN_GROUP=pi

    * Note that doing this is a security risk. It means anything that has access to AlarmUI can theoretically have access to everything you as "Pi" do. Please only do this if you understand the risks, and please do not enable remote access to your AlarmUI setup over the internet. I listed these steps only because this is the best way I found to use Rclone. 

9. Edit secure/TasksFile to point to the path of your Dropbox tasks file (For example, mine is "Notes/Tasks.txt", without the quotes)

# Running AlarmUI
Navigate to your Pi's local IP address in Chromium, then enter full-screen.

# Disclaimer

Although this is a pretty straightforward setup and the risks are fairly minimal, I do not take responsibility for any data loss, damage to your device/network, or any other issues that arise from using this, whether or not you're following the steps properly. I've written this documentation with the assumption that you have a understanding of Linux and the Raspberry Pi, as well as the risks of installing new software.