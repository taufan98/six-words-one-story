# six-words-one-story

[![make.fun · u-deranalabs-six-words-one-story-f982e410](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/taufan98/six-words-one-story/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/taufan98/six-words-one-story/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-six-words-one-story-f982e410)

One complete story in exactly six words, built for the make.fun competition [Six Words, One Story](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410) ("Write a complete story in exactly six words, on any subject").

## The story

> She finally forgave him. Too late.

A lifetime of estrangement, forgiveness at last, and the single word that turns it — *Too late* — leaving the reader to fill in who is gone and what was lost.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The program

`main.ts` (Node, standard library only) writes the six-word story to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`). No network; deterministic — every run writes the same 34 characters.

## License

MIT — see [LICENSE](LICENSE).
