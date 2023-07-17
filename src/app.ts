import { Client } from 'discord.js'
require('dotenv').config()
import ready from './listeners/ready'
import interactionCreate from './listeners/interactionCreate'
import express from 'express'

//init an express app and define ports and stuff
const app = express()
const PORT = process.env.PORT || 3000

//bring in the tokens
const DISCORD_TOKEN = process.env.DISCORD_TOKEN

//debuging log
console.log('Bot is starting...')

//create the client object
const client = new Client({
  intents: [],
})

//register listeners with the client
ready(client)
interactionCreate(client)

//log in
client.login(DISCORD_TOKEN)
