import Layout from '@/components/constants/layout/layout'
import BannerSection from '@/components/views/ContactPage/bannerSection'
import ContactSection from '@/components/views/ContactPage/contactSection'
import InfoSection from '@/components/views/ContactPage/infoSection'
import React from 'react'
import Head from 'next/head'

export default function Contact() {
  return (
    <div>
        <Head>
        <title>Contact - JN CodeWorks | Portfolio</title>
          <link rel="icon" href="/images/no-bg-logo.png" />
        </Head>
      <Layout>
        <BannerSection/>
        <InfoSection/>
        <ContactSection/>
      </Layout>
    </div>
  )
}
