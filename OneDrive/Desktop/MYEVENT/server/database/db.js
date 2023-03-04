import mongoose from "mongoose"


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-keyxq5m-shard-00-00.efqpodz.mongodb.net:27017,ac-keyxq5m-shard-00-01.efqpodz.mongodb.net:27017,ac-keyxq5m-shard-00-02.efqpodz.mongodb.net:27017/CRUD_EVENT?ssl=true&replicaSet=atlas-isbbl0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true });
       console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with database', error);
    }
}

export default Connection;