# Blog Post Template

Copy this folder when creating a new blog post.

1. Rename the copied folder to the final slug, for example `runtime-config-in-nano`.
2. Put post-specific images in the copied folder's `assets/` directory.
3. Update `index.tsx` with the post metadata and content.
4. Export the cover to `public/images/blog/<slug>/cover.png` at `1200x630` for link previews.
5. Import the post in `content/blog/posts.ts` and add it to `blogPosts`.

Keep slugs stable after publishing because external links may point directly to them.
