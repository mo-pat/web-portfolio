import React from 'react'
import logo from '../dbz2.png'

export const Nav = () => {
  return (
    <nav className="nav bg-gray-700 bg-opacity-50 p-4">
      {/*name with logo on the left*/}
      {/*right side*/}
      <ul className="flex flex-row inline-block justify-center space-x-4 font-semibold">
        <li><a href="#" className="hover:text-white transition-color duration-500 ease-out">Home</a></li>
        <li><a href="#" className="hover:text-white transition-color duration-500 ease-out">About</a></li>
        <li><a href="#" className="hover:text-white transition-color duration-500 ease-out">Projects</a></li>
        <li><a href="#" className="hover:text-white transition-color duration-500 ease-out">Work</a></li>
        <li><a href="#" className="hover:text-white transition-color duration-500 ease-out">Contact</a></li>
      </ul>
    </nav>
  )
}
