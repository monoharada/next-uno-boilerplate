import BlogApp from "app/blog/app";
import { NextPageWithLayout } from "next";

import { Layout } from "@/components/layout/Layout";

const Blog: NextPageWithLayout = () => <BlogApp />;

Blog.getLayout = (page) => <Layout>{page}</Layout>;

export default Blog;
