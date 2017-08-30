### To setup a heroku build step:

#### Add build script to server/package.json
1. in server/package.json `heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client --only=dev && npm install --prefix client && npm run build-prod --prefix client`

2. in server/client/package.json `"build-prod": "react-scripts build",`
