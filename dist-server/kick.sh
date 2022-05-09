#!/bin/sh

set +e
killall node
HOSTNAME="micromania.cc" KEY_FILE="/etc/letsencrypt/live/micromania.cc/privkey.pem" CERT_FILE="/etc/letsencrypt/live/micromania.cc/cert.pem" node bundle.js > /tmp/log.txt
