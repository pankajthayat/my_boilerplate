import {createStore} from "redux";
const store =createStore((state={count:0})=>{return state});
// taking functionas arg and the arg ins function is state
//by setting count:0 we have set a default value..if there is no object it will be taken
//store is the thing that track our changing data over time
//
console.log(store.getState());
console.log("pankaj sisnvgg")