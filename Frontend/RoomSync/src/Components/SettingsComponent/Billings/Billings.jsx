import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
const Billings = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [invoice, setInvoice] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const stripePromise = loadStripe("pk_test_51Rmp0sB7hirLiPjmb1PGLJPAUxRrbvAeTudSzOMuWkz9Y94DrkO5Gpb3rkD2J9EGSz4OFqE0EKH04vSTnXYx9KNP00QvfuyH3Y");

  async function handleSubscribe() {
    const priceId = 'price_1Rmp6sB7hirLiPjmhOgBMTGO'
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        'http://localhost:3000/api/payment/create-checkout-session',
        { priceId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({
        sessionId: res.data.sessionId,
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
  async function fetchInfo() {
    const token = localStorage.getItem('token');
    const res = await axios.get('http://localhost:3000/api/payment/fetchPaymentInfo', {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(res.data);
    if (res.data && res.data[0]?.Subscription) {
      setInvoice(res.data[0].Invoice);
      setIsSubscribed(true);
    } else {
      setIsSubscribed(false);
    }  
  }
  fetchInfo();
}, []);

  return (
    <div className='w-full h-full flex flex-col gap-4 rounded-xl animate__animated animate__fadeInUp p-1 sm:p-3'>
      {popUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-40 transition-all duration-200">
          <div className='z-50 shadow-2xl py-4 w-[95%] h-[95%] md:w-[80%] md:h-[80%] rounded-xl animate__animated animate__fadeIn transition-all duration-200 flex flex-col gap-3 relative bg-slate-900'>
            <button 
              onClick={() => setPopUp(false)}
              className='absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-gray-300 transition-all duration-200 z-60'
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className='rounded-xl pt-2'>
              <h1 className='text-xl px-4 md:text-3xl text-white'>Choose Your Plan</h1>
              <p className='text-gray-400 px-4 text-sm md:text-xl'>Select the subscription plan that best fits your needs.</p>
            </div>
            <div className='flex flex-col md:flex-row w-full h-full gap-4 p-4 overflow-y-auto'>
              <div className='h-auto md:h-[100%] w-full md:w-[50%] p-4 flex flex-col gap-3 md:gap-4 rounded-md bg-white/30'>
                <h1 className='font-bold text-xl md:text-3xl text-white'>Basic</h1>
                <h1 className='text-lg md:text-xl text-white'><span className='text-2xl md:text-4xl text-[#61bafc]'>$0.00</span> per month</h1>
                <ul className='mt-2 space-y-1'>
                  <li className='text-gray-400 text-sm md:text-base'>X Unlimited Matches</li>
                  <li className='text-gray-400 text-sm md:text-base'>X Advanced filters</li>
                  <li className='text-gray-400 text-sm md:text-base'>X See who liked you</li>
                  <li className='text-gray-400 text-sm md:text-base'>X Boost your profile</li>
                  <li className='text-gray-400 text-sm md:text-base'>X Priority customer support</li>
                </ul>

                {!isSubscribed ? <button className="bg-white  w-full md:w-auto md:px-6 text-black font-semibold px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-300 transition-all duration-200">
                  Current Plan
                </button>:<button onClick={() => handleSubscribe()} className="bg-black w-full md:w-auto md:px-6 hover:bg-zinc-700 transition-all duration-200 text-white font-semibold px-4 py-2 rounded-md mt-4">
                  Select Plan
                </button>}
              </div>
              <div className='h-auto md:h-[100%] w-full md:w-[50%] p-4 flex flex-col gap-3 md:gap-4 rounded-md bg-white/30'>
                <h1 className='font-bold text-xl md:text-3xl text-white'>Premium</h1>
                <h1 className='text-lg md:text-xl text-white'><span className='text-2xl md:text-4xl text-[#61bafc]'>$19.99</span> per month</h1>
                <ul className='mt-2 space-y-1'>
                  <li className='text-gray-400 text-sm md:text-base'>✓ Unlimited Matches</li>
                  <li className='text-gray-400 text-sm md:text-base'>✓ Advanced filters</li>
                  <li className='text-gray-400 text-sm md:text-base'>✓ See who liked you</li>
                  <li className='text-gray-400 text-sm md:text-base'>✓ Boost your profile</li>
                  <li className='text-gray-400 text-sm md:text-base'>✓ Priority customer support</li>
                </ul>
                {isSubscribed ? <button className="bg-white w-full md:w-auto md:px-6  text-black font-semibold px-4 py-2 rounded-md border border-gray-300">
                  Current Plan
                </button> : <button onClick={() => handleSubscribe()} className="bg-black w-full md:w-auto md:px-6 hover:bg-zinc-700 transition-all duration-200 text-white font-semibold px-4 py-2 rounded-md ">
                  Select Plan
                </button>}
              </div>
            </div>
          </div>
        </div>

      )}
      {/* currentplan */}
      <div className='flex flex-col space-y-3 w-full p-3 md:p-5 shadow-md rounded-md bg-[#1f2937]'>
        <div className='flex justify-between items-center text-white px-1'>
          <h1 className='text-lg md:text-xl font-medium'>Current Plan</h1>
          <span className='w-[80px] md:w-[100px] h-[23px] text-sm rounded-xl bg-[#5e1d92] text-white flex items-center justify-center'>{isSubscribed ? 'Premium' : 'Basic'}</span>
        </div>
        <div className='flex flex-col md:flex-row w-full gap-3 p-1 md:p-5'>
          <div className="flex flex-col gap-2 items-center justify-center w-full md:w-[30%] py-4 bg-white shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] rounded-md">
            <h1 className='text-lg md:text-xl font-medium'>{isSubscribed ? 'Premium' : 'Basic'}</h1>
            <h1 className='text-[#5e1d92] text-3xl md:text-4xl'>{isSubscribed ? '$19.99' : '$0.00'}</h1>
            <p className='text-gray-500 text-sm'>per month</p>
          </div>
          <div className="py-2 md:py-0">
            <h1 className='text-white text-lg mb-2'>Plan-Features</h1>
            <ul className='space-y-1 md:space-y-2'>
              <li className='text-gray-400 text-sm md:text-base'>{isSubscribed ? '✓ Unlimited Matches' : 'X Unlimited Matches'}</li>
              <li className='text-gray-400 text-sm md:text-base'>{isSubscribed ? '✓ Advanced filters' : 'X Advanced filters'}</li>
              <li className='text-gray-400 text-sm md:text-base'>{isSubscribed ? '✓ See who liked you' : 'X See who liked you'}</li>
              <li className='text-gray-400 text-sm md:text-base'>{isSubscribed ? '✓ Boost your profile' : 'X Boost your profile'}</li>
              <li className='text-gray-400 text-sm md:text-base'>{isSubscribed ? '✓ Priority customer support' : 'X Priority customer support'}</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row w-full gap-3 px-2 pb-2'>
          <button onClick={() => setPopUp(true)} className='w-full sm:w-[150px] h-[40px] rounded-md bg-[#f9fafb] shadow-md shadow-gray-400/50 transition-all duration-200 hover:bg-[#5e1d92] hover:text-white text-gray-900 text-sm md:text-base font-medium'>
            Change Plan
          </button>
          {isSubscribed && (
            <button className='w-full sm:w-[200px] h-[40px] mt-2 sm:mt-0 rounded-md bg-[#f9fafb] shadow-md shadow-gray-400/50 transition-all duration-200 hover:bg-[#1fadad] hover:text-[#054594] text-gray-900 text-sm md:text-base font-medium'>
              Cancel Subscription
            </button>
          )}
        </div>
      </div>
      {/* payment */}
      <div className='flex flex-col space-y-3 w-full p-3 md:p-5 shadow-md rounded-md bg-[#1f2937]'>
        <div>
          <h1 className='text-xl md:text-2xl text-white font-medium'>Payment Method</h1>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:space-x-2 mb-1 space-y-3 sm:space-y-0">
          <div className=''>
            <span className="text-xs font-semibold text-white bg-blue-500 px-2 py-0.5 rounded-md mr-[3px]">VISA</span>
            <span className="tracking-widest text-white text-sm md:text-base">•••• •••• •••• 4242</span>
          </div>
          <div className=''>
            <button className="px-4 shadow-md shadow-gray-400/50 py-2 rounded-md bg-gray-50 text-gray-900 text-sm font-medium hover:bg-gray-100 transition-all duration-200">
              Edit
            </button>
          </div>
        </div>
        <p className="text-sm md:text-base text-gray-400">Expires 12/2025</p>
      </div>
      {/* billing history */}
      <div className="flex flex-col space-y-3 w-full p-3 md:p-5 shadow-md rounded-md bg-[#1f2937]">
        <h1 className="text-xl md:text-2xl font-semibold text-white">Billing History</h1>

        {invoice && invoice.length > 0 ? (
          invoice.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:justify-between items-center px-3 py-4 bg-white border rounded-lg shadow-sm gap-3 sm:gap-0">
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3 text-gray-800 w-full sm:w-auto">
                <span className="font-medium text-sm md:text-base">{item.date}</span>
                <span className="text-gray-500 text-sm md:text-base">{item.plan}</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <span className="text-gray-900 font-medium text-sm md:text-base">{item.amount}</span>
                <span className="bg-gray-100 text-gray-800 text-xs md:text-sm font-medium px-3 py-1 rounded-full">Paid</span>
                <button className="relative text-blue-600 text-sm font-medium group focus:outline-none">
                  <span className="relative z-10">Download</span>
                  <span
                    className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-500 group-hover:w-full"
                    style={{ transitionProperty: 'width' }}
                  ></span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-xl md:text-2xl text-white text-center py-4">No Billing History</div>
        )}
      </div>
    </div>
  )
}

export default Billings