---
templateKey: projects-post
title: message engine
date: 2019-06-13T20:29:44.188Z
description: details about the instant message functionality of the project
featuredpost: true
featuredimage: /img/flavor_wheel.jpg
---
when users connect to the network, they may want to use the instant message capability on the platform to send memes to other contacts.

this documents the requirements for the instant message component of the project

# high level requirements

* continuous intgration/deployment
* nodejs
* apollo graphql
* postgres
* websocket
* database schema

## continuous integration/deployment

the backend app should automatically deploy when a change is made on git branches. this will allows the app to be easily maintained and updated.

## nodejs with apollo graphgql and postgres

node js aerver is to be used with apollo graphql. this will be required for storing messages that have yet to be recieved by the expected recipient.

the database will also need to store user authentication details for them to login.

## websockets

instant messaging can be achieved using socket.io to establish connection between devices.

the connection should be encrypted before messages leave the device and can only be decrypted by the recipient using public key cryptography.

# database schema

## models

* users
* threads
* posts
* memes
* meme items
* meme items
* tags
* [enum] meme types
* [enum] user roles

![database models](/img/glitr-database-models.jpeg "database models")
