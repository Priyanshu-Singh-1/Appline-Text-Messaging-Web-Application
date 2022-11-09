# Text-Messaging-Web-Application
This project is based on the real time text messaging web application. This project is inspired from the messaging applications that we use today. This application is just like the text messaging application. I have used MERN Stack for the development of this project.


# ScreenShot
![ss whatsapp](https://user-images.githubusercontent.com/107169043/190159099-e436a8ef-b79b-4f77-9d97-70db1239fda2.png)

# Technologies Used
  React (frontend), 
  NodeJS - ExpressJS (for backend), 
  Material UI for icons, 
  MongoDB (for Database), 
  Pusher (MongoDB itself is not realtime therefore, pusher is used to get real times updates on frontend.)
  
# Installation

This project requires Node.js to run

The port used for this project is 3000

Install the dependencies and devDependencies

    $ cd frontend
    $ npm i
    $ cd ..
    $ cd api
    $ npm i

# To start the project

To start the front-end

Change the directory to the whatsapp-mern and type the following code

    $ npm start
    
Start the mongoDB from the website and choose the database for which your project is being connected.

    For this, the database that is used is "Whatsapp-MERN"
    
To start the backend, open other terminal, and change the directory to whatsapp-backend and type the following code

    $ nodemon server.js
    
After starting the server side script, open postman and set the method to "POST", and type the following request - 
    
    http://localhost:9000/messages/new
    
And, choose the body->raw and then choose the JSON file, in that body mention the following content - 

    {
     "message": "HEHEHEHEHE (your message)",
      "name": "Priyanshu (the user name)",
      "timestamp": "Just Now (as per your wish)", 
      "received": true (if true you will act as sender, else you will act as receiver)
    }

# Local Host Server

This project runs on the -  http://localhost:3000/

And for the server side, the script listens on the port 9000
