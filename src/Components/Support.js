const Support = () => {
  return (
    <div>
       <div className="text-xl font-bold p-4 mx-20">
         <h1>Get in touch with us.</h1>
         <h1>We're here to assist you.</h1>
       </div>
       <div className="flex p-4 mx-20">
         <div>
          <label>Business name*</label>
          <input className=" border border-solid border-black w-80 p-2 m-2"type="text" placeholder="Search for your business listing" />
         </div>
         <div>
            <label>Your Name*</label>
            <input className=" border border-solid border-black w-80 p-2 m-2" type="text" placeholder="Enter your name" />
         </div>
        </div>
        <div className="flex p-4 mx-20">
          <div>
            <label>Phone Number*</label>
            <select><option>+91</option></select>
            <input  className="border border-solid border-black w-80 p-2 m-2"type="number" placeholder="0123456789" />
          </div>
          <div>
            <label>Email Address</label>
            <input  className="border border-solid border-black w-80 p-2 m-2" type="email" placeholder="eg: example@gmail.com"></input>
          </div>
      </div>
      <div className="flex p-4 mx-20">
        <label className="text-center">Message*</label>
        <textarea  className="border border-solid border-black w-80 p-2 mx-2"cols={30} rows={3} placeholder="Write here your message..." />
      </div>
      <button className="p-4 mx-20 my-20 border border-solid border-black bg-orange-500">Leave us a Message➡️</button>
    </div>
    
  )
}

export default Support