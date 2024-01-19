"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const router = useRouter();

  return (
    <nav className="container flex justify-between items-center py-4 mx-auto ">
      <div>
        <h3 className="text-2xl font-medium text-blue-500">LOGO</h3>
      </div>
      <div className="flex space-x-8">
        <Link href="/" passHref>
          <div
            className={`text-sm font-medium ${
              router.pathname === "/"
                ? "border-b-2 border-blue-600"
                : "text-gray-700"
            }`}
          >
            Home
          </div>
        </Link>
        <Link href="/about" passHref>
        <div
            className={`text-sm font-medium ${
              router.pathname === "/about"
                ? "border-b-2 border-blue-600"
                : "text-gray-700"
            }`}
          >
            About
          </div>
        </Link>
        <Link href="/signup" passHref>
        <div
            className={`text-sm font-medium ${
              router.pathname === "/signup"
                ? "border-b-2 border-blue-600"
                : "text-gray-700"
            }`}
          >
            Sign Up
          </div>
        </Link>
        <Link href="/login" passHref>
        <div
            className={`text-sm font-medium ${
              router.pathname === "/Login"
                ? "border-b-2 border-blue-600"
                : "text-gray-700"
            }`}
          >
            Login
          </div>
        </Link>
      </div>
    </nav>
  );
}