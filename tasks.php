<?php

    // If you're getting errors for this file, go to secure, create a file called "TasksFile", and
    // check that it points to the correct file on Dropbox. For example, mine is "Notes/Tasks.txt" without the quotes.
    // Don't edit this file.
    
    $tasksFile = fopen("secure/TasksFile", "r") or die("Unable to open file!");
    $tasksFile = fread($tasksFile,filesize("secure/TasksFile"));

    echo shell_exec("rclone copy Dropbox:$tasksFile /var/www/html/secure/cache");
?> 
