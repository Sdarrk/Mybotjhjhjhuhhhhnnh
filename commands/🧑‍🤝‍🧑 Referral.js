/*CMD
  command: 🧑‍🤝‍🧑 Referral
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

function refList(userId){ 
if(!userId){ userId = user.id } 
var refsCount = User.getProperty({ 
name: 'REFLIB_' + 'refsCount', 
user_id: userId }); 
if(!refsCount){ refsCount = 0 }   
  return refsCount; }
var refLink = Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","Bot");
Bot.sendMessage("*😊 Total Invites = "+refList()+" Users\n\n⛔ Per Referral 50 points\n\n🔗 Referral Link 👇\n"+refLink+"*");
