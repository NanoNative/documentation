![Project Logo](public/images/NanoApp.svg)


npm run dev 

## Blog posts

Blog posts live in `content/blog`.

To add a post:

1. Copy `content/blog/_template` to a new folder named after the post slug.
2. Add post images to that folder's `assets` directory.
3. Update the copied `index.tsx` metadata and content.
4. Import the post in `content/blog/posts.ts` and add it to `blogPosts`.

The blog index orders posts by newest date first.
