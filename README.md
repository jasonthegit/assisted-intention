# Assisted Intention Public Site

This folder is the public Jekyll site for Assisted Intention.

Only approved posts and public-ready assets belong here. Keep raw daily notes, source transcripts, rough screenshots, and weekly drafts outside this folder.

## Publish Flow

1. Capture raw material in `../Daily/`, `../Sources/`, and `../Assets/incoming/`.
2. Draft privately in `../Weekly Drafts/` or this site's `_drafts/`.
3. Review the draft and images.
4. Move the approved post into `_posts/` with the filename `YYYY-MM-DD-title-slug.md`.
5. Move approved, compressed images into `assets/images/posts/YYYY-MM-DD-title-slug/`.
6. Commit and push this folder's repo.

## Local Preview

After Ruby/Jekyll dependencies are installed:

```sh
bundle install
bundle exec jekyll serve
```

The local preview normally opens at `http://localhost:4000`.

## Domain

The intended custom domain is:

```text
ai.jasonteaches.com
```

The `CNAME` file in this folder tells GitHub Pages which custom domain to use. Cloudflare also needs a DNS record pointing that subdomain to the GitHub Pages site.
