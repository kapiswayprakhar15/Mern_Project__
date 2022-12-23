import axios from 'axios';

const URL = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@my-inshort-clone.55twicw.mongodb.net/?retryWrites=true&w=majority`; 


export const getNews = async (page, size = 5) => {
    try {
        return await axios.get(`${URL}/news?page=${page}&size=${size}`);
    } catch (error) {
        console.log('error while calling getNews API');
    }
}