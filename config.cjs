const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "IK~6M80wDpR#3gRvMoOwf0f5aN1kmT0s2W4ICmy3ioHU6SCcvo3Yal4",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "private",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "255796825074",
  "OWNER_NAME": process.env.OWNER_NAME || "elchapo",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'false',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'false',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'false',
  "AUTO_REACT": process.env.AUTO_REACT === 'false',
  "WELCOME": process.env.WELCOME === 'false',
  "ANTI_BAD": process.env.ANTI_BAD === 'false',
  "ANTI_LINK": process.env.ANTI_LINK === 'false',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'false',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'false'
};
