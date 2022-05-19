import { GET_COMMENT, GET_POST, LIKE_POST, POST_COMMENT, UPLOAD_IMAGE, UPLOAD_POST } from "../../config/urls";
import { apiGet, apiPost } from "../../utlis/utlis";

export const addImage = (data, header) => {
  console.log("the image*************************", data);
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

export const addpost = (data, header) => {
  console.log("tdgcfyfgyrgdfvgfdvct*****************************************", data);
  return new Promise((resolve, reject) => {
    apiPost(UPLOAD_POST, data, header)
      .then((res) => {
        console.log("tdgcfyfg", res);
        resolve(res);
      })
      .catch((error) => {
        console.log("hdfddfv%%%%%%%%%%", error);
        reject(error);
      });
  });
  // return apiPost(UPLOAD_POST,data,header)
}


export const getPost = (query = '') => {
  return apiGet(GET_POST + query)
}
export const getLike = (query = "", header = {}) => {
  console.log(query)
  return apiPost(LIKE_POST + query)
}
export const getComment = (query = '') => {
  return apiGet(GET_COMMENT + query)
}

export const addComment = (query = '') => {
  return apiPost(POST_COMMENT + query)
}