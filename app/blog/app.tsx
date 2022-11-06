import Link from "next/link";

import { model } from "./model/blog";

const BlogApp = () => {
  const { title, paragraph, textArray } = model;
  return (
    <>
      <h2 className="text-3xl font-bold text-green-900">{title}</h2>

      <Link href="/" className="flex items-center btn">
        Home
      </Link>
      <p>{paragraph}</p>
      <ul className="flex flex-col items-center gap-4">
        {textArray.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </>
  );
};

export default BlogApp;
