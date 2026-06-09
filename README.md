# Math Garden

A simple static math quiz for early years learners. The question bank is separated from the UI so more grades, subjects, and question types can be added later.

## Cloudflare Workers

This app deploys as Cloudflare Workers Static Assets and does not need a build step.

Install dependencies:

```bash
npm install
```

Run a local Worker preview:

```bash
npm run dev
```

Deploy to Cloudflare:

```bash
npm run deploy
```

The Worker configuration lives in `wrangler.jsonc`. Static assets are served from `public/`, so only browser files are uploaded to Cloudflare.

## Files

- `public/index.html` loads the app.
- `public/questions.js` contains the grade and question data.
- `public/app.js` controls quiz flow, scoring, feedback, and visual rendering.
- `public/styles.css` contains the responsive kid-friendly layout.
- `wrangler.jsonc` configures Cloudflare Workers Static Assets.

## Local Preview

You can also run the app without Cloudflare locally:

```bash
python3 -m http.server 8080 --directory public
```

Then open:

```text
http://localhost:8080
```
