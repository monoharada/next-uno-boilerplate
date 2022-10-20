import Link from "next/link";
import { memo } from "react";

function Navbar() {
  return (
    <nav className="bg-teal-700 px-10">
      <div className="relative h-16 flex items-center justify-between">
        <div className="flex space-x-4">
          <Link href="/">
            <a className="rounded-md bg-teal-900 px-3 py-2 text-sm font-medium text-white">
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a className="rounded-md px-3 py-2 text-sm font-medium text-teal-100 hover:(bg-teal-600 text-white)">
              Blog
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);
