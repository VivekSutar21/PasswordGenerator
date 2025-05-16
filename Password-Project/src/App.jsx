import { useEffect } from 'react';
import { useState } from 'react'
// import './App.css'
import { useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed ]  = useState(false);
  const [password, setPassword] = useState("");

   const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAllowed) str += "0123456789"
        if(charAllowed) str += "!@#$%&*[]{}~`"

        for (let index = 1; index < length; index++) {
            let char = Math.floor(Math.random()*str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)

   },[ length, numberAllowed,charAllowed, setPassword])
   useEffect(()=>{
        passwordGenerator();
   },[length, numberAllowed, charAllowed,passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 text-blue-50 bg-gray-700 text-center
    '>
        <h1 className='text-white text-center py-3 text-2xl'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-black"
            placeholder="password"
            readOnly
            />
            <button className='outline-none bg-amber-400 text-white px-4 py-1.5 shrink-0 rounded-2 hover:bg-amber-50 hover:text-black'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}
                />
                <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                id='numberInput'
                onChange={()=>{
                    setNumberAllowed((prev)=>!prev);
                }}
                />
                <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                defaultChecked={charAllowed}
                id='charInput'
                onChange={()=>{
                    setCharAllowed((prev)=>!prev)
                }}
                />
                <label htmlFor="charInput">Characters</label>
            </div>
        </div>
    </div>  
    </>
  )
}

export default App
