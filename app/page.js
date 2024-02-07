import { getBlogs } from "@/sanity/sanity-utils";
import Image from "next/image";
import banner from "./assets/images/banner.svg";
import mobileBanner from './assets/images/mobile-banner.svg'
import Button from "./components/Button";

export default async function Home() {
  const blogs = await getBlogs();
  console.log("blogs: ", blogs);
  return (
    <div>
      <section className="w-full h-auto mt-32  md:flex flex-col md:flex-row hidden">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="flex-2 md:flex-1 h-auto align-middle justify-center my-auto px-4">
          <h1 className=" text-3xl md:text-6xl text-center md:text-left text-gray-500">
            HAVE YOU BEEN SERIOUSLY INJURED?
          </h1>
          <h2 className="text-1xl md:text-4xl text-center md:text-left text-blue-700 font-extrabold">
            WE WANT YOU TO CALL US.
          </h2>
          <Button
            mobile={false}
            classInfo={
              "bg-gold-400 hover:bg-blue-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in font-semibold px-2 text-3xl mt-4  rounded-sm  hover:scale-110"
            }
          />
          <Button
            mobile={true}
            classInfo={
              " bg-gold-400 font-semibold px-6 py-2 text-sm rounded-sm w-1/2 text-black"
            }
          />
        </div>
        <div className="flex-1">
          <Image
            src={banner.src}
            width={600}
            height={600}
            className="h-full "
            alt="benjamin o bengston"
          />
        </div>
      </section>

{/* MOBILE HERO BANNER */}
      <section
        className=" my-auto py-10 px-1 md:pt-24 h-96 flex flex-col mt-20 bg-center bg-cover bg-no-repeat md:invisible"
        style={{
          backgroundImage: `url('${mobileBanner.src}')`, 
        }}
      >
        <div className="flex-2 md:flex-1 h-auto align-middle justify-center my-auto mt-2 px-4 flex flex-col w-5/6">
          <h1 className=" text-3xl md:text-6xl  text-gray-700">
            HAVE YOU BEEN SERIOUSLY INJURED?
          </h1>
          <h2 className="text-1xl md:text-4xl  text-blue-700 font-extrabold my-5">
            WE WANT YOU TO CALL US.
          </h2>
          
          <Button
            mobile={true}
            classInfo={
              " bg-gold-400 font-semibold py-2 text-md rounded-sm w-1/2 mt-3 text-black "
            }
          />
        </div>
      </section>
    </div>
  );
}

{
  /* <div>
{blogs?.map((blog) => (
<div key={blog._id}>{blog.name}</div>
))}
</div>; */
}
