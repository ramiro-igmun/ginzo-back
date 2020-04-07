# Tienda-Colchones-Back

## Running the Server

Run `npm start` to run the server in production environment. Navigate to `http://localhost:3001/`.

Run `npm run dev` to run the server in development mode. The app will reload if you save changes in the source code. __JWT is disabled in development environment.__

## Frontend

There is a frontend made to run along this backend. [mattress-store-frontend.](https://github.com/ramiro-igmun/mattress-store-front) Follow the instructions on its readme file to run it.

## EndPoints

* `/` Home page. 

* `/colchones` Mattress list. 

* `/colchones/{id}` Specific mattress.

* `/somieres` Bed base list. 

* `/somieres/{id}` Specific bed base. 

* `/login` login usin JWT Athorization. 

## Login

The app usues JWT Authorization. These are some mock users you can try for logging in, to test it:

* name: ramiro@ginzomattress.com, password: ramiro1234
* name: david@ginzomattress.com, password: david336
* name: pablo@ginzomattress.com, password: pablo4545
* name: ana@ginzomattress.com, password: ana171717