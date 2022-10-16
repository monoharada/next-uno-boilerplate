import type { NextPage } from "next";
import Link from "next/link";

import Navbar from "../../components/navbar";

const Blog: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-20px px-12 py-20 text-center">
        <h2 className="text-3xl font-bold text-green-900">Blog posts</h2>

        <Link href="/">
          <a className="flex items-center btn">
            <div className="i-carbon-arrow-left" />
            Home
          </a>
        </Link>
      </main>
    </>
  );
};

export default Blog;
