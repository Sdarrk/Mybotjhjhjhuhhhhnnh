/*CMD
  command: ☎️ Support
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*You are now in direct contact with our Administrator*
Send here any message you want to submit, you will receive the answer directly here in chat!
  ANSWER
  keyboard: ⛔️ Cancel
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
User.setProperty("Ask" ,message ,"string")
Bot.sendMessage("*📩 Message Sent To Admin As = "+message+"*")
Bot.sendMessageToChatWithId(1119579816, "*📩 New Support Message From User 📩\n\n🤴🏻 User =* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n💳Telegram id = "+user.telegramid+"\n\n*💌 Message = "+message+"*")
Bot.runCommand("main_menu")
