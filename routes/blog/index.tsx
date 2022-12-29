import { Handlers, PageProps } from "$fresh/server.ts";
import { listsPosts } from "../../utils/posts.ts";
import { Post } from "../../types.d.ts";
import Header from "../../components/header/Header.tsx";
import PostCard from "../../components/post/postCard/PostCard.tsx";

export const handler: Handlers = {
  async GET(request, context) {
    const posts = await listsPosts();
    return context.render({ posts });
  },
};

export default function Blog(props: PageProps) {
  const { posts } = props?.data;
  return (
    <main>
      <Header active="/blog" />
      <div class="px-8 pt-5">
        <h1 class="text-4xl font-bold text-purple-800 ">Posts!</h1>
        <p>Here you can find my last posts :)</p>
        {posts.map((post: Post) => (
          <PostCard id={post.id} date={post.date} title={post.title} />
        ))}
      </div>
    </main>
  );
}
