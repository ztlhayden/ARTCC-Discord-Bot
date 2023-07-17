import {
  CommandInteraction,
  ChatInputApplicationCommandData,
  Client,
} from 'discord.js'

//Define the structure of type Command
export interface Command extends ChatInputApplicationCommandData {
  run: (client: Client, interaction: CommandInteraction) => void
}
