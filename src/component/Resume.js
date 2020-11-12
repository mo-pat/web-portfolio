import React from 'react'
import Education from './Education.js'

export const Resume = () => {
  return (
    <div className="resume-background flex justify-center items-center bg-blue-800 py-12" id="resume">
      <div className="resume bg-white shadow-lg w-full md:mt-2 mx-6 md:mx-16 rounded">
        <header className="resume-header mt-12 mx-6 md:mx-12 pb-4 text-left text-3xl border-b-2 border-yellow-600">
          Qualifications
        </header>
        <div className="qualification-list pl-8 md:pl-16 py-8">
          <ul className="list-disc space-y-2 font-sans">
            <li>
              Proficient with the following languages: JavaScript, Python, C/C++, HTML, CSS, FORTRAN
            </li>
            <li>
              Good understanding of modern javascript (ES6+) and writting code using its latest features (arrow functions, template literals, destructuring, async await)
            </li>
            <li>
              Good understanding of the modern web architecture.
            </li>
            <li>
              Adept front end developer, competent with the following frameworks/libraries: React, Tailwind CSS. Able to create modern UI/UX designs that are responsive and dynamic.
            </li>
            <li>
              Familiar with REST API development and building server applications using NodeJS and Express
            </li>
            <li>
              Knowledge of SQL and NoSQL databases (Postgres, MongoDB)
            </li>
            <li>
              Strong understanding of writting code that follows general software design principles (DRY, KISS, Abstraction, etc.)
            </li>
            <li>
              Experience using bash and working in a Linux environment
            </li>
            <li>
              Experience working with a version control system (Github)
            </li>
            <li>
              Working with an engineering mindset; providing solutions that work within constraints and with scalability in mind
            </li>
            <li>
              Active in the open source community; participated in Hacktoberfest 2020
            </li>
            <li>
              Active learner; keeping up with the latest web technologies through daily.dev articles
            </li>
            <li>
              Ability to work in muitidisciplinary groups while also being self-autonomous
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
