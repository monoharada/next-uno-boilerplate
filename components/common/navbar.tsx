import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

const navigation = [
  {
    href: "/",
    page: "Home",
  },
  {
    href: "/blog",
    page: "Blog",
  },
];
function Navbar() {
  const router = useRouter();
  const style = (href: string) => (router.asPath === href ? current : other);

  return (
    <nav className="bg-teal-700 px-10">
      <div className="relative h-16 flex items-center justify-between">
        <div className="flex space-x-4">
          {navigation.map((navItem) => (
            <Link
              href={navItem.href}
              className={`${base} ${style(navItem.href)}`}
              key={navItem.page}
            >
              {navItem.page}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);

const base = "rounded-md px-3 py-2 text-sm font-medium";

const current = " bg-teal-900  text-white";
const other = "rounded-md  text-teal-100 hover:(bg-teal-600 text-white)";
