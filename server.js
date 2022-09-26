const { Telegraf } = require('telegraf');
const createServer = require('./utils/createServer');
const DeleteServer = require('./utils/DeleteServer');
const listServer = require('./utils/listServer');
const listUser = require('./utils/listUser');
const passwordgenerate = require('./utils/generatePassword');
const SS = require('./utils/generateSS');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((text) =>
	text.reply(`
Welcome To SS Generator Bot
For Help Please Click /help
`)
);

bot.help((text) =>
	text.reply(`
For Create Server Click /create
Show List Of Servers Click /serverlist
Show Number Of Users Click /users
For Delete Server Click /delete
`)
);

bot.command('create', async (text) => {
	text.reply('Please Enter UserProfile And Port Number');
	await bot.on('message', async (ctx) => {
		profile = ctx.update.message.text;
		const split = profile.split(' ');
		let profilename = split[0];
		let port = split[1];
		let password = await passwordgenerate();
		await createServer(profilename, port, password);
		const link = await SS(port, password, profilename);
		ctx.reply(`${link}\n/help`);
	});
});

bot.command('serverlist', async (text) => {
	let ServerList = await listServer();
	// ServerList = ServerList.replace(/\n|\r/g, ":").split(":").map(s => s.trim())
	text.reply(`${ServerList}\n/help`);
});

bot.command('users', async (text) => {
	const UserList = await listUser();
	text.reply(`${UserList}\n/help`);
});

// bot.command('delete', async (text) => {
// 	text.reply('Please Send Me ServerID');
// 	bot.on('text', async (ctx) => {
// 		let serverId = ctx.update.message.text;
// 		await DeleteServer(`delete ${serverId}`);
// 		text.reply(`Server ${serverId} Deleted...\n/help`);
// 	});
// });

bot.launch();

console.log('server Running...');
