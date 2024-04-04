
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const page = await getPage(params.slug);
  console.log(page)

  const components = {
    types: {
      header: ({value}) => <h2>{value.text}</h2>,
      headerTwo: ({value}) => <h3>{value.text}</h3>
    }
  }

  return (
    <div className="mt-40">
      <Image src={page.image} alt={page.title}/>
      <h1>{page.title}</h1>

      <div className="text-large text-gray-400">
              <PortableText value={page.content} components={components}/>
      </div>
    </div>
  );
}


