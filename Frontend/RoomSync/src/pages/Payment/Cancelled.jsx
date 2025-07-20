import React from 'react'
import { XCircle } from "lucide-react"
import {Link} from "react-router-dom"
const Cancelled = () => {
  return (
     <div className="flex flex-col items-center justify-center min-h-[calc(100vh)] bg-gray-50 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center max-w-md w-full">
        <XCircle className="h-20 w-20 text-red-500 mx-auto mb-6 bg-[#1f2937]" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4 bg-[#1f2937] ">Payment Cancelled</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 bg-[#1f2937]">
          Your payment was cancelled or could not be processed. Please try again.
        </p>
        <Link to="/dashboard">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-200 text-gray-800 hover:bg-gray-300 h-10 px-4 py-2">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cancelled