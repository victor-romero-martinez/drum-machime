import { Provider } from "react-redux";
import Controls from "./components/controls";
import Logo from "./components/logo";
import PadBank from "./components/pad-bank";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <main>
        <div id="drum-machine">
          <PadBank />
          <Logo />
          <Controls />
        </div>
      </main>
    </Provider>
  );
}

export default App;
