const map = JSON.parse(store.getOrDefault("ttsvoice", "{}"));

const storedVoice = map[event.sender.UPID];

if (storedVoice) {
    Koi.sendChat(event.sender.platform, "Your current TTS voice is " + voiceName, "SYSTEM", event.id);
}
else {
    Koi.sendChat(event.sender.platform, "You have not set a TTS voice yet. Use !setttsvoice to set your voice. Use !savetts", "SYSTEM", event.id);
}