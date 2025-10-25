import React from 'react'
import Hero from '../components/Hero'
import Realizations from '../components/Realizations'
import Reviews from '../components/Reviews'
import CategoriesShowcase from '../components/CategoriesShowcase'
import FAQSection from '../components/FAQSection'
import NewsletterCTA from '../components/NewsletterCTA'

function Home() {
  return (
    <>
      <Hero />
      <Realizations />
      <Reviews />
      <CategoriesShowcase />
      <FAQSection />
      <NewsletterCTA />
    </>
  )
}

export default Home
