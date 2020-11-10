import React from 'react'
import gitLogo from '../git32px.png'

export const ProjectCard = (props) => {
  console.log(props.project)
  return (
    <div>
      {/*projects grid*/}
          {/* project 1 */}
          <div className="max-w-xl shadow-2xl rounded overflow-hidden m-4 sm:flex transform hover:scale-105 transition duration-500 ease-in-out">
            <div className="h-full flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
              <img src={props.project.image} alt=""/>
            </div>
            <div className="px-6 py-4">
              <header className="mb-2 text-xl font-semibold">{props.project.title}</header>
              <p className="mb-4 text-grey-dark text-sm">
                <ul className="list-disc">
                  {props.project.description.map(element => (
                    <li>{element}</li>
                  ))}
                </ul>
              </p>
              <div className="group flex flex-row">
               <a href={props.project.gitref} target="_blank" className="">
                  <img src={gitLogo} alt="" className=""/>
                </a>
                  { props.project.projectref && <a href={props.project.projectref} target="_blank" className="mx-3 self-center font-medium hover:text-blue-700 border-l-2 border-solid pl-4 border-yellow-600">Source</a> }
              </div>
            </div>
          </div>
    </div>
  )
}
