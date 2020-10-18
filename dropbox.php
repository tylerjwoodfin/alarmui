<?php
    shell_exec('nohup rclone copy Dropbox:Notes/Tasks.txt /var/www/html/secure 2>&1 &');
?> 