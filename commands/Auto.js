/*CMD
  command: Auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var withdrawn = Bot.getProperty("totalWithdrawn");
withdrawn = parseFloat(withdrawn); 
var wallet = User.getProperty("wallet");
var balance = Libs.ResourcesLib.userRes("balance")
if(message < 250 ){
Bot.sendMessage("_❌ Minimum Withdraw 250_")
}else{
if(message > balance.value()){
Bot.sendMessage("_❌ Maximum Withdraw "+balance.value().toFixed(250)+" 250 Rs_")
}else{
Bot.sendMessage("*📤 Withdrawal Sent 📤\n\n💳 Transaction Details = Generating....\n 💰Amount = "+message+" Rs\n💼 Wallet = "+wallet+"\n\n⛔ May Be It Will Take Upto 24 Hours To Complete Your Payment⏰*")
balance.add(-message)
Api.sendMessage({
chat_id: "@Rcbkafan", 
text: "*🔋 New Approved Payout 🔋\n\n▪️ Status = Confirmed\n▪️User : @" +
        user.username +
        " \n▪️ User Id = "+user.telegramid+"\n▪️ Amount = "+message+" Rs\n\n📱USERNAME = "+wallet+"\n\n👮🏻‍♂ Bot = @"+bot.name+"*" , 
parse_mode: "Markdown"})
}}
