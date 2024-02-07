import { getBlogs } from "@/sanity/sanity-utils";
import Link from "next/link";
import React from "react";

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <div className="mt-40 flex flex-col">
      {blogs?.map((blog) => (
        <Link key={blog._id} href={`/blogs/${blog.slug}`}>{blog.name}</Link>
      ))}
    </div>
  );
}
