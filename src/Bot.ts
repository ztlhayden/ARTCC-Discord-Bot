import { Client } from 'discord.js'
require('dotenv').config()
import ready from './listeners/ready'

//bring in the tokens
const DISCORD_TOKEN = process.env.DISCORD_TOKEN

//debuging log
console.log('Bot is starting...')

//create the client object
const client = new Client({
  intents: [],
})

//register the ready listener with the client
ready(client)

//log in
client.login(DISCORD_TOKEN)
