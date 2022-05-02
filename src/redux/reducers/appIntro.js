import { setItem } from "../../utlis/utlis"
import actions from "../actions";
import type from "../type"

const initialState = {
  introData: true
};
const appIntro = (state = initialState, action) => {

  switch (action.type) {
    case type.INTRO: {
      const data = action.payload;
      console.log("Dataa>>>>>>>>----", data)
      setItem('intro', data);
      console.log(state,"state>>>>>>>>>>>>>>>")
      return {
        ...state,
        introData: data,
      }
    }
    default:
      return state;
  

  }

}


export default appIntro