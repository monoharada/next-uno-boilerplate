import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Card from '@/app/top/card';

import Navbar from '../components/navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next App with unocss</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <Navbar />

      <main className='flex flex-col items-center gap-20px px-12 py-20 text-center font-sans'>
        <span text='blue 5xl hover:red' cursor='default'>
          Hello Next
        </span>
        <div className='i-carbon-car inline-block' text='4xl teal-500' />

        <Link href='/blog'>
          <a className='btn-01 flex items-center'>
            <div bg='pink-500'>
              Blog
              <span>hoeg</span>
            </div>
            <div className='i-carbon-arrow-right' />
          </a>
        </Link>
        <relative>
          <btn-01 class='absolute'>aaa</btn-01>
        </relative>
        <Card />
      </main>
    </>
  );
};

export default Home;
