import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};

// explanation :
// the role of cached is when the users start a connection
// we check if the conn is still available in this case we dont have to make a new connection
// we just return him to the prev conn
// if not we create a new connection to DB
// iif we dont do that the user can spam the multiple connections to DB
// and the server will be fucked :)
