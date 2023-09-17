import React, { useState } from 'react'

export type textInputProps = {placeholder:string;onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,value:string,erorr:boolean}

function TextInput(props:textInputProps) {
    const [focuse, setFocuse] = useState(false)
  return (
    <div onClick={()=>{setFocuse(true)}} onBlur={()=>{setFocuse(false)}} className={`relative w-full flex border ${props.erorr?"border-[#FF0000] animate-pulse":""} ${focuse?"border-[#0000FF] shadow-sm shadow-[#0000FF]":""} justify-start items-center rounded-md`} dir='rtl'>
        <label htmlFor="textInput" className={`text-[#778599] absolute right-[2%] ${focuse || props.value?"top-[-30%] bg-[#0F172A]":""}`}>{props.placeholder}</label>
        <input onChange={props.onChange} value={props.value} id='textInput' type="text"  className={`w-full outline-none border-0 bg-inherit p-5 text-white`}/>
    </div>
  )
}

export default TextInput