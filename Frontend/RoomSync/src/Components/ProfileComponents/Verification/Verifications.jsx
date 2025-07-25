import React from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import { IoCheckmarkDone } from "react-icons/io5";
import { API } from "../../../API/Api";
const Verifications = () => {
  const [isEmailVerified, setIsEmailVerified] = React.useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = React.useState(false);
  const [isGovIdVerified, setIsGovIdVerified] = React.useState(false);
  const [userIsTryingToVerify, setuserIsTryingToVerify] = React.useState(false);
  const [userIsTryingToVerifyPhone, setuserIsTryingToVerifyPhone] = React.useState(false);
  const [userIsTryingToVerifyGovernId, setuserIsTryingToVerifyGovernId] = React.useState(false);
  const [otpSent, setotpSent] = React.useState(false);
  const [userOtp, setuserOtp] = React.useState('');
  const [generatedOtp, setgeneratedOtp] = React.useState(0);
  const [userData, setuserData] = React.useState('');
  async function handleVerification() {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(API.verify.email, { Email: userData }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success("Success:", res.data.msg || res.data.message);
      setotpSent(true);
      setgeneratedOtp(res.data.otp);
    } catch (err) {
      toast.error("Error:", err.res?.data || err.message);
    }
  }
  async function handleOtpVerification() {
    if (Number(userOtp) === generatedOtp) {
      toast.success("Successfully verified Email")
      const updatedEmailStatus = true;
      const updatedPhoneStatus = isPhoneVerified;
      const updatedGovIdStatus = isGovIdVerified;
      setIsEmailVerified(updatedEmailStatus);
      setuserIsTryingToVerify(false);
      try {
        await axios.post(API.verificationdata.dataUpdate, {
          Email: updatedEmailStatus,
          Phone: updatedPhoneStatus,
          GovernmentId: updatedGovIdStatus
        })
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <div className=' flex flex-col space-y-4 max-h-screen p-3 rounded-xl animate__animated animate__fadeInUp'>
      <div className='  h-[300px] flex flex-col p-3 gap-3 rounded-xl bg-[#1f2937] shadow-xl'>
        <h1 className='text-2xl text-white'>Identity Verification</h1>
        <div className="flex flex-row h-[60px] justify-between border-2 border-gray-200 p-3 rounded-xl bg-white">
          <div className='flex flex-row gap-2 bg-white'>
            <IoCheckmarkDone className="text-green-500 text-3xl bg-white" />
            <p className='text-xl bg-white text-slate-700'>Email Verified
            </p>
          </div>
          {
            isEmailVerified ? <p className='text-md  w-[80px] text-center h-[30px] rounded-2xl bg-[#f0f2f4] text-gray-600'>verified</p> :
              <button
                onClick={() => {
                  setuserIsTryingToVerifyGovernId(false);
                  setuserIsTryingToVerifyPhone(false);
                  setuserIsTryingToVerify(true);
                }}
                className={`w-[80px] text-md rounded-2xl transition-all duration-200
    ${userIsTryingToVerify ? 'bg-[#1fadad] text-white shadow-2xl' : 'bg-[#f0f2f4] text-gray-600'}
    hover:bg-[#1fadad] hover:text-white hover:shadow-2xl`}
              >
                Verify
              </button>}
        </div>
        <div className="flex flex-row h-[60px] justify-between border-2 border-gray-200 p-3 rounded-xl bg-white">
          <div className='flex flex-row gap-2 bg-white'>
            <IoCheckmarkDone className="text-green-500 text-3xl bg-white" />
            <p className='text-xl bg-white text-slate-700'>Phone Verified
            </p>
          </div>
          {
            isPhoneVerified ? <p className='text-md  w-[80px] text-center h-[30px] rounded-2xl bg-[#f0f2f4] text-gray-600'>verified</p> :
              <button onClick={() => { setuserIsTryingToVerify(false); setuserIsTryingToVerifyGovernId(false); setuserIsTryingToVerifyPhone(true); }} className={`w-[80px] text-md rounded-2xl transition-all duration-200
    ${userIsTryingToVerifyPhone ? 'bg-[#1fadad] text-white shadow-2xl' : 'bg-[#f0f2f4] text-gray-600'}
    hover:bg-[#1fadad] hover:text-white hover:shadow-2xl`}
              >Verify</button>
          }
        </div>
        <div className="flex flex-row h-[60px] justify-between border-2 border-gray-200 p-3 rounded-xl bg-white">
          <div className='flex flex-row gap-2 bg-white'>
            <IoCheckmarkDone className="text-green-500 text-3xl bg-white" />
            <p className='text-xl bg-white text-slate-700'>Government Id
            </p>
          </div>
          {
            isGovIdVerified ? <p className='text-md  w-[80px] text-center h-[30px] rounded-2xl bg-[#f0f2f4] text-gray-600'>verified</p> :
              <button onClick={() => { setuserIsTryingToVerify(false); setuserIsTryingToVerifyPhone(false); setuserIsTryingToVerifyGovernId(true) }} className={`w-[80px] text-md rounded-2xl transition-all duration-200
    ${userIsTryingToVerifyGovernId ? 'bg-[#1fadad] text-white shadow-2xl' : 'bg-[#f0f2f4] text-gray-600'}
    hover:bg-[#1fadad] hover:text-white hover:shadow-2xl`}
              >Verify</button>
          }
        </div>
      </div>
      {
        userIsTryingToVerify ? (
          <div className='animate__animated animate__fadeIn  h-[150px] flex flex-col p-3 gap-3 rounded-xl bg-white shadow-xl'>
            <label htmlFor="email" className="text-md font-medium text-gray-700 bg-white">
              Enter your email to verify:
            </label>
            {
              otpSent ? <input
                value={userOtp}
                onChange={(e) => setuserOtp(e.target.value)}
                type="text"
                id="otp"
                placeholder="One-Time-Password"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              /> : <input
                value={userData}
                onChange={(e) => setuserData(e.target.value)}
                type="email"
                id="email"
                placeholder="you@example.com"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            }
            {otpSent ? (
              <>
                <button
                  onClick={handleOtpVerification}
                  type="button"
                  className="mt-auto bg-black  hover:bg-green-600 text-white text-sm py-2 rounded-md hover:shadow-2xl transition-all duration-200 "
                >
                  Verify Otp
                </button>
                <ToastContainer />
              </>
            ) : (
              <>
                <button
                  onClick={handleVerification}
                  type="button"
                  className="mt-auto bg-black  hover:bg-green-600 text-white text-sm py-2 rounded-md hover:shadow-2xl transition-all duration-200 "
                >
                  Verify Email
                </button>
                <ToastContainer />
              </>
            )}
          </div>
        ) : ''
      }
      {
        userIsTryingToVerifyPhone ? (
          <div className='animate__animated animate__fadeIn h-[150px] flex flex-col p-3 gap-3 rounded-xl bg-white shadow-xl'>
            <label htmlFor="phone" className="text-md font-medium text-gray-700 bg-white">
              Enter your phone number to verify:
            </label>
            <input
              value={userData}
              onChange={(e) => setuserData(e.target.value)}
              type="tel"
              id="phone"
              placeholder="e.g. +91 9876543210"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button onClick={handleVerification}
              type="button"
              className="mt-auto bg-black hover:bg-green-600 text-white text-sm py-2 rounded-md hover:shadow-2xl transition-all duration-200"
            >
              Verify Phone
            </button>
            <ToastContainer />
          </div>

        ) : ''
      }
      {
        userIsTryingToVerifyGovernId ? <div className='animate__animated animate__fadeIn h-[150px] flex flex-col p-3 gap-3 rounded-xl bg-white shadow-xl'>
          <label htmlFor="govtId" className="text-md font-medium text-gray-700 bg-white">
            Enter your Government ID number:
          </label>
          <input
            value={userData}
            onChange={(e) => setuserData(e.target.value)}
            type="text"
            id="govtId"
            placeholder="e.g. Aadhar, PAN, DL..."
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleVerification}
            type="button"
            className="mt-auto bg-black hover:bg-green-600 text-white text-sm py-2 rounded-md hover:shadow-2xl transition-all duration-200"
          >
            Verify ID
          </button>
          <ToastContainer />
        </div>
          : ''
      }
    </div>
  )
}

export default Verifications