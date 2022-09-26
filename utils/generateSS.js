const ip = require('ip');
const { default: SsUrl } = require('shadowsocks-link-generator');
const address = ip.address();

async function SS(port, password, profilename) {
	const SSlink = SsUrl.genSS({
		server: address,
		server_port: port,
		password: password,
		method: 'aes-256-gcm',
		name: profilename,
	});
	const manual = `ip : ${address}\nport: ${port}\npassword: ${password}`;
	return `${SSlink}\n\n${manual}`;
}

module.exports = SS;
