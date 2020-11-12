import React from 'react'
import Education from './Education.js'

export const Resume = () => {
  return (
    <div className="resume-background flex justify-center items-center bg-blue-800 py-12" id="resume">
      <div className="resume bg-white shadow-lg w-full md:mt-2 mx-6 md:mx-32 rounded">
        <header className="resume-header mt-12 mx-6 md:mx-12 pb-4 text-left text-3xl border-b-2 border-yellow-600">
          Qualifications
        </header>
        <div className="qualification-list pl-8 md:pl-24 py-8">
          <ul className="list-disc space-y-2 font-sans">
            <li>
              Skilled with the following languages: JavaScript (Proficient), Python, C/C++, HTML, CSS, FORTRAN
            </li>
            <li>
              Good understanding of ES6 and writting code using its latest features (arrow functions, template literals, destructuring, async await)
            </li>
            <li>
              Strong understanding of how the web works and client-server architecture.
            </li>
            <li>
              Adept front end developer, competent with the following frameworks/libraries: React, Tailwind CSS. Able to create modern UI/UX designs that are responsive and dynamic.
            </li>
            <li>
              Familiar with REST API development and building server applications using NodeJS and Express
            </li>
            <li>
              Strong understanding of writting code that follow software design principles (DRY, KISS, Abstraction, etc.)
            </li>
            <li>
              Experience using bash and working in a Linux based environment
            </li>
            <li>
              Experience working with a version control system (Github)
            </li>
            <li>
              Working with an engineering mindset; providing solutions that work within constraints and with scalability in mind
            </li>
            <li>
              Newcomer to the open source community; participated in Hacktoberfest 2020
            </li>
            <li>
              Active learner; keeping up with the latest web technologies through daily.dev articles
            </li>
            <li>
              Ability to work in muitidisciplinary groups while also be self-autonomous
            </li>
          </ul>
        </div>
        <header className="text-3xl pb-4 mx-6 md:mx-12 border-b-2 border-yellow-600">
          Education
        </header>
        <div className="education-list pl-6 pr-16 md:pl-16 py-8">
          <Education />
        </div>
      </div>
    </div>
  )
}
