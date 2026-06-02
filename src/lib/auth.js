import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.AUTH_DB_URI);
console.log("Mongo URI exists:", !!process.env.AUTH_DB_URI);

await client.connect();

const db = client.db();

export const auth = betterAuth({
  trustedOrigins: [process.env.NEXT_PUBLIC_BETTER_AUTH_URL],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  database: mongodbAdapter(db, { client }),
});