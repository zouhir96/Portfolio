import React from 'react'
import { Link } from 'react-router-dom'
import { RxOpenInNewWindow } from "react-icons/rx";

const PortfolioItem = ({ image, title, type, description, technologies, linkToProject }) => {
  return (
    <div className="rounded-xl p-2 border-white border-2 shadow-md">
        <img className="rounded-xl mb-4" src={image}  alt={title}></img>
        <h3 className="font-bold text-lg mb-1">{title}&nbsp; <span className="text-xs bg-white rounded-sm p-1">{type}</span></h3>
        <p className="text-sm mb-5"  dangerouslySetInnerHTML={{__html: description}}></p>
        <div className="flex flex-row gap-2 flex-wrap rounded-lg mb-4">
            {technologies.map( (tech) => (
                <li className='list-none text-xs bg-white rounded-sm p-1 font-bold'>{tech}</li>
            ))}
        </div>

        <Link to={linkToProject} target='blank' className='flex items-center gap-2 text-sm'>View project <RxOpenInNewWindow className=' text-base' /></Link>
    </div>
  )
}

export default PortfolioItem
