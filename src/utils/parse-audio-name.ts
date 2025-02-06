export const parseAudioName = (name: string) =>
  name.split("/").slice(-1)[0].replace(".mp3", "");
