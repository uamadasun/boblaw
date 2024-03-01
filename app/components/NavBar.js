"use client";
import Link from "next/link";
import Button from "./Button";
// import { Dialog } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logo from "../assets/images/main-logo.png";

import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function NavBar(props) {
  // console.log("Props in NavBar:", props);

  const { allPages } = props;
  // console.log("allPages:", allPages);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  // console.log(currentPage);

  return (
    // <div className="mt-40">
    //   {allPages.pages &&
    //     allPages.pages.map((page) => (
    //       <Link key={page.id} href={`/${page.slug}`}>
    //         {page.title}
    //       </Link>
    //     ))}
    // </div>
    <div>
      <header className="absolute inset-x-0 top-0 z-50 bg-opacity-5 ">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              onClick={() => setCurrentPage("Home")}
            >
              <span className="sr-only">Bob Law</span>
              <Image src={Logo} alt="bob law logo" width={200} height={50} />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className={
                  mobileMenuOpen
                    ? `h-6 w-6 hidden fill-black`
                    : `h-6 w-6 fill-black`
                }
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href={`/`}
              className={
                currentPage !== "Home"
                  ? "text-sm font-semibold leading-6 text-black hover:text-gold-500 group transition duration-300"
                  : "text-sm font-semibold leading-6 text-blue-700 hover:text-gold-500 group transition duration-300"
              }
              onClick={(e) => setCurrentPage("Home")}
            >
              Home
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span>
            </Link>

            {allPages &&
              allPages.pages.map((page) =>
                page.type !== "service" ? (
                  <Link
                    key={page.id}
                    href={`/${page.slug}`}
                    className={
                      page.title !== currentPage
                        ? "text-sm font-semibold leading-6 text-black hover:text-gold-500 group transition duration-300"
                        : "text-sm font-semibold leading-6 text-blue-700 hover:text-gold-500 group transition duration-300"
                    }
                    onClick={(e) => setCurrentPage(e.target.text)}
                  >
                    {page.title}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span>
                  </Link>
                ) : (
                  ""
                )
              )}
            <Button
              mobile={false}
              classInfo={
                "bg-gold-400 hover:bg-blue-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in font-semibold px-2 text-sm rounded-sm  hover:scale-110"
              }
              purpose={"call"}
            />
          </div>
        </nav>

        {/* MOBILE NAV BAR */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-2/5 overflow-y-auto bg-blue-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">bob law firm</span>
                {/* <Image  src={Logo} alt="bob law firm logo" width={200} height={50} /> */}
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white "
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-20 w-6 fill-black" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-black">
                <div className="space-y-2 py-4 text-center">
                  <Link
                    href={`/`}
                    className={
                      currentPage !== "Home"
                        ? "-mx-3 block rounded-lg px-3 py-2 text-center font-semibold leading-7 text-white "
                        : "-mx-3 block rounded-lg px-3 py-2 text-center font-semibold leading-7 text-gold-400  "
                    }
                    onClick={(e) => setCurrentPage("Home")}
                  >
                    Home
                    <span className="block max-w-0 group-hover:max-w-full "></span>
                  </Link>
                  {allPages &&
                    allPages.pages.map((page) =>
                      page.type !== "service" ? (
                        <Link
                          key={page.id}
                          href={`/${page.slug}`}
                          className={
                            page.title !== currentPage
                              ? "-mx-3 block rounded-lg px-3 py-2 text-center font-semibold leading-7 text-white "
                              : "-mx-3 block rounded-lg px-3 py-2 text-center font-semibold leading-7 text-gold-400  "
                          }
                          onClick={(e) => setCurrentPage(e.target.text)}
                        >
                          {page.title}
                          <span className="block max-w-0 group-hover:max-w-full "></span>
                        </Link>
                      ) : (
                        ""
                      )
                    )}
                  <Button
                    mobile={true}
                    classInfo={
                      " bg-gold-400 font-semibold px-8 py-2 mt-4 text-sm rounded-sm w-full text-black"
                    }
                    purpose={"call"}
                  />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
