import 'dotenv/config'

import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

console.log(process.env.BOT_TOKEN);


const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('des'),
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken()