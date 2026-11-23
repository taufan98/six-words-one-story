// Six Words, One Story — make.fun entry (program/v1).
// Writes one complete six-word story to /output/entry.txt.
//
// The story: "She finally forgave him. Too late."
// Six words, one lifetime: a long estrangement, forgiveness at last,
// and the single word that turns it — "Too late" — leaving the reader
// to fill in who is gone and what was lost.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "She finally forgave him. Too late.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, STORY, "utf8");
console.log(`Wrote ${STORY.length} characters to ${outPath}`);
