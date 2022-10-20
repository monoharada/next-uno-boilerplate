import { NextPageWithLayout } from "next";

import HomeApp from "@/app/top/Home";
import { Layout } from "@/components/layout/Layout";

const Home: NextPageWithLayout = () => <HomeApp />;

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
