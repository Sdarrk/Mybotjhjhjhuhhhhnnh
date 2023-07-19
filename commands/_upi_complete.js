/*CMD
  command: /upi_complete
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *send your payment screenshot to @Rcbkafan *

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendMessageToChatWithId(1119579816, "🚦New add funds🚦\n\n⚜ User = "+user.first_name+"\n🔰 Username = @"+user.username+"\n🆔 User ID = "+user.telegramid+"\n📛 User Link = ["+user.first_name+"](tg://user?id="+user.telegramid+")\n(*tnx id* : "+message+")")
