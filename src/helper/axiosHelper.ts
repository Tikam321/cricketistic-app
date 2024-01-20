import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

axios.defaults.baseURL = "http://localhost:3000";


axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
// axios.interceptors.request.use((config: InternalAxiosRequestConfig) =>  {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers.Authorization = 'Bearer '+ token;
//     }
//     return config;
// }, (error) => {
//     console.log("there is api error occurring from client interceptor side. " + error);
//     return Promise.reject(error);
// })

// axios.interceptors.response.use((response: AxiosResponse) =>  {
//     return response.data;
// }, (error) => {
//     console.log("there is api error occurring from server side. " + error);
//     return Promise.reject(error);
// })




export const request = (method: string, url: string, data?: object) => axios({method, url, data});




    


