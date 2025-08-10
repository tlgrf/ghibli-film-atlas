# Reflection

## Project Overview

This project is my React + Vite app. I pull Studio Ghibli film data from a public API and show it in different pages (search, detail, favourites, insights). I also try a small “extra” data step: scanning film descriptions for simple motifs and calculating average runtimes.

## What Went Well

- Fixing the initial dependency issues early made everything smoother later.
- Splitting code into pages + small utility files kept things understandable.
- Adding a FilmCard component and shared status blocks stopped a lot of copy/paste.
- The colour palette using CSS variables + Tailwind was fun to integrate.
- The motif + stats utilities made the app feel more than “just a list”.
- Simple in-memory caching made back navigation feel faster.
- Early tests (just utilities) reassured me those functions work.

## Challenges

- Wrong Tailwind plugin at the start broke install; fixing that taught me to read errors fully.
- Site looked plain until I committed to a palette and consistent spacing.
- Remembering to handle loading, error, and empty states everywhere was repetitive until I extracted components.
- Motif detection is super basic; balancing “good enough” vs “perfect” was tricky.
- ESLint config differences (v9 vs older) confused me; I learned to match plugin versions.
- I kept re-fetching films on navigation, so I added a quick Map cache.

## Key Learnings

- Add one small improvement at a time; it compounds.
- Reusable pieces (cards, status UI) cut down bugs and speed up changes.
- Theme tokens (CSS vars) + Tailwind is a nice balance of flexibility and speed.
- Tooling versions matter: mismatched ESLint + plugins waste time.
- A tiny cache can noticeably improve UX without a big library.

## Next Steps / Roadmap

1. Dark mode toggle saved to localStorage.
2. Add a few component tests (search filtering + favourite toggle + error retry).
3. Simple bar chart for motif counts.
4. Deploy and record performance / bundle size.
5. Error boundary for crashes.
6. Maybe offline support later.
7. Use more endpoints (people / locations) and link them.

## Risks / Trade-offs

- Motif matching is simplistic; could mislabel things.
- Cache is memory-only; reload loses it.
- If I want to grow the app a lot I might want a state library or a data fetching helper.

## Personal Takeaways

Doing small improvements step by step made this less stressful. Making reusable parts early saved time later. Even a simple analytical feature (motifs + averages) adds interest to a basic list app. Accessibility should start early, not at the end, also decided that I will deal with CSS at the end, just so I don't get lost in trying to make my app look perfect.

---

Prepared: August 9th 2025.
