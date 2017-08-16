## To Setup Passport with Google OAuth 2.0 (Get Access Token, Refresh Token and User Profile)

---

##### 1. Install Passport

`npm install --save passport`

---

##### 2. Install Passport Strategy (in this case google oAuth 2)

`npm install --save passport-google-oauth20`

---

##### 3. Import into express app.

```

const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
```

---

##### 4. Create a new instance of GoogleStragey and pass it to Passtort.

`passport.use(new GoogleStrategy());`

---

##### 5. Create new Project with Google.

`https://console.developers.google.com`

---

##### 6. Enable oAuth API

- Search for google+
- Select Google+ API
- Click enable API at the top of the screen
- Click Credentials on the left nav
- Select OAuth client ID option
- Click Configure consent screen
- Add a Product name, all other fields are optional.
- Save form.
- Select Application type: Web Application.
- Give Authorized JavaScript origins. - Origins: `http://localhost:5000`, Redirect: `http://localhost:5000/*`
- Click Create
- Copy Client ID and Client Secret - Client ID is Pubic, Client Secret MUST be hidden.

---

##### 7. Hide Client Secret
- Create a config folder with a file for keys.
- Add config/keys.js to .gitignore
- module.exports = {}
- add ClientID and ClientSecret to object.

---

##### 8. Import App Keys and give strategy options specific to the app.
- Options Object
    - CLIENT_ID
    - CLIENT_SECRET
    - callbackURL
- Arrow Function that will receive the accessToken.

```
const keys = require('./config/keys');

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
  },
  (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
  }
);
```

---

##### 9. Create Route for User to kick off login process.

```
app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);
```
- The scope option here tells google what information we are asking to get from the user that is attempting to log in to our app.  There are many options available, check Google OAuth Docs for more options.

---

##### 10. Test OAuth by navigating to new route we just created.

`localhost:/5000/auth/google`

- If process complete to this point, we will see google asking which user to give permissions, then a screen with `Cannot get auth/google/callback`, because we haven't made that route yet.

- **If Error: `redirect_uri_mismatch`**
  - We forgot to provide google with a callback URL
  - Copy Link provided in error message
  - Add exact redirect URL specific for app. `http://localhost:5000/auth/google/callback`

---

##### 11. Complete Authentication Process Up To Getting Access Token

- Passport will handle creating a user profile for us under the covers.
  - Google is handing passport a code in the redirect URL.
  - At this point, the sign in screen should now just be hanging. But our terminal should be console.log() the access token that has been returned.

```
app.get(
  '/auth/google/callback',
  passport.authenticate('google')
);
```
