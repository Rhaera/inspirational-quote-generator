import { Quote } from "../models/Quote";

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rhaera:29-01-20@quotes.7nicrrh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const QuoteDb = async (quote: Quote) => {
  try {
    await client.connect();
    const collection = client.db("Quotes")
                              .collection("inspirational_quotes");
    await collection.insertOne(quote);
  } catch (error: unknown) {
    console.error(error);
  } finally {
    await client.close();
  }
}

export default QuoteDb
