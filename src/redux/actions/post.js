import { GET_POST, UPLOAD_IMAGE, UPLOAD_POST } from "../../config/urls";
import { apiGet, apiPost } from "../../utlis/utlis";

export const addImage =(data, header ) =>{
  console.log( "the image*************************", data);
  return apiPost(UPLOAD_IMAGE, data, header);
    // return new Promise((resolve, reject) => {
      //   apiPost(UPLOAD_IMAGE, data, header)
      //     .then((res) => {
      //       console.log("profile Image==========",res);
      //       resolve(res);
      // })
      //     .catch((error) => {
      //       console.log(error);
      //       reject(error);
      //     });
      // });
  }

  export const addpost = (data, header) =>{
    console.log("tdgcfyfgyrgdfvgfdvct*****************************************",data);
    return new Promise((resolve, reject) => {
      apiPost(UPLOAD_POST, data, header)
      .then((res) => {
          console.log("tdgcfyfg",res);
          resolve(res);
    })
        .catch((error) => {
          console.log("hdfddfv%%%%%%%%%%",error);
          reject(error);
        });
    }); 
    // return apiPost(UPLOAD_POST,data,header)
  }


  export const getPost = (query='') =>{
    return apiGet(GET_POST+query)
  }