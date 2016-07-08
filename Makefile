deploy:
	git subtree push --prefix public . gh-pages
	git push origin gh-pages:gh-pages
.PHONY: server
server:
	VUE_ENV=server ./node_modules/.bin/nodemon ./server/app.js
