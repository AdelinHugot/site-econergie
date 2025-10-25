import React from 'react'
import HeroImproved from '../components/HeroImproved'
import LifestyleSection from '../components/LifestyleSection'
import CategoriesEnhanced from '../components/CategoriesEnhanced'
import Realizations from '../components/Realizations'
import ReviewsEnhanced from '../components/ReviewsEnhanced'
import WhyEconergie from '../components/WhyEconergie'
import FAQSection from '../components/FAQSection'
import NewsletterCTA from '../components/NewsletterCTA'

function Home() {
  return (
    <>
      <HeroImproved />
      <LifestyleSection />
      <CategoriesEnhanced />
      <Realizations />
      <ReviewsEnhanced />
      <WhyEconergie />
      <FAQSection />
      <NewsletterCTA />
    </>
  )
}

export default Home
