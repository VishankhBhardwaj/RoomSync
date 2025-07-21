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
    <div className='w-full h-full  flex flex-col gap-5 rounded-xl animate__animated animate__fadeInUp'>
      {popUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-40 transition-all duration-200">
          <div className='z-50 shadow-2xl md:py-4 w-[100%] h-[100%] md:w-[80%] md:h-[80%] rounded-xl animate__animated animate__fadeIn transition-all duration-200 flex flex-col gap-3'>
            <div className='rounded-xl'>
              <h1 className='text-xl px-3 md:text-3xl md:px-4'>Choose Your Plan</h1>
              <p className='text-gray-500 px-3 md:text-xl md:px-4'>Select the subscription plan that best fits your needs.</p>
            </div>
            <div className='flex flex-col md:flex-row w-[100%] h-[100%] gap-2 md:gap-3 md:p-3'>
              <div className=' h-[50%] md:h-[90%] md:w-[50%] p-2 flex flex-col md:gap-4 rounded-md bg-white'>
                <h1 className='font-bold text-xl md:text-3xl bg-white'>Basic</h1>
                <h1 className='text-xl bg-white'><span className='text-4xl text-[#61bafc] bg-white'>$0.00</span> per month</h1>
                <ul className=''>
                  <li className=' text-gray-500  bg-white'>X Unlimited Matches</li>
                  <li className=' text-gray-500 bg-white'>X Advanced filters</li>
                  <li className=' text-gray-500 bg-white'>X See who liked you' </li>
                  <li className=' text-gray-500 bg-white'>X Boost your profile' </li>
                  <li className=' text-gray-500 bg-white'>X Priority customer support'</li>
                </ul>

                {!isSubscribed ? <button className="bg-white  text-black font-semibold px-6 py-2 rounded-md border border-gray-300 hover:bg-gray-300 transition-all duration-200">
                  Current Plan
                </button>:<button onClick={() => handleSubscribe()} className="bg-black  hover:bg-zinc-700 transition-all duration-200 text-white font-semibold px-6 py-2 rounded-md mt-2">
                  Select Plan
                </button>}
              </div>
              <div className=' h-[50%] md:h-[90%] md:w-[50%] p-2 flex flex-col md:gap-4 rounded-md bg-white'>
                <h1 className='font-bold text-xl md:text-3xl bg-white'>Premium</h1>
                <h1 className='text-xl bg-white'><span className='text-4xl text-[#61bafc] bg-white'>$9.99</span> per month</h1>
                <ul className=''>
                  <li className=' text-gray-500 bg-white'>✓ Unlimited Matches</li>
                  <li className=' text-gray-500 bg-white'>✓ Advanced filters</li>
                  <li className=' text-gray-500 bg-white'>✓ See who liked you' </li>
                  <li className=' text-gray-500 bg-white'>✓ Boost your profile' </li>
                  <li className=' text-gray-500 bg-white'>✓ Priority customer support'</li>
                </ul>
                {isSubscribed ? <button className="bg-white text-black font-semibold px-6 py-2 rounded-md border border-gray-300">
                  Current Plan
                </button> : <button onClick={() => handleSubscribe()} className="bg-black hover:bg-zinc-700 transition-all duration-200 text-white font-semibold px-6 py-2 rounded-md mt-2">
                  Select Plan
                </button>}
              </div>
            </div>
          </div>
        </div>

      )}
      {/* currentplan */}
      <div className='flex flex-col space-y-2 md:w-[100%] p-6 shadow-md rounded-md bg-white'>
        <div className='md:flex md:justify-between bg-white ml-[10px]'>
          <h1 className='text-xl bg-white '>Current Plan</h1>
          <span className='w-[100px] h-[23px] rounded-xl bg-[#80b8fb] text-white text-center'>{isSubscribed ? 'Premium' : 'Basic'}</span>
        </div>
        <div className='flex flex-col  md:flex-row md:w-[100%] gap-4 p-6 bg-white'>
          <div className="flex flex-col gap-2 ml-[-15px] items-center justify-center md:w-[30%]  bg-white shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] rounded-md">
            <h1 className='text-xl bg-white'>{isSubscribed ? 'Premium' : 'Basic'}</h1>
            <h1 className='text-[#61bafc] text-4xl bg-white'>{isSubscribed ? '19.99' : '0.00'}</h1>
            <p className='text-gray-500 bg-white'>per month</p>
          </div>
          <div className=" bg-white">
            <h1 className='bg-white'>Plan-Features</h1>
            <ul className='bg-white'>
              <li className='bg-white text-gray-500'>{isSubscribed ? '✓ Unlimited Matches' : 'X Unlimited Matches'}</li>
              <li className='bg-white text-gray-500'>{isSubscribed ? '✓ Advanced filters' : 'X Advanced filters'}</li>
              <li className='bg-white text-gray-500'>{isSubscribed ? '✓ See who liked you' : 'X See who liked you'}</li>
              <li className='bg-white text-gray-500'>{isSubscribed ? '✓ Boost your profile' : 'X Boost your profile'}</li>
              <li className='bg-white text-gray-500'>{isSubscribed ? '✓ Priority customer support' : 'X Priority customer support'}</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:w-[100%] gap-5 bg-white '>
          <button onClick={() => setPopUp(true)} className='md:w-[150px] md:h-[40px] rounded-xl bg-[#f9fafb] shadow-xl shadow-gray-400/50 transition-all duration-200 hover:bg-[#d7e9fe] hover:text-[#054594]  text-gray-900 group hover:shadow-2xl'>
            Change Plan
          </button>
          {isSubscribed && (
            <button className='md:w-[200px] md:h-[40px] rounded-xl bg-[#f9fafb] shadow-xl shadow-gray-400/50 transition-all duration-200  hover:bg-[#d7e9fe] hover:text-[#054594] text-gray-900 group hover:shadow-2xl'>
              Cancel Subsciption
            </button>
          )}
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

        {invoice && invoice.length > 0 ? (
          invoice.map((item, idx) => (
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
          ))
        ) : (
          <div className='bg-white text-2xl'>No Billing History</div>
        )}
      </div>
    </div>
  )
}

export default Billings