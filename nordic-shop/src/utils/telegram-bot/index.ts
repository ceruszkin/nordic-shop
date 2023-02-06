export function telegramBot(text: string){
    //6179731481:AAEThueFwQK82osC2yieoLGpDj7cjr4H_iM

    const bot_token = '6179731481:AAEThueFwQK82osC2yieoLGpDj7cjr4H_iM'
    const url_api_telegram = `https://api.telegram.org/bot${bot_token}`

    const adminsArray: any = {
        "Виктория": 485306334
    }

    fetch(`${url_api_telegram}/sendMessage?chat_id=${adminsArray['Виктория']}$text=текст`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(() => {
        alert("Message has been send to the administrator")
    })
}