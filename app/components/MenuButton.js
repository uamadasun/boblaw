"use client"
import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from './Button';
import Link from 'next/link';
import { Dialog } from "@headlessui/react";


export const MenuButton = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState("Home");


  return (
    <div>
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
                <div className="space-y-2 py-4 ">
                  {navigation.map((item) => (
                    <Link
                      href={item.href}
                      key={item.name}
                      className={
                        item.name !== currentPage
                          ? "-mx-3 block rounded-lg px-3 py-2 text-center font-semibold leading-7 text-white "
                          : "-mx-3 block rounded-lg px-3 py-2 text-center font-semibold leading-7 text-gold-400  "
                      }
                      onClick={(e) => setCurrentPage(e.target.text)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    mobile={true}
                    classInfo={
                      " bg-gold-400 font-semibold px-8 py-2 mt-4 text-sm rounded-sm w-full text-black"
                    }
                  />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
    </div>
  )
}
