<?php

    $filepath = "/var/www/html/secure/" . $_GET['path'];  // this is coming from update.js and should either be "TasksFile" or "BedtimeFile" 

    // If you're getting errors, go to secure, create a file called "TasksFile", and
    // check that it points to the correct file on Dropbox. For example, the contents of my
    // TasksFile is "Notes/Tasks.txt" without the quotes, meaning Dropbox/Notes/Tasks.txt is my to do list.
    // Don't edit this PHP file unless you have a VERY good reason!
    
    // read the contents of /var/www/html/secure/{TasksFile or BedtimeFile}
    $filePathPointer = fopen($filepath, "r") or die("Unable to open file!");
    $filePathPointer = fread($filePathPointer,filesize($filepath));

    echo $filePathPointer;

    echo shell_exec("rclone copy Dropbox:$filePathPointer /var/www/html/secure/cache");
?> 
