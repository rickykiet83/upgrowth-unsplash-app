Upgrowth Coding Assignment:

- Using the Unsplash API described here - https://unsplash.com/documentation#search-photos - create a micro app that allows a user to search for a tag and show the matching photos.
- The request will need an API key, documented here - https://unsplash.com/documentation#public-actions
- The app should be written in react, and it should be styled to be visually pleasing

## Tech stack

- [React][react]
- [Next.js][nextjs]
- UI modules:
  - [Bootstrap][bootstrap]

[react]: https://reactjs.org/
[nextjs]: https://nextjs.org/
[bootstrap]: https://getbootstrap.com/

## Setting up development environment 🛠

- `git clone https://github.com/rickykiet83/upgrowth-unsplash-app.git`
- `cd upgrowth-unsplash-app`

- Open `.env.template` and change the value of `NEXT_PUBLIC_UNSPLASH_API_KEY`
- Create a new file `.env.local` and copy content from `.env.template`
- `npm i`
- `npm run dev`
