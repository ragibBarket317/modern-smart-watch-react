import { useState } from 'react'
import CartModal from './CartModal'

const ModernSmartWatch = () => {
  const [viewCartModal, setViewCartModal] = useState(true)
  return (
    <div className="container w-full px-2 md:px-8 xl:px-16 mx-auto py-5 md:py-10">
      <div className="bg-white p-5">
        <div className="flex flex-col md:flex-row gap-[2%]">
          <div className="relative w-full md:w-[49%]">
            {/* <!-- Placeholder div with yellow background --> */}
            <div
              id="image-placeholder"
              className="absolute inset-0 bg-yellow-400 animate-pulse"
            ></div>
            <img
              id="product-image"
              src="/images/purple.png"
              alt="Product Image"
              className="w-full h-auto lg:w-[630px] lg:h-[720px] transition-opacity duration-1000 opacity-0"
            />
          </div>
          {/* <!-- Product Details --> */}
          <div className="w-full md:w-[49%] flex flex-col justify-center md:pl-5 mt-4">
            <div>
              <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold mb-2">
                Classy Modern Smart Watch
              </h1>
              <div className="flex items-center text-yellow-500 text-[14px] space-x-1 mb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                <i className="fa-regular fa-star"></i>
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <p className="text-[#8091A7] text-[14px]">Type</p>
                <p className="text-[#8091A7] text-[14px]">Model Number</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                      htmlFor="ColorBlack"
                      className="block size-[16px] cursor-pointer rounded-full bg-[#816BFF] shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-[#816BFF] has-[:checked]:ring-offset-2"
                    >
                      <input
                        type="radio"
                        name="ColorOption"
                        value="ColorBlack"
                        id="ColorBlack"
                        className="sr-only"
                        checked
                      />

                      <span className="sr-only">purple</span>
                    </label>

                    <label
                      htmlFor="ColorRed"
                      className="block size-[16px] cursor-pointer rounded-full bg-[#1FCEC9] shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-[#1FCEC9] has-[:checked]:ring-offset-2"
                    >
                      <input
                        type="radio"
                        name="ColorOption"
                        value="ColorRed"
                        id="ColorRed"
                        className="sr-only"
                      />

                      <span className="sr-only">cyan</span>
                    </label>

                    <label
                      htmlFor="ColorBlue"
                      className="block size-[16px] cursor-pointer rounded-full bg-[#4B97D3] shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-[#4B97D3] has-[:checked]:ring-offset-2"
                    >
                      <input
                        type="radio"
                        name="ColorOption"
                        value="ColorBlue"
                        id="ColorBlue"
                        className="sr-only"
                      />

                      <span className="sr-only">Blue</span>
                    </label>

                    <label
                      htmlFor="ColorGold"
                      className="block size-[16px] cursor-pointer rounded-full bg-[#3B4747] shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-[#3B4747] has-[:checked]:ring-offset-2"
                    >
                      <input
                        type="radio"
                        name="ColorOption"
                        value="ColorGold"
                        id="ColorGold"
                        className="sr-only"
                      />

                      <span className="sr-only">black</span>
                    </label>
                  </fieldset>
                </div>
              </div>

              <div className="mt-4">
                <h2 className="text-[18px] text-[#364A63] font-bold">
                  Wrist Size
                </h2>
                <div className="flex space-x-2 mt-2">
                  <button className="wrist-size-button px-4 py-2 text-[13px] border rounded-[3px]">
                    <span className="font-bold">S</span> $69
                  </button>
                  <button className="wrist-size-button px-4 py-2 text-[13px] border rounded-[3px]">
                    <span className="font-bold">M</span> $79
                  </button>
                  <button className="wrist-size-button px-4 py-2 text-[13px] border rounded-[3px]">
                    <span className="font-bold">L</span> $89
                  </button>
                  <button className="wrist-size-button px-4 py-2 text-[13px] border rounded-[3px]">
                    <span className="font-bold">XL</span> $99
                  </button>
                </div>
              </div>

              {/* <!-- Quantity Selector --> */}
              <div className="flex gap-3 mt-4 mb-8 md:mb-0">
                <div className="w-[34%] lg:w-[24%] xl:w-[16%] flex">
                  <button
                    className="px-3 py-2 text-gray-500 border hover:text-gray-700 focus:outline-none rounded-s-[4px]"
                    id="decreaseButton"
                  >
                    -
                  </button>
                  <div
                    id="quantityDisplay"
                    className="px-4 py-2 text-gray-700 border-t border-b border-gray-300"
                  >
                    1
                  </div>
                  <button
                    className="px-3 py-2 text-gray-500 border hover:text-gray-700 focus:outline-none w-8 rounded-r-[4px]"
                    id="increaseButton"
                  >
                    +
                  </button>
                </div>
                {/* <!-- Add to Cart Button --> */}
                <button className="bg-[#6576FF] px-[18px] py-[8px] rounded-[3px] text-[13px]  text-white font-bold active:bg-indigo-600 focus:outline-none">
                  Add to Cart
                </button>

                {/* <!-- Heart Icon --> */}
                <button className="text-indigo-500 hover:text-indigo-600 focus:outline-none">
                  <i className="fa-regular fa-heart text-[18.6px]"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Floating Checkout Button --> */}
      <div
        id="floatingCheckout"
        className="hidden fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-[3px] shadow-lg  items-center space-x-2 cursor-pointer"
      >
        <span>Checkout</span>
        <span
          id="cartItemCount"
          className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center font-bold"
        >
          0
        </span>
      </div>
      {/* Open Cart Modal */}
      {viewCartModal && <CartModal />}
    </div>
  )
}

export default ModernSmartWatch
