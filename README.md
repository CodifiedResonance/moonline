# moonline

Five crossings, and the voyage beyond them. One intensement — a re-feel of the forces at play in the universe:
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

Edition I is the proving ground. **Edition II is the voyage**, outward from home in order of
real distance. Its first world is built:

| | world | place | force |
|---|---|---|---|
| II | Metronome | CP 1919 (PSR B1919+21), the first pulsar ever found | rhythm · the beam turns once every 1.3373 s, and acts on *when* |

In Edition II the machine remembers. A knock leaves a **scar** you can see and hear, with a small,
honest effect on how it flies. A hangar crew mends it in real time while you are away: half in twelve
hours, whole in a day, and flying sooner is a request for early release. Each crossing carries
**cargo** that must arrive whole (in Metronome, a clock kept in phase with the beat): exposure wears
it down over time, impact all at once. A line carries the machine's condition at the start, so a
scarred machine re-runs scarred.

**hand the machine on** gives someone your machine, not just your line: every hand's line, and the
condition each began with. Whoever opens it re-runs the whole chain from nothing, hand by hand, then
flies the machine as the last hand left it. No crew works on a machine between hands.

## the universe

The game works out the current week for itself and builds every world from it —
no server, nothing published, nothing to maintain. Everyone who opens MOONLINE
in a given week is crossing the identical universe, automatically, and every seven
Earth days it becomes a new one. The grid names it: `universe 31786 · this week's`.

A specific universe can be visited directly with `?seed=` — for example
`/crossing/?seed=7F3A`.

## playing

Arrows or WASD steer; space holds (each machine's hold is its own); R restarts; M mutes.
A controller works too: left stick steers, A or a trigger holds, Start restarts. On a phone,
drag anywhere to steer and hold the button bottom right.

## the line

Cross a world and you may leave your line: a recording of exactly how you
crossed — the seed, and your hands tick by tick. It is held on your own device,
yours to keep or to hand to another witness. Nothing is sent anywhere. There is
no account, no ladder, no season.

Because a crossing is built from its seed and computed at a fixed rate, the same
seed and the same inputs reproduce the same crossing exactly, on any machine.
A line is not believed. It is re-run, and witnessed.

So that a line re-runs the same in every browser, the simulation does its own sine, cosine and
arctangent (ported from fdlibm, using only arithmetic IEEE-754 defines exactly) rather than the
browser's, which the JavaScript standard allows to differ in the last digits.

Your best crossing of each universe flies with you the next time, as a faint
machine and a thread of light. To hand a line on, use **hand on your line** on
the arrival card: it makes a link carrying the universe, the machine and your
hands. Whoever opens it watches their browser re-run the line from nothing and
show the time it actually gets — then the line flies beside them. If a world's
physics has changed since, the line says it was crossed in an older version of
that world instead of pretending.

**let it travel** films your crossing for sharing: the page re-runs your line and films it
vertically — the fastest stretch, the closest pass, the line and the hand-off — then the universe
speaks, then the world's name and the invitation. Not a screen capture: a line, re-run.

## how it's built

Each world is one HTML file. No build step, no bundler, no framework — open any
of them and read the source. Three.js is the only dependency, loaded from a CDN.
Sound is synthesised in the browser; there are no audio files. All textures are
drawn in code at load.

Deployed with GitHub Pages. Each world is served from its own folder, so the URL
is the world's name.
