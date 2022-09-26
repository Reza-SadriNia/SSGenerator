const execShellCommand = require("./shellCommand")

async function createServer(profilename, port, password) {
  return await execShellCommand(`docker run -e PASSWORD=${password} -p ${port}:8388 -p ${port}:8388/udp -d --restart always --name ${profilename} shadowsocks/shadowsocks-libev`)
}

module.exports = createServer