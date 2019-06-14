---
templateKey: projects-post
title: mobile app
date: 2019-06-13T20:29:44.188Z
description: details about the mobile app part of the project
featuredpost: true
featuredimage: /img/flavor_wheel.jpg
---
![]()

![](/img/glitr-app-thread.jpeg)

the project will need a mobile app so that users on mobile phones will be able to use the meme instant messaging service.

the mobile app will be used to allows users to create memes on the device as well as send memes to other people

# high level requirements

* continuous intgration
  /deployment
* react-native
* can create + edit a meme
* can login as a user
* can save the meme to the device
* websocket
* can send the meme to another device
* screens:
  * login page
  * registration page
  * meme editor
  * contacts page
  * conversations list page
  * chat page

## continuous integration/deployment

the app should be created with continuous integration in mind. this will make it easier to to update the app if there are any bugs and general maintenance will be easier with this.

### things to investigate:

* ci/cd: <https://blog.theodo.com/2019/04/react-native-deployment-pipeline/?utm_source=rss&utm_medium=rss&utm_campaign=react-native-deployment-pipeline>

## react-native

the app is to be created using the React Native Expo SDK. this will provide a good starting point for the project. (<https://expo.io/>)

## can create + edit a meme

there needs to be the ability to create a meme to be sent to another device. it would be useful to persist data to the device to prevent having to fetch it from a remote source.

## can login as a user

to be able to send memes, users will have to register with the platform to ensure they are real users.

i can use passportjs (<http://www.passportjs.org/>). many authentication strategies are available, it would be good to include the main user authentication providers:

* facebook login
* google login
* microsoft login
* ?github login?
* ?instagram login?
* ?strava login?

## memes on the device

it should be possible to persist data to the device so the user is able to keep memes private on their device unless they decide to send it to another device.

if possible, data should be encrypted at rest. 

if data is encrypted at rest on all devices, then i can make it so that if the "author" of a sent meme decides to delete the meme, that deletion can propagate to all devices connected to the network to delete on other devices if the author decides to remove it.

## websocket

websockets will be necessary to achieve instant messaging functionality. communication should be E2E encrypted.

possibly over webrtc?

## screens

* login page
* ![login screen](/img/glitr-app-login.jpeg "login screen")
* registration page
* ![register screen](/img/glitr-app-register.jpeg "register screen")
* meme editor
* ![meme-editor screen](/img/glitr-app-meme-editor.jpeg "meme-editor screen")
* thread page
* ![thread screen](/img/glitr-app-thread.jpeg "thread screen")
* conversations list page
* chat page
