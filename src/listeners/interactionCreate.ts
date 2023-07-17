/* 
Create a listener for the interactionCreate event. This is how we handle slash commands.
*/

import { CommandInteraction, Client, Interaction } from 'discord.js'
import { SlashCommands } from 'src/SlashCommands'

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
  const handleSlashCommand = async (
    client: Client,
    interaction: CommandInteraction
  ): Promise<void> => {
    const slashCommand = SlashCommands.find(
      (c) => c.name === interaction.commandName
    )
    if (!slashCommand) {
      interaction.followUp({ content: 'An error has occurred' })
      return
    }

    await interaction.deferReply()

    slashCommand.run(client, interaction)
  }
}
