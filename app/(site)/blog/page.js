import { BlogBanner } from "@/app/components/BlogBanner";
import { BlogList } from "@/app/components/BlogList";
import { getBlogs } from "@/sanity/sanity-utils";
import Link from "next/link";
import React from "react";
import banner from "../../assets/images/blog-banner.svg";

export default async function Blogs() {
  const blogs = await getBlogs();
  return (

    <div className="mt-20 flex flex-col">
      <BlogBanner />

      <BlogList blogs={blogs} />
    </div>
  );
}
