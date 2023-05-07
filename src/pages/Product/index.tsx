import Button from '../../components/Button'

const Product = () => (
  <section className="text-gray-700 body-font overflow-hidden bg-white">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
            The Catcher in the Rye
          </h1>
          <p className="leading-relaxed">
            Fam locavore kickstarter distillery. Mixtape chillwave tumeric
            sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
            juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
            seitan poutine tumeric. Gastropub blue bottle austin listicle
            pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
          </p>
          <hr className="my-4" />
          <div className="flex justify-between items-center">
            <span className="title-font font-medium text-2xl text-gray-900">
              $58.00
            </span>
            <Button text="Add to cart" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Product