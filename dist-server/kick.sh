#!/bin/sh

set +e
killall node

HOSTNAME="micromania.cc"\
 KEY_FILE="/etc/letsencrypt/live/micromania.cc/privkey.pem"\
 CERT_FILE="/etc/letsencrypt/live/micromania.cc/cert.pem"\
 RECORDED_GAMES_DIRECTORY="/var/www/mm/recs"\
 node bundle.js
