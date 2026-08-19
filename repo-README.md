# moonline

Five races. One intensement — a re-feel of the forces at play in the universe:
impact, light, heat, current, gravity. The science is the antagonist.

MOONLINE emerges through **The Last Platform**, the fifth world of
[Codified Resonance](https://codifiedresonance.com).

**Enter here → [codifiedresonance.com/last-platform/moonline](https://codifiedresonance.com/last-platform/moonline)**

---

## the worlds

| | world | place | force |
|---|---|---|---|
| 01 | The Crossing | Earth station → the Moon | impact · the long emptiness |
| 02 | Ringfall | Saturn's rings | information · can you see in time |
| 03 | Ironlight | KELT-9b, the hottest known orbit | heat · you cannot dodge it, only budget it |
| 04 | The Behemoth | GJ 436b, an exhaled sky | current · the medium itself moves you |
| 05 | The Well | a spinning supermassive black hole | gravity · the deep line costs you time itself |

## the universe

The game works out the current week for itself and builds every world from it —
no server, nothing published, nothing to maintain. Everyone who opens MOONLINE
in a given week is racing the identical universe, automatically, and every seven
Earth days it becomes a new one. The grid names it: `universe 31786 · this week's`.

A specific universe can be visited directly with `?seed=` — for example
`/crossing/?seed=7F3A`.

## the line

Cross a world and you may leave your line: a recording of exactly how you
crossed — the seed, and your hands tick by tick. It is held on your own device,
yours to keep or to hand to another witness. Nothing is sent anywhere. There is
no account, no ladder, no season.

Because a race is built from its seed and computed at a fixed rate, the same
seed and the same inputs reproduce the same crossing exactly, on any machine.
A line is not believed. It is re-run, and witnessed.

## how it's built

Each world is one HTML file. No build step, no bundler, no framework — open any
of them and read the source. Three.js is the only dependency, loaded from a CDN.
Sound is synthesised in the browser; there are no audio files. All textures are
drawn in code at load.

Deployed with GitHub Pages. Each world is served from its own folder, so the URL
is the world's name.
