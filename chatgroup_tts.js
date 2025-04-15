let TurnOnTTS = "yes" // yes or no

let IgnoreUserList = 
[     "StreamElements"
    , "CreatisBot"
    , "BotRixOficial"
] // List of users to ignore

let IgnoreReadingIfContains = 
[     "!gamble"
    , "!points"
    , "!raffle"
    , "!givepoints"
    , "Invalid TTS voice"
] // List of words that cause whole sentence to be ignored

function removeEmojis(text) {
    text.replace(/\(:voice [^)]+\)/g, '');
    return text.replace(/[^a-zA-Z0-9?!'",.\s]/g, '');
}

let message = removeEmojis(event.raw)
let user = removeEmojis(event.sender.displayname)
let saysOrAsks = message.includes("?") ? "asks " : "says "

let dontSpeak = false
if (IgnoreReadingIfContains.some(word => message.toLowerCase().includes(word.toLowerCase()))) {
    dontSpeak = true
} 

//let personsays = user + saysOrAsks + message
let personsays = message

const map = JSON.parse(store.getOrDefault("ttsvoice", "{}"));

const storedVoice = map[event.sender.UPID];

//if storedVoice is not then set to Polly Matthew
if (storedVoice) {
    if (TurnOnTTS == "yes" && !IgnoreUserList.includes(user) && !dontSpeak ){
        Sound.playTTS(personsays, storedVoice, .5 /* volume, 0-1 */)
    }
}
else {
    if (TurnOnTTS == "yes" && !IgnoreUserList.includes(user) && !dontSpeak ){
        Sound.playTTS(personsays, "Polly Matthew", .5 /* volume, 0-1 */)
    }
}

