import type { ContentPostType } from "../../../types.d.ts";
import { CSS } from "https://deno.land/x/gfm@0.1.26/mod.ts";

export default function ContentPost({ body }: ContentPostType) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div
        class="markdown-body pt-5 "
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </>
  );
}
