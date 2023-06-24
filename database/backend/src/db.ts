import { Quote } from "../app/models/Quote";

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rhaera:29-01-20@quotes.7nicrrh.mongodb.net/?retryWrites=true&w=majority";
const clientDb = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const saveQ = async (quote: Quote) => {
  try {
    await clientDb.connect();
    const collection = clientDb.db("Quotes")
                                .collection("inspirational_quotes");
    await collection.insertOne(quote);
  } catch (error: unknown) {
    console.error(error);
  } finally {
    await clientDb.close();
  }
}
export default saveQ
