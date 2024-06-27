let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('1' || '1')) {
    global.db.data.users[m.sender].banned = true
   }
  
   if (m.sender.startsWith('507' || '507')) {
    global.db.data.users[m.sender].banned = true
   }

   if (m.sender.startsWith('107' || '107')) {
    global.db.data.users[m.sender].banned = true
   }
    }

export default handler