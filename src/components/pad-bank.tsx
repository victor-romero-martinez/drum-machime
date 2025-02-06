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
  const keyListener = useRef<HTMLDivElement | null>(null);

  const currentDrum = switchDrum ? "drum1" : "drum0";

  const handlePlay = (idx: number) => {
    if (isOff) return;

    audioRefs.current[idx]!.volume = value;
    audioRefs.current[idx]?.play();
    dispatch(setName(parseAudioName(SOUND_SRC.drum1[idx])));
  };

  // event listener for keyup
  const handleKey = (e: KeyboardEvent) => {
    const key = e.key.toLocaleUpperCase();
    const idxElement = KEYBOARD_KEY.findIndex((k) => k === key);

    if (idxElement >= 0) {
      handlePlay(idxElement);
    }
  };

  // key event
  useEffect(() => {
    if (keyListener.current) {
      keyListener.current, addEventListener("keyup", handleKey);
    }

    return () => {
      if (keyListener.current) {
        keyListener.current.removeEventListener("keyup", handleKey);
      }
    };
  }, [value]);

  return (
    <>
      <div className="pad-bank" ref={keyListener} tabIndex={0}>
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
            ></audio>
            {k}
          </div>
        ))}
      </div>
    </>
  );
}
