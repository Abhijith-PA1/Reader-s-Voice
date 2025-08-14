import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";

//registerAPI

export const registerAPI = async(user)=>{
    return await commonAPI('POST',`${server_url}/register`,user)
}

//loginAPI

export const loginAPI = async(user)=>{
    return await commonAPI('POST',`${server_url}/login`,user)
}

//addBookAPI

export const addBookAPI = async(books)=>{
    return await commonAPI('POST',`${server_url}/addbook`,books)
}

//getAllBookAPI

export const getAllBookAPI = async()=>{
    return await commonAPI('GET',`${server_url}/getbook`,"")
}

//getBookByIdAPI

export const getBookByIdAPI = async(id)=>{
    return await commonAPI('GET',`${server_url}/getbook/${id}`,"")
}

//getHomeBookAPI

export const getHomeBookAPI = async()=>{
    return await commonAPI('GET',`${server_url}/home/getbook`,"")
}

// addReviewAPI - to add a review (POST)
export const addReviewAPI = async (id, reviewData) => {
  // reviewData should be an object: { review, username, rating }
  return await commonAPI('POST', `${server_url}/getbook/${id}/addreview`, reviewData);
}

// getReviewAPI - to get reviews (GET)
export const getReviewAPI = async (id) => {
  return await commonAPI('GET', `${server_url}/${id}/getreview`, "");
}
