/*
  dependencies
*/

  const express = require('express')

/*
  config - express
*/

  const app = express()

/*
  endpoint - posts
*/
  app.get('/', (request, response) => {
    response.send('I love Node js')
  })
  app.get('/posts', (request, response) => {
    let posts = [
      {
        caption: 'Sergey Chernyshov',
        location: 'tarrent keynstone, United Kingdom'
      },
      {
        caption: 'London',
        location: 'London, United Kingdom'
      }
    ]
    response.send(posts)
  })

/*
  listen
*/

  app.listen(process.env.PORT || 3000)
