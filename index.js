
function randomValueInRange(start, finish) {
    return Math.floor(Math.random()*(10*finish)%finish + start)
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


const mesaggesItalian = [    "Buongiorno", "Come `va?", "Sta lavorando?", "Che bella giornata oggi!",
    "*", "Mi scusi per il disturbo", "Vedo le piace la mia compania!",
    "Lei è molto paziente", "Vi `auguro una buona giornata!", "Posso aiutarle in qualche modo?",
    "Sapete chi è Ronaldo?", "Ho dimenticato cosa volevo dirti...", "Confermami!", "Non so cosa dirti", "Sai cosa è linux?"
]

const mesaggesEnglish = [    "Good morning!", "How are you?", "Are you working?", "What a wonderful day!",
    "*", "Sorry for bothering you", "I see you like my company!",
    "You are very patient", "I wish you a great day!", "Can I help you somehow?",
    "Do you know who's Ronaldo?", "I forgot what I wanted to tell you...", "Confirm me!", "I don't know what to say", "Do you know what is Linux?"
]

// Messagges to use
messagges = mesaggesEnglish

const rangeStartInSeconds = 20*1000
const rangeFinishInSeconds = 100*1000

function popup(messages, randomIndex) {
    alert(messages[randomIndex])
}

async function main(messagges) {
    for (let i = 0; i < 1000; i++) {
        randomSeconds = randomValueInRange(rangeStartInSeconds, rangeFinishInSeconds)
        randomIndex = randomValueInRange(0, (messagges.length-1))

        await delay(randomSeconds)
        popup(messagges, randomIndex)
    }   
}

main(messagges)


