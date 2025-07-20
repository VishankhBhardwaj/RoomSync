import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'animate.css';

const Register = () => {
    const navigate = useNavigate();
    const [data, setUserData] = useState({});
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');

    function handleClick() {
        navigate('/');
    }

    async function handleRegister() {
        if (Password !== confirmPassword) {
            toast.error("Password not matching");
        } else {
            try {
                const data = await fetch('http://localhost:3000/api/auth/register', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        FirstName,
                        LastName,
                        Email,
                        Password
                    })
                });
                const result = await data.json();
                if (result) {
                    localStorage.setItem("token", result.token);
                    toast.success("Registered Successfully!");
                    navigate('/dashboard');
                } else {
                    toast.fail("Register Failed")
                }
            } catch (error) {
                console.log("Error occurred", error);
            }
        }
    }

    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center px-4 py-8 animate__animated animate__backInLeft'>
            <button onClick={handleClick} className='w-[200px] h-[50px] transition-all duration-200 hover:bg-[#d7e9fe] hover:text-[#0545af] rounded-xl mb-4'>Back To Home</button>
            <h1 className='text-3xl'>Room Sync</h1>
            <h2 className='text-4xl'>Create Account</h2>
            <p className='text-[#6c6f7e] text-xl text-center'>Join thousands finding their perfect roommate</p>

            <div className='flex flex-col px-6 py-6 space-y-4 border-2 shadow-xl w-full max-w-3xl rounded-xl mt-4'>
                <div className='mb-3'>
                    <h1 className='text-2xl'>Sign Up</h1>
                    <p className='text-[#6c6f7e] text-xl'>Create your account to get started</p>
                </div>

                <div className='flex flex-col md:flex-row gap-4'>
                    <div className="flex flex-col w-full">
                        <label>FirstName</label>
                        <input
                            value={FirstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            placeholder='John'
                            className='h-[50px] px-3 rounded-xl bg-[#f6f7f9] shadow-md'
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label>LastName</label>
                        <input
                            value={LastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            placeholder='Doe'
                            className='h-[50px] px-3 rounded-xl bg-[#f6f7f9] shadow-md'
                        />
                    </div>
                </div>

                <label>Email</label>
                <input
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder='Your@email.com'
                    className='h-[50px] px-3 rounded-xl bg-[#f6f7f9] shadow-md'
                />

                <label>Password</label>
                <input
                    value={confirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    type="password"
                    placeholder='••••••••'
                    className='h-[50px] px-3 rounded-xl bg-[#f6f7f9] shadow-md'
                />

                <label>Confirm Password</label>
                <input
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='••••••••'
                    className='h-[50px] px-3 rounded-xl bg-[#f6f7f9] shadow-md'
                />

                <div className='w-full text-center text-[#6c6f7e]'>
                    I agree to the <span className="text-blue-500 cursor-pointer hover:underline">Terms of Service</span> and <span className="text-blue-500 cursor-pointer hover:underline">Privacy Policy</span>
                </div>

                <button onClick={handleRegister} className='w-full bg-[#70aefa] hover:bg-[#7eb4f6] text-white h-12 rounded-xl shadow-md'>Create Account</button>
                <ToastContainer />

                <p className='text-center text-[#6c6f7e]'>Or continue with</p>
                <div className='flex flex-col md:flex-row gap-4'>
                    <button className='w-full bg-[#f6f7f9] hover:bg-[#d7e9fe] h-10 rounded-xl shadow-2xl'>Google</button>
                    <button className='w-full bg-[#f6f7f9] hover:bg-[#d7e9fe] h-10 rounded-xl shadow-2xl'>Facebook</button>
                </div>
            </div>
        </div>
    )
}

export default Register;