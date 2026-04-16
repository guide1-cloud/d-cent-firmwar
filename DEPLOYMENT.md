# Deployment Guide

## What was fixed

This project was converted into a **standard static Vite website** so it can deploy cleanly on **GitHub** and **Vercel**.

The main changes were:

- replaced the framework-specific Vite setup with a standard Vite React configuration;
- added a normal `index.html` entry file;
- added `src/main.tsx` and `src/App.tsx` as the website entrypoint;
- added `vercel.json` so Vercel uses the `dist` output folder;
- refreshed the lockfile so installs are in sync again.

## GitHub upload

1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Commit and push to the repository.

## Vercel deploy

1. Import the GitHub repository into Vercel.
2. Vercel should detect it as a **Vite** project.
3. Build command: `npm run build`
4. Output directory: `dist`

These values are already defined in `vercel.json`.

## Local run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production build was tested successfully in the sandbox.
