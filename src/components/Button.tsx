type BtnProps = {type:string;text:string}

function Button(props:BtnProps) {
  return (
    <button className='w-full p-5 rounded-md text-white bg-blue-700 active:bg-blue-800' typeof={props.type}>{props.text}</button>
  )
}

export default Button