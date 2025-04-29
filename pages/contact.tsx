import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | TrueViral</title>
        <meta name="description" content="Contact TrueViral" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text gradient-teal-blue">
            Contact Us
          </h1>
          <p className="text-gray-300 mb-10">
            Have questions? We're here to help.
          </p>
          {/* Contact form will go here */}
        </div>
      </main>
      <Footer />
    </>
  );
}
