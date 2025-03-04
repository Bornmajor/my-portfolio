import axios from "axios";

const public_key = 'pub_216549b6eb36cda4c626e35effc7c0c02e50a';

const dummy_key = 'pub_123'
export default axios.create({
    baseURL: `https://newsdata.io/api/1/news?q=software+development&apikey=${public_key}&language=en&category=technology&prioritydomain=top`
})
//pub_216549b6eb36cda4c626e35effc7c0c02e50a