/*CMD
  command: 📊 Statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = Libs.ResourcesLib.anotherChatRes("user", "global")
var withdraw = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
Bot.sendMessage(
  "*📊 Bot Live Statistics*\n\n👦 *Users = " +
    user.value() +
    " Users*\n\n*Make Your own Bots :- @hiiamdark JOIN @EARNING_X_APPS*"
)
