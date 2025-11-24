import React from 'react'
import Hero from './components/Homepage/Hero'
import WeServe from './components/Homepage/WeServe'
import SIgnatureProducts from './components/Homepage/SIgnatureProducts'
import TraditionalItems from './components/Homepage/TraditionalItems'
import Features from './components/Homepage/Features'
import OurCommitment from './components/Homepage/OurCommitment'
import Newsletter from './components/Homepage/Newsletter'
import { WhyChooseUs } from './components/Homepage/WhyChooseUs'

const page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <OurCommitment />
      <WeServe />
      <SIgnatureProducts />
      <TraditionalItems />
      <WhyChooseUs />
      <Newsletter />
    </div>
  )
}

export default page