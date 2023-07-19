/*CMD
  command: Set order
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var wallet = User.getProperty("wallet")

if (wallet == undefined){
var button1 = [{ title : "🚧 Set Wallet 🚧" , command : "/wallet" }]
Bot.sendInlineKeyboard(button1, "*💡 Your currently set USERNAME is : '*none*'\n\nIt will be used for all future withdrawals.*")
} else {
var button2 = [{ title : "🚧 Change Wallet 🚧" , command : "/wallet" }]
Bot.sendInlineKeyboard(button2, "*💡 Your currently set USERNAME ID is : *'"+wallet+"'*\n\nIt will be used for all future withdrawals.*")
}
