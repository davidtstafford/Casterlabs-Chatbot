const map = JSON.parse(store.getOrDefault("ttsvoice", "{}"));

map[event.sender.UPID] = "Polly " + rawArgs;

const allowedVoices = [
    //Dansk
    "Naja",
    "Mads",

    // Deutsch
    "Marlene",
    "Hans",

    // English
    "Russell",
    "Nicole",
    "Amy",
    "Brian",
    "Matthew",
    "Raveena",
    "Ivy",
    "Joey",
    "Joanna",
    "Salli",

    //Español
    "Enrique",
    "Lucia",
    "Mia",
    "Penélope",

    //Français
    "Chantal",
    "Léa",
    "Céline",
    "Mathieu",

    //Português
    "Inês",
    "Cristiano",
    "Vitória",
    "Ricardo"

];
const isValidVoice = allowedVoices.some(voice => voice.toLowerCase() === rawArgs.toLowerCase());

if (!isValidVoice) {
    Koi.sendChat(event.sender.platform, "Invalid TTS voice. Allowed voices are: " + allowedVoices.join(", "), "SYSTEM", event.id);
}
else
{   
    store.put("ttsvoice", JSON.stringify(map));
    Koi.sendChat(event.sender.platform, "You have set your TTS voice to " + map[event.sender.UPID], "SYSTEM", event.id);
}