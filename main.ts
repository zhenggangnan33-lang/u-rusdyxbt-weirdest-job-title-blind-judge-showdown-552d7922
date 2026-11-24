// Entry for "Weirdest Job Title: Blind Judge Showdown" (make.fun).
// Writes one job title, 60 characters or fewer, to the grader output file.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = "Professional Ghostwriter for Ghosts";

// Fail loudly instead of writing an invalid entry: the gate requires
// UTF-8 text of 1 to 60 characters that is not only white space.
if (ENTRY.length < 1 || ENTRY.length > 60 || ENTRY.trim().length === 0) {
  console.error(
    `Invalid entry: must be 1-60 non-blank characters, got ${ENTRY.length} characters.`,
  );
  process.exit(1);
}

const outputPath =
  process.argv[2] ?? process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outputPath}`);
