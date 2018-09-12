# Twilio SDK Starter
(https://travis-ci.org/TwilioDevEd/sdk-starter-node)

This sample project demonstrates how to use Twilio APIs in a Node.js web
application. Once the app is up and running, check out [the home page](http://localhost:3000)
to see which demos you can run. You'll find examples for [Chat](https://www.twilio.com/chat),
[Video](https://www.twilio.com/video), [Sync](https://www.twilio.com/sync), and more.

## Configure the sample application

Open `.env` and configure the following values.

### Configure account information

Every sample in the demo requires some basic credentials from your Twilio account. Configure these first.

| Config Value  | Description |
| :-------------  |:------------- |
`TWILIO_ACCOUNT_SID` | Your primary Twilio account identifier - find this [in the console here](https://www.twilio.com/console).
`TWILIO_API_KEY` | Used to authenticate - [generate one here](https://www.twilio.com/console/dev-tools/api-keys).
`TWILIO_API_SECRET` | Used to authenticate - [just like the above, you'll get one here](https://www.twilio.com/console/dev-tools/api-keys).

### Configure product-specific settings

Depending on which demos you'd like to run, you may need to configure a few more values in your `.env` file.

## Run the sample application

Now that the application is configured, we need to install our dependencies from npm.

```bash
npm install
```

Now we should be all set! Run the application using the `node` command.

```bash
npm start
```

![Home Screen](https://cloud.githubusercontent.com/assets/809856/26252870/0bfd80ac-3c77-11e7-9252-2b19dff5d784.png)
