import { Client } from 'discord.js';

require('dotenv').config();

const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.on('ready', () => console.log('ready'));

client.on('messageCreate', msg => {
	if (!msg.author.bot)
		console.log(`Message created with content -- ${msg.content}`);
});

client.on('threadCreate', thread => {
	console.log(`Thread created with name -- ${thread.name}`);
});

client.login(process.env.BOT_TOKEN || '');
