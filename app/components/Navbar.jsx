import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-red-600 to-orange-500 w-full fixed top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-right justify-between">
          <div className="flex items-right">
            <Link href="/about">
              <span className="text-white font-bold text-lg uppercase ml-8 hover:text-gray-300">About</span>
            </Link>
            <Link href="/projects">
              <span className="text-white font-bold text-lg uppercase ml-8 hover:text-gray-300">Projects</span>
            </Link>
            <Link href="/contact">
              <span className="text-white font-bold text-lg uppercase ml-8 hover:text-gray-300">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
