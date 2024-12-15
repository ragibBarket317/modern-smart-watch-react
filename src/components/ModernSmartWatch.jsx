import { useState, useEffect } from 'react'
import CartModal from './CartModal'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { FaStar, FaRegStarHalfStroke, FaRegStar } from 'react-icons/fa6'

const ModernSmartWatch = () => {
  const [viewCartModal, setViewCartModal] = useState(false)
  const [viewFloatingBtn, setViewFloatingBtn] = useState(false)
  const [selectedColor, setSelectedColor] = useState('purple')
  const [selectedSize, setSelectedSize] = useState({ size: 'S', price: 69 })
  const [quantity, setQuantity] = useState(1)
  const [cartItems, setCartItems] = useState([])
  const [totalItemCount, setTotalItemCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const addToCart = () => {
    const itemIndex = cartItems.findIndex(
      (item) =>
        item.color === selectedColor && item.size.size === selectedSize.size
    )

    const newItems = [...cartItems]

    //check if the item is already in the cart
    if (itemIndex > -1) {
      newItems[itemIndex].quantity += quantity
      newItems[itemIndex].price =
        newItems[itemIndex].quantity * selectedSize.price
    } else {
      // item is not in the cart
      newItems.push({
        color: selectedColor,
        size: selectedSize,
        quantity,
        price: selectedSize.price * quantity,
      })
    }
    setCartItems(newItems)
    // count total items
    setTotalItemCount((prevCount) => prevCount + quantity)
    setViewFloatingBtn(true)
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(true)
    }, 100)

    return () => {
      clearTimeout(timeOut)
    }
  }, [])

  return (
    <div className="container w-full px-2 md:px-8 xl:px-16 mx-auto py-5 md:py-10">
      <div className="bg-white p-5">
        <div className="flex flex-col md:flex-row gap-[2%]">
          <div className="relative w-full md:w-[49%]">
            {/* <!-- Placeholder div with yellow background --> */}
            {loading ? (
              <img
                id="product-image"
                src={`./${selectedColor}.png`}
                alt="Product Image"
                className="w-full h-auto lg:w-[630px] lg:h-[720px] rounded-[4px]"
              />
            ) : (
              <div
                id="image-placeholder"
                className="w-full h-auto lg:w-[630px] lg:h-[720px] rounded-[4px] bg-[#FFA353] animate-pulse"
              ></div>
            )}
          </div>
          {/* <!-- Product Details --> */}
          <div className="w-full md:w-[49%] flex flex-col justify-center md:pl-5 mt-4">
            <div>
              <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold mb-2">
                Classy Modern Smart Watch
              </h1>
              <div className="flex items-center text-[#FFD200] text-[14px] space-x-1 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
                <FaRegStar />
                <span className="text-[#8091A7] text-[14px] ml-2">
                  (2 Reviews)
                </span>
              </div>

              <div className="mb-4">
                <span className="text-[#8091A7] text-[20px] line-through mr-2">
                  $99.00
                </span>
                <span className="text-2xl font-bold text-blue-500 mb-4">
                  $79.00
                </span>
              </div>
              <p className="mb-4 text-[#8091A7] text-[18px]">
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual
                teachings.
              </p>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                <p className="text-[#8091A7] text-[14px]">Type</p>
                <p className="text-[#8091A7] text-[14px]">Model Number</p>
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                <p className="text-sm font-medium">Watch</p>
                <p className="text-sm font-medium">Forerunner 290XT</p>
              </div>

              <div className="mt-4">
                <h2 className="text-[18px] text-[#364A63] font-bold">
                  Band Color
                </h2>
                <div className="flex space-x-2 mt-2">
                  <fieldset className="flex flex-wrap gap-4">
                    <legend className="sr-only">Color</legend>

                    <label
                      htmlFor="purple"
                      className={`block size-[16px] cursor-pointer rounded-full bg-[#816BFF] shadow-sm ${
                        selectedColor === 'purple'
                          ? 'ring-2 ring-[#816BFF] ring-offset-2'
                          : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="ColorOption"
                        value={selectedColor}
                        id="purple"
                        className="sr-only"
                        checked={selectedColor === 'purple'}
                        onChange={() => setSelectedColor('purple')}
                      />
                      <span className="sr-only">Purple</span>
                    </label>

                    <label
                      htmlFor="cyan"
                      className={`block size-[16px] cursor-pointer rounded-full bg-[#1FCEC9] shadow-sm ${
                        selectedColor === 'cyan'
                          ? 'ring-2 ring-[#1FCEC9] ring-offset-2'
                          : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="ColorOption"
                        value={selectedColor}
                        id="cyan"
                        className="sr-only"
                        checked={selectedColor === 'cyan'}
                        onChange={() => setSelectedColor('cyan')}
                      />
                      <span className="sr-only">Cyan</span>
                    </label>

                    <label
                      htmlFor="ColorBlue"
                      className={`block size-[16px] cursor-pointer rounded-full bg-[#4B97D3] shadow-sm ${
                        selectedColor === 'blue'
                          ? 'ring-2 ring-[#4B97D3] ring-offset-2'
                          : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="ColorOption"
                        value={selectedColor}
                        id="ColorBlue"
                        className="sr-only"
                        checked={selectedColor === 'blue'}
                        onChange={() => setSelectedColor('blue')}
                      />
                      <span className="sr-only">Blue</span>
                    </label>

                    <label
                      htmlFor="black"
                      className={`block size-[16px] cursor-pointer rounded-full bg-[#3B4747] shadow-sm ${
                        selectedColor === 'black'
                          ? 'ring-2 ring-[#3B4747] ring-offset-2'
                          : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="ColorOption"
                        value={selectedColor}
                        id="black"
                        className="sr-only"
                        checked={selectedColor === 'black'}
                        onChange={() => setSelectedColor('black')}
                      />
                      <span className="sr-only">Black</span>
                    </label>
                  </fieldset>
                </div>
              </div>

              <div className="mt-4">
                <h2 className="text-[18px] text-[#364A63] font-bold">
                  Wrist Size
                </h2>
                <div className="flex space-x-2 mb-4">
                  {[
                    { size: 'S', price: 69 },
                    { size: 'M', price: 79 },
                    { size: 'L', price: 89 },
                    { size: 'XL', price: 99 },
                  ].map(({ size, price }) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize({ size, price })}
                      className={`px-4 py-2 text-[13px] border rounded-[3px] ${
                        size === selectedSize.size
                          ? 'border-[#6576ff]'
                          : 'border-gray-300'
                      }`}
                    >
                      <span className="font-bold">{size}</span> ${price}
                    </button>
                  ))}
                </div>
              </div>

              {/* <!-- Quantity Selector --> */}
              <div className="flex gap-3 mt-4 mb-8 md:mb-0">
                <div className="w-[34%] lg:w-[24%] xl:w-[16%] flex">
                  <button
                    className="px-3 py-2 text-gray-500 border hover:text-gray-700 focus:outline-none rounded-s-[4px]"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <div
                    id="quantityDisplay"
                    className="px-4 py-2 text-gray-700 border-t border-b border-gray-300"
                  >
                    {quantity}
                  </div>
                  <button
                    className="px-3 py-2 text-gray-500 border hover:text-gray-700 focus:outline-none w-8 rounded-r-[4px]"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                {/* <!-- Add to Cart Button --> */}
                <button
                  onClick={addToCart}
                  className="bg-[#6576FF] px-[18px] py-[8px] rounded-[3px] text-[13px]  text-white font-bold active:bg-indigo-600 focus:outline-none"
                >
                  Add to Cart
                </button>

                {/* <!-- Heart Icon --> */}
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`${
                    isFavorite
                      ? 'text-red-500 hover:text-red-600'
                      : 'text-indigo-500 hover:text-indigo-600'
                  } focus:outline-none`}
                >
                  {isFavorite ? (
                    <FaHeart className="text-[18.6px]" />
                  ) : (
                    <FaRegHeart className="text-[18.6px]" />
                  )}
                  {/* <FaRegHeart className="text-[18.6px]" /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Floating Checkout Button --> */}
      {viewFloatingBtn && (
        <div
          onClick={() => setViewCartModal(true)}
          className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-[3px] shadow-lg flex  items-center space-x-2 cursor-pointer"
        >
          <span>Checkout</span>
          <span
            id="cartItemCount"
            className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center font-bold"
          >
            {totalItemCount}
          </span>
        </div>
      )}
      {/* Open Cart Modal */}
      {viewCartModal && (
        <CartModal
          setViewCartModal={setViewCartModal}
          totalItemCount={totalItemCount}
          cartItems={cartItems}
        />
      )}
    </div>
  )
}

export default ModernSmartWatch
