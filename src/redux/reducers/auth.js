import { removeItem, setItem } from "../../utlis/utlis";
import type from "../type";
const inititalState = {
  userData: null
}
const userStatus = (state = inititalState, action) => {
  switch (action.type) {
    case type.LOGIN: 
    data=action.payload;
    console.log("LOGIN DATA", data)
    setItem('login',data)
    return {
      userData: data,
    };   

    case type.LOGOUT: {
      removeItem('login').then((res) => {
        console.log('res', res)
      })
      return {
        userData: undefined
      }
    }
    default: return state;
  }
}
export default userStatus;