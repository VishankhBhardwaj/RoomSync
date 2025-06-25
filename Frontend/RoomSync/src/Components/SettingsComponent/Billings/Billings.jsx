import React from 'react'

const Billings = () => {
  return (
    <div className='w-full h-full  flex flex-col gap-5 rounded-xl animate__animated animate__fadeInUp'>
      {/* currentplan */}
        <div className='flex flex-col space-y-2 md:w-[100%] p-6 shadow-md rounded-md bg-white'>
          <div className='md:flex md:justify-between bg-white ml-[10px]'>
            <h1 className='text-xl bg-white '>Current Plan</h1>
            <span className='w-[100px] h-[23px] rounded-xl bg-[#80b8fb] text-white text-center'>Premium</span>
          </div>
          <div className='flex flex-col  md:flex-row md:w-[100%] gap-4 p-6 bg-white'>
            <div className="flex flex-col gap-2 ml-[-15px] items-center justify-center md:w-[30%]  bg-white shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] rounded-md">
          <h1 className='text-xl bg-white'>Premium</h1>
          <h1 className='text-[#61bafc] text-4xl bg-white'>$19.99</h1>
          <p className='text-gray-500 bg-white'>per month</p>
            </div>
            <div className=" bg-white">
          <h1 className='bg-white'>Plan-Features</h1>
          <ul className='bg-white'>
            <li className='bg-white text-gray-500'>✓ Unlimited Matches</li>
            <li className='bg-white text-gray-500'>✓ Advanced filters</li>
            <li className='bg-white text-gray-500'>✓ See who liked you</li>
            <li className='bg-white text-gray-500'>✓ Boost your profile</li>
            <li className='bg-white text-gray-500'>✓ Priority customer support</li>
          </ul>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:w-[100%] gap-5 bg-white '>
            <button className='md:w-[150px] md:h-[40px] rounded-xl bg-[#f9fafb] shadow-xl shadow-gray-400/50 transition-all duration-200 hover:bg-[#d7e9fe] hover:text-[#054594]  text-gray-900 group hover:shadow-2xl'>
          Change Plan
            </button>
            <button className='md:w-[200px] md:h-[40px] rounded-xl bg-[#f9fafb] shadow-xl shadow-gray-400/50 transition-all duration-200  hover:bg-[#d7e9fe] hover:text-[#054594] text-gray-900 group hover:shadow-2xl'>
          Cancel Subsciption
            </button>
          </div>
        </div>
        {/* payment */}
      <div className=' flex flex-col space-y-2 md:w-[100%] md:h-[400px] p-6 shadow-md rounded-md bg-white'>
        <div>
          <h1 className='md:text-2xl bg-white'>Payment Method</h1>
        </div>
        <div className="flex items-center justify-between space-x-2 mb-1 bg-white">
          <div className='bg-white'>
            <span className="text-xs  font-semibold text-white bg-blue-500 px-2 py-0.5 rounded-md  mr-[3px]">VISA</span>
            <span className="tracking-widest text-gray-900 bg-white">•••• •••• •••• 4242</span>
          </div>
          <div className='bg-white'>
            <button className="px-4 shadow-xl shadow-gray-400/50 py-2  rounded-lg bg-gray-50 text-gray-900 text-sm font-medium  hover:bg-gray-100 transition-all duration-200 hover:shadow-2xl">
              Edit
            </button>
          </div>
        </div>
        <p className="text-md text-gray-500 bg-white ">Expires 12/2025</p>
      </div>
      {/* billing history */}
      <div className="flex flex-col space-y-4 md:w-full p-6 shadow-md rounded-md bg-white">
        <h1 className="text-2xl font-semibold text-gray-900 bg-white">Billing History</h1>

        {[
          { date: 'Dec 1, 2024', plan: 'Premium Plan', amount: '$19.99' },
          { date: 'Nov 1, 2024', plan: 'Premium Plan', amount: '$19.99' },
          { date: 'Oct 1, 2024', plan: 'Premium Plan', amount: '$19.99' },
        ].map((item, idx) => (
          <div key={idx} className=" flex flex-col md:flex-row md:justify-between items-center px-4 py-3 bg-white border rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row space-x-2 text-gray-800 bg-white">
              <span className="font-medium bg-white">{item.date}</span>
              <span className="text-gray-500 bg-white">{item.plan}</span>
            </div>
            <div className=" flex flex-col md:flex-row items-center space-x-4 bg-white">
              <span className="text-gray-900 font-medium bg-white">{item.amount}</span>
              <span className="bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">Paid</span>
              <button className="relative text-blue-600 text-sm font-medium group focus:outline-none">
                <span className="relative z-10 bg-white">Download</span>
                <span
                  className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-500 group-hover:w-full"
                  style={{ transitionProperty: 'width' }}
                ></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Billings