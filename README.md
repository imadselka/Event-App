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

- **UploadThing**

- `npm install uploadthing/tw`
- `npm install uploadthing/react`
- `npm install uploadthing @uploadthing/react`

- **Clerk**

- `npm ìnstall @clerk/nextjs`

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

## 📈 Overall Growth

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1.Clone the repository to your local machine. 2.`npm run dev` To run The Project.
