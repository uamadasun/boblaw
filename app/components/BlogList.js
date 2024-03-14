"use client";
import Link from "next/link";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import { BlogCard } from "./BlogCard";

export const BlogList = (props) => {
  const { blogs } = props;
  console.log(blogs)
  return (
    <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-3 grid-rows-1 px-8">
      {blogs?.map((blog) => (
        <BlogCard key={blog._id} blog={blog}/>
        
      ))}
    </div>
  );
};

{/* <Link key={blog._id} href={`/blogs/${blog.slug}`}>
          <BlogCard blog={blog} />
        </Link> */}
