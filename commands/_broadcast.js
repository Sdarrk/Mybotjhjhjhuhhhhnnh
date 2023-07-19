/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send Your Message For Broadcast*


  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(user.telegramid == 1119579816){
Bot.runAll({ 
command: "Broadcast",
for_chats: "private-chats",
options: {msg: message}
})
Bot.sendMessage("*🚀 Message Sended To All Users*")
}else{
Bot.sendMessage("*🔰 You're Not An Admin*")
}
