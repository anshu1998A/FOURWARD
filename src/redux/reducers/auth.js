import { removeItem, saveLogin, setItem } from "../../utlis/utlis";
import type from "../type";
const inititalState = {
  userData: null
}
const userStatus = (state = inititalState, action) => {
  switch (action.type) {


      case type.LOGIN: 
        data=action.payload
        console.log('user login details',data)
        setItem('userLogin',data)
        return {
            userData:data
        }; 

    case type.LOGOUT: {
      removeItem('userLogin').then((res) => {
        console.log('res............', res)
      })
      return {
        userData: null
      }
    }
    default: return state;
  }
}
export default userStatus;