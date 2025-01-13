import { MongoClient } from "mongodb";

const clientPromise = () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  const option = {};

  if (!MONGODB_URI) {
    throw new Error('Invalid/Missing envirnment variable "MONGODB_URI"');
  }

  const client = new MongoClient(MONGODB_URI, option);
  return client.connect();
};

export default clientPromise;
