## Deploying the app

* Nominate a web accessible root (and non-web accessible server root) and add details to `Makefile`.
* Setup SSL and alter env vars in ./dist-server/kick.sh
* Create a recs directory and alter location in `./dist-server/kick.sh` AND the symlink in `./Makefile`
* Add a crontab to execute `./dist-server/compute-recs.sh`, eg: `* * * * * /var/www/mm/server/compute-recs.sh`
