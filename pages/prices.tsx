import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingContent from '@/components/PricingContent';

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing | TrueViral</title>
        <meta name="description" content="TrueViral pricing plans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-dark text-white relative overflow-x-hidden">
        <PricingContent />
      </main>
      <Footer />
    </>
  );
}
