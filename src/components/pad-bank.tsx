import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../actions/drum-display.slice";
import { KEYBOARD_KEY } from "../data/keyboard-key";
import { SOUND_SRC } from "../data/sound-data";
import { AppDispatch, RootState } from "../store/store";
import { parseAudioName } from "../utils/parse-audio-name";

export default function PadBank() {
  const { value } = useSelector((state: RootState) => state.volumen);
  const { isOff } = useSelector((state: RootState) => state.power);
  const { switchDrum } = useSelector((state: RootState) => state.switchDrum);
  const dispatch = useDispatch<AppDispatch>();

  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const currentDrum = switchDrum ? "drum1" : "drum0";

  const handlePlay = (idx: number) => {
    if (isOff) return;

    const audio = audioRefs.current[idx];
    if (audio) {
      // Check if the audio ref exists
      audio.volume = value;
      audio.play();
      dispatch(setName(parseAudioName(SOUND_SRC[currentDrum][idx])));
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const key = e.key.toLocaleUpperCase();
      const idxElement = KEYBOARD_KEY.findIndex((k) => k === key);

      if (idxElement >= 0) {
        handlePlay(idxElement);
      }
    };

    window.addEventListener("keyup", handleKey);

    return () => window.removeEventListener("keyup", handleKey);
  }, [isOff, value, switchDrum]); // Add dependencies!

  return (
    <div className="pad-bank">
      {KEYBOARD_KEY.map((k, i) => (
        <div
          key={i}
          className="drum-pad"
          id={parseAudioName(SOUND_SRC[currentDrum][i])}
          onClick={() => handlePlay(i)}
        >
          <audio
            id={k}
            className="clip"
            autoPlay={false}
            ref={(audio) => (audioRefs.current[i] = audio)}
            src={SOUND_SRC[currentDrum][i]}
          />
          {k}
        </div>
      ))}
    </div>
  );
}
