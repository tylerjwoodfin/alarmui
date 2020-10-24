<?php

    $filepath = "/var/www/html/secure/" . $_GET['path'];  // this is coming from update.js and should either be "TasksFile" or "BedtimeFile" 

    // If you're getting errors for this file, go to secure, create a file called "TasksFile", and
    // check that it points to the correct file on Dropbox. For example, mine is "Notes/Tasks.txt" without the quotes.
    // Don't edit this file.
    
    $tasksFile = fopen($filepath, "r") or die("Unable to open file!");
    $tasksFile = fread($tasksFile,filesize($filepath));

    echo $tasksFile;

    echo shell_exec("rclone copy Dropbox:$tasksFile /var/www/html/secure/cache");
?> 
