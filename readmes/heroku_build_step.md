### To setup a heroku build step:

#### Add build script to server/package.json
1. `heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client --only=dev && npm install --prefix client && npm run build --prefix client`
