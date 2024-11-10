"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-red-600 to-orange-500 w-full fixed top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex space-x-8 text-white font-bold text-xl uppercase">
          <Link href="/aboutme" legacyBehavior>
            <a className="hover:text-gray-300">About</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a className="hover:text-gray-300">Projects</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-gray-300">Contact</a>
          </Link>
        </div>
        <div className="flex space-x-6 items-center">
          <Link
            href="https://www.linkedin.com/in/hayden-sandler-1a98b4235/"
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/icons8-linkedin-30.png"
                alt="LinkedIn profile"
                width={40}
                height={40}
              />
            </a>
          </Link>
          <Link href="https://github.com/s1nno" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/icons8-github-30.png"
                alt="GitHub profile"
                width={40}
                height={40}
              />
            </a>
          </Link>
          <Link href="/resume.pdf" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/icons8-resume-50.png"
                alt="Resume"
                width={40}
                height={40}
              />
            </a>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-white text-2xl md:hidden"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-red-600 to-orange-500 px-6 py-4">
          <div className="flex flex-col space-y-4 text-white font-bold text-xl uppercase">
            <Link href="/aboutme" legacyBehavior>
              <a className="hover:text-gray-300" onClick={toggleMenu}>
                About
              </a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a className="hover:text-gray-300" onClick={toggleMenu}>
                Projects
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="hover:text-gray-300" onClick={toggleMenu}>
                Contact
              </a>
            </Link>
            <Link
              href="https://www.linkedin.com/in/hayden-sandler-1a98b4235/"
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                <Image
                  src="/images/icons8-linkedin-30.png"
                  alt="LinkedIn profile"
                  width={40}
                  height={40}
                />
              </a>
            </Link>
            <Link href="https://github.com/s1nno" legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                <Image
                  src="/images/icons8-github-30.png"
                  alt="GitHub profile"
                  width={40}
                  height={40}
                />
              </a>
            </Link>
            <Link href="/resume.pdf" legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                <Image
                  src="/images/icons8-resume-50.png"
                  alt="Resume"
                  width={40}
                  height={40}
                />
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
