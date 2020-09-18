# nvidia-snatcher

## Description

This is going to check Nvidia's website every 5 seconds to see if the 3080 is out of stock in the background. If it comes into stock, then your browser will open and direct you to a cart with the 3080 in it where you can proceed manually.

You may get false positives from time to time, so I apologize for that. If you're getting than more often than not, I would change the `const waitForTimeout = 1000;` to a higher number.

**Update 1:** Now includes Best Buy 3080 FE

## Installation and running

Not going to write a full write up here, but I'm going to assume you know Node.js. If you don't then go to Google and look up how to install for your OS.

Here's how to get it running:

- Save this text to a file in a folder on your Desktop. E.g. `nvidia/nvidia.js`
- Open up your favorite terminal (`cmd`, `iTerm`, `Tilix`)
- Run the below

```
npm i puppeteer opn nodemailer
node nvidia.js
```

If you want to get an email as well:

- If you have two-factor authentication, use https://myaccount.google.com/apppasswords to get your password Google app password
- Otherwise, use your regular password

```
npm i puppeteer opn nodemailer
EMAIL_USERNAME="youremail@gmail.com" EMAIL_PASSWORD="secretpassword" node nvidia.js
```

## Further customization and hacking

You can potentially add more `links` and change the `timeout` if you'd like.

- `timeout` and `waitForTimeout` are in milliseconds.
- `links` are specific to find the `"out of stock"` verbiage (forced to lowercase).