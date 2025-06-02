import { useState } from "react";
import './App.css';


function Login() {

const [password,setPassword]=useState('')
const[email,setEmail]=useState('');

const handlesubmit =(e)=>{
    e.preventDefault();
    const data ={
        email,password
    }
    console.log('User',data);
    setEmail('');
    setPassword('');

}
    return (
        <>
            <div class="min-h-screen flex items-center justify-center bg-gray-100">
                <form 
                onSubmit={handlesubmit}
                class="bg-white p-8 rounded-xl shadow-md w-full max-w-sm space-y-6">
                    <h2 class="text-2xl font-bold text-center text-cyan-600">Login</h2>

                    <div>
                        <label class="flex mb-1 font-medium text-gray-700" for="username">Username</label>
                        <input
                            id="email"
                            name="usernemailme"
                            type="email"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                        />
                    </div>

                    <div>
                        <label class="flex mb-1 font-medium text-gray-700" for="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            class="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                        />
                    </div>

                    <button
                        type="submit"
                        class="w-full bg-cyan-600 text-white font-semibold py-2 rounded-lg hover:bg-white hover:text-cyan-600 border border-cyan-600 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}
export default Login;