const functions = require("firebase-functions");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.posts = functions.https.onRequest((request, response) => {
  let posts = [
    {
      caption: 'Sergey Chernyshov new',
      location: 'tarrent keynstone, United Kingdom'
    },
    {
      caption: 'London new',
      location: 'London, United Kingdom'
    }
  ]
  response.send(posts);
});
