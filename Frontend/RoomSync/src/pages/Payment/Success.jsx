import React, { useEffect } from 'react'
import { CheckCircle } from "lucide-react"
import {Link} from "react-router-dom"
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
const Success = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");
    useEffect(()=>{
        console.log(sessionId);
    })
    if(sessionId){
        useEffect(()=>{
            async function getDetails(){
                try{
                    const res = await axios.post('http://localhost:3000/api/payment/get-session-details', { sessionId }, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                    console.log(res.data);
                }catch(error){
                    console.log(error.message || res.error)
                }
            }
            getDetails();
        },[])
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh)] bg-gray-50 dark:bg-gray-900 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center max-w-md w-full ">
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6 bg-[#1f2937]" />
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4 bg-[#1f2937]">Payment Successful!</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8 bg-[#1f2937]">
                    Your payment was processed successfully. Your plan has been updated.
                </p>
                <Link to="/dashboard">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
                        Go to Dashboard
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success
