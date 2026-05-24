"use client";

import {
  ArrowRightToSquare,
  PersonPlus,
  ArrowRightFromSquare,
} from "@gravity-ui/icons";

import NavLink from "./NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  const router = useRouter();

  const [profile, setProfile] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedProfile = localStorage.getItem("profile");

      if (savedProfile) {
        setProfile(JSON.parse(savedProfile));
      } else if (session?.user) {
        setProfile({
          name: session.user.name || "",
          image: session.user.image || "",
        });
      }
    }
  }, [session]);

  const handleLogout = async () => {
    await authClient.signOut();

    localStorage.removeItem("profile");

    router.push("/");
    router.refresh();
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-2 md:px-5">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink href="/">Home</NavLink>
              </li>

              <li>
                <NavLink href="/animals">All Animals</NavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 md:gap-2 cursor-pointer"
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl font-black whitespace-nowrap bg-linear-to-r from-green-700 via-emerald-500 to-lime-400 bg-clip-text text-transparent drop-shadow-sm">
              Qurbani Hat
            </h2>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg xl:text-xl font-bold text-green-800 gap-2 items-center">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>

            <li>
              <NavLink href="/animals">All Animals</NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2">
          {isPending ? (
            <span className="loading loading-spinner loading-sm text-green-600"></span>
          ) : session ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  {profile.image ? (
                    <img
                      src={profile.image}
                      alt="profile"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover border-2 border-green-500"
                    />
                  ) : (
                    <div className="bg-linear-to-br from-green-600 to-lime-500 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm">
                      {profile.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 p-2 shadow border border-base-200"
                >
                  <li className="menu-title text-green-700 font-semibold text-sm px-2 py-1">
                    {profile.name}
                  </li>

                  <li className="text-xs text-gray-500 px-2 pb-1">
                    {session.user?.email}
                  </li>

                  <div className="divider my-0"></div>

                  <li>
                    <Link href="/profile">Edit Profile</Link>
                  </li>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-red-600 font-semibold flex items-center gap-2"
                    >
                      <ArrowRightFromSquare size={16} />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
                href="/register"
                className="btn btn-sm md:btn-md border-0 bg-linear-to-r from-green-600 via-emerald-500 to-lime-500 text-white"
              >
                <span className="hidden sm:block">Register</span>
                <PersonPlus size={18} />
              </Link>

              <Link
                href="/login"
                className="btn btn-sm md:btn-md border-0 bg-linear-to-r from-[#14532d] via-[#16a34a] to-[#84cc16] text-white"
              >
                <span className="hidden sm:block">Login</span>
                <ArrowRightToSquare size={18} />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
