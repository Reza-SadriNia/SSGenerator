const execShellCommand = require('./shellCommand');

async function DeleteServer(serverID) {
	return await execShellCommand(`docker rm ${serverID} --force`);
}

module.exports = DeleteServer;
