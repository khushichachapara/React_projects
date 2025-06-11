import { useReducer } from 'react'
import './App.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increrment':
      const exists = state.find(i => i.id === action.item.id);
      if (exists) {
        return state.map((i) => i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      else {
        return [...state, { ...action.item, qty: 1 }]
      }

    case 'decrement':
      return state
        .map(item =>
          item.id === action.id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0);

    case 'clear':
      return [];
    default:
      return state;
  }

}

let items = [
  { id: 1, name: "Acostic Guitar", url: "./guitar/acousticguitar.jpg", price: 10000 },
  { id: 2, name: "Base Guitar", url: "./guitar/baseguitar.jpg", price: 20000 },
  { id: 3, name: "Electronic Guitar", url: "./guitar/electricguitar.jpg", price: 22000 },
  { id: 4, name: "Classical Guitar", url: "./guitar/classicalguitar.jpg", price: 8000 },
  { id: 5, name: "Ukulele", url: "./guitar/ukulele.jpg", price: 7000 },
  { id: 6, name: "Mandoline", url: "./guitar/mandoline.jpg", price: 12000 }
]

function App() {
  const initialevalue = [];
  const [cart, dispatch] = useReducer(reducer, initialevalue);
  return (
    <>
      <div className='flex flex-col justify-center item-center '>
        <h1 className='text-2xl text-red-700 mb-3' >Cart Functionality Using UseReducer Hook</h1>
        <h2 className='text-2xl m-3 '>Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {items.map(item => (
            <div key={item.id} className="p-4 border rounded-lg shadow-lg bg-gray-200" >
              <div className='m-3 flex items-center justify-center'>
                <img className=' w-20 h-30' src={item.url} alt={item.name} />
              </div>
              <h3 className='text-xl mb-3'>{item.name} </h3>
              <p className='mb-2'> ₹ {item.price} Only</p>
              <div className='flex item-center justify-center'>
                <button className='ml-4 bg-blue-500 hover:bg-white text-white hover:text-blue-500 border border-2 border-blue-500 px-2 py-1 rounded-lg'
                  onClick={() => dispatch({ type: "increrment", item: item })}>Add to Cart</button>
              </div>
            </div>

          ))}
        </div>

        <div>
          <h2 className='m-8 text-3xl'>🛒 Cart</h2>
          {cart.length === 0 && (<p className="text-gray-600 text-center mb-4 text-2xl">Cart is empty....</p>)}
          <div className=' mb-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 '>

            {cart.map((item) => (
              <div key={item.id} className='flex flex-col items-center justify-center'>
                <img className='w-20 h-20 '
                  src={item.url} alt={item.name} />
                <p className='text-xl m-3'>{item.name} [x{item.qty}]</p>
                <button className=' w-20 ml-4 bg-red-500 hover:bg-white text-white hover:text-red-500 border border-2  border-red-500 p-1 rounded-lg '
                  onClick={() => dispatch({ type: 'decrement', id: item.id })}>Remove</button></div>


            ))}
          </div>
          {cart.length > 0 && (
            <div className='flex justify-end'>
              <button className='w-30 flex items-center justify-center bg-green-500 hover:bg-white text-white hover:text-green-500 border border-2 border-green-500 p-2 rounded-lg'
                onClick={() => dispatch({ type: 'clear' })}
              >Clear Cart</button></div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="text-right text-xl font-semibold  mt-4 flex justify-end">
            Total : ₹{cart.reduce((sum, item) => sum + item.price * item.qty, 0)}
          </div>
        )}

      </div>
    </>
  )
}

export default App
