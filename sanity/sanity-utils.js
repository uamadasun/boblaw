import { createClient, groq } from "next-sanity";

//all the functions we will use to grab data
export async function getBlogs() {
  const client = createClient({
    projectId: "p2zi9660",
    dataset: "production",
    apiVersion: "2024-02-02",
  });

  return await client.fetch(
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
  }});
}
// {cache: 'no-store'}