import { useParams } from 'react-router-dom'
import Button from '../../components/Button'
import { useGetSingleProduct } from '../../hooks/useGetSingleProduct'
import { Star } from 'react-feather'
import { useEffect, useState } from 'react'
import { ProductProps } from '../../@types/ProductsProps'
import ListItem from '../../components/ListItem'
import { useGetRelatedProducts } from '../../hooks/useGetRelatedProducts'
import MyImage from '../../components/MyImage'

const Product = () => {
  const [relatedProducts, setRelatedProducts] = useState<ProductProps[]>([])
  const [showRelatedProducts, setShowRelatedProducts] = useState<boolean>(false)
  const { id } = useParams()
  const { data } = useGetSingleProduct(Number(id))

  const { data: dataProducts, refetch } = useGetRelatedProducts(
    data?.category || null,
  )

  useEffect(() => {
    if (data) {
      refetch()
      setShowRelatedProducts(true)
    }

    if (showRelatedProducts && dataProducts?.length > 0) {
      setRelatedProducts(
        dataProducts.filter((item: ProductProps) => item.id !== Number(id)),
      )
    }
  }, [data, dataProducts, id, refetch, showRelatedProducts])

  const formatPrice = (price: number) => price.toFixed(2)

  return (
    data && (
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="mx-auto flex flex-wrap items-center justify-center">
            <MyImage
              alt={data.title}
              className="lg:w-1/4 sm:w-1/2 w-full object-contain object-center rounded border border-gray-200"
              src={data.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <span className="text-[10px] leading-4 block text-gray-500 uppercase">
                {data.category}
              </span>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {data.title}
              </h1>
              <div className="flex text-center gap-1">
                <Star className="text-yellow-400" size={16} fill="#facc15" />
                <span className="text-[12px] text-gray-500">
                  {data.rating.rate}
                </span>
              </div>
              <p className="leading-relaxed my-2">{data.description}</p>
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $ {formatPrice(data.price)}
                </span>
                <Button text="Add to cart" />
              </div>
            </div>
          </div>
          {showRelatedProducts && relatedProducts?.length > 0 && (
            <div className="mt-24">
              <h2 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Related Products
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {relatedProducts?.map((relatedProduct) => (
                  <ListItem key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    )
  )
}

export default Product
