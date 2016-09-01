## Sample Auth0 app (with Ionic 1 & Angular)

<img src="http://i.giphy.com/l0MYEZYLkANJCQ9TG.gif">

# Installation #

## Install and Configure Android and iOS SDK ##

Android SDK: <a href="https://cordova.apache.org/docs/en/3.0.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide">https://cordova.apache.org/docs/en/3.0.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide</a>

iOS SDK: <a href="https://cordova.apache.org/docs/en/3.0.0/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide">https://cordova.apache.org/docs/en/3.0.0/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide</a>


## Install Cordova and Ionic ##

```
npm install -g cordova@4.3.0
npm install -g ionic@1.3.14
```

## Install Global Dependencies ##

```
npm install -g gulp
```

## Install the Project ###

```
git clone https://github.com/oguzgelal/auth0-ionic-angular.git
npm install
```

## Add the Android and iOS platforms ##

```
ionic platform add android
ionic platform add ios
```

## Install the plugins ##

```
npm install
```

## Configure the env variables ##

First run the following command:

```
mv www/js/env.sample.js www/js/env.js
```

Then, go to `www/js/env.js` file and add your Auth0 app domain and client id. 


# Running the app #

## Browser ##

Below command will start a live-reload server for your project. When changes are made to any HTML, CSS, or JavaScript files, the browser will automatically reload when the files are saved.

```
ionic serve
```

## Android ##

```
ionic platform android
ionic build android
ionic run android
```

## iOS ##

```
ionic platform ios
ionic build ios
ionic emulate ios
```

# Running into trouble ? #

Visit <a href="http://ionicframework.com/docs/cli/">ionic docs</a> for more information.