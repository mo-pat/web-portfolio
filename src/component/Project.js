import React from 'react'
import workoutImage from '../workout4.png'
import gitLogo from '../git32px.png'
import { ProjectCard } from './ProjectCard.js'

export const Project = () => {

  const projects = [
    {
      title: "Workout Tracker",
      image: workoutImage,
      description: [
        "Full stack workout app to log workouts",
        "Front-end: React, Tailwind CSS",
        "Back-end: Node, Express and MongoDB"
      ],
      gitref: "https://github.com/mo-pat/web-portfolio",
      projectref: "https://stackoverflow.com/questions/49081549/passing-object-as-props-to-jsx",
    }
  ]

  return (
    <div>
      <div className="mx-16 my-20 bg-gray-100">
        <header className="flex justify-center pb-4 text-3xl border-b-2 border-yellow-600" id="projects">Projects</header>
        <ProjectCard project={projects[0]} />
     </div>
    </div>
  )
}
