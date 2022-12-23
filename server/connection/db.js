import mongoose from 'mongoose';

const Connection = async (URL) => {
    try {   
        // const URL = `mongodb+srv://${username}:${password}@my-inshort-clone.55twicw.mongodb.net/?retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;