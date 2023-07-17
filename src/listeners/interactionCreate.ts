/* 
Create a listener for the interactionCreate event. This is how we handle slash commands.
*/

import { CommandInteraction, Client, Interaction } from 'discord.js'

export default (client: Client): void => {
  client.on('interactionCreate', async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
      await handleSlashCommand(client, interaction)
    }
  })
}

const handleSlashCommand = async (
  client: Client,
  interaction: CommandInteraction
): Promise<void> => {
  // handle slash command here
}
