import React from 'react'
import Head from 'next/head'
import Layout from '@/components/constants/layout/layout'
import BannerSection from '@/components/views/AboutPage/bannerSection'
import InformationSection from '@/components/views/AboutPage/informationSection'
import SkillsSection from '@/components/views/AboutPage/skillsSection'
import ServicesSection from '@/components/views/AboutPage/servicesSection'

export default function About() {
  return (
    <div>
        <Head>
          <title>About - JN CodeWorks | Portfolio</title>
          <link rel="icon" href="/images/no-bg-logo.png" />
        </Head>
      <Layout>
        <BannerSection/>
        <InformationSection/>
        <SkillsSection/>
        <ServicesSection/>
      </Layout>
    </div>
  )
}
