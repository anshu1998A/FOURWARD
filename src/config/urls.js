export const API_BASE_URL = "http://192.168.100.101:8002/api";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const SIGNUP = getApiUrl('/signup');
export const LOGIN = getApiUrl('/userlogin');
export const CHANGE_PASSWORD = getApiUrl('/change_password');
export const VERIFY_OTP = getApiUrl('/verify_otp');
export const EDIT_DETAILS = getApiUrl('/edit_profile');
export const UPLOAD_IMAGE= getApiUrl('/img_upload');
export const UPLOAD_POST = getApiUrl('/post_send');
export const GET_POST = getApiUrl('/posts');
export const LIKE_POST = getApiUrl('/like-post');
export const GET_COMMENT = getApiUrl('/comment-get');
export const POST_COMMENT = getApiUrl('/comment-post')
