/*CMD
  command: /SPM
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer:  Send User Telegram Id To Send Message:
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid == "5506358369"){
Bot.run({ 
command: "/PM",
options: { tgid : message }
})
}
