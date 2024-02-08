"use client";
// import React from "react";
import { useState, React } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/main-logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
// import BookButton from "./BookButton";

const NavBar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Practice", href: "/practice" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  console.log(currentPage);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={
                  item.name !== currentPage
                    ? "text-sm font-semibold leading-6 text-black hover:text-gold-500 group transition duration-300"
                    : "text-sm font-semibold leading-6 text-blue-700 hover:text-gold-500 group transition duration-300"
                }
                onClick={(e) => setCurrentPage(e.target.text)}
              >
                {item.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span>
              </Link>
            ))}
            <Button mobile={false} classInfo={'bg-gold-400 hover:bg-blue-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in font-semibold px-2 text-sm rounded-sm  hover:scale-110'}/>
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
      </header>
    </div>
  );
};

export default NavBar;

// 'use client'
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="flex h-16 items-center justify-between">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <img
//                     className="h-8 w-auto"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                     alt="Your Company"
//                   />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
//                     <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
//                       Dashboard
//                     </a>
//                     <a
//                       href="#"
//                       className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     >
//                       Team
//                     </a>
//                     <a
//                       href="#"
//                       className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     >
//                       Projects
//                     </a>
//                     <a
//                       href="#"
//                       className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//                     >
//                       Calendar
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="hidden sm:ml-6 sm:block">
//                 <div className="flex items-center">
//                   <button
//                     type="button"
//                     className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                   >
//                     <span className="absolute -inset-1.5" />
//                     <span className="sr-only">View notifications</span>
//                     <BellIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>

//                   {/* Profile dropdown */}
//                   <Menu as="div" className="relative ml-3">
//                     <div>
//                       <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                         <span className="absolute -inset-1.5" />
//                         <span className="sr-only">Open user menu</span>
//                         <img
//                           className="h-8 w-8 rounded-full"
//                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                           alt=""
//                         />
//                       </Menu.Button>
//                     </div>
//                     <Transition
//                       as={Fragment}
//                       enter="transition ease-out duration-100"
//                       enterFrom="transform opacity-0 scale-95"
//                       enterTo="transform opacity-100 scale-100"
//                       leave="transition ease-in duration-75"
//                       leaveFrom="transform opacity-100 scale-100"
//                       leaveTo="transform opacity-0 scale-95"
//                     >
//                       <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                         <Menu.Item>
//                           {({ active }) => (
//                             <a
//                               href="#"
//                               className={classNames(
//                                 active ? 'bg-gray-100' : '',
//                                 'block px-4 py-2 text-sm text-gray-700'
//                               )}
//                             >
//                               Your Profile
//                             </a>
//                           )}
//                         </Menu.Item>
//                         <Menu.Item>
//                           {({ active }) => (
//                             <a
//                               href="#"
//                               className={classNames(
//                                 active ? 'bg-gray-100' : '',
//                                 'block px-4 py-2 text-sm text-gray-700'
//                               )}
//                             >
//                               Settings
//                             </a>
//                           )}
//                         </Menu.Item>
//                         <Menu.Item>
//                           {({ active }) => (
//                             <a
//                               href="#"
//                               className={classNames(
//                                 active ? 'bg-gray-100' : '',
//                                 'block px-4 py-2 text-sm text-gray-700'
//                               )}
//                             >
//                               Sign out
//                             </a>
//                           )}
//                         </Menu.Item>
//                       </Menu.Items>
//                     </Transition>
//                   </Menu>
//                 </div>
//               </div>
//               <div className="-mr-2 flex sm:hidden">
//                 {/* Mobile menu button */}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
//               >
//                 Dashboard
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//               >
//                 Team
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//               >
//                 Projects
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//               >
//                 Calendar
//               </Disclosure.Button>
//             </div>
//             <div className="border-t border-gray-700 pb-3 pt-4">
//               <div className="flex items-center px-5">
//                 <div className="flex-shrink-0">
//                   <img
//                     className="h-10 w-10 rounded-full"
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     alt=""
//                   />
//                 </div>
//                 <div className="ml-3">
//                   <div className="text-base font-medium text-white">Tom Cook</div>
//                   <div className="text-sm font-medium text-gray-400">tom@example.com</div>
//                 </div>
//                 <button
//                   type="button"
//                   className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>
//               </div>
//               <div className="mt-3 space-y-1 px-2">
//                 <Disclosure.Button
//                   as="a"
//                   href="#"
//                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                 >
//                   Your Profile
//                 </Disclosure.Button>
//                 <Disclosure.Button
//                   as="a"
//                   href="#"
//                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                 >
//                   Settings
//                 </Disclosure.Button>
//                 <Disclosure.Button
//                   as="a"
//                   href="#"
//                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                 >
//                   Sign out
//                 </Disclosure.Button>
//               </div>
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   )
// }
