import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import FeaturesSection from './section/FeaturesSection'
import Categories from './section/Categories'
import PromotionalBanner from './Test/PromotionalBanner'
import PopularProduct from './section/PopularProduct'
import CustomerReviews from './section/CustomerReviews'
import Newsletter from './Test/Newsletter'
import Footer from './section/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section>
      <Hero/>
    </section>
    <section>
      <FeaturesSection/>
    </section>
 <section>
      <PopularProduct/>
    </section>
    <section>
      <PromotionalBanner/>
    </section>
    <section>
      <Categories/>
    </section>

    <section>
      <CustomerReviews/>
    </section>
    <section>
      <Newsletter/>
    </section>

    <section>
      <Footer/>
    </section>
    </>
  )
}

export default App
