import { useState } from "react"

function ProductDetail(props) {
  const [itemCounter, setItemCounter] = useState(0)


  function handleCounterPlus() {
    setItemCounter(itemCounter + 1)
  }

  function handleCounterMinus() {
    if (itemCounter >= 1) {
      setItemCounter(itemCounter - 1)
    }
  }

  return (
    <main className="grid grid-cols-2 px-40 mt-3.5">

      <div className="w-[508px]">
        HOLA1
      </div>

      <div>

        <p><span>* * * * *</span> 11 reviews</p>

        <h1 className="text-2xl font-black my-[16px]">Tray Table</h1>
        <p>Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.</p>
        <p className="text-2xl font-black my-[16px]" >$199.00</p>


        <div className="grid grid-cols-3 grid-rows-1 gap-4">
          <div className="py-[12px] px-[16px] bg-base-200 w-[127px] flex items-center justify-between rounded-[8px]">
            <button onSubmit={handleCounterMinus}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
            </button>
            {itemCounter}
            <button onSubmit={handleCounterPlus}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          <button className="w-100% bg-base-100 px-[40px] py-[10px] flex items-center justify-center col-span-2 rounded-[8px] border-2 border-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-[8px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            Wishlist
          </button>
        </div>

        <button className="mt-[16px] px-[40px] py-[10px] w-full rounded-[8px] bg-base-content text-white">
          Add to Cart
        </button>



      </div>

    </main>

  )
}

export default ProductDetail