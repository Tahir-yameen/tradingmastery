import GithubSlugger from "github-slugger";

export interface TOCItem {
  text: string;
  id: string;
  level: number;
}

export function extractTOC(
  content: string
): TOCItem[] {
  const slugger = new GithubSlugger();

  const lines = content.split("\n");

  return lines
    .filter(
      (line) =>
        line.startsWith("##") ||
        line.startsWith("###")
    )
    .map((line) => {
      const level = line.startsWith("###")
        ? 3
        : 2;

      const text = line.replace(/^#+\s/, "");

      return {
        text,
        level,
        id: slugger.slug(text),
      };
    });
}
