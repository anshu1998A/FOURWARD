import { setItem } from "../../utlis/utlis"
import type from "../type"

const initialState = {
  introData: true
};
const appIntro = (state = initialState, action) => {
  console.log( 'Intro State', state);
  switch (action.type) {
    case type.INTRO:
      const data = action.payload;
      setItem('introdata', data);
      console.log('introData******************', data);
      return {...state, introData: data};

    default:
      return state;
  }

}


export default appIntro