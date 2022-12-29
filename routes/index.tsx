import Header from "../components/header/Header.tsx";
import { PageProps } from "$fresh/server.ts";
import RenderIslands from "../islands/RenderIslands.tsx";

export default function Home() {
  return (
    <main>
      <Header active="/" />
      <div class="px-8 pt-5">
        <h1 class="text-4xl font-bold text-purple-800 ">Welcome to aah!</h1>
        <div class="py-3">
          <h2 class="text-lg hover:text-purple-800">Testing deno fresh 🍋</h2>
        </div>
        <div class="py-3">
          <p>This is a deno-fresh island test:</p>
          <RenderIslands />
        </div>
      </div>
    </main>
  );
}
