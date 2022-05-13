build:
	yarn run build-prod

sync-files:
	rsync -av --delete ./dist/ root@167.71.219.138:/var/www/mm/www/
	rsync -av  --delete ./dist-server/* root@167.71.219.138:/var/www/mm/server/
	ssh -n -f root@167.71.219.138 "ln -s /var/www/mm/recs /var/www/mm/www/recs"

kick:
	ssh -n -f root@167.71.219.138 "sh -c 'cd /var/www/mm/server; nohup ./kick.sh > /tmp/log.txt 2>&1 &'"

deploy: build sync-files kick
