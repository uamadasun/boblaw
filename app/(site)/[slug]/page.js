import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Page({ params }) {
  const page = await getPage(params.slug);
  console.log("my page, my page:", page)

  return (
    <div className="mt-40">
      <h1>{page.title}</h1>
      <div className="text-large text-gray-400">
        
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
