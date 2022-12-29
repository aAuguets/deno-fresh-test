import { JSX } from "preact";
import { useState } from "preact/hooks";

export default function RenderIslands(
  props: JSX.HTMLAttributes<HTMLButtonElement>,
) {
  const [islandCounter, setIslandCounter] = useState(0);

  return (
    <div class="flex flex-col py-2">
      <button
        onClick={() => setIslandCounter(islandCounter + 1)}
        {...props}
        class="px-5 py-1 border(purple-100 2) rounded-full  hover:bg-purple-200 w-[fit-content]"
      >
        {`Islands ? ${islandCounter > 7 ? "🎆" : "🏝"}`}
      </button>
      <p class="py-1">{islandCounter ? "🦕" : null}</p>
      <p class="py-1">{"🏝 ".repeat(islandCounter)}</p>
    </div>
  );
}
