This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

> **⚠️ Important:** Make sure you are using node version 20 or higher before starting the project.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Notes
 - I wanted to give a better UX so I went with cursor pagination over offset to improve UX, even though the API wasn’t made for it. I SSRed the page for better SEO and performance. The only downside is the full page reload when hitting the bottom. With more time, I’d append the items to the list as the user scrolls and update the browser URL manually instead of using router.push.
 - 
  
 



