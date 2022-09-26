const execShellCommand = require('./shellCommand');

async function listUser() {
	return await execShellCommand(`docker ps -f ancestor=shadowsocks/shadowsocks-libev --format "{{.Names}}"`);
}

module.exports = listUser;
