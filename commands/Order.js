/*CMD
  command: Order
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

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("wallet")
if( wallet == undefined ){
Bot.sendMessage("❗Your Wallet Not set❗")
}else{
if (balance.value() < 250){
Bot.sendMessage("❗ You Have To Own At Least 250 points!_")
}else{
Bot.sendMessage("*💳 Enter views Amount To Withdraw 😊*")
Bot.runCommand("Auto")
}
}}
