const {cmd , commands} = require('../command');
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "song down",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply('give me name')
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `song`
  
await conn.sendMessage(from,{image:{url: data.thumbnail},caption: desc},{quoted:mek})

let down = await fg.yta(url)
let downloadUrl = down.dl_url
//====================
await conn.sendMessage(from,{audio: {url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"msg"},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
//=========================================================================
cmd({
    pattern: "video",
    desc: "video down",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply('give me name')
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let dsc = `TITLE : ${data.title}
TIME : ${data.timestamp}
DURATION : ${data.description}
AGO : ${data.ago}
VIEWS : ${data.views}
URL : ${data.url}`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption: dsc},{quoted:mek})

let down = await fg.ytv(url)
let downloadUrl = down.dl_url
  
//send=====
await conn.sendMessage(from,{video: {url: downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName: data.title + ".mp4",caption:"msg"},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
