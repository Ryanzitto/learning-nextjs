import { getSortedPostsData } from "../../../lib/posts";
import Link from "next/link";
export default async function Posts() {
  const allPost = await getSortedPostsData();
  console.log(allPost);
  return (
    <div className="mt-10 mx-10 md:flex md:justify-evenly md:items-center">
      {allPost.map(({ id, title, date }) => (
        <div>
          <Link href={`/posts/${id}`}>
            {title} - {date}
          </Link>
        </div>
      ))}
    </div>
  );
}
