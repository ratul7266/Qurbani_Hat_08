import React from "react";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-[#052e16] via-[#14532d] to-[#064e3b] text-gray-200">
      <div className="max-w-11/12 mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-4xl font-bold text-emerald-400 mb-4">
            Qurbani Hat
          </h2>

          <p className="text-gray-300 leading-7">
            Trusted online cattle marketplace for safe and reliable Qurbani.
            Find healthy cows, goats, and farms easily from anywhere in
            Bangladesh.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-5 text-emerald-300">About</h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <Link
              href="/"
              className="hover:text-emerald-400 duration-300 transition-all"
            >
              Home
            </Link>
            <Link
              href="/animals"
              className="hover:text-emerald-400 duration-300 transition-all"
            >
              All Animals
            </Link>
            <Link
              href="/about"
              className="hover:text-emerald-400 duration-300 transition-all"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-emerald-400 duration-300 transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-5 text-emerald-300">
            Contact Info
          </h3>

          <div className="flex flex-col gap-4 text-gray-300">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-emerald-400" />
              <p>+880 1234-567890</p>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail className="text-emerald-400 text-xl" />
              <p>support@qurbanihat.com</p>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-emerald-400 mt-1" />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-5 text-emerald-300">
            Follow Us
          </h3>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="bg-emerald-800/70 hover:bg-emerald-500 duration-300 p-3 rounded-full text-xl backdrop-blur-sm"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-emerald-800/70 hover:bg-emerald-500 duration-300 p-3 rounded-full text-xl backdrop-blur-sm"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-emerald-800/70 hover:bg-emerald-500 duration-300 p-3 rounded-full text-xl backdrop-blur-sm"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-emerald-900 py-4 text-center text-gray-200 text-sm">
        © 2026 Qurbani Hat. All rights reserved. Developed & Designed by MD
        RATUL.
      </div>
    </footer>
  );
};

export default Footer;
