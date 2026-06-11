import Link from "next/link";
import { navigation } from "@/config/navigation";

export default function Sidebar() {
  return (
    <aside
      className="
        hidden
        lg:block
        w-72
        border-r
        sticky
        top-16
        h-[calc(100vh-64px)]
        overflow-y-auto
      "
    >
      <div className="p-6">
        <h2 className="font-bold text-xl mb-6">
          Trading Mastery
        </h2>

        {navigation.map((section) => (
          <div key={section.title} className="mb-8">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              {section.title}
            </h3>

            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/docs/${item.slug}`}
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
