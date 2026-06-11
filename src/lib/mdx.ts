import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_PATH = path.join(process.cwd(), "src", "content");

export function getAllDocs() {
  const folders = fs.readdirSync(CONTENT_PATH);

  return folders.map((folder) => {
    const filePath = path.join(
      CONTENT_PATH,
      folder,
      "page.mdx"
    );

    const source = fs.readFileSync(filePath, "utf8");

    const { data } = matter(source);

    return {
      slug: folder,
      ...data,
    };
  });
}

export function getDocBySlug(slug: string) {
  const filePath = path.join(
    CONTENT_PATH,
    slug,
    "page.mdx"
  );

  const source = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(source);

  return {
    content,
    frontmatter: data,
  };
}
