import React from 'react'
import githubLogo from '../logo/github32.png'
import linkedinLogo from '../logo/linkedin32.png'
import emailLogo from '../logo/email32.png'

export const Footer = () => {
  return (
    <div className="py-12 bg-yellow-600 text-center" id="contact">
      <header className="mx-4 md:mx-16 pb-4 text-4xl md:text-5xl text-black">Let's get in touch</header>
      <div className="">
          <div className="px-4 space-x-32 md:space-x-16 mt-4 flex justify-center">

            <div className="w-1/4">
              <form className="mx-auto w-40 md:w-full flex flex-col" action="https://formspree.io/f/xleolvlp" method="POST" id="contact-form">
                <header className="text-left mb-4 font-medium text-xl text-opacity-70">Contact Form</header>
                {/* name field*/}
                {/*<span className="uppercase text-sm font-bold text-left text-gray-900">Full Name</span>*/}
                <label htmlFor="full-name"></label>
                <input className="px-2 py-1 rounded shadow-inner bg-yellow-700 text-yellow-900 placeholder-yellow-900 border-b-2 border-transparent focus:outline-none focus:border-yellow-400 transition duration-200 ease-in" type="text" placeholder="Your Full Name" id="full-name" name="full-name" required/>

                <label htmlFor="email"></label>
                <input className="px-2 py-1 mt-3 rounded shadow-inner bg-yellow-700 text-yellow-900 placeholder-yellow-900 border-b-2 border-transparent focus:outline-none focus:border-yellow-400 transition duration-200 ease-in" type="text" placeholder="Your Email" id="email" name="email" required/>

                <label htmlFor="message"></label>
                <textarea className="px-2 py-1 mt-3 h-32 max-h-sx rounded shadow-inner bg-yellow-700 text-yellow-900 placeholder-yellow-900 border-b-2 border-transparent focus:outline-none focus:border-yellow-400 transition duration-200 ease-in" type="text" placeholder="Enter your message..." id="message" name="message" required/>

                <div className="my-4">
                  <button className="px-2 py-1 w-full rounded-lg text-md font-bold bg-green-600 hover:bg-green-500 text-gray-300" type="submit">Send Message</button>
                </div>

              </form>
            </div>

            <div className="contact-link">
              <header className="text-xl text-opacity-70 font-medium px-auto border-black text-center mb-4">Contact Links</header>
              <ul className="flex flex-row justify-center space-x-2">
                <li className="transition ease-in duration-200 transform hover:-translate-y-1"><a href="https://github.com/mo-pat" target="_blank"><img src={githubLogo} alt=""/></a></li>
                <li className="transition ease-in duration-200 transform hover:-translate-y-1"><a href="https://www.linkedin.com/in/mohit-patel-b44a8bbb/" target="_blank"><img src={linkedinLogo} alt=""/></a></li>
                <li className="transition ease-in duration-200 transform hover:-translate-y-1"><a href="mailto:mo_pat@live.concordia.ca" target="_blank"><img src={emailLogo} alt=""/></a></li>
              </ul>
            </div>

          </div>
      </div>
    </div>
  )
}
