// components/feed.tsx
import { PostCard } from "./post-card";
import { client } from "@/lib/sanity";

// components/feed.tsx
export async function Feed() {
  const posts = await client.fetch(`*[_type == "post"] | order(_createdAt desc)`);
  
  // This will print the raw data to your VS Code terminal
  //console.log("DATA FROM SANITY:", JSON.stringify(posts, null, 2));

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post: any) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}