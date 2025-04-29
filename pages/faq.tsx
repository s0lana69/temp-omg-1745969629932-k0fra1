import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQComponent from '@/components/FAQ';

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ | TrueViral</title>
        <meta name="description" content="Frequently asked questions about TrueViral" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-dark text-white relative overflow-x-hidden">
        <FAQComponent />
      </main>
      <Footer />
    </>
  );
}
