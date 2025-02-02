"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SignedIn, useAuth, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const { userId } = useAuth();

  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    if (searchTerm.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchTerm)}`);
    }
  };
  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`bg-[#0D0D0DF2] text-[#FFF] pt-[25px] font-inter fixed top-0 left-0 right-0 z-30 lg:relative`}
    >
      <div className="max-w-[1320px] px-[20px] sm:px-[60px] h-[90px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="w-[110px] h-[20px]">
          <img
            src="/logo.png"
            className="w-[100%] h-[100%] object-center object-contain"
            alt=""
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex flex-col lg:flex-row items-center gap-[20px] w-full lg:w-auto ${
            isMenuOpen ? "flex" : "hidden"
          } lg:static fixed top-[90px] left-0 bg-[#0D0D0DF2] lg:bg-transparent px-[20px] lg:px-0 z-20`}
        >
          <ul className="flex flex-col lg:flex-row gap-[20px] lg:gap-[25px] xl:gap-[40px]">
            <li className="hover:text-[#FF9F0D]">
              <Link href="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="hover:text-[#FF9F0D]">
              <Link href="/shop" onClick={closeMobileMenu}>
                Our Shop
              </Link>
            </li>
            <li className="hover:text-[#FF9F0D]">
              <Link href="/chef" onClick={closeMobileMenu}>
                Our Chefs
              </Link>
            </li>
            <li className="hover:text-[#FF9F0D]">
              <Link href="/menu" onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
            {/* <li className="hover:text-[#FF9F0D]">
              <Link href="/faq">FAQs</Link>
            </li> */}
            <li className="hover:text-[#FF9F0D]">
              <Link href="/aboutus" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            {userId ? null : ( // If the user is signed in
              // If the user is signed out
              <li ref={dropdownRef} className="relative hover:text-[#FF9F0D]">
                {/* Dropdown Button */}
                <button
                  className="flex items-center gap-1"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Login <i className="bi bi-chevron-down"></i>
                </button>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <ul className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-lg w-48 z-30">
                    <li className="hover:bg-gray-100 hover:text-[#FF9F0D]">
                      <a
                        href="/signin"
                        className="block px-4 py-2"
                        onClick={() => {
                          closeMobileMenu();
                          setIsDropdownOpen(false);
                        }}
                      >
                        Sign In
                      </a>
                    </li>
                    <li className="hover:bg-gray-100 hover:text-[#FF9F0D]">
                      <a
                        href="/signup"
                        className="block px-4 py-2"
                        onClick={() => {
                          closeMobileMenu();
                          setIsDropdownOpen(false);
                        }}
                      >
                        Sign Up
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            )}
          </ul>

          {/* Search Bar */}
          <form
            className="min-w-[250px] xl:min-w-[280px] bg-transparent mt-4 lg:mt-0"
            onSubmit={handleSearch}
          >
            <div className="relative bg-transparent flex">
              <input
                type="search"
                id="default-search"
                className="block bg-transparent p-4 text-white border border-[#FF9F0D] rounded-[27px] w-[100%]"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="group text-white p-3 bg-transparent absolute inset-y-0 end-0 pe-3"
              >
                <div className="flex items-center pointer-events-none">
                  <i className="bi bi-search text-white group-hover:text-[#FF9F0D] transition-colors duration-200"></i>
                </div>
              </button>
            </div>
          </form>

          {/* Shopping Icon */}
          <Link href="/cart">
            <i className="bi bi-handbag"></i>
          </Link>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}
