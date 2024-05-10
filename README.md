 -----------------
 setup client site
 -----------------

1. goto      https://reactrouter.com
2. goto      https://tailwindcss.com/docs/guides/vite
3. goto      https://daisyui.com/docs/install
4. goto      https://console.firebase.google.com
5. goto      https://vitejs.dev/guide/env-and-mode.html
6. goto      https://reactrouter.com/en/main/hooks/use-location
7. goto      

 -----------------
 Page folder file setup
 -----------------
Layout
  Main
Pages
  SignUp
    SignUp
  Login
    Login
  Home
    Home
    Banner
    About
    Servicess
    ServicCard
  Shared
    Navber
    Footer
  CheckOut
    Cheackout
    Bookings
    BookingTable
Providers
  AauthProviders
Routes
  Routes
  RrivateRoutes
Hooks
  useAuth
  RrivateRoutes

<!-- .eslintrc.cjs --   rules: {'react/prop-types': 'off', }







 -----------------
 setup server site
 -----------------

1. goto      https://expressjs.com/en/starter/installing.html

2. create index.js and type
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json());

3. package.json
"scripts": {
    "start": "node index.js",
  },

4. goto      https://cloud.mongodb.com/v2/6623bee6440aa14866eca3c7#/clusters/connect?clusterId=Cluster0
5. goto      https://www.npmjs.com/package/dotenv
6. goto      https://www.mongodb.com/docs/drivers/node/current/usage-examples/find


 -----------------
 jwt setup
 -----------------
7. goto      https://github.com/auth0/node-jsonwebtoken
8. goto      https://expressjs.com/en/resources/middleware/cookie-parser.html
9. goto      https://www.npmjs.com/package/cors
10. goto      7 no verify token
11. goto      
12. goto      



* secret key genarate
require('crypto').randomBytes(64).toString('hex')

