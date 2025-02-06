import { useDispatch, useSelector } from "react-redux";
import { setSwitchDrum } from "../actions/drum-change.slice";
import { setPower } from "../actions/drum-power.slice";
import { setVol } from "../actions/drum-vol.slice";
import { AppDispatch, RootState } from "../store/store";
import Toggle from "./toggle";

export default function Controls() {
  const { name } = useSelector((state: RootState) => state.display);
  const { isOff } = useSelector((state: RootState) => state.power);
  const dispatch = useDispatch<AppDispatch>();

  const handleVol = (val: string) => dispatch(setVol(Number(val) / 100));
  const handlePower = (isOff: boolean) => dispatch(setPower(isOff));
  const handleSwitchDrum = () => dispatch(setSwitchDrum());

  return (
    <>
      <div className="controls-container">
        <Toggle
          id="power"
          title="Power"
          onHandleChange={(e) => handlePower(e.target.checked)}
        />
        <p id="display">{!isOff ? name.replace(/[-_]/gi, " ") : ""}</p>

        <input
          type="range"
          name="vol"
          id="vol"
          title="Volumen"
          onChange={(e) => handleVol(e.target.value)}
        />

        <Toggle
          id="drum-switch"
          title="Bank"
          onHandleChange={handleSwitchDrum}
        />
      </div>
    </>
  );
}
