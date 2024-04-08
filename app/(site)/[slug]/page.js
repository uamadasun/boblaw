import { PageBanner } from "@/app/components/PageBanner";
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
// import config from 'sanity/config/client-config.js'

export default async function Page({ params }) {
  const page = await getPage(params.slug);
  console.log(page);

  const components = {
    types: {
      header: ({ value }) => <h2 className="text-center -mb-4 text-xl font-black leading-5 mt-8">{value.text}</h2>,
      headerTwo: ({ value }) => <h3 className="text-center text-sm italic">{value.text}</h3>,
    },
  };

  return (
    <div className="mt-24 text-9xl">
      <PageBanner page={page} />

        <div className=" text-black w-5/6 mx-auto">
          <PortableText value={page.content} components={components} />
        </div>
    </div>
  );
}
