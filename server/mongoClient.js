import mongoose  from "mongoose";
const nameDb = "bddmarketplace"
const db = "marketplace"
const mdp = "JutiliseMongoDb87"
const URI = `mongodb+srv://${nameDb}:${mdp}@cluster0.hvws9.mongodb.net/${db}?retryWrites=true&w=majority`


const MOngoDbClient = {
    initialize: () => {
        try {
            const client = mongoose.connect(URI,
                {
                
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
            client.then(()=>console.log(`connécté à la ${db}`))
        } catch (e) {
            throw Error(e)
        }

    }

}





export default MOngoDbClient;