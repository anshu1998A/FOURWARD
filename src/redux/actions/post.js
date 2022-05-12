import { UPLOAD_IMAGE, UPLOAD_POST } from "../../config/urls";
import { apiPost } from "../../utlis/utlis";

export const addImage =(data, header ) =>{
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

  export const addpost = (data, header={}) =>{
      apiPost(UPLOAD_POST, data)
  }