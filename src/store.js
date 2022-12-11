//npm i redux react-redux

import { createStore }from "redux";
import ballreducer from "./components/redux/ballreducer";

const store=createStore(ballreducer);

export default store