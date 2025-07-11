import { Button } from "@/registry/ui/button"
import { StarIcon } from "@heroicons/react/16/solid"

export default function ButtonIcon() {
  return (
    <Button size={"icon-md"}>
      <StarIcon className="size-5" />
    </Button>
  )
}
