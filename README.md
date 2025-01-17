# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

## Final Product

When you first visit the webapp from your desktop, the following will be the home page. You can read tweets and type tweets to post them.
!["screenshot of frontpage"](https://github.com/ahmedtarabia/tweeter/blob/master/docs/firstpage.png?raw=true)

If you tried to click the tweet button without adding any text, you will get the following error:
!["screenshot of error1"](https://github.com/ahmedtarabia/tweeter/blob/master/docs/error-notext.png?raw=true)

As soon as you start typing, the error will not apply and the number of characters left are being updated on the bottom right corner as shown:
!["screenshot of typing"](https://github.com/ahmedtarabia/tweeter/blob/master/docs/typing.png?raw=true)

If you exceed the number of characters allowed, you will be shown the following error:
!["screenshot of error2"](https://github.com/ahmedtarabia/tweeter/blob/master/docs/error-exceed-limit.png?raw=true)

But if you delete some text to reach the allowed limit, the error will not apply and you can post your tweet!

When you hover over the heart (like button), notice the color of the heart. The tweet box shadow will become visible as well. 
!["screenshot of hovering"](https://github.com/ahmedtarabia/tweeter/blob/master/docs/hover.png?raw=true)

For tablet and mobile users, the responsive design of the webapp supports their devices with the full functionalities of the desktop as shown below: 
!["screenshot of tablet"](https://github.com/ahmedtarabia/tweeter/blob/master/docs/tablet.png?raw=true)
!["screenshot of mobile"](https://github.com/ahmedtarabia/tweeter/blob/master/docs/mobile.png?raw=true)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Optimization

- Allow users to register, sign in and out 
- Further UI/UX improvements. 


## Dependencies

- Express
- Node 5.10.x or above

## Tech Stack

Frontend:
 - HTML
 - CSS
 - JavaScript
 - jQuery
 
 Backend: 
 - MongoDB
 - Node 
 - Express
