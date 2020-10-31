import React from 'react'

export const Resume = () => {
  return (
    <div className="resume-background flex justify-center items-center bg-blue-800 h-screen">
      <div className="resume bg-white shadow-lg h-screen mt-48 h-full w-full mx-6 md:mx-32 rounded">
        <header className="resume-header mt-12 mx-12 pb-4 text-left text-3xl border-b">
          Qualifications
        </header>
        <div className="pl-24 py-8 h-full">
          <ul className="list-disc space-y-2">
            <li>
              Skilled with the following languages: JavaScript ES6 (Proficient), Python, C/C++, HTML, CSS, FORTRAN
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
              Ability to work in muitidisciplinary groups while also being self-autonomous
            </li>
          </ul>
          <header className="text-3xl border-b">
            Education/Certifications
          </header>
        </div>
      </div>
    </div>
  )
}
