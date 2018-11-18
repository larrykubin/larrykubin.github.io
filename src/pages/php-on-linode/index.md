---
title: php on linode
date: "2018-11-18"
---

After a long hiatus from PHP, I am now working on a large PHP codebase, so it's time for me to get up to speed with some of the modern PHP frameworks like 
<a href="https://lumen.laravel.com/">Lumen</a>, <a href="https://laravel.com">Laravel</a>, and <a href="https://www.slimframework.com/">Slim</a>. I just set up a 
new personal site using gatsby.js that I will be using for hobby projects, and I'll use PHP to develop any backend services needed for these projects. 

## Linode

I've been using <a href="https://www.linode.com/">Linode</a> for years without any major issues, so I signed up for a new server with them. I'm starting with a cheap $5/month server, which should be sufficient for my purposes. 
I selected an Ubuntu 18.04 LTS image, booted it up, and was running in a few minutes. After updating packages, I ran a few commands to install nginx, PHP, and MariaDB.

### Installing nginx, MariaDB, and PHP

#### nginx
```bash
sudo apt install nginx
```

#### mariadb
```bash
sudo apt install mariadb-server
sudo mysql_secure_installation
```

#### php
```bash
sudo apt-install php-mysql
sudo apt install php-fpm
```

### Configuring a new website

After all of the necessary components were installed, I created a new directory to host any PHP scripts. I will be using my personal domain for this site.

```bash
sudo mkdir -p /var/www/html/larrykubin.com/public_html
```

Next up: adding an nginx configuration. I specified the server name and the root of the public_html directory I just created, then enabled the config.

```bash
vi /etc/nginx/sites-available/larrykubin.com.conf
```

```nginx
server {
    listen         80 default_server;
    listen         [::]:80 default_server;
    server_name    larrykubin.com www.larrykubin.com;
    root           /var/www/html/larrykubin.com/public_html;
    index          index.html;

    location / {
      try_files $uri $uri/ =404;
    }

    location ~* \.php$ {
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
      include         fastcgi_params;
      fastcgi_param   SCRIPT_FILENAME    $document_root$fastcgi_script_name;
      fastcgi_param   SCRIPT_NAME        $fastcgi_script_name;
    }
}
```

```
sudo ln -s /etc/nginx/sites-available/larrykubin.com.conf /etc/nginx/sites-enabled/
```

#### It works!

After enabling the site and configuring nginx, I restarted PHP and reloaded the nginx configuration. I put a simple test.php script in the public_html directory 
and hit the IP address of the server to make sure everything was working.

##### restarting
```
sudo systemctl restart php7.2-fpm
sudo nginx -s reload
```

##### test.php
```php
<?php
echo "hello from php and nginx";
?>
```

#### DNS Configuration

Since I wanted to use my personal domain for the site, I added DNS records in the Linode DNS Manager, and used GoDaddy to set my nameservers to ns1.linode.com, ns2.linode.com, ns3.linode.com, and ns4.linode.com. 
I waited a while and double checked that the DNS settings propagated.