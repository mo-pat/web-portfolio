import React from 'react'
import workoutImage from '../workout4.png'
import discordImage from '../discord6.PNG'
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
    },
    {
      title: "lmaoPolice - Discord Bot",
      image: discordImage,
      description: [
        "A Discord bot that censors any messages with the acronym 'lmao'. Done with NodeJs",
        "Why?: My friends use lmao way too much"
      ],
      gitref: "https://github.com/mo-pat/lmaoPolice-bot",
      projectref:""
    },
    {
      title: "Web Portfolio",
      image: "bg-white",
      description: [
        "Web portfolio made from scratch using React and Tailwind CSS",
        "Responsive web application that works for mobile and desktop browsers"
      ],
      gitref: "https://github.com/mo-pat/web-portfolio",
      projectref:""
    }
  ]

  return (
    <div className="">
      <div className="mx-4 md:mx-16 my-20">
        <header className="flex justify-center pb-4 text-3xl border-b-2 border-yellow-600" id="projects">Projects</header>
        <div className="flex flex-col xl:flex-row mt-4 mx-2 md:mx-8">
          <ProjectCard project={projects[0]} wrapper="div" />
          <ProjectCard project={projects[1]} wrapper="div" />
          <ProjectCard project={projects[2]} wrapper="div" />
        </div>
     </div>
    </div>
  )
}
