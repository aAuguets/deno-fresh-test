import type { HeaderPostType } from "../../../types.d.ts";

export default function HeaderPost({ title, date }: HeaderPostType) {
  return (
    <header class="flex flex-col justify-between text-purple-800 ">
      <h1 class="text-2xl font-bold text-5xl">{title}</h1>
      <time class="text-sm">
        {Intl.DateTimeFormat("en", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(date)}
      </time>
    </header>
  );
}
