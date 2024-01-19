"use client";
import { SelectDemo } from "@/Components/Client/SelectDemo";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

        <DropdownMenu>
          <DropdownMenuTrigger>Who you are?</DropdownMenuTrigger>

          <DropdownMenuContent>
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem><Link href='/employee'>Employee</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href='/recruiter'>Recruiter</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
