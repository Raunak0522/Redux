// import Balls from "./components/react/Balls";
// import Bat from "./components/react/Bat";
import Batusereducer from "./components/react/Batusereducer";
import Balls from "./components/Balls";
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    // < >
    //   <Balls></Balls>
    //   <Bat></Bat>
    //   <Batusereducer></Batusereducer>
    // </>
    <>
    <Provider store={store}>
    <Balls></Balls>
    </Provider>
   
    </>
  );
}

export default App;
