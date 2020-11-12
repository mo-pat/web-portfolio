import React from 'react'

export const Nav = () => {
  return (
    <nav className="nav bg-white bg-opacity-50 p-4 flex justify-between items-center" id="home">
      {/*name with logo on the left*/}
      {/*right side*/}
      <ul className="flex flex-row space-x-4 md:space-x-8 font-semibold" id="nav-list">
        <li><a href="#home" className="hover:text-blue-500 transition-color duration-500 ease-out">Home</a></li>
        <li><a href="#resume" className="hover:text-blue-500 transition-color duration-500 ease-out">Resume</a></li>
        <li><a href="#projects" className="hover:text-blue-500 transition-color duration-500 ease-out">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500 transition-color duration-500 ease-out">Contact</a></li>
      </ul>
      {/*
      <div className="login-btn">
        <button className="bg-blue-900 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Login
        </button>
      </div>
      */}
    </nav>
  )
}
