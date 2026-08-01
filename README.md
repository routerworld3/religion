# Hindu Philosophy and Traditions — GitHub Pages Site

This repository contains a Jekyll-compatible GitHub Pages website built from a collection of Markdown articles.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders from this package to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save the setting.

The website will be available at:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

For a repository named `YOUR-USERNAME.github.io`, the address will instead be:

```text
https://YOUR-USERNAME.github.io/
```

## Local preview

Ruby and Bundler are required.

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000`.

## Site structure

- `index.md` — website home page and navigation
- `_config.yml` — GitHub Pages/Jekyll configuration
- `_layouts/default.html` — shared page layout and Mermaid support
- `assets/css/style.css` — responsive site styling
- Remaining `.md` files — content pages

## Adding another article

1. Create a lowercase, hyphenated filename such as `new-topic.md`.
2. Add this front matter at the top:

```yaml
---
layout: default
title: New Topic
description: A short summary of the article.
---
```

3. Add a link to the new page in `index.md`:

```liquid
<a href="{{ '/new-topic/' | relative_url }}">New Topic</a>
```
