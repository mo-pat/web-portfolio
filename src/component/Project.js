import React from 'react'
import workoutImage from '../workout4.png'
import gitLogo from '../git32px.png'

export const Project = () => {
  return (
    <div>
      <div className="mx-16 my-20 bg-gray-100">
        <header className="flex justify-center pb-4 text-3xl border-b-2 border-yellow-600" id="projects">Projects</header>

        {/*projects grid*/}
        <div className="flex flex-wrap my-4">
          {/* project 1 */}
          <div class="max-w-xl shadow-2xl rounded overflow-hidden m-4 sm:flex transform hover:scale-105 transition duration-500 ease-in-out">
            <div class="h-full flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
              <img src={workoutImage} alt=""/>
            </div>
            <div class="px-6 py-4">
              <header class="mb-2 text-xl font-semibold">Workout Tracker</header>
              <p class="mb-4 text-grey-dark text-sm">
                <ul className="list-disc">
                  <li>Full stack workout app to log workouts</li>
                  <li><b>Front-end:</b> React, Tailwind CSS</li>
                  <li><b>Back-end:</b> Node, Express, MongoDB</li>
                </ul>
              </p>
              <div className="group flex flex-row">
               <a href="https://github.com/mo-pat/web-portfolio" target="_blank" className="border-r-2 border-solid pr-4 border-yellow-600">
                  <img src={gitLogo} alt="" className=""/>
                </a>
                <a href="" className="mx-3 self-center font-medium hover:text-blue-700">Source</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
