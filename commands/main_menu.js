/*CMD
  command: main_menu
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var user = User.getProperty("status");
if (user=="member" | user =="administrator" | user=="creator"){
var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("💰 Balance,Get Funds,\n 🧑‍🤝‍🧑 Referral,Set order,Order,\n☎️ Support,📊 Statistics,🤑Earn More", "*🥰 Refer and Earn*")
}
Bot.runCommand("ref")
