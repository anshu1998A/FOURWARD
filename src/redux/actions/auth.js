import { EDIT_DETAILS, LOGIN, SIGNUP, UPLOAD_IMAGE } from "../../config/urls";
import { apiPost } from "../../utlis/utlis";
import store from "../store";
import type from "../type";

const { dispatch } = store;


export const logIn = (data) => {
    console.log('userdata----', data);
    dispatch({
        type: type.LOGIN,
        payload: data,
      });
}


export const saveUserData = (data) => {
    console.log("calledd>>>" ,data)
   dispatch({
     type: type.LOGIN,
     payload: data,
   });
 };

export function signUp(data) {
    console.log("user data****************", data)
    return apiPost(SIGNUP, data)
}



export const Intro = (data) => {
    console.log("data>>>>>>>>>>>>>>>>>>", data)
    dispatch({
        type: type.INTRO,
        payload: data,
    })
};

export const Logout = () => {
    dispatch({
        type: type.LOGOUT
    })
}

export const login = (data) => {
    console.log(data, 'the given data')
    return new Promise((resolve, reject) => {
      apiPost(LOGIN, data)
        .then((res) => {
          saveUserData(res.data)
          resolve(res)
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

export const editDetails = (data) => {
  console.log(data, 'the given data');
  return new Promise((resolve, reject) => {
    apiPost(EDIT_DETAILS, data)
      .then((res) => {
        saveUserData(res.data);
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const addPost =(data, header={} ) =>{
  console.log( "the image*************************", data);
  return new Promise((resolve, reject) => {
    apiPost(UPLOAD_IMAGE, data, header)
      .then((res) => {
        console.log("tdgcfyfgyrgdfvgfdvct*****************************************",res);
        resolve(res);
  })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}