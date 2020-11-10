import React from 'react'

export const Nav = () => {
  return (
    <nav className="nav bg-gray-700 bg-opacity-50 p-4 flex justify-between items-center" id="home">
      {/*name with logo on the left*/}
      {/*right side*/}
      <ul className="flex flex-row space-x-8 font-semibold" id="nav-list">
        <li><a href="#home" className="hover:text-white transition-color duration-500 ease-out">Home</a></li>
        <li><a href="#resume" className="hover:text-white transition-color duration-500 ease-out">Resume</a></li>
        <li><a href="#projects" className="hover:text-white transition-color duration-500 ease-out">Projects</a></li>
        <li><a href="#" className="hover:text-white transition-color duration-500 ease-out">Work</a></li>
        <li><a href="#" className="hover:text-white transition-color duration-500 ease-out">Contact</a></li>
      </ul>
      <div className="login-btn">
        <button className="bg-blue-900 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Login
        </button>
      </div>
    </nav>
  )
}
