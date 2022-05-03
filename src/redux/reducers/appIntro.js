import { setItem } from "../../utlis/utlis"
import type from "../type"

const initialState = {
  introData: true
};
const appIntro = (state = initialState, action) => {
  console.log(state, '>>>>>>>>>');
  switch (action.type) {
    case type.INTRO:
      const data = action.payload;
      setItem('introdata', data);
      console.log('intro>>>>', data);
      return {...state, introData: data};

    default:
      return state;
  }

}


export default appIntro