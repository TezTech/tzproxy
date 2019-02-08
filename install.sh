#!/bin/bash
sudo apt-get -y install nginx
sudo update-rc.d nginx enable
sudo rm -f /etc/nginx/nginx.conf
wget -O /etc/nginx/nginx.conf https://raw.githubusercontent.com/TezTech/tzproxy/master/nginx.conf
sudo nginx -s reload
exit
