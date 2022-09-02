# random photo + quote generator

Simple app that generates a random photo and a quote to go with it

# run your own

It's pretty simple to run your own app.

1. Clone the repo
2. Create a src/lib/quotes.ts file and export an array of quotes from it
```ts
// src/lib/quotes.ts
export default [
    "quote 1",
    "quote 2",
];
```
3. Move any images you want to /static/images
4. Run `npm run build` to build the app
5. Deploy to wherever you like (Vercel or Netlify for example)