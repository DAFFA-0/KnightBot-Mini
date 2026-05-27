/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','94740449539'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2W6jSBT9l3q11cFmtxRpWIJZDMbG+6gfylCYsnFBoDBLy/8+wukkPdJMT+atNp177jnn1g9AMlwiB7Vg8gPkBb5BivolbXMEJkCt4hgVYAgiSCGYgJNzy0y12Jz1utnfqLRLZCQuOEk504E1HxhjPQjDLVw1u/oZ3Icgr44pDn8DePCh4BnhOjlsOmbgK67bJoFolSVHiV7GnrhEB9hyp/14/QzuPSLEBSanlzxBV1TA1EGtD3HxNfpTdTObyYa+zSOjSI7bes5kAydcm50x6JLUfvWvTyppmdXl8jX6pT+9qewyexXaxnpq5/5U1tcJE7zqZMqtsGGK0KvoIjxe6jf6JT4RFFkRIhTT9su6Y9vUlHJU0mLTHjYHhTsghRG20Y5rX5Ymmc4XniifuTjfhl8jziFO9GC9TYUR9fRAagd7tD6qUsf6VPB9z5+ZphMdY3fM/ErcL96zcvk/umeWqca7p4ZnirQ7CM5Ga/LudmUEt4aMTKwcB9uF7TY1Y32N/qtKeGsfrBcdr1ms680XOC41g6mzLNHjFz0c8fY8Dm7s5fRJH9Kq+B3LSyed2PNtsT7pqhM0q9RvTLdY7dlx052DSDQPeyK+6rPWWJt8tkQ1dDXL7Z5IQzQnVA1jQJ0wio3R9cYn0mjO6qaU1M+Pji6otSIwGd2HoEAnXNICUpyR/owbDQGMbgEKC0Qf6oLbsqW16qvoGO0yVUDBC+MHF85osM10VmTQV1TtWNVUAuYZDEFeZCEqSxSZuKRZ0bqoLOEJlWDy5/chIKihb7711djREMS4KOmaVHmawejd1PdLGIZZRWjQklDrF6gAE+bzGFGKyansZawILMIE35CWQFqCSQzTEn00iAoUgQktKvQxtFoW9brvec/jtt4KDMH14QeOwATInMgxHCfzrDxhmT/Kb3WPCvP8G0EUDEH6eDUes2NJZCWGF7nxmOtf9hf3D4I9XoQoxGkJJkDz2/A8VRbYXoWMst8rraI4itKL9t7QezDelDeVouK3lr+ymMslt911nTJnG4k+e51r3ZQVDSvc2dY1mb78E0hfUpwLRy0dh5s5ne98fcZPd/7aHxjszokqbmQISaVHA2uxrJ6E9REmT1vB25jEcW2Jydc49rbnMd+sBtJgM9Id7mUmu/riua8WoRsO0d+KzbSM5FaZCjXnGtx0xRwdfTU/nnPGqXfGyJEHOBJmVpD6ksfmTcIJ+LTHki5zMzYbS1tfJDcm5MfBtGuODWqVqMWLt8g+Rib9+VXhR5p6q/ptjNFj8gnsDfxP69549wFj7sNfIH5+Jf8yjuqydsRqg3Wm9WzbCVaGa0dWu6s6mT+fyoYOmsA02sDOlgm4378PQZ5CGmfFFUwAJFGR4QgMQZFVfWItEme/KaaplqUpJ6NvPIUlVT6nYIWvqKTwmoPJSBRlSeZEWbz/BQSzjUQ6BwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
