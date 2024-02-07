import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config"

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
        content
    }`
  , {next: {
    revalidate:60,
  }}, {cache: 'no-store'});
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
        content
    }`, {slug})
}

