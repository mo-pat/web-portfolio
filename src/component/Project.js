import React from 'react'
import workoutImage from '../workout4.png'
import gitLogo from '../git32px.png'

export const Project = () => {
  return (
    <div>
      <div className="mx-16 my-20 bg-gray-100">
        <header className="flex justify-center pb-4 text-3xl border-b-2 border-yellow-600">Projects</header>

        {/*projects grid*/}
        <div className="flex flex-wrap my-4">
          <div class="max-w-lg shadow-2xl rounded overflow-hidden m-4 sm:flex transform hover:scale-110 transition duration-500 ease-in-out">
            <div class="h-full flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
              <img src={workoutImage} alt=""/>
            </div>
            <div class="px-6 py-4">
            <h2 class="mb-2 font-black">Workout Tracker</h2>
            <p class="mb-4 text-grey-dark text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quam repellat possimus fugit ipsam atque vitae
            </p>
            <div>
              <img src={gitLogo} alt=""/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
