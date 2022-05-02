import { SIGNUP, LOGIN } from "../../config/urls";
import { apiPost } from "../../utlis/utlis";
import store from "../store";
import type from "../type";

const { dispatch } = store;


export const logIN = (data) => {
    dispatch({
        type: type.LOGIN,
        payload: data,

    })
}

export function signUp(data) {
    console.log("user data****************", data)
    return apiPost(SIGNUP, data)
}

export const login = (data) => {
    console.log(data, 'the given data')
    
    // return new Promise((resolve, reject) => {
    //     apiPost(LOGIN, data)
    //         .then((res) => {
    //             logIN(res.data)
    //             resolve(res)
    //         })
    //         .catch((error) => {
    //             reject(error);
    //         });
    // });
};

export const Intro = () => {
    dispatch({
        type: type.APP_INTRO,
    })
};

export const Logout = () => {
    dispatch({
        type: type.LOGOUT
    })
}