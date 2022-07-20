import Head from "next/head";
import { getAllPosts, getPostBySlug, markdownToHtml } from "../../lib/api";

import config from "../../config.json";

function Post({ post }) {
  return (
    <main className="p-4 markdown-body">
      <Head>
        <title>
          {post.title} | {config.name}
        </title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ["title", "date", "slug", "content"]);
  const content = await markdownToHtml(post.content);
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;