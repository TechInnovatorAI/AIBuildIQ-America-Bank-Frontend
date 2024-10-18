import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
// import { Input } from "../ui/input";
import Logo from "@/public/assets/Logo.jpg";
import BackgroundImage from "@/public/assets/header.jpg";

const Navbar = () => {
  return (
    <nav className="flex flex-col">
      {/* First row */}
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Logo" height={30} width={100} />
        </Link>
        
        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          {/* <Button variant="outline">Login</Button>
          <Button variant="outline">Location</Button> */}
          <Link href="/login" className="hover:text-blue-500 hover:underline">Log in</Link>
          <Link href="/location" className="hover:text-blue-500 hover:underline">Location</Link>

          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Language</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <Input type="search" placeholder="Search..." className="max-w-sm" /> */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>About</DropdownMenuItem>
              <DropdownMenuItem>Services</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
