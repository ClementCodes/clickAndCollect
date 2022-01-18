import express from 'express';
import cors from "cors";
import MOngoDbClient from './mongoClient.js';
import Product from "./models/product.js";
import { graphqlHTTP } from "express-graphql";
import schema from './schemas/index.js';


const app = express();
const port = 4000; 
app.use(cors());


//API GraphQl UI pour acceder  à l'Interface 


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));





//Exemple d'API REST


app.get('/products',async (req, res) => {
  const products = await Product.find({})
  try {
    res.send(products)
  } catch (e) {
    res.status(500).send(err)
  }
})
app.get('/products/:category', async (req, res) => {
    const category = req.params.category
    const products = await Product.find({ category : category})
    try {
        res.send(products)
    } catch(e) {
        res.status(500).send(e)
    }
})


app.get('/', (req, res) => {
  res.send(`Hello World!  😈 🧦  ${port}`)
})

app.listen(port, () => {
  console.log(`Example app 😈 🧦  🇸🇧 listening  http://localhost:${port}`)
MOngoDbClient.initialize()
})





//gehheheh
