import HomeApp from "app/top/Home";
import { NextPageWithLayout } from "next";

import { Layout } from "@/components/layout/Layout";

const Home: NextPageWithLayout = () => <HomeApp />;

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
