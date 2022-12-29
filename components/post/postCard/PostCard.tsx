import type { PostCardType } from "../../../types.d.ts";

export default function PostCard({ title, date, id }: PostCardType) {
  return (
    <a href={`/blog/${id}`} class="block">
      <div class="flex content-end justify-between flex-wrap h-[120px] bg-green-200 p-3 my-5 mx-2 rounded-md hover:text-purple-700 hover:bg-green-300">
        <h2 class="text-2xl font-bold ">
          {title}
        </h2>
        <time class="self-end">
          {Intl.DateTimeFormat("es").format(date)}
        </time>
      </div>
    </a>
  );
}
