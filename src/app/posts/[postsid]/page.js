import Link from "next/link";
import { getPostData, getSortedPostsData } from "../../../../lib/posts";

export default async function Post({ params: { postsid } }) {
  const post = await getPostData(postsid);
  return (
    <div className="mt-10">
      <h2>
        <Link href="/posts">HOME</Link>
      </h2>
      <h1>{post.title}</h1>
      <h2>{post.date}</h2>
      <div
        className="mt-10"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}
//Creio que a função abaixo seja referente as mudanças no next que causaram estranheza na comunidade
export async function generateStaticParams() {
  const posts = await getSortedPostsData();

  return posts.map((post) => ({
    postsid: post.id,
  }));
}
