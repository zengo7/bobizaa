let handler = async (m, { conn, command, text }) => {
let love = `
*✥━─━⌬〘🇸🇩〙⌬━─━✥*

⬪  ࣪    ࣭     ࣪     ࣭   𝅦𝅦   ࣭     ࣪     ࣭    ࣪  ⬫
⬪  ࣪    ࣭     ࣪     ࣭   𝅦𝅦   ࣭     ࣪     ࣭    ࣪  ⬫
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪▭̷໋̟  ۫ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ۫  ▭̷໋̟۪۬໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪
   ‏

*✥━─━⌬〘🇸🇩〙⌬━─━✥*

𝑾𝑬𝑳𝑪𝑶𝑴𝑬 𝑻𝑶 𝒁𝑨𝑪𝑲_𝑩𝑶𝑻🙈

𝑩𝒀 𝑷𝑨𝑷𝑳𝑶 𝑩𝑳𝑨𝑪𝑲

↝|𝑭𝑹𝑬𝑬 𝑷𝑯𝑳𝑰𝑺𝑻𝑬𝑵🇸🇩
*✥━─━⌬〘🇸🇩〙⌬━─━✥*

*⌬〘 مرحبا بك في بوت زاك 〙⌬*

*⌬〘 اليك قائمه بالانجليزي  〙⌬*

*✥━─━⌬〘🇸🇩〙⌬━─━✥*

*❬🇸🇩❭↜ 〚 .hd 〛*
*❬🇸🇩❭↜ 〚 .song 〛*
*❬🇸🇩❭↜ 〚 .sfull 〛*
*❬🇸🇩❭↜ 〚 .Instagramdl 〛*
*❬🇸🇩❭↜ 〚 .logo 〛*
*❬🇸🇩❭↜ 〚 .kick 〛*
*❬🇸🇩❭↜ 〚 .antilink 〛*

*✥━─━⌬〘🇸🇩〙⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م١٠|م10)$/i
export default handler
