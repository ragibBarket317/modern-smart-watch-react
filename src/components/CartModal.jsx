const CartModal = ({ setViewCartModal, totalItemCount, cartItems }) => {
  console.log('cartItems', cartItems)
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)
  return (
    <>
      <div
        id="cartModal"
        className="fixed inset-0 bg-[#11121B8C] bg-opacity-50 flex justify-center items-center"
      >
        <div className="bg-white rounded-[20px] p-5 w-[96%] md:w-[650px]">
          <h2 className="text-[22px] text-[#364A63] font-bold mb-4">
            Your Cart
          </h2>
          <table className="w-full table-auto border-collapse overflow-x-auto">
            <thead>
              <tr>
                <th className="border-b pb-2 text-left text-[14px] text-[#8091A7]">
                  Item
                </th>
                <th className="border-b pb-2 text-center text-[14px] text-[#8091A7]">
                  Color
                </th>
                <th className="border-b pb-2 text-center text-[14px] text-[#8091A7]">
                  Size
                </th>
                <th className="border-b pb-2 text-center text-[14px] text-[#8091A7]">
                  Qnt
                </th>
                <th className="border-b pb-2 text-end text-[14px] text-[#8091A7]">
                  Price
                </th>
              </tr>
            </thead>
            <tbody id="cartItems">
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="border-b py-2 w-[50%] ">
                    <div className="flex items-center space-x-2">
                      <img
                        src={`./${item.color}.png`}
                        alt=""
                        className="w-[36px] h-[36px] rounded-[3px]"
                      />
                      <h3 className="text-[14px] text-[#364A63]">
                        Classy Modern Smart Watch
                      </h3>
                    </div>
                  </td>
                  <td className="border-b py-2 text-center text-[14px] text-[#364A63] capitalize">
                    {item.color}
                  </td>
                  <td className="border-b py-2 text-center text-[14px] text-[#364A63] font-bold">
                    {item.size.size}
                  </td>
                  <td className="border-b py-2 text-center text-[14px] text-[#364A63] font-bold">
                    {item.quantity}
                  </td>
                  <td className="border-b py-2 text-end text-[14px] text-[#364A63] font-bold">
                    ${item.price}
                  </td>
                </tr>
              ))}
              <tr>
                <td className=" py-2">
                  <p className=" text-[16px] text-[#373737] font-bold">Total</p>
                </td>
                <td className=" py-2 text-center text-[14px] text-[#364A63] capitalize"></td>
                <td className=" py-2 text-center text-[14px] text-[#364A63] font-bold"></td>
                <td className=" py-2 text-center text-[14px] text-[#364A63] font-bold">
                  <p
                    id="totalQuantity"
                    className="text-[14px] text-[#364A63] text-center font-bold"
                  >
                    {totalItemCount}
                  </p>
                </td>
                <td className=" py-2 text-end text-[14px] text-[#364A63] font-bold">
                  <p
                    id="totalPrice"
                    className="text-[15px] md:text-[18px] text-[#364A63] font-bold"
                  >
                    ${totalPrice}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4 flex justify-end">
            <div>
              <button
                onClick={() => setViewCartModal(false)}
                className="px-[18px] py-[8px] rounded-[3px] border-[1px] text-[13px] text-[#364A63] font-bold mr-[10px]"
              >
                Continue Shopping
              </button>
              <button className="bg-[#6576FF] px-[18px] py-[8px] rounded-[3px] text-[13px] border-[#364A63] text-white font-bold">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartModal
