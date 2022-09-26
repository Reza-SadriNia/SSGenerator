const execShellCommand = require("./shellCommand");

async function listServer() {
  return await execShellCommand(`docker ps -f ancestor=shadowsocks/shadowsocks-libev --format "{{.ID}}: {{.Names}}"`)
}

module.exports = listServer