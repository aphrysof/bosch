import React, {useState} from 'react'
var createGuest = require('cross-domain-storage/guest');


const Loans = () => {
  const [first, setFirst] = useState("")
  const access_token = createGuest(window.location.href === "http://localhost:3000/" ? "http://localhost:4000/" : "http://localhost:3000/");

  access_token.get('access_token', function(error, value) {
   if(error){
    console.log(error)
   }else {
    console.log(value)
    setFirst(value)
   }
  });
  
  return (
    <div className='ml-310 font-body' style={{"marginLeft": "350px"}}>This is coming from Loans  , {first}</div>
  )
}

export default Loans