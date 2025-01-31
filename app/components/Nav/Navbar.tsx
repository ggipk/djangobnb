import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchFilters from "@/app/components/Nav/SearchFilters";
import UserNav from "@/app/components/Nav/UserNav";
import AddPropertyButton from "@/app/components/Nav/AddPropertyButton";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/public">
            <Image src="/logo.png" alt="logo" width={180} height={38} />
          </Link>

          <div className="flex space-6 ">
            <SearchFilters />
          </div>
          <div className="flex items-center space-x-6">
            <AddPropertyButton />

            <UserNav />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
