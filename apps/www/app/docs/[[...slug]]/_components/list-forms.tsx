import { allDocs } from "@/.contentlayer/generated"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ListFormsProps {
  slug?: string[]
}

export default function ListForms({ slug }: ListFormsProps) {
  return (
    <ul className="flex flex-col gap-2">
      {allDocs
        .filter((doc) => doc.catetory === "form")
        .map((item) => {
          const isActive = (slug ? slug.join("/") : "") === item.slug
          return (
            <li key={item._id}>
              <Link
                href={`/docs/${item.slug}`}
                className={cn(
                  "w-max text-sm transition-colors",
                  isActive
                    ? "font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
    </ul>
  )
}
