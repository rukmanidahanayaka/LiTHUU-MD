const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "tiktok",
    desc: "download tiktok video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
const tiktok = await fetchJson(`https://www.dark-yasiya-api.site/download/tiktok?url=${q}`);
  
const msg = `msg`
  
// Send the video details with options to the user
  await conn.sendMessage( from, { image: { url: tiktok.result.cover || '' }, caption: msg }, { quoted: mek });

await conn.sendMessage(from, { audio: { url: tiktok.result.sound }, mimetype: "audio/mpeg" }, { quoted: mek });
await conn.sendMessage(from, { video: { url: tiktok.result.wmVideo }, mimetype: "video/mp4", caption: `${tiktok.result.title}\n\nWATERMARK VIDEO ✅\n\n> *LITHUU-MD 2024 *` }, { quoted: mek });
await conn.sendMessage(from, { video: { url: tiktok.result.hdVideo }, mimetype: "video/mp4", caption: `${tiktok.result.title}\n\nNO-WATERMARK VIDEO ✅\n\n> *LITHUU-MD 2024 *` }, { quoted: mek });

}catch(e){
console.log(e)
reply(`${e}`)
}
})
