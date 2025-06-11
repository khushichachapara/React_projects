import { useEffect, useState } from 'react'
import './index.css';
import axios from "axios";
import { GiWorld } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";


function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
  });

  const getCountryData = async () => {
    try {
      const res = await api.get("/all?fields=name,population,region,capital,flags");
      console.log(res.data)
      setData(res.data);

    } catch (error) {
      console.error(error)
    }

  };

  useEffect(() => {
    getCountryData();

  }, []);

  const filterdata = data.filter((country) => {
    return country.name.common.toLowerCase().includes(searchTerm.toLowerCase())

  });

  return (
    <><div className='bg-gray-800 min-h-screen p-6 '>

      <h1 className='text-3xl md:text-4xl flex justify-center items-center text-amber-500 mb-10'><GiWorld className='mr-2 text-emerald-300 drop-shadow-5xl' /> World's country </h1>

      <div className=' ml-6 relative w-full sm:w-1/2'>
        <div className="absolute top-3 left-0 md:top-3 pl-3 flex items-center pointer-events-none ">
          <CiSearch className="text-gray-800" />
        </div>
        <input type='text' placeholder="Search by country name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='bg-white px-4 py-2 pl-10 mr-4 border border-red-600 rounded  '></input>
       
      </div>
      <div className='m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {(searchTerm ? filterdata : data).map((country, index) => (
          <div key={index} className='bg-blue-950  rounded-2xl '>
            <div className='bg-slate-600 p-4 flex flex-col items-center justify-center text-white rounded-xl'>
              <img src={country.flags.svg} alt={country.name.common} className=" h-30 w-37" />
              <div><h2 className="text-3xl font-semibold text-white mb-2 mt-2">{country.name.common}</h2> </div>
            </div>

            <div className="p-4 ">
              <p className="text-yellow-200 text-m mb-1"><strong> Official Name :</strong> {country.name.official}</p>
              <p className="text-yellow-200 text-m mb-1"><strong>Region :</strong> {country.region}</p>
              <p className="text-yellow-200 text-m mb-1"><strong>Capital :</strong> {country.capital?.[0] || "N/A"}</p>
              <p className="text-yellow-200 text-m mb-1"><strong>Population :</strong> {country.population.toLocaleString()}</p>
              {/* <p className='text-yellow-200 text-m mb-1'><strong>Something Interesting :</strong> {country.flags.alt}</p> */}

            </div></div>
        ))}
      </div></div>

    </>
  )
}

export default App;
