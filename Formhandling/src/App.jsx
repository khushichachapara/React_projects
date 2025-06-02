import { useState } from 'react'
import './App.css'
import './index.css'

function App() {

  const [user,setUser]=useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    phone:'',
  })
  const handlechange = (e) => {

    const { name, value } = e.target;
    setUser((prev)=>({...prev,[name]:value}));
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      password:'',
    })

  }

  return (
    <>

      <div className="min-h-screen flex bg-gray-100 justify-center">


        <form
          onSubmit={handlesubmit}
          className=" bg-white p-8 m-4 rounded-xl shadow-md w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-center text-cyan-600">Register</h2>

          <div>
            <label className="flex mb-1 font-medium text-gray-700" for="firstname">First Name</label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              required
              value={user.firstname}
              onChange={handlechange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600" />
          </div>

          <div>
            <label className="flex mb-1 font-medium text-gray-700" for="lastname">Last Name</label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              required
              value={user.lastname}
              onChange={handlechange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600" />
          </div>

          <div>
            <label className="flex mb-1 font-medium text-gray-700" for="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={user.email}
              onChange={handlechange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600" />
          </div>

          <div>
            <label className="flex mb-1 font-medium text-gray-700" for="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={user.password}
              onChange={handlechange}
              
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600" />
          </div>

          <div>
            <label class="flex mb-1 font-medium text-gray-700" for="phonenumber">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={user.phone}
              onChange={handlechange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600" />
          </div>

          <button type="submit"
            className="w-full bg-cyan-600 text-white font-semibold py-2 rounded-lg hover:bg-white hover:text-cyan-600 border border-cyan-600 transition">
            Submit
          </button>
        </form>

      </div>
    </>
  )
}

export default App
