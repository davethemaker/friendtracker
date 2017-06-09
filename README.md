# friend tracker
## June 8-9, 2017
Made by: [David Eliason](http://www.deliason.com). He has a [blog](http://www.davethemaker.com) too.

You can visit the [Live Site](https://myfriendtracker.herokuapp.com/)

### Description:

This is an app to help keep track of friend's information. It uses **express** to spin up a server, **ejs** as a templating engine, **node** to provide functionality through various modules, **mongodb** for data persistence, and **mongoose** to assist with working with the db in terms of models and Schemas.

*This app works to adopt MVC principles by seperating out the models, views, and controllers. The modular approach is also seen through the use of creating node modules where possible and dependency injection.*

#### Nerd Kicks and Giggles:
*To Explore Locally and not use cloud-hosted db:*

1. Clone the repo
2. [cli] $ cd into project directory
3. [cli] $ npm install   // install dependencies
4. [optional] to work with local mongodb instance
  a. download mongodb
  b. in the 'bin' folder where mongodb has been saved, [cli] $ mongod --dbpath [to the data folder within the app]
  c. in another cli tab, [cli] $ mongo // spin up instance of mongo
5. open browser to localhost:8080

![Friend Tracker](./friend_tracker.png?raw=true "friend tracker")




