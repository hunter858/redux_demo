import { INCREASE,DECREASE,RESET } from "./actionTypes";

const increase =()=> ({type:INCREASE});
const decrease =()=> ({type:DECREASE});
const reset = ()=>({type:RESET});

export {
    increase,
    decrease,
    reset
}
