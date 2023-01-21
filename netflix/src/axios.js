import axios from "axios";

const config = { headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "text/plain", }, }; 
const instance = axios.create({ baseURL: "https://api.themoviedb.org/3", https: config, });

export default instance;



// "https://api.themoviedb.org/3/trending/all/week?api_key=2920b3f046a2cd6a39d8e3e3130d5d31&language=en-US"
