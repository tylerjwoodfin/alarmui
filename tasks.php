<?php
    $tasksFile = fopen("secure/TasksFile", "r") or die("Unable to open file!");
    echo fread($tasksFile,filesize("secure/TasksFile"));

    // Replace this line to match the syntax:
    // rclone copy {your Rclone remote name}:{your file path} /var/www/html/secure
    echo shell_exec('rclone copy ' + fread($tasksFile,filesize("secure/TasksFile") + ' /var/www/html/secure/cache');
?> 