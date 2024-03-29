import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

//all the functions we will use to grab data

// GET ALL BLOGS
export async function getBlogs() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"]{
        _id,
        _createdAt,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        url,
        content,
        summary
    }`,
    {
      next: {
        revalidate: 10,
      },
    },
    { cache: "no-store" }
  );
}

// GET A SINGLE BLOG
export async function getBlog(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        url,
        content,
        
    }`,
    { slug },
    {
      next: {
        revalidate: 10,
      },
    },
    { cache: "no-store" }
  );
}

// GET ALL PAGES
export async function getPages() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        'slug': slug.current,
        'image': image.asset->url,
        'shade': shade.asset->url,
        type
    }`,
    {
      next: {
        revalidate: 10,
      },
    },
    { cache: "no-store" }
  );
}

// GET A SINGLE PAGE
export async function getPage(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      'slug': slug.current,
        content
    }`,
    { slug },
  );
}
