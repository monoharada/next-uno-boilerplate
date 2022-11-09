import Link from "next/link";

import { model } from "./model/home";

const HomeApp = () => {
  const { title } = model;
  return (
    <>
      <span text="blue 5xl hover:red" cursor="default">
        {title}
      </span>
      <div bg="primary" text="4xl teal-500 " className="i-carbon-car" />
      <Link href="/blog" className="btn-01 flex items-center">
        <>
          <div bg="pink-500" className="flex">
            Blog!!!
            <span>hoge</span>
          </div>
          <div className="i-carbon-arrow-right" />
        </>
      </Link>
      <relative>
        <btn-01 class="absolute">aaa</btn-01>
      </relative>
    </>
  );
};

export default HomeApp;
