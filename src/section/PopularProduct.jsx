import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProduct = () => {
  return (
      <section id="products" className="max-container max-sm:mt-12 p-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold">Our
            <span className="text-coral-red"> Popular</span> Product</h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Explore top-tier electronics blending cutting-edge tech with sleek design for an elevated lifestyle</p>

        </div>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 font-poppins">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product}/>
          ))}
        </div>
      </section>
  )
}

export default PopularProduct