import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SolutionsContent from '@/components/SolutionsContent';

export default function Solutions() {
  return (
    <>
      <Head>
        <title>Solutions | TrueViral</title>
        <meta name="description" content="TrueViral AI solutions for businesses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-dark text-white relative overflow-x-hidden">
        <SolutionsContent />
      </main>
      <Footer />
    </>
  );
}
