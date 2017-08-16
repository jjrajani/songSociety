### To setup a heroku project:

#### App Creation Steps
1. Login to Heroku
```
heroku login
```
---
2. Create a new heroku app
```
heroku create (app-name)
```
---
3. After create completed
  a. copy both links given to us by heroku
  b. use the second link heroku gives us
  c. use that link to create a git remote heroku
---

#### Initial Deployment Steps
4. Push to heroku
```
git push heroku master
```
---
5. Navigate to the first link that was given to us in step 3 or run the following command. App should be running!
```
heroku open
```
---
#### Subsequent Deployments, Updates to App
6. Add changes to git.
```
git add .
git commit -m (message)
```
---
7. Push those changes to heroku.
```
git push heroku master
```
