import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BlogCard = (props) => {
  const { blog } = props;
  return (
    <div className="border border-gray-300 w-full md:w-fit mx-auto">
      <div className="">
        {" "}
        <Image
          src={blog.image}
          height={50}
          width={50}
          alt={blog.image.alt}
          className="w-full"
        />
      </div>
      <div className="px-3 text-xs mt-3 flex flex-col items-center">
        <Link href={`/blogs/${blog.slug}`}>
          <h2 className="font-bold text-xl hover:text-blue-800">{blog.name}</h2>
        </Link>
        <PortableText value={blog.summary} />
        <Link href={`/blogs/${blog.slug}`}><button
          className="
        hover:bg-blue-600 hover:text-gray-100
             bg-gold-400 text-black text-base px-12 mb-5 font-extrabold rounded-sm mx-auto ease-out transition-all delay-75 hover:ease-in duration-150 hover:scale-125"
        >
          Read
        </button></Link>
      </div>
    </div>
  );
};
