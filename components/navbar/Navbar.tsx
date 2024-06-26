"use client";

import Image from "next/image";
import Links from "./links/Links";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);

  const handleClick = () => {
    setopenMenu(!openMenu);
  };
  // backdrop-filter bg-opacity-30 backdrop-blur-lg border-b border border-gray-200
  return (
    <div className="w-full text-color-black-grey fixed bg-color-white-smoke shadow-xl z-50 backdrop-filter backdrop-blur-lg">
      <div className="flex items-center justify-between h-full w-full px-4 md:px-14">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/sklogo.png"
              alt="SK Lumbia Logo"
              width={100}
              height={100}
            />
            <div className="">
              <h1 className="font-bold text-sm md:text-lg">
                SANGUNIANG KABATAAN
              </h1>
              <h1 className="font-semibold text-xs md:text-base">
                Barangay Lumbia
              </h1>
            </div>
          </Link>
        </motion.div>
        <nav className="hidden lg:flex text-base z-50">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <Links />
          </motion.div>
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <Link
              href="https://www.facebook.com/skbrgylumbia"
              className="ml-14 bg-color-blue text-color-white-smoke px-3 py-2 rounded-sm transition-all ease-in-out hover:bg-white hover:text-color-black-grey hover:shadow-2xl"
            >
              Get In Touch
            </Link>
          </motion.div>
        </nav>
        <motion.div
          className="lg:hidden z-50"
          onClick={handleClick}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <MdMenu size={30} />
        </motion.div>
      </div>
      <div
        className={
          openMenu
            ? "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-50"
            : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div className="" onClick={handleClick}>
            <MdClose size={30} />
          </div>
        </div>
        <div className="flex flex-col py-14 items-center justify-center ">
          <ul>
            <Link href="/">
              <li onClick={() => setopenMenu(false)} className="py-5">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li onClick={() => setopenMenu(false)} className="py-5">
                About
              </li>
            </Link>
            <Link href="/members">
              <li onClick={() => setopenMenu(false)} className="py-5">
                Members
              </li>
            </Link>
            <Link href="https://www.facebook.com/skbrgylumbia">
              <li
                onClick={() => setopenMenu(false)}
                className="mt-5 bg-color-blue text-color-white-smoke px-3 py-2 rounded-sm"
              >
                Get In Touch
              </li>
            </Link>
          </ul>
        </div>
        <Link href="https://www.facebook.com/skbrgylumbia">
          <div className="flex justify-center pt-10 items-center">
            <BsFacebook size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
