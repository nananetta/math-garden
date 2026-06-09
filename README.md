# Math Garden

A simple static math quiz for early years learners. The question bank is separated from the UI so more grades, subjects, and question types can be added later.

## Files

- `index.html` loads the app.
- `questions.js` contains the grade and question data.
- `app.js` controls quiz flow, scoring, feedback, and visual rendering.
- `styles.css` contains the responsive kid-friendly layout.

## Local Preview

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Cloudflare Pages

This app does not need a build step.

- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/`

