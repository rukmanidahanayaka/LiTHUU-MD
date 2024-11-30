const config = require('../config');
const {cmd , commands} = require('../command');

cmd({
    pattern: "menu",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
  },
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};


for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;}}
    
let mademenu = `*𝙻𝙸𝚃𝙷𝚄𝚄 𝙼𝙳 𝙼𝙴𝙽𝚄* 👋 ${pushname}
> *DOWNLOAD COMMANDS*

${menu.download}

> *MAIN COMMANDS*

${menu.main}

> *GROUP COMMANDS*

${menu.group}

> *OWNER COMMANDS*

${menu.owner}

> *CONVERT COMMANDS*

${menu.convert}

> *SEARCH COMMANDS*

${menu.search}
𝗟𝗜𝗧𝗛𝗨𝗨 𝗠𝗗 By LITHIKA🧑‍💻🚀
`
await conn.sendMessage(from, { image: { url: `https://i.ibb.co/tPNQjmX/20241128-184557.jpg` }, caption: mademenu }, { quoted: mek });

}catch(e){
console.log(e)
reply(`${e}`)
}
})
