import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB_NAME || "delv_contacts";

let client: MongoClient;
let db: Db;

export async function connectToDatabase() {
  if (client && db) {
    return { client, db };
  }

  try {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);

    console.log("Connected to MongoDB");
    return { client, db };
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
}

export async function getContactsCollection() {
  const { db } = await connectToDatabase();
  return db.collection("contacts");
}
