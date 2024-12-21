const Header = () => {
  return (
    <div className="flex justify-between shadow-lg py-4 mx-4 my-2">
       <div>
         <h1 className="px-2 m-2  ">RMax</h1>
       </div>
        <div className = "flex-items-center">
          <ul className="flex">
           <li className="px-2 py-2">Home</li>
           <li className="px-2 py-2" >Features🔽</li>
           <li className="px-2 py-2">Pricing</li>
           <li className="px-2 py-2">Solutions🔽</li>
           <button className="px-2 py-2 border border-black-500 rounded-lg">Login</button>
           <button className="px-2 py-2 mx-2 border border-black-500  bg-orange-600 rounded-lg">Try For Free</button>
          </ul>
         </div>
    </div>
    
  )
}

export default Header;