#### To Setup A Remotely Hosted Dev Mongo Database

1. Install Mongoose with `npm install --save mongoose`.

1. Navigate to mlab.com

2. Create a new Database

3. Add a user to administrate the Database

4. Copy link MongoDB URI link and past into keys object. (a .gitignored file)

5. Replace dbuser and dbpassword with user credentials created in step 3.

6. Connect to the MongoDB from index.js via mongoose/
  ```
  const mongoose = require('mongoose');

  /* Connect mongoose to our MongoDB on mLab*/
  mongoose.connect(keys.mongoURI);
  ```
