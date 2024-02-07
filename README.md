# Evently

Evently is a platform for events management.

## Requirements

**Create a nextjs app if you have not use this CLI**

- `npx create-next-app@latest my-app --typescript --tailwind --eslint`

  **Then download this packages you need them**

- **Shadcn**

- `npm install shadcn`
- `npx shadcn-ui@latest add sheet`
- `npx shadcn-ui@latest init`
- `npx shadcn-ui@latest add button`
- `npx shadcn-ui@latest add sheet`
- `npx shadcn-ui@latest add separator`
- `npx shadcn-ui@latest add form`
- `npx shadcn-ui@latest add input`

- **UploadThing**

- `npm install uploadthing/tw`
- `npm install uploadthing/react`
- `npm install uploadthing @uploadthing/react`

- **Clerk**

- `npm ìnstall @clerk/nextjs`

- **Svix**
- `npm install svix`

- **MongoDB**
- `npm install mongoose mongodb `

- **Query String**
- `npm install query-string`

## 📚 What I Learned

- `usePathname Hook`

```TS
'use client'

import { usePathname } from 'next/navigation'

export default function ExampleClientComponent() {
  const pathname = usePathname()
  return <p>Current pathname: {pathname}</p>
}

```

- `Cached Data`

- explanation :
- the role of cached is when the users start a connection
- we check if the conn is still available in this case we dont have to make a new connection
- we just return him the current connection
- if not we create a new connection to DB
- if we dont do that the user can spam the multiple connections to DB
- and the server will be fucked :D

**CODE**

```TS
import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabse = async () => {
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
```

- `CRUD Operations`

## 📈 Overall Growth

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1.Clone the repository to your local machine. <br/>
2.Run `npm run dev` To run The Project.
