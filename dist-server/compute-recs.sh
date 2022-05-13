#!/bin/sh

cd /var/www/mm/recs
jq -s . *.metadata.json > index.json
