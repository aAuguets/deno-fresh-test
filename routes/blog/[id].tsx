import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../../components/header/Header.tsx";
import ContentPost from "../../components/post/contentPost/ContentPost.tsx";
import HeaderPost from "../../components/post/headerPost/HeaderPost.tsx";

import { loadPost } from "../../utils/posts.ts";

export const handler: Handlers = {
  async GET(request, context) {
    const { id } = context.params;
    const post = await loadPost(id);
    return context.render({ post });
  },
};

export default function PagePost(props: PageProps) {
  const { post } = props?.data || {};
  return (
    <div>
      <Header active={`/blog/${post.id}`} />
      <article class="p-3 pl-20 pr-20">
        <HeaderPost title={post.title} date={post.date} />
        <ContentPost body={post.body} />
      </article>
    </div>
  );
}
