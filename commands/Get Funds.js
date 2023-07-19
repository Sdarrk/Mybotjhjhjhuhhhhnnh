/*CMD
  command: Get Funds
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

Api.sendPhoto({
  photo: "https://i.postimg.cc/Rq59cS3R/IMG-20230719-215724-334.jpg",
  caption: "*Send Money On This QR Code*",
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "✅ Deposit", callback_data: "/upi_complete" }]]
  }
})
