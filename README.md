# Discord Dave - Discord Bot for VATUSA Subdivisions

# Work in Progress

The ARTCC Discord Bot is built to assist ARTCCs in VATUSA manage their Discords. Dave can do many things, like advertise events, manage roles, help pilots, and more.

This project is based off of the boilerplate Discord bot, used in their getting started guide.

## Use

### Features

- Audit roles when requested by user or triggered externally for all users.\*
- Create and Manage Events.\*
- Tools for community members to use when flying or controlling to engage with the community more.\*

\*Work in Progress

### Commands

- /atis: Accepts an airport string, and responds with the current VATSIM AITS.\*
- /giveroles: Audits user's roles and assigns appropriate roles.\*
- /groupflight: Accepts departure, destination, and est departure time information and sends a message in a channel to notify other pilots.\*
- /faq: Sends user a link to FAQ page as set in configuration.\*
- /fly: Sends user a 'flight' between two airports in the ARTCC.\*
- /metar: Accepts a station string, and responds with the METAR for that station.\*
- /relief: Used by controllers, accepts a position string and sends a message in a channel to request relief.\*

\*Work in Progress

### See Dave in Action

Dave was developed by the Virtual Indianapolis ARTCC, so our Discord is the best place to see him working! Join at zidartcc.org.

## Development Plans

This software is designed for all of VATUSA to use, and any support maintaining it is appreciated. Bellow are some of the objectives of development as we look to improve this for everyone.

- Add Event advertisement feautres.
- Add on message context command to add a message to the 'quote wall'.
- Improve on-boarding for new facilities.

## Setting up Discord Dave for your ARTCC

### Project structure

Below is a basic overview of the project structure:

```
├── .env.sample -> sample .env file
├── app.js      -> main entrypoint for app
├── commands.js -> slash command payloads + helpers
├── utils.js    -> utility functions and enums
├── package.json
├── README.md
└── .gitignore
```

### Running app locally

Before you start, you'll need to install [NodeJS](https://nodejs.org/en/download/) and [create a Discord app](https://discord.com/developers/applications) with the proper permissions:

- `applications.commands`
- `bot` (with Send Messages enabled)

Configuring the app is covered in detail in [Discord's getting started guide](https://discord.com/developers/docs/getting-started).

#### Setup project

First clone the project:

```
git clone ---repo---
```

Then navigate to its directory and install dependencies:

```
cd artcc-discord-bot
npm install
```

#### Get app credentials

Fetch the credentials from your new app's settings and add them to a `.env` file (see `.env.sample` for an example). You'll need your app ID (`APP_ID`), bot token (`DISCORD_TOKEN`), and public key (`PUBLIC_KEY`).

Fetching credentials is covered in detail in the [getting started guide](https://discord.com/developers/docs/getting-started).

#### Install slash commands

The commands for the example app are set up in `commands.js`. All of the commands in the `ALL_COMMANDS` array at the bottom of `commands.js` will be installed when you run the `register` command configured in `package.json`:

```
npm run register
```

#### Run the app

After your credentials are added, go ahead and run the app:

```
node app.js
```

> ⚙️ A package [like `nodemon`](https://github.com/remy/nodemon), which watches for local changes and restarts your app, may be helpful while locally developing.

If you aren't following the [getting started guide](https://discord.com/developers/docs/getting-started), you can move the contents of `examples/app.js` (the finished `app.js` file) to the top-level `app.js`.

#### Set up interactivity

The project needs a public endpoint where Discord can send requests. To develop and test locally, you can use something like [`ngrok`](https://ngrok.com/) to tunnel HTTP traffic.

Install ngrok if you haven't already, then start listening on port `3000`:

```
ngrok http 3000
```

You should see your connection open:

```
Tunnel Status                 online
Version                       2.0/2.0
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://1234-someurl.ngrok.io -> localhost:3000
Forwarding                    https://1234-someurl.ngrok.io -> localhost:3000

Connections                  ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

Copy the forwarding address that starts with `https`, in this case `https://1234-someurl.ngrok.io`, then go to your [app's settings](https://discord.com/developers/applications).

On the **General Information** tab, there will be an **Interactions Endpoint URL**. Paste your ngrok address there, and append `/interactions` to it (`https://1234-someurl.ngrok.io/interactions` in the example).

Click **Save Changes**, and your app should be ready to run 🚀

#### Other resources

- Read **[the documentation](https://discord.com/developers/docs/intro)** for in-depth information about API features.
- Browse the `examples/` folder in this project for smaller, feature-specific code examples
- Join the **[Discord Developers server](https://discord.gg/discord-developers)** to ask questions about the API, attend events hosted by the Discord API team, and interact with other devs.
- Check out **[community resources](https://discord.com/developers/docs/topics/community-resources#community-resources)** for language-specific tools maintained by community members.
