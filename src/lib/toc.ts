// import GithubSlugger from "github-slugger";

// export interface TOCItem {
//   text: string;
//   id: string;
//   level: number;
// }

// export function extractTOC(
//   content: string
// ): TOCItem[] {
//   const slugger = new GithubSlugger();

//   const lines = content.split("\n");

//   return lines
//     .filter(
//       (line) =>
//         line.startsWith("##") ||
//         line.startsWith("###")
//     )
//     .map((line) => {
//       const level = line.startsWith("###")
//         ? 3
//         : 2;

//       const text = line.replace(/^#+\s/, "");

//       return {
//         text,
//         level,
//         id: slugger.slug(text),
//       };
//     });
// }


// export function extractHeadings(content: string) {
//   const lines = content.split("\n");

//   const headings: {
//     text: string;
//     id: string;
//     level: number;
//   }[] = [];

//   lines.forEach((line) => {
//     const match = /^(##|###)\s+(.*)/.exec(line);

//     if (match) {
//       const level = match[1] === "##" ? 2 : 3;
//       const text = match[2].trim();

//       const id = text
//         .toLowerCase()
//         .replace(/[^\w\s]/g, "")
//         .replace(/\s+/g, "-");

//       headings.push({ text, id, level });
//     }
//   });

//   return headings;
// }

// export function extractHeadings(content: string) {
//   const lines = content.split("\n");

//   const headings: {
//     text: string;
//     id: string;
//     level: number;
//   }[] = [];

//   lines.forEach((line) => {
//     const match = /^(##|###)\s+(.*)/.exec(line);

//     if (match) {
//       const level = match[1] === "##" ? 2 : 3;
//       const text = match[2].trim();

//       const id = text
//         .toLowerCase()
//         .replace(/[^\w\s]/g, "")
//         .replace(/\s+/g, "-");

//       headings.push({ text, id, level });
//     }
//   });

//   return headings;
// }

export function extractHeadings(content: string) {
  const lines = content.split("\n");

  const headings: {
    text: string;
    id: string;
    level: number;
  }[] = [];

  const slugCount: Record<string, number> = {};

  lines.forEach((line) => {
    const match = /^(#{2,4})\s+(.*)/.exec(line);

    if (!match) return;

    const level = match[1].length; // 2, 3, 4
    let text = match[2].trim();

    // ✅ Remove markdown formatting (** ` etc)
    text = text.replace(/[*_`]/g, "");

    // ✅ Generate base slug
    let baseId = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    // ✅ Ensure UNIQUE IDs
    if (slugCount[baseId]) {
      slugCount[baseId]++;
      baseId = `${baseId}-${slugCount[baseId]}`;
    } else {
      slugCount[baseId] = 1;
    }

    headings.push({
      text,
      id: baseId,
      level,
    });
  });

  return headings;
}