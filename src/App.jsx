import { useState } from 'react'
import './App.css'

function App() {

const [result, setResult] = useState('');
const [info,setInfo] = useState('');
const [height,setHeight] = useState('');
const [weight,setWeight] =useState('');

const output = () => {
  const bmi = Number(weight/ (height * height)*10000)
  setResult(bmi.toFixed(2));
}


 return (
    <>
      <h1 className='text-2xl font-semibold text-green-600'>BMI Calculator</h1>
      <div className='mt-7'>
        <label htmlFor="heightInput">Height in CM : </label>
        <input 
        id='heightInput'
        type='number' 
        placeholder=''
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className='px-1 py-1 bg-white text-black'
        >
        </input>
      </div>

      <div className='mt-5'>
        <label htmlFor="weightInput">Weight in KG : </label>
        <input 
        id='weightInput'
        type='number' 
        placeholder=''
        value={weight}
        onChange={(e)=> setWeight(e.target.value)}
        className='px-1 py-1 bg-white text-black'
        >
        </input>
      </div>

      <div className='mt-5 ml-25'>
        <button
        onClick={output}
        className='px-1.5 py-0.5 font-semibold bg-white text-black text-2xl rounded-lg cursor-pointer transition-transform hover:bg-amber-100'
        >Calculate</button>
      </div>

      <div className='mt-5 ml-25 px-2 py-2 bg-amber-50 text-black font-bold text-2xl'>
          {result}
      </div>

      <div className='mt-5 ml-25 px-2 py-2 bg-amber-50 text-black font-bold text-2xl'>
        {info}
      </div>

      <div className='mt-10 ml-25 text-xl font-semibold px-2 py-2 bg-amber-600 text-black'>
        <h3>BMI Weight Guide</h3>
        <p>Under Weight = Less than 18.6</p>
        <p>Normal Range = 18.6 and 24.9</p>
        <p>Overweight = Greater than 24.9</p>
      </div>
    </>
  )
}

export default App

