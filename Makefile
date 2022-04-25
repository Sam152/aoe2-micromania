deploy:
	yarn run build-prod
	rsync -av ./dist/* root@167.71.219.138:/var/www/mm/www/
	rsync -av ./dist-server/* root@167.71.219.138:/var/www/mm/server/
