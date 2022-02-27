import { Client, Intents } from "discord.js";
import ready from "./listen"
import 'dotenv/config'

console.log('Bot is running');

const client = new Client({
  intents: [ 
    Intents.FLAGS.GUILDS
  ]
});

client.once('ready', () => {
  console.log(`Ready to go ${client.user?.username}`)
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  
  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  }
})

client.login(process.env.BOT_TOKEN);
