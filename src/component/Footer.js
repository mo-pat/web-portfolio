import React from 'react'
import githubLogo from '../logo/github32.png'
import linkedinLogo from '../logo/linkedin32.png'
import emailLogo from '../logo/email32.png'

export const Footer = () => {
  return (
    <div className="py-12 bg-yellow-600 text-center" id="contact">
      <header className="mx-4 md:mx-16 pb-4 text-4xl md:text-5xl text-black">Let's get in touch</header>
      <div className="">
          <div className="px-4 md flex flex-row">
{/*
            <div className="contact-form w-1/2">
              <header className="text-xl px-64">Contact Info</header>
              <ul className="flex flex-col flex-start mt-2 text-left px-64">
                <li>Email: mo_pat@live.concordia.ca</li>
                <li>Location: Montreal, QC</li>
                <li>Email: mo_pat@live.concordia.ca</li>
              </ul>
            </div>
*/}
            <div className="contact-link w-full">
              <header className="text-xl px-auto border-black"></header>
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
