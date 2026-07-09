import { Db, MongoClient, ObjectId } from 'mongodb';
import { Product } from '../models/Product';

const uri = 'mongodb://localhost:27017';
const databaseName = 'loja';
const collectionName = 'produtos';

let db: Db;

async function connect(): Promise<Db> {
  if (db) {
    return db;
  }

  const client = new MongoClient(uri);

  await client.connect();

  db = client.db(databaseName);

  console.log('MongoDB conectado.');

  return db;
}

export async function findAll(): Promise<Product[]> {
  const database = await connect();

  return database
    .collection<Product>(collectionName)
    .find()
    .toArray();
}

export async function insert(product: Product) {
  const database = await connect();

  return database
    .collection<Product>(collectionName)
    .insertOne(product);
}

export async function deleteOne(id: string) {
  const database = await connect();

  return database
    .collection<Product>(collectionName)
    .deleteOne({ _id: new ObjectId(id) });
}