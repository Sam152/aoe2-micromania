#!/bin/sh

cd ${RECORDED_GAMES_DIRECTORY}
jq -s . *.metadata.json > index.json
