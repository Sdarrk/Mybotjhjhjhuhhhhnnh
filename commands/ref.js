/*CMD
  command: ref
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

function canRun(){
  var last_run_a = User.getProperty("last_run_a");
  if(!last_run_a){ return true }
   return
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_a", Date.now(), "integer");
var referrer = Libs.ReferralLib.currentUser.attractedByUser()
var bonus = 50
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "balance",
    referrer.telegramid
  )
  referrerRes.add(bonus)
  var refcom = Libs.ResourcesLib.anotherUserRes("refcom", referrer.telegramid)
  refcom.add(bonus)
  Bot.sendMessageToChatWithId(referrer.telegramid, "*🍯 Your Reffrel Joined Our Channel refer money added*")
} else {
  Bot.sendMessage()
}
