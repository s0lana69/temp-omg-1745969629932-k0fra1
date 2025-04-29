import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TrustedCompanies from '@/components/TrustedCompanies';
import FeatureHighlights from '@/components/FeatureHighlights';
import ScalabilitySection from '@/components/ScalabilitySection';
import Testimonials from '@/components/Testimonials';
import FinalCta from '@/components/FinalCta';

export default function Home() {
  return (
    <>
      <Head>
        <title>TrueViral</title>
        <meta name="description" content="The AI platform for enterprise use cases" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-dark text-white relative overflow-x-hidden">
        <HeroSection />
        <TrustedCompanies />
        <FeatureHighlights />
        <ScalabilitySection />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
