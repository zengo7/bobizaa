let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n` : ''}*✦━━━━━[ 𝙕𝘼𝘾𝙆 ]━━━━━✦*

*⤹❄️ آلمنشن ᬽ آلجــمآعــي 🔥⤸*
\n` + users.map(v => '│◦♥️⃟🌍↲  𝑽𝒊𝑷乡 @' + v.replace(/@.+/, '')).join`\n` + '\n*✦━━━━━[ 𝙕𝘼𝘾𝙆 ]━━━━━✦*', null, {
        mentions: users
    })
}

handler.help = ['منشن']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler