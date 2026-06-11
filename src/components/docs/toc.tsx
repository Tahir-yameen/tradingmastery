import { TOCItem } from "@/lib/toc";

export default function TOC({
  items,
}: {
  items: TOCItem[];
}) {
  return (
    <aside className="w-72 hidden xl:block">
      <div className="sticky top-20">
        <h4 className="font-semibold mb-4">
          On This Page
        </h4>

        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className={item.level === 3 ? "ml-4" : ""}
            >
              <a
                href={`#${item.id}`}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
