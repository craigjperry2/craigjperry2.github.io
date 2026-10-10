# craigjperry.com

Source for <https://www.craigjperry.com>, built with [Hugo](https://gohugo.io/) and
deployed to GitHub Pages.

There are no themes, Node packages or other dependencies: just the single Hugo binary,
a handful of templates in `layouts/` and one stylesheet in `assets/css/`. Photos are
resized at build time by Hugo, so you can upload them straight from a camera or phone;
only slimmed-down WebP copies are published.

Text is set in the system's Helvetica Neue. The one webfont is a Latin subset of
[JetBrains Mono](https://github.com/JetBrains/JetBrainsMono) (`static/fonts/`, ~41 KB, OFL
licence alongside) for code and metadata. To regenerate it from a new release:

```sh
uvx --from 'fonttools[woff]' pyftsubset JetBrainsMono-Regular.ttf --flavor=woff2 \
  --layout-features='*' --output-file=static/fonts/jetbrains-mono.woff2 \
  --unicodes='U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2190-21FF,U+2212,U+2215,U+2500-259F,U+25A0-25FF,U+FEFF,U+FFFD'
```

## Writing

Everything goes through a pull request; `main` can't be pushed to directly. Merging a PR
publishes the site about a minute later.

### A blog post, from the GitHub web UI

1. Go to `content/blog/`, choose **Add file → Create new file** and name it
   `YYYY-MM-DD-short-title.md`. The date and URL come from the filename.
2. Start the file with:

   ```markdown
   ---
   title: My post title
   topic: Programming
   ---

   The post, in Markdown.
   ```

3. **Commit changes… → Create a new branch… → Propose changes**, then open the PR.
   The `build` check catches mistakes such as a missing date; merge when it's green.

To include photos, make the post a folder instead: name the new file
`content/blog/YYYY-MM-DD-short-title/index.md`, then upload the photos into that folder
(**Add file → Upload files** on the same branch) and reference them by name:
`![Alt text](photo.jpg "Optional caption")`.

Add `draft: true` to keep something in `main` without publishing it.

### A project

Projects are folders: `content/projects/YYYY-MM-DD-project-name/index.md`, with photos and
any small files beside it. See `content/projects/example-project/` for a full template.

- **Gallery**: every photo in the folder, shown as thumbnails near the top, in filename
  order. Name them `01-…`, `02-…` to control the order. The first one is the cover photo on
  the home page and project list. Captions are optional, via `resources` in front matter.
- **Inline photos**: `![Alt text](photo.jpg "Optional caption")` anywhere in the text.
- **Links**: a `links:` list of `title` and `url`.
- **Files**: a `files:` list of `title`, `url` and optional `size` (bytes, or text such as
  `"2.4 MB"`). The icon comes from the file extension. A relative `url` (e.g.
  `manual.pdf`) means a file in the project folder, and its size is filled in for you.

### The home page

Edit `content/_index.md`. The latest 7 posts and 3 projects are listed automatically.

## Previewing

`hugo server --buildDrafts` serves the site at <http://localhost:1313> with live reload.
In an Amp orb, `amp orb services ensure` starts the same preview behind a portal URL.

## How it's built and deployed

`.github/workflows/site.yml` builds every pull request with `hugo --gc --minify`, and on
merge to `main` deploys the result with GitHub's official Pages actions. Resized images are
cached between runs.

The Hugo version is pinned in `scripts/install-hugo`, which CI and the orb setup script
(`.agents/setup`) both use. Change it there to upgrade.

One-time repository settings:

- **Settings → Pages → Source: GitHub Actions**, custom domain `www.craigjperry.com`.
- The ruleset in `.github/rulesets/main.json`: changes to `main` need a pull request with a
  passing `build` check; no force pushes or deletion. To re-apply it:
  `gh api repos/craigjperry2/craigjperry2.github.io/rulesets --method POST --input .github/rulesets/main.json`
