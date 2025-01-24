The following code attempts to access the Firebase database using a service account key file, but fails with an authentication error:

```javascript
const admin = require('firebase-admin');

const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com"
});

// ... further database operations
```

The error message often points to an invalid service account key or incorrect project ID.  However, even with correct credentials, this error can occur due to issues with file permissions, incorrect paths, or problems accessing the service account key file.