let handler = async(m, { conn, usedPrefix, command, text }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

  let enc = {
    "a": "•-",
    "b": "-•••",
    "c": "-•-•",
    "d": "-••",
    "e": "•",
    "f": "••-•",
    "g": "--•",
    "h": "••••",
    "i": "••",
    "j": "•---",
    "k": "-•-",
    "l": "•-••",
    "m": "--",
    "n": "-•",
    "o": "---",
    "p": "•--•",
    "q": "--•-",
    "r": "•-•",
    "s": "•••",
    "t": "-",
    "u": "••-",
    "v": "•••-",
    "w": "•--",
    "x": "-••-",
    "y": "-•--",
    "z": "--••",
    "0": "-----",
    "1": "•----",
    "2": "••---",
    "3": "•••--",
    "4": "••••-",
    "5": "•••••",
    "6": "-••••",
    "7": "--•••",
    "8": "---••",
    "9": "----•",
    "?": "••--••",
    "!": "-•-•--",
    ".": "•-•-•-",
    ",": "--••--",
    ";": "-•-•-•",
    ":": "---•••",
    "+": "•-•-•",
    "-": "-••••-",
    "/": "-••-•",
    "=": "-•••-",
    " ": "/"
  }

  let dec = {
    "-----": "0",
    "•----": "1",
    "••---": "2",
    "•••--": "3",
    "••••-": "4",
    "•••••": "5",
    "-••••": "6",
    "--•••": "7",
    "---••": "8",
    "----•": "9",
    "•-": "a",
    "-•••": "b",
    "-•-•": "c",
    "-••": "d",
    "•": "e",
    "••-•": "f",
    "--•": "g",
    "••••": "h",
    "••": "i",
    "•---": "j",
    "-•-": "k",
    "•-••": "l",
    "--": "m",
    "-•": "n",
    "---": "o",
    "•--•": "p",
    "--•-": "q",
    "•-•": "r",
    "•••": "s",
    "-": "t",
    "••-": "u",
    "•••-": "v",
    "•--": "w",
    "-••-": "x",
    "-•--": "y",
    "--••": "z",
    "••--••": "?",
    "-•-•--": "!",
    "•-•-•-": ".",
    "--••--": ",",
    "-•-•-•": ";",
    "---•••": ":",
    "•-•-•": "+",
    "-••••-": "-",
    "-••-•": "/",
    "-•••-": "=",
    "/": " "
  }

let selected = text.toLowerCase().split(" ")[0] + " "
if(selected == "مشفر ") {
let str = text.replace(selected, "").toLowerCase()
let Output_Morse = " تم التشفير "
for(let i of str) {
if(!enc[i]) Output_Morse += i
for(let j in enc) {
if(j == i) Output_Morse += enc[i] + " "
}}

return conn.reply(m.chat, Output_Morse, fkontak, m)
} else if(selected == "التشفير ") { 
let str = text.replace(selected, "").replace(/[.]/g, "•")
let Output_String = ""
for(let i of str.split(" ")) {
if(!dec[i]) Output_String += i
for(let j in dec) {
if(j == i) Output_String += dec[i]
}}
return conn.reply(m.chat, Output_String, fkontak, m)
} else {
return conn.reply(m.chat, `${mg}🔣 تشفير وفك الكلام\n\nمثال للاستخدام الصحيح*:* لتشفير الكلامn*${usedPrefix}${command} مشفر shadow*\n\لفك تشفير الكلام *:* مثال\n*${usedPrefix}${command} التشفير ••• •••• •- -•• --- •-- •-*\n*${usedPrefix}${command} التشفير  •- -••• -•• • •-•• •-• •- •••• -- •- -• / • •-•• ••• •••• •- -- •••• --- ••- -*`, fkontak, m)
}}

handler.help = ["morse"].map(v => v + " <encode|decode>")
handler.tags = ["tools"]

handler.command = /^(morse|فك|كلام)/i
handler.level = 1
handler.limit = 3
handler.register = true

export default handler
