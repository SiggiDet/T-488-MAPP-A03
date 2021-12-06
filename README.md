# T-488-MAPP App Develeopment, Fall 2021

#### Group 21

## Assignment 3: Dr. Cinema

An app that shows the showtimes in Icelandic theaters. Users a able to browse movies by theaters and purchase tickets to movies. 


#### External API

We will be using an API provided by kvikmyndir.is which is documented here: http:// api.kvikmyndir.is/. In order to use the API you must register by pressing the ‘Register’ button shown below:
When you have successfully filled out the form and submitted it, you can start by getting your authentication header. The authentication flow works as follows:

1. Send a **HTTP POST** request to http://api.kvikmyndir.is/authenticate and include within the body a **JSON** object consisting of two properties: **username** and **password** (which is the username and password provided when registering on the website)
2. If this was successful you will get a response which includes your **access token**, which is valid for 24 hours
3. All future requests must include this token either as a query parameter, e.g. http:// api.kvikmyndir.is/movies?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUz or by populating a HTTP header called x-access-token with the value of the token
4. When the token expires (after 24 hours) these steps need to be reiterated

It is recommended to either **fetch** https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API or **axios** https://github.com/axios/axios to make the actual requests 

in React Native Note: In the documentation it uses http://api.biomynd.is for some demonstrations but the actual
URL is http://api.kvikmyndir.is


#### System setup

Clone the gitlab repository https://github.com/SiggiDet/T-488-MAPP-A03.git to an empty folder on your computer.

Here is how: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository

1. Switch to the project's root directory in terminal
2. Install the dependencies by running `npm install`
3. Once, 'npm install' is completed, run `expo start` to start the expo and react-native server
4. If it shows a QR code on the terminal as a result of 'exp start' command, then you are good to go!

#### Mobile setup

1. Install 'Expo' application on your android/iOS device. You can find the links to Android and iOS apps [here](https://expo.io/tools#client).
2. Scan the QR code shown on the terminal.
3. Once the QR code is successfully scanned, it will take few seconds to load and render the app.

#### Implementation

All required parts of assignment description were implemented. 


#### Group Members

| GitLab Username          | Student name                  |
| ------------------------ | ----------------------------- |
| @daddara                 | Arnar Már Brynjarsson         |
| @KypsLloyd               | Kypler Lloyd                  |
| @SiggiDet                | Sigurður Detlef               |
